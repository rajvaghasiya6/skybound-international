import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Globe2, Truck, Leaf } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every product undergoes rigorous quality checks to ensure it meets international food safety standards and customer expectations.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Globe2,
    title: "Global Logistics",
    description:
      "With our extensive shipping network, we deliver to 25+ countries with reliable transit times and proper documentation.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Truck,
    title: "Competitive Pricing",
    description:
      "Direct sourcing from farmers and manufacturers allows us to offer the best prices without compromising on quality.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description:
      "We partner with eco-conscious farms and support sustainable agricultural practices across India.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-4">
            Your Trusted Export Partner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            With years of experience in international trade, we understand what 
            global buyers need: quality, reliability, and professional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className="border h-full relative overflow-hidden group"
                  data-testid={`card-feature-${index}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <CardContent className="p-6 lg:p-8 relative">
                    <div className="flex items-start gap-5">
                      <motion.div
                        className="p-3.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <feature.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
