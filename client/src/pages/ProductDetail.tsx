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
  FileText,
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
              <CardContent>
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
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Description
                </CardTitle>
              </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-foreground/90">{product.description}</p>
            </CardContent>
          </Card>

          {/* Product Highlights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Product Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                
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
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                 Industrial Applications
                </CardTitle>
              </CardHeader>
            <CardContent>
             
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
            <Card className="mb-8">
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

          {/* Export Specifications Table */}
          {product.exportSpecification && (
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Export Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {product.exportSpecification.formAvailable && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30 w-1/3">Form Available</td>
                          <td className="py-3 px-4">{product.exportSpecification.formAvailable}</td>
                        </tr>
                      )}
                      {product.exportSpecification.type && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Type</td>
                          <td className="py-3 px-4">{product.exportSpecification.type}</td>
                        </tr>
                      )}
                      {product.botanicalName && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Botanical Name</td>
                          <td className="py-3 px-4 italic">{product.botanicalName}</td>
                        </tr>
                      )}
                      <tr className="border-b">
                        <td className="py-3 px-4 font-semibold bg-muted/30">Origin</td>
                        <td className="py-3 px-4">India</td>
                      </tr>
                      {product.exportSpecification.usage && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Usage</td>
                          <td className="py-3 px-4">{product.exportSpecification.usage}</td>
                        </tr>
                      )}
                      {product.exportSpecification.varietyAvailable && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Variety Available</td>
                          <td className="py-3 px-4">{product.exportSpecification.varietyAvailable}</td>
                        </tr>
                      )}
                      {product.exportSpecification.color && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Color</td>
                          <td className="py-3 px-4">{product.exportSpecification.color}</td>
                        </tr>
                      )}
                      {product.exportSpecification.harvestingSeason && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Harvesting Season</td>
                          <td className="py-3 px-4">{product.exportSpecification.harvestingSeason}</td>
                        </tr>
                      )}
                      {product.exportSpecification.shelfLife && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Shelf Life</td>
                          <td className="py-3 px-4">{product.exportSpecification.shelfLife}</td>
                        </tr>
                      )}
                      {product.exportSpecification.storageCondition && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Storage Condition</td>
                          <td className="py-3 px-4">{product.exportSpecification.storageCondition}</td>
                        </tr>
                      )}
                      {product.exportSpecification.microbiological && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Microbiological Parameter</td>
                          <td className="py-3 px-4">{product.exportSpecification.microbiological}</td>
                        </tr>
                      )}
                      {product.exportSpecification.packaging && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Packaging</td>
                          <td className="py-3 px-4">{product.exportSpecification.packaging}</td>
                        </tr>
                      )}
                      {product.exportSpecification.labelling && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">Labelling</td>
                          <td className="py-3 px-4">{product.exportSpecification.labelling}</td>
                        </tr>
                      )}
                      {product.exportSpecification.moq && (
                        <tr className="border-b">
                          <td className="py-3 px-4 font-semibold bg-muted/30">MOQ</td>
                          <td className="py-3 px-4 font-semibold text-primary">{product.exportSpecification.moq}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Detailed specification sheets available upon request. 
                    All products comply with FSSAI, ISO, and importing country standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </main>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}