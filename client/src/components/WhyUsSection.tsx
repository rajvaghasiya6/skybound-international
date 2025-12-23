import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  BadgePercent,
  Boxes,
  Globe,
  Handshake,
  HeartHandshake,
  Layers,
  Leaf,
  Network,
  Package,
  ShieldCheck
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every product undergoes rigorous quality checks to ensure it meets international food safety standards and customer expectations. Direct sourcing from trusted farmers and minimal processing delays ensure maximum freshness, preserving natural oils, vibrant colors, and authentic flavors that define premium Indian spices.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
    {
    icon: Network,
    title: "Reliable Supply Chain",
    description:
     "We have a robust and reliable supply chain that guarantees the consistent availability of high-quality products. Our strategic partnerships with farmers and suppliers ensure that we can fulfill large orders without compromising on quality or delivery timelines, across diverse global markets, with complete transparency and accountability.", 
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: Boxes,
    title: "Wide Product Range",
    description:
      "We offer a diverse portfolio of Spices, including Black Pepper, Cloves, Cumin, Coriander, Dry Chilli, Turmeric, Dehydrated Onion and Dehydrated Garlic. Our variety ensures that we cater to a wide array of consumer and industry needs.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Package,
    title: "Custom Packaging Solutions",
    description:
      "Flexible packaging options tailored to your specifications from bulk containers to retail-ready pouches with private labeling and branding services to meet your exact market needs, globally compliant.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
 
  {
    icon: BadgePercent,
    title: "Competitive Pricing",
    description:
      "Direct sourcing from farmers and manufacturers enable us to offer highly competitive pricing without compromising on quality, maximizing value for bulk importers globally.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    icon: Layers,
    title: "Flexible Order Quantities",
    description:
      "Whether you need a single container or multiple shipments, we accommodate orders of all sizes with the same attention to quality and service excellence.",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
 
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Committed to total customer satisfaction through innovative sourcing strategies, efficient logistics networks, and guaranteed timely delivery worldwide.",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
   {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We invest in building lasting relationships with our clients, offering preferential terms, priority service, and collaborative problem-solving for mutual growth.",
    gradient: "from-sky-500/20 to-blue-500/20",
  },
   {
    icon: Leaf,
    title: "Commitment to Sustainability and Innovation",
    description:
      "We recognize that the future of spice trade depends on environmental stewardship. Our commitment extends beyond profit to protecting the planet and supporting farming communities. We are committed to sustainable farming and processing practices that protect the environment and support the well-being of our farming communities. Our sustainable approach ensures that our products are not only good for you but also good for the planet.",
    gradient: "from-lime-500/20 to-green-500/20",
  },
   {
    icon: Globe,
    title: "Diverse Global Markets",
    description:
      "Our deep understanding of regional preferences and regulatory requirements enables us to deliver precisely what each market demands. From the aromatic demands of Middle Eastern cuisines to the bold flavors preferred in Western markets, we customize our offerings to match cultural tastes and commercial needs perfectly. With our extensive shipping network, we deliver to 25+ countries with reliable transit times and proper documentation.",
    gradient: "from-indigo-500/20 to-violet-500/20",
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
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
            With years of experience in international trade, we understand what 
            global buyers need: quality, reliability, and professional service.
          </p>
           <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
            In a competitive global spice market, Skybound International stands apart through our unwavering commitment to quality, innovation, and customer partnership. We don’t just export spices—we deliver trust, consistency, and value.
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
