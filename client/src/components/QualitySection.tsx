import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const qualityPoints = [
  "Stringent inbound and outbound quality checks for every shipment",
  "Batch-wise traceability and moisture, purity, and contamination tests",
  "Adherence to international food safety and export standards",
];

const certificates = [
  "FSSAI-compliant food handling and packing operations",
  "Support for documentation required for customs and import clearance",
  "Ready to align with buyer-specific quality and packaging requirements",
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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full shadow-lg border">
              <CardContent className="p-6 lg:p-8 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-xl">
                    Quality Assurance Process
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our in-house team and partner laboratories perform checks on
                  color, aroma, foreign matter, and packaging integrity so that
                  every consignment matches agreed specifications.
                </p>
                <ul className="space-y-3">
                  {qualityPoints.map((item, index) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full shadow-lg border">
              <CardContent className="p-6 lg:p-8 space-y-5">
                <div className="flex items-center gap-3 mb-2">
                  <FileCheck2 className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-xl">
                    Documentation & Certificates
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We work closely with buyers to arrange the right export
                  documentation and certifications as per destination country and
                  product category.
                </p>
                <ul className="space-y-3">
                  {certificates.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground pt-2">
                  Share your specific certificate requirements (such as organic,
                  Halal, or other standards), and our team will guide you on the
                  best possible options.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


