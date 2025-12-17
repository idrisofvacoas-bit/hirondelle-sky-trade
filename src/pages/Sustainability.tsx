import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import sustainableFuture from "@/assets/sustainable-future.jpg";
import {
  Leaf,
  Recycle,
  Globe,
  Heart,
  TreeDeciduous,
  Factory,
  ArrowRight,
} from "lucide-react";

const commitments = [
  {
    icon: Recycle,
    title: "Reduced-Emission Logistics",
    description:
      "We actively seek logistics partners who prioritize low-emission delivery methods, helping reduce our carbon footprint with every shipment.",
  },
  {
    icon: Leaf,
    title: "Sustainable Product Sourcing",
    description:
      "Our product selection prioritizes items made from sustainable, organic, and responsibly sourced materials.",
  },
  {
    icon: Globe,
    title: "Supporting Local Producers",
    description:
      "We connect with local suppliers whenever possible, reducing transport distances and supporting community businesses.",
  },
  {
    icon: Heart,
    title: "Ethical Trading Practices",
    description:
      "Transparency and fairness guide all our partnerships, ensuring ethical treatment throughout our supply chain.",
  },
];

const Sustainability = () => {
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
                <Leaf size={16} />
                Sustainability
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Low-Emission Trade, High-Value Impact
              </h1>
              <p className="text-lg text-muted-foreground">
                Sustainability is built into how we trade. We actively seek products 
                and partners that minimise environmental impact while maximising value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "30%", label: "Lower Carbon Footprint" },
                { value: "70+", label: "Sustainable Partners" },
                { value: "100%", label: "Ethical Sourcing" },
                { value: "50+", label: "Local Suppliers" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Commitment
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every decision we make considers its impact on our planet and communities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {commitments.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/5] rounded-2xl shadow-lg overflow-hidden">
                  <img src={sustainableFuture} alt="Sustainable future" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Building a Greener Trading Ecosystem
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At Hirondelle Trading, we envision a future where commerce and 
                    environmental responsibility go hand in hand. Our commitment to 
                    sustainability isn't just a policy—it's woven into every aspect 
                    of our operations.
                  </p>
                  <p>
                    From selecting suppliers who share our values to optimizing 
                    delivery routes for minimal emissions, we're constantly looking 
                    for ways to reduce our environmental footprint while delivering 
                    exceptional value to our customers.
                  </p>
                  <p>
                    Join us in building a more sustainable future, one trade at a time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Partner With Purpose
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Looking to source sustainable products or build a greener supply chain? 
                Let's work together to make it happen.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;
