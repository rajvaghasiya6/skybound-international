import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import iecPdf from "@assets/certificateOfIEC.pdf";
import fssaiPdf from "@assets/FSSAI License.pdf";
import fssai from "@assets/generated_images/FSSAI.png";
import iec from "@assets/generated_images/IEC.png";
import spiceBoard from "@assets/generated_images/spiceBoard.png";
import spiceBoardPdf from "@assets/Spice Board.pdf";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useRef } from "react";






const certificates = [

  {
    name: "IEC Certificate",
    image: iec,
         onClick: () => window.open(iecPdf, "_blank"),
  },
  {
    name: "Spice Board",
    image: spiceBoard,
         onClick: () => window.open(spiceBoardPdf, "_blank"),
  },
  {
    name: "FSSAI Certificate",
    image: fssai,
     onClick: () => window.open(fssaiPdf, "_blank"),
  },
];


export default function QualitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="quality"
      className="py-20 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            Quality Assurance & Certificates
          </Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-4">
            Consistent Quality You Can Trust
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From sourcing to final dispatch, every step is designed to preserve
            aroma, freshness, and safety for global buyers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full shadow-lg border text-center">
              <CardContent className="p-6 lg:p-8 space-y-5 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-primary text-center" />
                  <h3 className="font-semibold text-xl text-center">
                    Quality Assurance Process
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-4xl mx-auto">
                 At Skybound International, quality isn’t just a promise—it’s our foundation. Every batch of spices undergoes comprehensive testing and quality control protocols that exceed international standards.
Our certifications demonstrate our unwavering commitment to food safety, quality excellence, and customer confidence. We maintain full traceability from farm to export, ensuring complete transparency throughout the supply chain.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full shadow-lg border text-center">
              <CardContent className="p-6 lg:p-8 space-y-5 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-primary text-center" />
                  <h3 className="font-semibold text-xl text-center">
                    Certificates
                  </h3>
                </div>
      <div className="flex flex-wrap justify-center items-start gap-16 pt-8">
  {certificates.map((cert) => (
    <button
      key={cert.name}
      onClick={cert.onClick}
      className="flex flex-col items-center gap-6 group focus:outline-none"
    >
      {/* Frame */}
      <div className="w-[260px] h-[360px] bg-background border-4 border-[#d4b07a] rounded-sm shadow-xl flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <img
          src={cert.image}
          alt={cert.name}
          className="object-contain w-full h-full p-4 bg-white"
        />
      </div>

      {/* Label */}
      <span className="text-lg font-semibold text-foreground text-center">
        {cert.name}
      </span>
    </button>
  ))}
</div>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


