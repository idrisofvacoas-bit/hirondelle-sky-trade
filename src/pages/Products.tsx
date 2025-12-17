import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, ShoppingCart, Eye } from "lucide-react";

const categories = ["All", "Wholesale", "Organic", "Sustainable", "Bespoke"];

const products = [
  {
    id: 1,
    name: "Organic Cotton Textiles",
    category: "Organic",
    price: "",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop",
    sustainable: true,
    description: "Premium organic cotton sourced from certified suppliers.",
  },
  {
    id: 2,
    name: "Eco-Friendly Packaging",
    category: "Sustainable",
    price: "From £0.50/unit",
    image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=400&h=400&fit=crop",
    sustainable: true,
    description: "Biodegradable packaging solutions for businesses.",
  },
  {
    id: 3,
    name: "Bulk Spices Collection",
    category: "Wholesale",
    price: "From £8/kg",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    sustainable: false,
    description: "Premium spices sourced directly from farms.",
  },
  {
    id: 4,
    name: "Handcrafted Home Goods",
    category: "Bespoke",
    price: "Custom Quote",
    image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=400&h=400&fit=crop",
    sustainable: true,
    description: "Artisan-made products for unique requirements.",
  },
  {
    id: 5,
    name: "Natural Skincare Range",
    category: "Organic",
    price: "From £12/unit",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    sustainable: true,
    description: "Chemical-free skincare made with natural ingredients.",
  },
  {
    id: 6,
    name: "Wholesale Ceramics",
    category: "Wholesale",
    price: "From £5/unit",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop",
    sustainable: false,
    description: "Quality ceramics for restaurants and retailers.",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

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
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wholesale & Bespoke Products
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse a curated marketplace of wholesale and bespoke products 
                designed for both businesses and individual buyers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Selection Info */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { label: "Sustainability", desc: "Low carbon footprint products" },
                { label: "Organic", desc: "Responsibly sourced materials" },
                { label: "Quality", desc: "Value and reliable delivery" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mb-3" />
                  <span className="font-medium text-foreground">{item.label}</span>
                  <span className="text-sm text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.sustainable && (
                      <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        <Leaf size={12} />
                        Sustainable
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <Button size="sm" variant="secondary">
                        <Eye size={16} />
                        View
                      </Button>
                      <Button size="sm">
                        <ShoppingCart size={16} />
                        Add
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium uppercase tracking-wide">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-primary">
                        {product.price}
                      </span>
                      <Button size="sm" variant="soft">
                        Enquire
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-muted-foreground mb-6">
                Looking for something specific? We offer bespoke sourcing services.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">Request Bespoke Order</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
