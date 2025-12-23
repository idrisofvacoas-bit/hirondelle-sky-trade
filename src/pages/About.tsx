import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Award, Globe, Users, TrendingUp } from "lucide-react";
import hirondelleFlying from "@/assets/hirondelle-flying.jpg";
const stats = [{
  icon: Award,
  value: "18+",
  label: "Years Experience"
}, {
  icon: Globe,
  value: "3",
  label: "Continents Served"
}, {
  icon: Users,
  value: "500+",
  label: "Happy Clients"
}, {
  icon: TrendingUp,
  value: "2023",
  label: "Ideology"
}];
const About = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-sky">
          <div className="container mx-auto px-4">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Hirondelle Trading Ltd
              </h1>
              <p className="text-lg text-muted-foreground">
                Connecting Products, People, and Purpose since 2018.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Our team have been together since 2023, and we launched Hirondelle Trading Ltd to bring together over 18 years of experience in procurement, product management, and sales across the UK, Middle East, and international markets. </p>
                  <p>Our values are embodied by the Hirondelle bird — known for its precision, endurance, and reliability — our team has built a trading platform that source and delivers the right products, to our customers, at the right time.</p>
                  <p>
                    We combine deep industry knowledge with tailored strategies to 
                    meet evolving customer needs, while continually innovating to 
                    lead a more sustainable and community-driven future of trade.
                  </p>
                </div>
              </motion.div>

              <motion.div className="relative" initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <div className="aspect-square rounded-3xl shadow-lg overflow-hidden">
                  <img src={hirondelleFlying} alt="Hirondelle swallow in flight" className="w-full h-full object-cover" />
                </div>
                {/* Floating decorations */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/10 rounded-full blur-xl animate-float-delayed" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => <motion.div key={stat.label} className="text-center" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div className="max-w-3xl mx-auto text-center" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                "To deliver exceptional trading solutions that connect businesses 
                and individuals with quality products, while championing 
                sustainability and community-driven commerce."
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                {["Reliability", "Sustainability", "Community", "Innovation"].map(value => <span key={value} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {value}
                    </span>)}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;