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

// The email where you want to receive inquiries
const RECIPIENT_EMAIL = "contact@skyboundinternational.co.in";
const FORMSUBMIT_TOKEN = "80000598ba1e609d2de073b48edf758a";

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

  const [isSubmitting, setIsSubmitting] = useState(false); // We still need this for the loading animation

  // --- SUBMIT LOGIC REMAINS SIMPLE FOR HTML FORM ---
  const handleSubmit = (e: React.FormEvent) => {
    // We only set the submitting state here to show the spinner.
    // The actual form data is handled by the 'action' attribute on the <form> element.
    setIsSubmitting(true);
    
    // NOTE: After a successful Formsubmit redirect, the page will reload.
    // If you want a seamless experience, you'll need to use a client-side fetch (like the Formspree example)
    // or configure a redirect URL with Formsubmit that redirects back to your page with a success parameter.
    
    // Simulating the submission start before the browser takes over
    toast({
        title: "Sending Inquiry...",
        description: "Please wait a moment while we send your message.",
    });
    
    // The browser handles the actual POST request to Formsubmit now.
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden" id="contact" ref={ref}>
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
                {/* --- FORMSUBMIT INTEGRATION --- */}
                <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    // Set action to Formsubmit endpoint with the target email
                   action={`https://formsubmit.co/${FORMSUBMIT_TOKEN}`}
                    method="POST"
                >
                    {/* Hidden fields for Formsubmit configuration */}
                    {/* Sets the 'Reply To' address in the received email */}
                    <input type="hidden" name="_replyto" value={formData.email} /> 
                    {/* Custom subject line */}
                    <input type="hidden" name="_subject" value={`New Inquiry: ${formData.product} - ${formData.name}`} /> 
                    {/* Disables CAPTCHA/recaptcha (only works after 1 verified submission) */}
                    <input type="hidden" name="_captcha" value="false" /> 
                    {/* Optional: Redirect URL after submission */}
                    {/* <input type="hidden" name="_next" value="YOUR_SUCCESS_PAGE_URL" /> */}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        // REQUIRED: Add 'name' attribute for Formsubmit
                        name="Name"
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
                        // REQUIRED: Add 'name' attribute for Formsubmit
                        name="Email"
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
                        // REQUIRED: Add 'name' attribute for Formsubmit
                        name="Country"
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
                        // REQUIRED: Use the hidden input for Select value
                      >
                        <SelectTrigger className="h-11" data-testid="select-product">
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                        <SelectContent>
                          {productInterests.map((product) => (
                            <SelectItem key={product} value={product}>
                              {product}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {/* Hidden input to capture Select value for Formsubmit */}
                      <input type="hidden" name="Product Interest" value={formData.product} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      // REQUIRED: Add 'name' attribute for Formsubmit
                      name="Message"
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
                {/* --- END FORMSUBMIT INTEGRATION --- */}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info Side */}
          {/* ... (rest of the component remains the same) ... */}
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

            <motion.a
              href="https://wa.me/919859886686?text=Hello%2C%20I%27m%20interested%20in%20your%20products.%20Could%20you%20please%20share%20more%20details%3F"
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