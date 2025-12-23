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
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";

const productInterests = products.map(p => p.title);

// StaticForms API Key - REPLACE WITH YOUR ACTUAL KEY
const STATICFORMS_API_KEY = "sf_7dn1inh86id7df20g7bb9m7d";

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

    try {
      // Create form data object for StaticForms
      const formDataToSend = new FormData();
      formDataToSend.append("apiKey", STATICFORMS_API_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("product", formData.product);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("subject", `New Inquiry from ${formData.name} - ${formData.product}`);
      formDataToSend.append("replyTo", formData.email);

      console.log("Submitting form data:", {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        product: formData.product,
        message: formData.message,
      });

      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: formDataToSend,
      });

      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);

        if (response.ok) {
    toast({
      title: "Message Sent Successfully! ✅",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      country: "",
      product: "",
      message: "",
    });
  } else {
    throw new Error("Submission failed");
  }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to Send Message ❌",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9859886686",
      href: "tel:+919859886686",
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
      value:
        "311, 3rd Floor, Shree Krishna Industrial Estate- 1, Surat - Kamrej Hwy, Laskana, Surat, Gujarat 395006, India",
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
    <section className="py-24 bg-background overflow-hidden" id="contact" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5">
            Connect With Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Let's Start a Conversation
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to source premium Indian products? Get in touch with our export team for inquiries, quotes, or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" /> Send us a Message
                </h3>
                
                {/* StaticForms Integration */}
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
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
                        name="email"
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
                        name="country"
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
                        required
                      >
                        <SelectTrigger className="h-11" data-testid="select-product">
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                        <SelectContent>
                          {productInterests.map((product) => (
                            <SelectItem key={product} value={product}>
                              {product
                                .split(" ")
                                .map(
                                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                                )
                                .join(" ")}
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
                      name="message"
                      placeholder="Tell us about your requirements (Quantity, Packaging, Destination)..."
                      className="min-h-[120px] resize-y"
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
                          Send Inquiry <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Side */}
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

            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 md:h-80 w-full">
                  <iframe
                    title="Skybound International Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.6056881931283!2d72.92872466960527!3d21.25335744867023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04525759d8d35%3A0x4510bb467acbf462!2sSkybound%20International!5e1!3m2!1sen!2sus!4v1765792776670!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}