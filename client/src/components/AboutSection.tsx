import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import spicesImage from "@assets/generated_images/whole_spices_collection.png";

const highlights = [
  "Premium quality sourcing from India's finest regions",
  "Rigorous quality control at every stage",
  "Global logistics and timely delivery",
  "Competitive pricing for bulk orders",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4">About Us</Badge>
            </motion.div>
            
            <motion.h2
              className="font-serif text-3xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Welcome to{" "}
              <span className="text-primary">Skybound International</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              At SKYBOUND INTERNATIONAL, we are dedicated to connecting global markets 
              with a diverse range of Premium Spices & Agriculture Products. Our extensive 
              selection ensures excellence and reliability, making us a trusted name in 
              international trade.
            </motion.p>
            
            <motion.p
              className="text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              As a leading Exporter based in Surat, Gujarat, we are committed to delivering 
              superior products that meet the highest standards of quality and freshness. 
              Our mission is to bring the authentic flavors and agricultural richness of 
              India to tables around the world.
            </motion.p>
            
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  data-testid={`about-highlight-${index}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-2xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.img
              src={spicesImage}
              alt="Premium Indian Spices Collection"
              className="rounded-2xl w-full object-cover aspect-[4/3] relative shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            >
              <span className="font-serif text-3xl lg:text-4xl font-bold block">10+</span>
              <span className="text-sm opacity-90">Years Experience</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
