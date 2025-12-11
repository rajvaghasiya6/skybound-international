import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";

const productInterests = [
  "Spices & Seasonings",
  "Rice & Grains",
  "Pulses & Lentils",
  "Tea & Beverages",
  "Nuts & Dry Fruits",
  "Other Products",
];

export default function ContactSection() {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    product: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", country: "", product: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8866536328",
      href: "tel:+918866536328",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@skyboundinternational.co.in",
      href: "mailto:contact@skyboundinternational.co.in",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "311, 3rd Floor, Shree Krishna Industrial Estate- 1, Surat - Kamrej Hwy, Laskana, Surat, Gujarat 395006, India",
      href: null,
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">Contact Us</Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to source premium Indian products? Get in touch with our export team 
            for inquiries, quotes, or partnership opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        data-testid="input-name"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        data-testid="input-email"
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        placeholder="United States"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        required
                        data-testid="input-country"
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Interest</Label>
                      <Select
                        value={formData.product}
                        onValueChange={(value) => handleInputChange("product", value)}
                      >
                        <SelectTrigger id="product" data-testid="select-product" className="h-11">
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          {productInterests.map((product) => (
                            <SelectItem key={product} value={product}>
                              {product}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, quantities, and any specific questions..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full h-12 text-base font-semibold"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-semibold text-xl mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <motion.div
                        className="p-2.5 bg-primary/10 rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            data-testid={`link-${item.label.toLowerCase()}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <motion.a
              href="https://wa.me/918866536328?text=Hello%2C%20I%27m%20interested%20in%20your%20products.%20Could%20you%20please%20share%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-testid="link-whatsapp"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-gradient-to-r from-green-600 to-green-500 dark:from-green-700 dark:to-green-600 text-white border-0 shadow-xl cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:16px_16px]" />
                <CardContent className="p-6 flex items-center gap-4 relative">
                  <motion.div
                    className="p-3 bg-white/20 rounded-xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MessageCircle className="w-7 h-7" />
                  </motion.div>
                  <div>
                    <p className="font-semibold text-lg">Chat on WhatsApp</p>
                    <p className="text-white/80 text-sm">
                      Quick response for urgent inquiries
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
