import { Button } from "@/components/ui/button";
// import brochurePdf from "@assets/Skybound-International-Your-Trusted-Partner-for-Premium-Indian-Spices-Export.pdf"; // Restricted
import brochureImage from "@assets/generated_images/premium_indian_spices_hero.png";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { ImagePreviewDialog } from "./ui/image-preview-dialog";

export default function BrochureSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="brochure" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">Brochure</Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-4">Our Brochure</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Transform your business with our premium spices, meticulously sourced and sustainably packaged to meet the highest standards. Attract discerning customers and build loyalty with products that embody quality and responsibility. Rely on our steadfast supply and expert partnership to drive your success. Discover our exceptional range and elevate your brand today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="px-8"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Brochure
          </Button>

          {/* Download Button Removed as per restriction request */}
          {/* <Button
            size="lg"
            variant="outline"
            onClick={() => { ... }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Brochure
          </Button> */}
        </motion.div>

        <ImagePreviewDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          imageSrc={brochureImage}
          altText="Skybound International Brochure Preview"
          title="Brochure Preview"
        />
      </div>
    </section>
  );
}
