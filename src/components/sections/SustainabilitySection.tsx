import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Globe, Heart, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    icon: Recycle,
    label: "Low-Emission Logistics",
  },
  {
    icon: Leaf,
    label: "Organic Products",
  },
  {
    icon: Globe,
    label: "Local Sourcing",
  },
  {
    icon: Heart,
    label: "Ethical Trading",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf size={16} />
              Sustainability
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trading with Purpose
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We believe trade should benefit everyone — customers, communities, and the planet. 
              That's why Hirondelle Trading prioritises local sourcing where possible, 
              responsible logistics, and products with reduced environmental impact.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're helping build a connected trading ecosystem with sustainable emissions 
              at its core, ensuring that every transaction contributes to a better future.
            </p>

            <Button variant="hero" asChild>
              <Link to="/sustainability">Learn More</Link>
            </Button>
          </motion.div>

          {/* Visual Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {initiatives.map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
