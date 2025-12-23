import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-lg p-1">
                <img src={logo} alt="Hirondelle Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <span className="text-lg font-semibold">Hirondelle</span>
                <p className="text-xs text-background/60">Trading Ltd</p>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              Delivered with Purpose. Trusted by Nature.
            </p>
            <p className="text-background/60 text-sm">
              Fast. Reliable. Sustainably Sourced.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[{
              name: "About Us",
              path: "/about"
            }, {
              name: "Products",
              path: "/products"
            }, {
              name: "Services",
              path: "/services"
            }, {
              name: "Sustainability",
              path: "/sustainability"
            }].map(link => <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-primary-light transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>Wholesale Trading</li>
              <li>Bespoke Sourcing</li>
              <li>Procurement Strategy</li>
              <li>Supply Chain Planning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail size={16} className="text-primary-light" />
                info@htrading.co.uk
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone size={16} className="text-primary-light" />
                +44 (0) 7876089603   
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin size={16} className="text-primary-light mt-0.5" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Hirondelle Trading Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link to="/privacy" className="hover:text-primary-light transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-light transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;