import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 lg:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">Our Products</Badge>
            <h1 className="font-serif text-3xl lg:text-5xl font-bold mb-4">
              Premium Export Quality
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover our extensive range of authentic Indian spices and agriculture products, 
              sourced from the finest regions and processed to meet international standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="block h-full"
                    aria-label={`View details for ${product.title}`}
                  >
                    <Card className="group overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={product.image}
                          alt={product.title}
                          className="w-full aspect-[4/3] object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {product.botanicalName && (
                          <div className="absolute bottom-3 left-3 right-3">
                            <Badge variant="secondary" className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                              {product.botanicalName}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {product.summary}
                        </p>
                        <ul className="text-muted-foreground text-sm space-y-1.5 mb-4">
                          {product.items.slice(0, 3).map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.05 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        <motion.div
                          className="flex items-center text-primary font-medium text-sm"
                          whileHover={{ x: 5 }}
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}