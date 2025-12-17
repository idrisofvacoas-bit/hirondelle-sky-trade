import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Package,
  Search,
  ClipboardList,
  Truck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Wholesale Product Trading",
    description:
      "Access quality products at competitive wholesale prices. Whether you need bulk quantities for your business or retail operations, we provide reliable sourcing and delivery.",
  },
  {
    icon: Search,
    title: "Bespoke & Private-Label Sourcing",
    description:
      "Can't find what you need? Our team specializes in sourcing unique, hard-to-find products and creating private-label solutions tailored to your brand.",
  },
  {
    icon: ClipboardList,
    title: "Tailored Procurement Strategies",
    description:
      "We develop customized procurement strategies that optimize your supply chain, reduce costs, and ensure consistent product quality.",
  },
  {
    icon: Truck,
    title: "Sustainable Supply Chain Planning",
    description:
      "Partner with us to build a greener supply chain. We help identify eco-friendly suppliers and implement low-emission logistics solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Engagement & After-Sales",
    description:
      "Our commitment doesn't end at delivery. We provide ongoing support, feedback channels, and dedicated account management for long-term partnerships.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-sky">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tailored Trading Solutions
              </h1>
              <p className="text-lg text-muted-foreground">
                We go beyond standard e-commerce. Our bespoke services ensure 
                every customer receives solutions that fit their needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Our simple process ensures you get exactly what you need.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Share Your Needs", desc: "Tell us what products or services you require" },
                { step: "02", title: "We Source & Quote", desc: "Our team finds the best options and pricing" },
                { step: "03", title: "Review & Approve", desc: "You review samples and approve the order" },
                { step: "04", title: "Delivered to You", desc: "We handle logistics and deliver on time" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to discuss your requirements and discover how 
                Hirondelle Trading can support your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/products">Browse Products</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
