import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  record.count++;
  return false;
}

// HTML escape function to prevent XSS in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Basic email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(clientIp)) {
      console.log("Rate limit exceeded for IP:", clientIp);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, company, subject, message }: ContactEmailRequest = await req.json();

    // Input validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Sanitize all user inputs
    const safeName = escapeHtml(name.slice(0, 100));
    const safeEmail = escapeHtml(email.slice(0, 255));
    const safeCompany = escapeHtml((company || "").slice(0, 200));
    const safeSubject = escapeHtml(subject.slice(0, 200));
    const safeMessage = escapeHtml(message.slice(0, 5000)).replace(/\n/g, "<br>");

    console.log("Received contact form submission:", { name: safeName, email: safeEmail, company: safeCompany, subject: safeSubject });

    // Send notification email to the business
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Hirondelle Trading <onboarding@resend.dev>",
        to: ["info@htrading.com"],
        subject: `New Contact Form: ${safeSubject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${safeName} (${safeEmail})</p>
          ${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ""}
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    const notificationEmail = await notificationRes.json();
    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the user
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Hirondelle Trading <onboarding@resend.dev>",
        to: [email],
        subject: "We received your message!",
        html: `
          <h1>Thank you for contacting us, ${safeName}!</h1>
          <p>We have received your message and will get back to you within 24 hours.</p>
          <hr />
          <p><strong>Your message:</strong></p>
          <p>${safeMessage}</p>
          <hr />
          <p>Best regards,<br>The Hirondelle Trading Team</p>
        `,
      }),
    });

    const confirmationEmail = await confirmationRes.json();
    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Unable to send message. Please try again later or contact us directly." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
