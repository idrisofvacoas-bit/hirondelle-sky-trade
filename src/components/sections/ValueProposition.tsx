import { motion } from "framer-motion";
import { Package, Truck, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Tailored Sourcing",
    description:
      "Custom procurement solutions for businesses and individuals, ensuring the perfect products for your needs.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Inspired by nature's most trusted messenger, we ensure your products arrive safely and on time.",
  },
  {
    icon: Leaf,
    title: "Sustainable Selection",
    description:
      "Sustainable, organic, and low-carbon product selection for environmentally conscious trading.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    description:
      "Supporting local and global partners through community-focused trading practices.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 gradient-sky">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Hirondelle Trading?
          </h2>
          <p className="text-muted-foreground text-lg">
            Connecting products, people, and purpose through reliable and sustainable trade.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-primary-light rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
