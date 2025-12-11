import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products, getProductBySlug } from "@/data/products";
import NotFound from "@/pages/not-found";
import { CheckCircle2, Leaf, Package, Utensils, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

type ProductDetailProps = {
  slug: string;
};

export default function ProductDetail({ slug }: ProductDetailProps) {
  const product = getProductBySlug(slug);

  if (!product) {
    return <NotFound />;
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background" id="home">
      <Header />

      <main className="pt-20 lg:pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to products
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
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
                <p className="text-muted-foreground text-lg leading-relaxed">{product.summary}</p>
              </div>

              <p className="text-base leading-relaxed text-foreground/90">{product.description}</p>

              <div>
                <h2 className="text-lg font-semibold mb-3">Popular variants</h2>
                <div className="flex flex-wrap gap-2">
                  {product.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-sm py-1 px-3">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Quality highlights</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Export specs</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.specs.map((spec) => (
                        <li key={spec.label} className="flex justify-between gap-3">
                          <span className="text-foreground/80">{spec.label}</span>
                          <span className="font-medium text-foreground">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Ideal for</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((application) => (
                      <Badge key={application} variant="outline">
                        {application}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Link href="/">
                  <Button variant="outline">Return to homepage</Button>
                </Link>
                <Link href="/#contact">
                  <Button>Request a quote</Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-4" id="products">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase text-muted-foreground tracking-wide">More from Skybound</p>
                <h2 className="font-serif text-2xl font-bold">Related products</h2>
              </div>
              <Link href="/">
                <Button variant="ghost">View all</Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group block"
                  aria-label={`View ${item.title}`}
                >
                  <Card className="overflow-hidden h-full border hover:border-primary/40 transition-colors">
                    <div className="relative">
                      <img src={item.image} alt={item.title} className="w-full aspect-video object-cover" />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {item.items[0]}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {item.items[1] ?? "Export"}
                        </Badge>
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

