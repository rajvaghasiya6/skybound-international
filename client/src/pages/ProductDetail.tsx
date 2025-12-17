import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductBySlug, products } from "@/data/products";
import NotFound from "@/pages/not-found";
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  Heart,
  Info,
  Leaf,
  Package,
  Sparkles,
  Utensils
} from "lucide-react";
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

          {/* Overview Section */}
          {product.overview && product.overview.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {product.overview.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed text-foreground/90">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Description */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed text-foreground/90">{product.description}</p>
            </CardContent>
          </Card>

          {/* Product Highlights & Specs Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Product Highlights</h3>
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
                  <h3 className="font-semibold">Export Specifications</h3>
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

          {/* Culinary Uses */}
          {product.culinaryUses && product.culinaryUses.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Culinary Uses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {product.culinaryUses.map((use, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Health Benefits */}
          {product.healthBenefits && product.healthBenefits.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Health & Nutritional Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {product.healthBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Varieties */}
          {product.varieties && product.varieties.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Available Varieties & Grades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.varieties.map((variety, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{variety}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Applications */}
          <Card className="mb-8">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Industrial Applications</h3>
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

          {/* Why Preferred */}
          {product.whyPreferred && product.whyPreferred.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Why Indian {product.title} is Preferred for Export
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {product.whyPreferred.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Top Importing Countries */}
          {product.importingCountries && product.importingCountries.length > 0 && (
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Top Importing Countries of Indian {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {product.importingCountries.map((country, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 border rounded-lg bg-muted/30">
                      <span className="text-sm font-medium">{country}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Related Products
          {relatedProducts.length > 0 && (
            <div className="space-y-4" id="products">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase text-muted-foreground tracking-wide">More from Skybound</p>
                  <h2 className="font-serif text-2xl font-bold">Related products</h2>
                </div>
                <Link href="/products">
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
          )} */}
        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}