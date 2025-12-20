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
            <Card className="overflow-hidden shadow-xl border-0">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  Export Ready
                </Badge>
              </div>
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
                <Link href="/#contact">
                  <Button>Request a quote</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Product Content */}
          <Card className="mb-12 p-6">
            <div 
              className="prose prose-gray max-w-none"
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