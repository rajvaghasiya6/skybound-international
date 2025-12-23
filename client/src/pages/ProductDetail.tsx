import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProductBySlug } from "@/data/products";
import NotFound from "@/pages/not-found";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

type ProductDetailProps = {
  slug: string;
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const product = getProductBySlug(slug);

  if (!product) {
    return <NotFound />;
  }



  return (
    <div className="min-h-screen bg-background" id="home">
      <Header />

      <main className="pt-20 lg:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}
              className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.title}</span>
          </div>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
            <Card className="overflow-hidden shadow-xl border-0 relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover aspect-[4/3]"
              />
            </Card>

            <div className="space-y-6">
              <div className="space-y-3">
                <Badge variant="outline">Product Detail</Badge>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold">{product.title}</h1>
                {product.botanicalName && (
                  <p className="text-sm text-muted-foreground italic">
                    Botanical Name: {product.botanicalName}
                  </p>
                )}
                <p className="text-muted-foreground text-lg leading-relaxed">{product.summary}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-3">Key Features</h2>
                <div className="flex flex-wrap gap-2">
                  {product.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-sm py-1 px-3">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a 
                    href="https://wa.me/919859886686?text=Hello%2C%20I%20got%20your%20business%20details%20from%20website.%20I%20need%20more%20details%20about%20your%20products%20and%20services.%0A%0AThank%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquiry on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="mailto:contact@skyboundinternational.co.in?subject=Product%20Enquiry&body=Hello%2C%0A%0AI%20got%20your%20business%20details%20from%20website.%20I%20need%20more%20details%20about%20your%20products%20and%20services.%0A%0AThank%20you"
                  >
                    Enquiry on Email
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Product Content */}
          <Card className="mb-12 p-6">
            <style>{`
              .dark .product-content .text-gray-700 { color: rgb(229 231 235) !important; }
              .dark .product-content .bg-gray-50 { background-color: rgb(31 41 55) !important; }
              .dark .product-content .bg-gray-100 { background-color: rgb(31 41 55) !important; }
              .dark .product-content .border-gray-300 { border-color: rgb(75 85 99) !important; }
            `}</style>
            <div 
              className="product-content prose prose-gray dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: product.content }}
            />
          </Card>

        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}