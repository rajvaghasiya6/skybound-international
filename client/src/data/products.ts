import blackPepperPowder from "@assets/generated_images/Black Pepper Powder.png";
import blackPepper from "@assets/generated_images/Black Pepper.png";
import cloves from "@assets/generated_images/Cloves.png";
import corianderSeed from "@assets/generated_images/Coriander Seed.png";
import cuminPowder from "@assets/generated_images/Cumin Powder.png";
import cuminSeed from "@assets/generated_images/Cumin Seed.png";
import dehydratedGarlic from "@assets/generated_images/Dehydrated Garlic.png";
import dehydratedOnionPowder from "@assets/generated_images/Dehydrated Onion Powder.png";
import dehydratedOnion from "@assets/generated_images/Dehydrated Onion.png";
import dehydratedGarlicPowder from "@assets/generated_images/Dehydrates Garlic Powder.png";
import dryGingerPowder from "@assets/generated_images/Dry Ginger Powder.png";
import dryRedChilli from "@assets/generated_images/Dry Red Chilli.png";
import mustardSeed from "@assets/generated_images/Mustard Seed.png";
import chilliPowder from "@assets/generated_images/Red Chilli Powder.png";
import turmericFinger from "@assets/generated_images/Turmeric Finger.png";
import turmericPowder from "@assets/generated_images/Turmeric Powder.png";

export type Product = {
  slug: string;
  title: string;
  botanicalName?: string;
  image: string;
  summary: string;
  items: string[];
  content: string;
};

export const products: Product[] = [
  {
    slug: "black-pepper",
    title: "BLACK PEPPER",
    botanicalName: "Piper Nigrum",
    image: blackPepper,
    summary: "Known as the 'King of Spices' - premium quality black pepper with rich aroma and pungent flavor.",
    items: ["King of Spices", "High Piperine", "Export Grade", "Premium Quality"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Black Pepper</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Black Pepper is the dried mature berry of Piper nigrum, a climbing, perennial shrub mostly found in hot, moist region of Southern India. Black Pepper is one of the Popular Spices and known as <strong>"King of Spices"</strong> holds a legacy that dates back thousands of years and remains one of the most sought-after spices in global trade.</p>
            <p>In India, Black pepper is mainly grown in Kerala and Tamilnadu, Karnataka, Konkan, Pondicherry & Andaman, and Nicobar islands.</p>
            <p>The peppercorn is actually the fruit of the plant, and depending on when it is harvested, processed, and dried; it can produce black, green, or white peppercorns.</p>
            <p>Processed peppercorns come in a variety of colours, any one of which may be used in food preparation, especially common peppercorn sauce.</p>
            <p><strong>Types:</strong></p>
            <ol class="list-decimal ml-8 space-y-1">
              <li>Black Pepper</li>
              <li>White Pepper</li>
              <li>Green Pepper</li>
              <li>Red Pepper</li>
              <li>Pink Pepper</li>
            </ol>
            <p>India is one of the largest producers and exporters of world-class top quality black peppers in the world. Indian Black Pepper Known for its highly rich aroma and pungent flavour.</p>
            <p>India's top export markets are Canada, the United States, and the United Kingdom, while Sri Lanka, Thailand, and Indonesia have shown the fastest growth in recent years.</p>
            <p>In 2023, world production of black peppercorns was 855,105 tonnes, led by Vietnam with 30% of the total, and Brazil, Indonesia, and India as secondary producers. Peppercorns are among the most widely traded spice in the world, accounting for 20% of all spice imports.</p>
            <p>In 2025, Indian black pepper exports continue to thrive, catering to global markets with various varieties and grades.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Black Pepper</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Indian black pepper is widely used in too many ways like in the food, pharmaceutical, and cosmetic industries, perfume industries and many more.</p>
            <p>It is an important component of culinary seasoning of universal use and is an essential ingredient of numerous commercial foodstuffs. It is also used as an ingredient in spice mixes.</p>
            <p>Black pepper is an essential ingredient in Indian system of medicine. Piperine, the pungent principle in pepper oleoresin helps to enhance bioavailability and therefore used in pharmaceuticals. The major functional properties of pepper are analgesic, anti-pyretic, anti-oxidant and anti-microbial.</p>
            <p>Pepper is largely used by meat packers and in canning, pickling, baking, considering for its preservative value. It has the ability to correct the seasoning of dishes, therefore used as a final dash at the end of cooking to effectively adjust the flavour.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Varieties of Black Pepper</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <ul class="list-disc ml-8 space-y-2">
              <li><strong>MG-1:</strong> Malabar Garbled Grade 1 (Pepper 450 Grams)</li>
              <li><strong>MG-2:</strong> Malaber Garbled Grade 2</li>
              <li><strong>TGEB:</strong> Tellicherry Garbled Extra Bold (Pepper 500 Grams)</li>
              <li><strong>TGSEB:</strong> Tellicherry Garbled Special Extra Bold (Pepper 550 Grams)</li>
            </ul>
            <p><strong>Malabar Black Pepper:</strong> This is a traditional, mass-produced variety considered the "King of Spices" due to its rich, earthy, and deep aroma with a pleasant sharpness. It is available in various grades such as Malabar Garbled 1 (MG-1) and Malabar Garbled 2 (MG-2).</p>
            <p><strong>Tellicherry Black Pepper:</strong> Considered a premium, top-grade Indian pepper, the Tellicherry variety is known for its larger, bolder berries and strong, intense flavor with hints of lime and lemon. The most common export grades are:</p>
            <ol class="list-upper-roman ml-8 space-y-2">
              <li><strong>TGEB (Tellicherry Garbled Extra Bold):</strong> A premium grade with large, bold berries and an intense, complex flavor profile.</li>
              <li><strong>TGSEB (Tellicherry Garbled Special Extra Bold):</strong> Another premium category, even larger and bolder than TGEB, representing a top-tier product for gourmet markets. The largest grade, often with a diameter above 4.75mm.</li>
            </ol>
            <p><strong>Panniyur-1:</strong> An improved variety, this is another option that is exported.</p>
            <p><strong>Karimunda:</strong> A popular cultivar in Kerala, this variety is also exported.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Grades of Black Pepper</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Indian black pepper for export is primarily graded based on size and density (measured in grams per liter or G/L), which correlates with quality. Common grades include:</p>
            <p><strong>Density-Based Grades:</strong></p>
            <ul class="list-disc ml-8 space-y-2">
              <li><strong>BOLD Quality (Around 580 G/L):</strong> Large-sized, high-density pepper with strong pungency.</li>
              <li><strong>ASTA Quality (Around 570 G/L):</strong> High-quality pepper meeting international ASTA (American Spice Trade Association) standards.</li>
              <li><strong>BB1 Quality (550 G/L):</strong> Medium-bold grains, widely used for food processing.</li>
              <li><strong>BB2 Quality (500 G/L):</strong> Slightly lower density than BB1, preferred for bulk spice markets.</li>
              <li><strong>FAQ Quality (Around 500 G/L):</strong> Fair Average Quality; commonly exported for general consumption.</li>
            </ul>
            <p><strong>Size-Based Grades (Pinhead):</strong></p>
            <ul class="list-disc ml-8 space-y-1">
              <li>Pinhead 1mm</li>
              <li>Pinhead 1.5mm</li>
              <li>Pinhead 2mm</li>
              <li>Pinhead 2.5mm</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Why Indian Black Pepper is Preferred for Export?</h2>
          <ul class="list-disc ml-8 space-y-2 text-gray-700 leading-relaxed">
            <li><strong>Superior Quality:</strong> Indian black pepper is known for its high piperine content, aroma, and essential oil concentration.</li>
            <li><strong>Sustainable Farming:</strong> Many regions practice organic and sustainable pepper farming.</li>
            <li><strong>Global Compliance:</strong> Indian black pepper meets the stringent quality standards of the US, EU, and Middle Eastern markets.</li>
            <li><strong>Diverse Applications:</strong> Used in cooking, pharmaceuticals, cosmetics, and essential oil production.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Black Pepper</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Germany</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Kingdom</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Vietnam</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Saudi Arabia</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Canada</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Japan</div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Physical & Chemical Properties of Black Pepper</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 p-3 text-left font-bold">Grade</th>
                  <th class="border border-gray-300 p-3 text-left font-bold">MG-1</th>
                  <th class="border border-gray-300 p-3 text-left font-bold">MG-2</th>
                  <th class="border border-gray-300 p-3 text-left font-bold">TGSEB</th>
                  <th class="border border-gray-300 p-3 text-left font-bold">TGEB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Trade Name</td>
                  <td class="border border-gray-300 p-3">Malabar Garbled 1</td>
                  <td class="border border-gray-300 p-3">Malabar Garbled 2</td>
                  <td class="border border-gray-300 p-3">Tellicherry Garbled Special Extra Bold</td>
                  <td class="border border-gray-300 p-3">Tellicherry Garbled Extra Bold</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Size</td>
                  <td class="border border-gray-300 p-3">5 MM</td>
                  <td class="border border-gray-300 p-3">5.5 MM</td>
                  <td class="border border-gray-300 p-3">4.75 MM</td>
                  <td class="border border-gray-300 p-3">4.25 MM</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Extraneous matter</td>
                  <td class="border border-gray-300 p-3">0.50%</td>
                  <td class="border border-gray-300 p-3">1%</td>
                  <td class="border border-gray-300 p-3">0.50%</td>
                  <td class="border border-gray-300 p-3">1%</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Light Berries</td>
                  <td class="border border-gray-300 p-3">2%</td>
                  <td class="border border-gray-300 p-3">3%</td>
                  <td class="border border-gray-300 p-3">2%</td>
                  <td class="border border-gray-300 p-3">3%</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Moisture content</td>
                  <td class="border border-gray-300 p-3">11%</td>
                  <td class="border border-gray-300 p-3">11%</td>
                  <td class="border border-gray-300 p-3">7%</td>
                  <td class="border border-gray-300 p-3">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Black Pepper</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Piper Nigrum L</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Form Available</td>
                  <td class="border border-gray-300 p-3">Whole Seed</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Type</td>
                  <td class="border border-gray-300 p-3">Machine Clean & Sortex Clean</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind, Pharmaceutical, Cosmetic & Perfume Ind</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Variety Available</td>
                  <td class="border border-gray-300 p-3">MG, TGEB, TGSEB</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Color</td>
                  <td class="border border-gray-300 p-3">Dark Brown to Black</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Dec - Feb</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Microbiological Parameter</td>
                  <td class="border border-gray-300 p-3">As Per Buyer's Requirement & Importing Country Norms</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer's Requirement)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer's Requirement</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>`
  },
  {
    slug: "black-pepper-powder",
    title: "BLACK PEPPER POWDER",
    botanicalName: "Piper Nigrum",
    image: blackPepperPowder,
    summary: "Finely ground black pepper powder with high piperine content and strong pungent flavor.",
    items: ["High Piperine", "Bold Flavor", "Export Grade", "Sun-Dried"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Black Pepper Powder</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Black Pepper is one of the Popular Spices and known as "<strong><strong>King of Spices"</strong></strong> holds a legacy that dates back thousands of years and remains one of the most sought-after spices in global trade.</p>
            <p>In India, Black pepper is mainly grown in Kerala and Tamilnadu, Karnataka, Konkan, Pondicherry & Andaman, and Nicobar islands.</p>
            <p>The peppercorn is actually the fruit of the plant, and depending on when it is harvested, processed, and dried; it can produce black, green, or white peppercorns.</p>
            <p>India is one of the largest producers and exporters of world-class top quality black peppers in the world. Indian Black Pepper Known for its highly rich aroma and pungent flavour. In 2025, Indian black pepper exports continue to thrive, catering to global markets with various varieties and grades.</p>
            <p>Black pepper powder is a finely ground spice from the dried drupe of the Piper Nigrum vine, known for its pungent, warm, and biting flavor caused by the chemical compound piperine. It appears as a grey powder, is used globally as a seasoning in both sweet and savory dishes, and offers potential health benefits like aiding digestion and providing antioxidants.</p>
            <p>The powder is made from the dried, unripe fruits (drupes) of the Piper Nigrum vine, which are sun-dried to become the black peppercorns. A fine, free-flowing powder with a grey color.It's flavour is pungent, warm, hot, and biting, with earthy undertones. The aroma is also strong and pungent. Its characteristic spiciness comes from piperine, which is different from the capsaicin in chili peppers.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Black Pepper Powder:</h2>
          <h3 class="text-xl font-bold mb-4">Culinary Uses : </h3>
          
          <ul class="list-disc ml-8 space-y-2">
              <li><strong>Versatile seasoning:</strong> Used in virtually all types of savory cooking to add a spicy kick.</li>
              <li><strong>Common applications:</strong> Meats, poultry, seafood, soups, stews,sauces, dressings, salads, and vegetables.</li>
              <li><strong>Finishing spice:</strong> Often added at the end of cooking to preserve its flavor and aroma.</li>
              <li><strong>Other uses:</strong> Can be found as a topping on fruit salads and drinks, or as a main ingredient in blends like garam masala.</li>
          </ul>
          
          <h3 class="text-xl font-bold mb-4">Health and Nutritional Benefits : </h3>
          <ul class="list-disc ml-8 space-y-2">
              <li><strong>Digestive aid:</strong> Stimulates the release of stomach acids, aiding digestion.</li>
              <li><strong>Nutrient source:</strong> Contains dietary fibers, iron, and Vitamin K. It is also a source of B-complex vitamins, though this can vary depending on the product.</li>
              <li><strong>Antioxidant and anti-inflammatory properties:</strong> Piperine, the main compound, may have antioxidant and anti-inflammatory effects.</li>
              <li><strong>Other potential benefits:</strong> Supports skin health and may aid in weight management by boosting metabolism.</li>
          </ul>
            
          
 </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Why Indian Black Pepper Powder is Preferred for Export?</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
          <ul class="list-disc ml-8 space-y-2">
            <li><strong>High Piperine Content:</strong> Indian black pepper has a higher concentration of piperine, the compound responsible for its pungent heat, which makes it more potent than many other types.</li>
            <li><strong>Bold Aroma and Flavor:</strong> It is valued for its strong, sharp, and woody fragrance and bold flavor, which makes it a sought-after \"King of Spices\".</li>
            <li><strong>Rich in Oils and Antioxidants:</strong> The spice is rich in essential oils and antioxidants, which contribute to its desirable flavor and medicinal properties.</li>
          </ul> 
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Black Papper Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Piper Nigrum L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Ground Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Grind</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind, Pharmaceutical, Cosmetic & Perfume Ind</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">MG, TGEB, TGSEB</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Dark Brown to Black</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Dec - Feb</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                 <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>`
  },
  {
    slug: "chilli-powder",
    title: "CHILLI POWDER",
    botanicalName: "Capsicum Annuum L & Capsicum Frutescens L",
    image: chilliPowder,
    summary: "Fiery fusion of flavor and brilliant red hue from India's finest growing regions.",
    items: ["Bold Heat", "Vibrant Color", "Multiple Varieties", "Export Grade"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Chilli Powder</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Dry chilli is the sun-dried form of ripe red chili peppers, prized for their heat, smoky flavor, and color. It is a versatile ingredient used whole, crushed, or ground into powders for a wide range of dishes, including curries, stews, and sauces.</p>
            <p>Red chilli powder\'s primary ingredient is dried, ground red chili peppers, often blended with other spices like cumin, coriander, garlic powder, and oregano.</p>
            <p>Red Chilli Powder is one of the most powerful and indispensable spices used worldwide, known for its bold flavor, rich color, and intense heat.</p>
            <p>Red Chilli Powder is a fiery fusion of flavor, aroma, and brilliant red hue, crafted from the finest sun-ripened chillies cultivated in India's most fertile regions.</p>
            <p>We At Skybound International, we offer premium-quality Red Chilli Powder made from the finest hand-picked chillies sourced from the fertile lands of Andhra Pradesh, Gujarat, and Rajasthan---the heartlands of India's chilli cultivation.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Chilli Powder:</h2>
          <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
  <li>
    <strong>Whole or Crushed:</strong>
    Add whole dried chilies to hot oil for tempering, or crush them for adding to pasta, pizzas, or as a finishing touch on dishes.
  </li>

  <li>
    <strong>Ground into Powder:</strong>
    Grind dried chilies to make powders for spice blends, or for homemade curry, sauces, pickles, chutneys, and sambar masala.
  </li>

  <li>
    <strong>Seasoning:</strong>
    Crushed flakes are used as a universal seasoning for items like pizzas, while specific varieties can be toasted and pounded for use in a range of dishes.
  </li>

  <li>
    <strong>Spice Blends:</strong>
    It is a crucial component in many spice mixes like garam masala, providing both heat and color.
  </li>

  <li>
    <strong>Industrial Use:</strong>
    Color and flavor enhancer for sauces, chips, noodles &amp; more.
  </li>
  <li>
    <strong>Medicinal &amp; Cosmetic:</strong>
    Used in ointments and warming skin creams (capsaicin).
  </li>
</ul>
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Varieties of Chilli Powder</h2>
          <ul class="list-disc ml-8 space-y-2 text-gray-700 leading-relaxed">
            <li><strong>Hot Red Chilli Powder:</strong> High pungency, used in spicy cuisines.</li>
            <li><strong>Kashmiri Chilli Powder:</strong> Mild heat with intense red color,</li>
            <li><strong>Teja & Sannam Blends:</strong> Tailored to client's preferred flavor</li>
            <li><strong>Customized Blends:</strong> As per international food industry</li>
          </ul>
        </section>

        <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Chilli Powder is Preferred for Export?
  </h2>

  <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
    <li>
      <strong>Aesthetic Appeal:</strong>
      Indian chili powder has a natural, bright red color that is visually appealing to global buyers, making it attractive without the need for artificial colorants.
    </li>

    <li>
      <strong>Variety and Quality:</strong>
      India produces a vast range of chillies, from mild to extremely hot, catering to diverse culinary needs and taste preferences worldwide.
    </li>

    <li>
      <strong>Flavor and Color:</strong>
      Indian chilli powder is prized for its vibrant red color and rich, deep flavor, often achieved without synthetic additives due to ideal growing conditions and traditional drying methods.
    </li>

    <li>
      <strong>Processing and Value Addition:</strong>
      India is a leader in both whole and powdered chilli production. The convenience and versatility of chilli powder make it a staple in global food processing, adding value to raw chilies through powders, sauces, and extracts.
    </li>

    <li>
      <strong>Competitive Pricing and Strong Supply Chain:</strong>
      As the world’s largest producer, India can offer competitive pricing while also ensuring a consistent and reliable supply chain.
    </li>
  </ul>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
              <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Chilli Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Capsicum Annuum L & Capsicum Frutescens L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Ground Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Grind</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Culinary; Spice Blends; Pharmaceutical; HoReCa; Cosmetic</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Teja S-17; Sannam S-4; Wrinkle S-273; Byadagi</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natural Red As per Grade</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Jan -- April</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "cloves",
    title: "CLOVES",
    botanicalName: "Syzygium Aromaticum",
    image: cloves,
    summary: "Aromatic dried flower buds with distinctive flavor and numerous medicinal properties.",
    items: ["Aromatic", "Premium Quality", "Medicinal", "Export Grade"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Cloves</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>The clove of commerce is the air-dried unopened flower bud obtained from evergreen medium sized tree. Clove clusters are plucked by hand when the buds are fully developed with a pronounced pink flush and then dried over several days in the sun.</p>
            <p>Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum, are among the world's oldest and most valuable spices. With a rich, warm, and sweetly pungent aroma.</p>
            <p>The clove tree is an evergreen that grows up to 8--12 metres (26--39 ft) tall, with large leaves and crimson flowers grouped in terminal clusters. The flower buds initially have a pale hue, gradually turn green, then transition to a bright red when ready for harvest.</p>
            <p>They are native to the Maluku Islands, or Moluccas, in Indonesia, and are commonly used as a spice, flavoring, or fragrance in consumer products, such as toothpaste, soaps, or cosmetics. Cloves are available throughout the year owing to different harvest seasons across various countries, with India standing out as a key supplier to the international spice market.</p>
            <p>We at Skybound International, we bring the finest export-grade Indian cloves grown in the fertile soils of Kerala, Tamil Nadu, and Karnataka---regions famed for their premium-quality spice cultivation. Our cloves are carefully hand-harvested just before flowering, dried naturally under sunlight, and meticulously sorted to retain only the highest-quality buds rich in oil content and flavor.</p>
            <p>We ensure that each batch undergoes rigorous cleaning, grading, quality control, and moisture checks, making it fully compliant with global export regulations including ASTA, ISO, FSSAI, and more. Whether sold whole or further processed, our cloves promise a potent, lasting flavor and a clean natural appearance---ideal for global markets.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Cloves</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>The use of clove in whole or ground form is mainly for culinary purposes and as a flavouring agent in food industry. Its flavour blends well with both sweet and savory dishes.</p>
            <p>Cloves are used in the cuisine of Asian, African, Mediterranean, and the Near and Middle East countries, lending flavor to meats (such as baked ham), curries, and marinades, as well as fruit (such as apples, pears, and rhubarb).</p>
            <p>Cloves are not just a kitchen staple---they are a multi-purpose botanical with extensive uses in food processing, traditional medicine, personal care, and aromatherapy industries. It is highly valued in medicine as carminative, aromatic and stimulant.</p>
            <p>The antiseptic and antibiotic properties of clove oil are used in medicine especially in dentistry, oral and pharyngeal treatments. It has wider applications in preparations of toothpaste and mouthwashes, soaps and perfumes.</p>
            <p>Clove essential oil may be used to inhibit mold growth on various types of foods. In addition to these non-culinary uses of clove, it can be used to protect wood in a system for cultural heritage conservation, and showed the efficacy of clove essential oil to be higher than a boron-based wood preservative.</p>
          </div>
        </section>

      <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Grades of Cloves
  </h2>

  <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
    <li>
      <strong>Handpicked Superior (HPS):</strong>
      Uniform size, color, and aroma (This is the highest quality, manually sorted with very few stems or baby cloves.)
    </li>

    <li>
      <strong>Grade 1:</strong>
      Clean, dark brown, less broken (A general category for high-quality cloves that are clean and have a dark brown color.)
    </li>

    <li>
      <strong>Grade 2:</strong>
      Slight variation in size and color (A slightly lower grade with a higher percentage of baby cloves and stems but still with low ash content.)
    </li>

    <li>
      <strong>Grade 3:</strong>
      Broken or smaller cloves (The lowest grade, characterized by a higher percentage of baby cloves, stems, and ash content.)
    </li>
  </ul>
</section>


        <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Cloves is Preferred for Export?
  </h2>

  <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
    <li>
      <strong>High oil content:</strong> Indian cloves are known for a high concentration
      of essential oils, which contributes to their strong aroma and flavor.
    </li>

    <li>
      <strong>Rich flavor and aroma:</strong> They are prized for a deep, rich aroma
      and sharp taste that is ideal for a variety of culinary and industrial uses.
    </li>

    <li>
      <strong>Superior quality:</strong> The cloves are often hand-picked and sorted to
      ensure a premium product, free from artificial additives.
    </li>

    <li>
      <strong>High eugenol content:</strong> This makes them particularly valuable for
      extraction in the wellness, aromatherapy, and pharmaceutical industries.
    </li>

    <li>
      <strong>Culinary applications:</strong> They are a key ingredient in many spice
      blends, curries, baked goods, and beverages worldwide.
    </li>

    <li>
      <strong>Industrial uses:</strong> Beyond food, Indian cloves are essential for
      making perfumes, essential oils, and certain pharmaceutical products.
    </li>

    <li>
      <strong>Medicinal benefits:</strong> Their antioxidant, anti-inflammatory, and
      digestive properties are recognized and drive demand in health-focused products
      and traditional medicine.
    </li>

    <li>
      <strong>Traditional cultivation:</strong> Traditional farming methods contribute
      to the perceived high quality of Indian cloves.
    </li>

    <li>
      <strong>Major producer:</strong> India is a significant producer of cloves, with
      the majority grown in states like Tamil Nadu, particularly in the Kanyakumari district.
    </li>

    <li>
      <strong>Global reach:</strong> Indian cloves are exported to major markets across
      Europe, North America, the Middle East, and Asia, indicating consistent global demand.
    </li>
  </ul>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Cloves</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Canada</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Morocco</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Kingdom</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Australia</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Algeria</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Bangladesh</div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Physical & Chemical Properties of Cloves</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3"><strong>PROPERTIES</strong></td>
                  <td class="border border-gray-300 p-3"><strong>VALUES & LIMITS</strong></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name:</td>
                  <td class="border border-gray-300 p-3">Cloves</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Cleaning:</td>
                  <td class="border border-gray-300 p-3">Machine Cleaned / Sortex Cleaned</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Purity:</td>
                  <td class="border border-gray-300 p-3">99% / 99.5% (As Per Customer Requirements)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Moisture:</td>
                  <td class="border border-gray-300 p-3">10-12% Max</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Place of Origin:</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Total Ash:</td>
                  <td class="border border-gray-300 p-3">5-7% Max</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Acid Insoluble Ash:</td>
                  <td class="border border-gray-300 p-3">0.5-1% Max</td>
                </tr>
                </tbody>
            </table>
          </div>
        </section>
          <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Cloves</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Syzygium Aromaticum</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Whole Seed</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Clean & Sortex Clean</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind, Pharmaceutical, Personal Car & Cosmetics</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">HPS; Grade-1; Grade-2; Grade-3</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natural Brown</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">April - May</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "coriander-seed",
    title: "CORIANDER SEED",
    botanicalName: "Coriandrum sativum L.",
    image: corianderSeed,
    summary: "Premium whole coriander seeds with distinctive citrusy flavor and aroma.",
    items: ["Whole Seeds", "Aromatic", "Export Grade", "Premium"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Coriander Seed</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Coriander is an important spice crop having a prime position in flavouring food. The plant is a thin stemmed, small, bushy herb, 25 to 50 cm in height with many branches and umbels. Coriander is a tropical crop and can be successfully cultivated as a rabi season crop in an area free from severe frost during February when the crop flowers and sets its seeds.</p>
            <p>Coriander is commonly found both as whole dried seeds and in ground form. Roasting or heating the seeds in a dry pan heightens the flavor, aroma, and pungency. Ground coriander seed loses flavor quickly in storage and is best ground fresh.</p>
            <p>Coriander seed is a spice in garam masala, and Indian curries, which often employ the ground fruits in generous amounts together with cumin, acting as a thickener in a mixture called dhania jeera.</p>
            <p>Coriander seed have a unique aroma and a distinctive flavour. The seeds are rich in Vitamin A, Vitamin C, Fat, Carbohydrates, Proteins and other minerals.</p>
            <p>We at Skybound International, we are proud to offer top-grade Indian coriander seeds, cultivated in the fertile soils of Rajasthan, Gujarat, and Madhya Pradesh --- India's leading spice-producing belts.</p>
            <p>We bring you coriander seeds that are naturally sun-dried, machine-cleaned, and hygienically packed, retaining their essential oils and natural freshness throughout the supply chain. Our seeds are preferred globally for their purity, uniform size, aroma strength, and long shelf life --- making them a valuable export commodity.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Coriander Seed</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>The young plant is used for flavouring and garnishing curries and soups.</p>
            <p>The fruits (seeds) are widely used as condiments with or without roasting in the preparation of curry powders, sausages and seasonings. It is an important ingredient in the manufacture of food flavourings, in bakery products, meat products, soda & syrups, puddings, candy preserves and liquors.</p>
            <p>In medicines, it is used as a carminative, refrigerant, diuretic, and aphrodisiac. In household medicines, it is used against seasonal fever, stomach disorders, and nausea. Coriander oil and oleoresins are primarily used in seasonings for sausages and other meat products.</p>
          </div>
          </br>
          <div><strong>Culinary:</strong> Used in spice blends like garam masala, curry powders, and pickles.</div>
          <div><strong>Medicinal:</strong> Used in Ayurveda and traditional medicine for digestive and detoxifying benefits.</div>
          <div><strong>Cosmetics:</strong> Coriander seed oil is used in skincare products for its antibacterial properties.</div>
          <div><strong>Food Processing:</strong> Used as a flavoring agent in beverages and processed foods</div>
          
        </section>

      <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Varieties of Coriander Seed
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        India exports several varieties of coriander seeds, including the common
        Sadhana (CS-4), Sindhu (CS-2), Sudha (LCC-128), and Swathi (CS-6), which are
        known for their distinct growth durations and grain characteristics.
      </li>
      <li>
        Other exported varieties include APHU Dhania-1 (LCC-170), Suguna (LCC-236),
        Suruchi (LCC-234), and Susthira (LCC-219).
      </li>
      <li>
        <strong>Sadhana (CS-4):</strong> Medium-duration, bushy variety suitable for
        both grain and leaf purposes; resistant to aphids.
      </li>
      <li>
        <strong>Sindhu (CS-2):</strong> Medium duration (95–100 days) with
        medium-sized grains; well-suited for export.
      </li>
      <li>
        <strong>Sudha (LCC-128):</strong> Medium duration (80–98 days) with
        oblong-shaped grains and essential oil content of 0.36%–0.40%.
      </li>
      <li>
        <strong>Swathi (CS-6):</strong> Short-duration variety (80–85 days),
        resistant to powdery mildew; good for export.
      </li>
      <li>
        <strong>APHU Dhania-1 (LCC-170):</strong> Medium duration (85–90 days) with
        bold, oblong grains and good yield potential.
      </li>
      <li>
        <strong>Suguna (LCC-236):</strong> Medium duration (90–95 days) with slender,
        oval grains and high volatile oil content (~0.52%).
      </li>
      <li>
        <strong>Suruchi (LCC-234):</strong> High-yielding variety suitable for
        off-season leaf production.
      </li>
      <li>
        <strong>Susthira (LCC-219):</strong> High-yielding and adaptable to various
        conditions.
      </li>
    </ul>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Grades of Coriander Seed
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <div>
        Additionally, There are grades based on appearance, such as Eagle, Scooter, and Parrot, and colors like Green Medium and Brown.
      </div>
      <li>
        <strong>Eagle:</strong> A popular quality grade. A large-seeded variety known for a strong, earthy aroma. This is one of the most popular and highly sought-after varieties for export, known for its rich aroma and strong flavor. It is a large-sized seed and often commands a premium price.
      </li>
      <li>
        <strong>Scooter:</strong> Another common grade. A smaller-seeded variety with an intense, pungent flavour. This grade consists of smaller seeds compared to the Eagle and is valued for its intense, pungent flavor.
      </li>
      <li>
        <strong>Single Parrot / Double Parrot:</strong> These grades are known for their high quality and typically have a green color. These grades are characterized by their green color, which indicates better quality, and are traded at a premium.
      </li>
      <li>
        <strong>Brown/Badami:</strong> This grade is produced when seeds are over-dried, leading to a lower price.
      </li>
      <li>
        <strong>Green Medium / Extra / Special:</strong> A common grade based on the color and size of the seed after drying. Finer quality grades with a desirable green color, which fetch a premium price in the market.

      </li>
    </ul>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Coriander Seed is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Superior quality:</strong> Indian coriander seeds are prized for their rich flavor, pungent taste, and strong aroma, which is due to a high volatile oil content.
      </li>
      <li>
        <strong>Ideal growing conditions:</strong> India's diverse climate and fertile soil are perfectly suited for cultivating high-quality coriander year-round.
      </li>
      <li>
        <strong>High volatile oil content:</strong> Specific varieties, like Badami and Eagle, are sought after for their higher volatile oil content, which significantly enhances the flavor of the powder.
      </li>
      <li>
        <strong>Competitive pricing:</strong> As a top global producer, India can offer competitive pricing, which is a major draw for international buyers.
      </li>
      <li>
        <strong>Consistent availability:</strong> India's large-scale production ensures a consistent supply to meet global demand, making it a reliable source for buyers worldwide.
      </li>
      <li>
        <strong>Export infrastructure:</strong> India has a strong export infrastructure and a network of processors and exporters capable of handling large volumes and meeting the demands of the global market.
      </li>
      <li>
        <strong>Efficient supply chains:</strong> The capacity for bulk sales and efficient supply chains allows Indian exporters to offer cost-effective rates, making it an economically attractive option for international buyers.
      </li>
      <li>
        <strong>Health benefits:</strong> Growing global interest in natural ingredients and health-promoting spices has increased demand, as Indian coriander is known for its digestive, anti-inflammatory, and antioxidant properties.
      </li>
    </ul>
  </div>
</section>


       <!-- Top Importers -->
  <section>
    <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
      Top Importing Countries of Indian Coriander Seed
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            
      <div class="bg-gray-50 p-3 rounded-lg text-center border">China</div>
      <div class="bg-gray-50 p-3 rounded-lg text-center border">Malaysia</div>
      <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
      <div class="bg-gray-50 p-3 rounded-lg text-center border">Saudi Arabia</div>
      <div class="bg-gray-50 p-3 rounded-lg text-center border">Nepal</div>
      <div class="bg-gray-50 p-3 rounded-lg text-center border">Egypt</div>
      <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
      <div class="bg-gray-50 p-3 rounded-lg text-center border">Algeria</div>
    </div>
  </section>

    

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Physical & Chemical Properties of Coriander Seed</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3"><strong>PROPERTIES</strong></td>
                  <td class="border border-gray-300 p-3"><strong>VALUES & LIMITS</strong></td>
                </tr>
              
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Coriander</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Cleaning</td>
                  <td class="border border-gray-300 p-3">Machine Cleaned / Sortex Cleaned</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Purity</td>
                  <td class="border border-gray-300 p-3">95 - 97%</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Moisture</td>
                  <td class="border border-gray-300 p-3">10% Max</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Place of Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Total Ash</td>
                  <td class="border border-gray-300 p-3">10% Max</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Immature seeds</td>
                  <td class="border border-gray-300 p-3">1% max</td>
                </tr>
               </tbody>
            </table>
          </div>
        </section>
          <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Coriander Seed</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Coriandrum Sativum L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Whole Seed & Split</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Clean & Sortex Clean</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Culinary Use; Pharmaceutical; Cosmetic</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Eagle; Scooter, Single-Double Parrot; Brown (Badami)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">As Per Grade</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Feb - March</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                 <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "cumin-powder",
    title: "CUMIN POWDER",
    botanicalName: "Cuminum Cyminum L",
    image: cuminPowder,
    summary: "Aromatic cumin powder with warm, earthy flavor for authentic cuisines.",
    items: ["Aromatic", "Fine Powder", "Export Grade", "Pure"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Cumin Powder</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Cumin is a flowering plant in the family Apiaceae, native to the Irano-Turanian Region. Its seeds -- each one contained within a fruit, which is dried -- are used in the cuisines of many cultures in both whole and ground form.</p>
            <p>Cumin powder, or jeera powder, is made by grinding dried seeds of the Cuminum cyminum plant, a member of the parsley family, which is widely grown in India, North Africa, and the Middle East. It is known for its warm, earthy flavor and aroma, and is used to add depth to a vast array of dishes across many cuisines, from curries and lentil stews to chili and taco seasonings.</p>
            <p>The powder provides health benefits, including being a good source of iron, aiding digestion, and containing antioxidants.</p>
            <p>Sourced from the finest cumin-growing regions of India, our Cumin seeds are cultivated using sustainable farming methods, hand-harvested at peak maturity, and processed using modern hygienic techniques to retain their natural richness and oil content.</p>
            <p>The natural oil in our Cumin seeds gives them a deep, penetrating aroma and a slightly peppery taste that enhances the overall character of any dish. Their flavor profile is warm, nutty, earthy, and aromatic, making them an essential ingredient in countless global cuisines---from Indian and Middle Eastern to Mexican and African dishes.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Cumin Powder</h2>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>Cumin powder is a versatile spice used worldwide, especially in Indian, Mexican, Middle Eastern, and North African cuisines.</p>
   <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
  <li>
    <strong>Spice Blends:</strong>
    It is a key ingredient in many commercial and homemade blends, including chili powder,
    garam masala, curry powder, and taco seasoning.
  </li>

  <li>
    <strong>Flavoring Dishes:</strong>
    The powder disperses its flavor immediately and is ideal for marinades, rubs for meats
    (beef, lamb, chicken), sauces, and stews.
  </li>

  <li>
    <strong>Vegetarian Cooking:</strong>
    It enhances the flavor of legumes, beans, rice, and roasted vegetables like carrots,
    potatoes, and eggplant.
  </li>

  <li>
    <strong>Garnishes and Drinks:</strong>
    Roasted cumin powder is often sprinkled on snacks, salads, raitas (yogurt sauce),
    and buttermilk, and is the key ingredient in the traditional Indian drink jeera water.
  </li>

  <li>
    <strong>Health and Wellness Uses:</strong>
    It can help to regulate blood sugar levels, improve blood cholesterol, and promote
    weight loss as part of a balanced diet.
  </li>
</ul>


</div>

        </section>

        

  <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Varieties of Cumin Powder
  </h2>

  <div class="text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-3">
      <li>
        <strong>Brown Cumin Powder:</strong>
        This is the most widely exported variety, derived from the common
        <em>Cuminum cyminum</em> seed. It is used in a vast range of dishes and
        culinary applications.
      </li>

      <li>
        <strong>Black Cumin Powder (Kala Jeera):</strong>
        Also known as black caraway, this powder has a distinct, slightly bitter
        flavor and is sought after for use in traditional Indian and Middle
        Eastern cuisine, as well as for its medicinal properties.
      </li>
    </ul>
  </div>
</section>

<section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Cumin Powder is Preferred for Export?
  </h2>

  <div class="text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-3">
      <li>
        <strong>High Oil Content and Aroma:</strong>
        Indian cumin has a high volatile oil content, which ensures a strong
        aroma and flavor essential for spice blends, seasonings, and processed
        foods.
      </li>

      <li>
        <strong>Dominant Production:</strong>
        India produces over 70% of the world's cumin, ensuring a stable and
        abundant supply.
      </li>

      <li>
        <strong>Favorable Growing Conditions:</strong>
        States like Gujarat and Rajasthan provide ideal climate and soil
        conditions for high-quality cumin cultivation.
      </li>

      <li>
        <strong>Early Harvest:</strong>
        The February–March harvest season provides a logistical advantage, as it
        is several months ahead of other major producer countries.
      </li>
    </ul>
  </div>
</section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Cumin Powder</td>
                </tr>
            
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Cuminum Cyminum L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Ground Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Grind</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Pharmaceutical; Culinary; Cosmetic</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Brown Cumin Powder; Black Cumin Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Dark Brown to Black</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Feb -- March</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                 <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "cumin-seed",
    title: "CUMIN SEED",
    botanicalName: "Cuminum Cyminum L",
    image: cuminSeed,
    summary: "Premium whole cumin seeds with distinctive warm and earthy aroma.",
    items: ["Whole Seeds", "Rich Aroma", "Export Grade", "Premium"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Cumin Seed</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Cumin is a flowering plant in the family Apiaceae, native to the Irano-Turanian Region. Its seeds -- each one contained within a fruit, which is dried -- are used in the cuisines of many cultures in both whole and ground form.</p>
            <p>Each branch has two to three sub-branches. All the branches attain the same height, so the plant has a uniform canopy. The flowers are small, white or pink, and borne in umbels. Each umbel has five to seven umbellets.</p>
            <p>The ancient Greeks kept cumin at the dining table in its own container (much as pepper is frequently kept today), and this practice continues in Morocco. Cumin was also used heavily in ancient Roman cuisine. In India, it has been used for millennia as a traditional ingredient in innumerable recipes, and forms the basis of many other spice blends.</p>
            <p>Cumin was introduced to the Americas by Spanish and Portuguese colonists. Black and green cumin are used in Persian cuisine. Today, the plant is mostly grown in the Indian subcontinent, Northern Africa, Mexico, Chile, and China. Since cumin is often used as part of bird food and exported to many countries, the plant can occur as an introduced species in many territories.</p>
            <p>India is the world\'s largest producer of cumin, accounting for about 70%. The other major cumin-producing countries are Syria (13%), Turkey (5%), UAE (3%), and Iran. India produced 856,000 tons of cumin seed in the 2020--2021 fiscal year.</p>
            <p>In India, Cumin is sown from October until the beginning of December, and harvesting starts in February. In Syria and Iran, Cumin is sown from mid-November until mid-December (extensions up to mid-January are possible) and harvested in June/July.</p>
            <p>We At Skybound International, we take pride in offering cumin seeds that are 100% pure, machine cleaned, sortex processed, and globally compliant with international quality standards. With their strong aroma and flavor, our cumin seeds are ideal for culinary applications, spice blending, and food manufacturing. In addition to their culinary importance, they also hold a strong place in the health, wellness, cosmetic, and pharmaceutical sectors due to their powerful medicinal properties.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Cumin Seed</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Cumin seed have an aromatic odour and bitter taste. It is used as a condiment, and is an ingredient in curry powders, seasonings of breads, cakes and cheese. It is employed in native dishes of Central and South America.</p>
            <p>Cumin can be an ingredient in chili powder and is found in garam masala, curry powder, and bahaarat, and is used to flavor numerous commercial food products. In Indian and other South Asian cuisine, it is often combined with coriander seeds in a powdered mixture called dhana jeera.</p>
            <p>Cumin imparts an earthy, warming and aromatic character to food, making it a staple in certain stews and soups, as well as spiced gravies such as curry and chili. It is also used as an ingredient in some pickles and pastries.</p>
            <p>Cumin Oil is used for a variety of flavors, perfumes, and essential oil. Cumin oil may be used as an ingredient in some cosmetics.</p>
            <p>In medicine, it is used as a stimulant, carminative, stomachic and astringent. Cumin seed oil is used in perfumery and for flavouring liqueurs and cordials.</p>
          </div>
        </section>

        <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Varieties of Cumin Seed
  </h2>

  <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
    <li>
      <strong>Brown Cumin (Jeera):</strong>
      This is the most common type with a warm, earthy flavor. It is grown widely in India
      and used in various cuisines.
    </li>

    <li>
      <strong>Black Cumin (Kalonji):</strong>
      Also known as Nigella sativa, this variety has a more bitter taste than brown cumin
      and is used in traditional dishes.
    </li>

    <li>
      <strong>Organic Cumin:</strong>
      Available in whole or ground form, it is grown without synthetic pesticides or
      chemicals and is a popular export option.
    </li>
  </ul>
</section>


      <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Grades of Cumin Seed
  </h2>

  <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
    <li>
      <strong>Singapore Quality:</strong>
      Characterized by a high oil content and bold seed size, making it a premium export product.
    </li>

    <li>
      <strong>Europe Quality:</strong>
      This grade has specific requirements for moisture content and purity and is distinct from the Singapore grade.
    </li>

    <li>
      <strong>Other Grades:</strong>
      Exporters also differentiate between various purity levels, such as 99.5%, 99%, or standard quality cumin seeds.
    </li>
  </ul>
</section>


       <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Cumin Seed is Preferred for Export?
  </h2>

  <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
    <li>
      <strong>High Oil Content:</strong>
      Indian cumin is known for its high volatile oil content, which provides a stronger aroma
      and flavor sought after in the global market.
    </li>

    <li>
      <strong>Favorable Growing Conditions:</strong>
      Ideal arid climates and soil in states like Gujarat and Rajasthan produce superior quality cumin seeds.
    </li>

    <li>
      <strong>Dominant Production:</strong>
      India is the world’s largest producer of cumin, ensuring a stable and consistent supply
      for global markets.
    </li>

    <li>
      <strong>Early Harvest:</strong>
      India’s harvest period (February–March) often precedes that of other major producers,
      allowing for strategic market entry.
    </li>

    <li>
      <strong>Cost-effective Pricing:</strong>
      Large-scale farming and a strong supply chain make Indian cumin competitively priced
      for importers in price-sensitive markets.
    </li>
  </ul>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Cumin Seed</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center border">China</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Bangladesh</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Malaysia</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Nepal</div>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Physical & Chemical Properties of Cumin Seed</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3"><strong>PROPERTIES</strong></td>
                  <td class="border border-gray-300 p-3"><strong>VALUES & LIMITS</strong></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Cumin Seed</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Cleaning</td>
                  <td class="border border-gray-300 p-3">Machine Cleaned / Sortex Cleaned</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Size</td>
                  <td class="border border-gray-300 p-3">4mm to 6mm length</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Purity</td>
                  <td class="border border-gray-300 p-3">95 -- 99.5% (Depending upon grade)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Moisture</td>
                  <td class="border border-gray-300 p-3">8% to 10% Max</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Place of Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Total Ash</td>
                  <td class="border border-gray-300 p-3">9.5% Max</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Acid Insoluble Ash</td>
                  <td class="border border-gray-300 p-3">1.5% Max</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Immature seeds</td>
                  <td class="border border-gray-300 p-3">2% max</td>
                </tr>
                  </div>
                   </tbody>
            </table>
              </section>
             <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Cumin Seed</td>
                </tr>
             
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Cuminum Cyminum L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Whole Seed</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Clean & Sortex Clean</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Pharmaceutical; Culinary; Cosmetic</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Singapore; Europe</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natural Brown</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Feb -- March</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                 <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "dehydrated-garlic",
    title: "DEHYDRATED GARLIC",
    botanicalName: "Allium Sativum",
    image: dehydratedGarlic,
    summary: "Premium dehydrated garlic products with extended shelf life and intense flavor.",
    items: ["Dehydrated", "Long Shelf Life", "Export Grade", "Premium"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Dehydrated Garlic</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Garlic is a hardy, bulbous, rooted, perennial plant with narrow flat leaves and bears small white flowers and bulbils. The compound bulb consists of 6 to 34 bulblets called 'cloves' which are surrounded by a common, thin, white or pinkish papery sheet. Garlic has a strong flavour and taste.</p>
            <p>Dehydrated garlic is fresh garlic with moisture removed through drying processes like air drying or low-heat dehydration, making it shelf-stable and convenient for cooking. It is available in various forms, such as flakes, granules, and powder, and can be used directly in recipes or rehydrated in water or oil.</p>
            <p>This form of garlic preserves much of the original flavor and many of its nutritional compounds, making it a popular alternative to fresh garlic in soups, sauces, and seasoning blends.</p>
            <p>Garlic is a native of West Asia and Mediterranean area. China, Korea, India, USA, Spain, Argentina and Egypt are the major garlic growing countries.</p>
            <p>We At Skybound International, we offer meticulously processed garlic flakes that retain the full flavor, aroma, and health benefits of fresh garlic.</p>
            <p>Our garlic flakes are produced from fresh, carefully selected white garlic bulbs grown in India's most fertile agricultural belts. These garlic cloves are peeled, sliced into thin flakes, and then dehydrated under controlled hygienic conditions using sun drying and hot air drying techniques.</p>
            <p>We offer customized cut sizes and granulations depending on client requirements - ranging from flakes to minced, chopped, granules, and powder.</p>
          <ul class="list-disc ml-8 space-y-2">
              <li><strong>Flakes:</strong> Sliced garlic that have been dried.</li>
              <li><strong>Granules:</strong> Coarsely ground dehydrated garlic.</li>
              <li><strong>Powder:</strong> Finely ground dried garlic</li>
              <li><strong>Minced:</strong> Small pieces of dehydrated garlic.</li>
          </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Dehydrated Garlic</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Garlic is used for flavouring various dishes practically all over the world. In United States almost half of the product is dehydrated for use in mayonnaise products, salad dressings and in several meat preparations.</p>
            <p>Dehydrated Garlic is widely valued for their versatility and efficiency. They are used in countless applications across both domestic kitchens and industrial-scale food production units. From spice blends, seasoning powders, ready-to-eat meals, and frozen foods to bakery items, soups, curries, sauces, and marinades---this enhance taste while offering significant advantages in storage and handling compared to fresh garlic.</p>
            <p>In the area of medicine, it is used for various ailments of stomach, skin diseases. It has wider applications in indigenous medicines and is also considered as highly nutritive.</p>
            <p>Flakes are often used as a substitute for fresh garlic in dishes like soups, sauces, and stir-fries, and can be rehydrated to achieve a more fresh-like texture.</p>
            <p>Powder is a fine, uniform seasoning used in rubs, seasoning mixes, and for adding flavor where a fine texture is required.</p>
          </div>
        </section>

   <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Varieties of Dehydrated Garlic
  </h2>

  <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
    <li>
      <strong>Dehydrated Garlic Flakes:</strong>
      Larger pieces of garlic 8–15 mm, ideal for adding visible garlic texture
      to soups, sauces, and prepared meals.
    </li>

    <li>
      <strong>Dehydrated Garlic Chopped:</strong>
      Cleaned, peeled, and chopped into 3–5 mm granules, then dehydrated under
      controlled conditions to maintain purity and flavor intensity.
    </li>

    <li>
      <strong>Dehydrated Garlic Minced:</strong>
      Finely chopped garlic 1–3 mm suitable for sauces, marinades,
      and ready-to-eat meals.
    </li>

    <li>
      <strong>Dehydrated Garlic Granules:</strong>
      Available in sizes ranging from 0.5–2 mm, commonly used in seasoning blends,
      spice mixes, and snack coatings.
    </li>
  </ul>
</section>

<section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Dehydrated Garlic is Preferred for Export?
  </h2>

  <ul class="list-disc ml-8 space-y-3 text-gray-700 leading-relaxed">
    <li>
      <strong>Distinctive Flavor and Aroma:</strong>
      Indian garlic is renowned for its rich, robust, and pungent taste that enhances
      various cuisines. The dehydration process is carefully managed to preserve these
      natural qualities, including the active compound allicin, making it a flavorful
      alternative to fresh garlic.
    </li>

    <li>
      <strong>High Quality:</strong>
      Advanced dehydration technologies and careful processing ensure that the natural
      taste, aroma, and pungency of fresh garlic are largely preserved and often
      concentrated. Rigorous quality control checks ensure the final product is pure,
      free from foreign matter, and meets importing country requirements.
    </li>

    <li>
      <strong>Convenience and Versatility:</strong>
      Dehydrated garlic eliminates the need for peeling and chopping, reducing labor
      costs. It is available in flakes, minced, chopped, and granulated forms, making
      it suitable for a wide range of food processing applications.
    </li>

    <li>
      <strong>Extended Shelf Life and Cost Efficiency:</strong>
      Moisture removal results in a long shelf life (12–24 months or more) while keeping
      the product lightweight and compact for cost-effective storage and transportation.
    </li>
  </ul>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Dehydrated Garlic</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Malaysia</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Germany</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Nepal</div>
          </div>
        </section>

     <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Physical & Chemical Properties of Dehydrated Garlic
  </h2>

  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300 text-sm text-center">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 font-semibold text-left">
            PROPERTIES
          </th>
          <th class="border border-gray-300 p-3 font-semibold">
            Dehydrated Garlic Flakes
          </th>
          <th class="border border-gray-300 p-3 font-semibold">
            Dehydrated Garlic Chopped
          </th>
          <th class="border border-gray-300 p-3 font-semibold">
            Dehydrated Garlic Minced
          </th>
          <th class="border border-gray-300 p-3 font-semibold">
            Dehydrated Garlic Granules
          </th>
        </tr>
      </thead>

      <tbody class="text-gray-700">
        <tr>
          <td class="border border-gray-300 p-3 font-semibold text-left">
            Moisture
          </td>
          <td class="border border-gray-300 p-3">6% Max</td>
          <td class="border border-gray-300 p-3">6% Max</td>
          <td class="border border-gray-300 p-3">6% Max</td>
          <td class="border border-gray-300 p-3">6% Max</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold text-left">
            Size
          </td>
          <td class="border border-gray-300 p-3">
            8 To 15 MM (As Per Customer Requirements)
          </td>
          <td class="border border-gray-300 p-3">
            3 To 5 MM (As Per Customer Requirements)
          </td>
          <td class="border border-gray-300 p-3">
            1 To 3 MM (As Per Customer Requirements)
          </td>
          <td class="border border-gray-300 p-3">
            0.5 To 2 MM (As Per Customer Requirements)
          </td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold text-left">
            Purity
          </td>
          <td class="border border-gray-300 p-3">99% Max</td>
          <td class="border border-gray-300 p-3">99% Max</td>
          <td class="border border-gray-300 p-3">99% Max</td>
          <td class="border border-gray-300 p-3">99% Max</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold text-left">
            Major Defects
          </td>
          <td class="border border-gray-300 p-3">1% Max</td>
          <td class="border border-gray-300 p-3">1% Max</td>
          <td class="border border-gray-300 p-3">1% Max</td>
          <td class="border border-gray-300 p-3">1% Max</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold text-left">
            Place of Origin
          </td>
          <td class="border border-gray-300 p-3">India</td>
          <td class="border border-gray-300 p-3">India</td>
          <td class="border border-gray-300 p-3">India</td>
          <td class="border border-gray-300 p-3">India</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold text-left">
            Ash Content
          </td>
          <td class="border border-gray-300 p-3">4% Max</td>
          <td class="border border-gray-300 p-3">4% Max</td>
          <td class="border border-gray-300 p-3">4% Max</td>
          <td class="border border-gray-300 p-3">4% Max</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold text-left">
            Acid Insoluble Ash
          </td>
          <td class="border border-gray-300 p-3">0.5% Max</td>
          <td class="border border-gray-300 p-3">0.5% Max</td>
          <td class="border border-gray-300 p-3">0.5% Max</td>
          <td class="border border-gray-300 p-3">0.5% Max</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

             <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Dehydrated Garlic</td>
                </tr>
              
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Allium Sativum</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Flakes; Chopped; Minced; Granules</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; HoReCa; Spice Blends; Pharmaceuticals</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natural White to Brown</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                 <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "dehydrated-garlic-powder",
    title: "DEHYDRATED GARLIC POWDER",
    botanicalName: "Allium Sativum",
    image: dehydratedGarlicPowder,
    summary: "Fine dehydrated garlic powder for convenient use in food processing and culinary applications.",
    items: ["Fine Powder", "Long Shelf Life", "Export Grade", "Pure"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Dehydrated Garlic Powder</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Dehydrated garlic powder is fresh garlic with moisture removed through drying processes like air drying or low-heat dehydration, making it shelf-stable and convenient for cooking. It is available also in powder, and can be used directly in recipes or rehydrated in water or oil.</p>
            <p>Dehydrated garlic powder is made from fresh garlic cloves that are dried, then ground into a fine powder for a concentrated, pungent flavor. It offers a long shelf life, uniform consistency, and is a versatile ingredient used in spice mixes, soups, sauces, and marinades. The process involves low-heat dehydration to remove moisture before grinding, and the final product is stored in a cool, dry place</p>
            <p>We At Skybound International, we offer premium-grade Dehydrated Garlic Powder, crafted from freshly harvested garlic bulbs grown in the fertile lands of India.</p>
            <p>Our garlic powder retains all the essential nutrients and sulfur compounds of fresh garlic, while eliminating moisture and microbial risks. The result is a shelf-stable, easy-to-store product with intense aroma, strong taste.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Dehydrated Garlic Powder</h2>
    <ul class="list-disc ml-8 space-y-2">

          <li><strong>Food:</strong> Industry  Used in Soups, stews, and sauces. Mixes in easily for consistent flavor.</li>
       <li><strong>Meats and seafood:</strong> Use in dry rubs for roasting or grilling, or to season dishes like chicken, meat products, and seafood products.</li>      
          <li><strong>Marinades:</strong> Adds flavor to marinades without the chunky texture of fresh garlic.</li>
<li><strong>Seasoning blends:</strong> A key ingredient in spice mixes, such as Italian seasonings or Cajun blends.</li>
       <li><strong>Snacks and baked goods:</strong> Sprinkle on popcorn, use in spice blends for crackers, or make quick garlic bread by mixing with butter and applying to bread before toasting.</li>
        <li><strong>Nutraceuticals & Supplements:</strong> Valued for its natural antimicrobial and antioxidant properties.</li>
    </ul>
        </section>

       <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Dehydrated Garlic Powder is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Favorable Production Conditions:</strong> India has multiple growing
        cycles and suitable climate zones, allowing cost-effective procurement of
        raw garlic for processing.
      </li>
      <li>
        <strong>Strong Flavor:</strong> Indian dehydrated garlic, especially from
        regions like Gujarat, is known for its strong flavor and rich aroma.
      </li>
      <li>
        <strong>Long Shelf Life:</strong> Dehydrated garlic powder has a long shelf
        life, reducing spoilage and eliminating the need for refrigeration.
      </li>
      <li>
        <strong>Lower Shipping Costs:</strong> Its lightweight and compact form
        significantly lowers shipping costs compared to fresh garlic.
      </li>
      <li>
        <strong>Consistent Quality:</strong> Offers uniform quality and flavor
        throughout the year, independent of weather or harvest cycles.
      </li>
    </ul>
  </div>
</section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Dehydrated Garlic Powder</td>
                </tr>
           
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Allium Sativum</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Ground Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Grind</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; HoReCa; Spice Blends; Pharmaceuticals; Snacks</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natural White to Brown</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                    <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "dehydrated-onion",
    title: "DEHYDRATED ONION",
    botanicalName: "Allium Cepa",
    image: dehydratedOnion,
    summary: "Premium dehydrated onion products with natural flavor and extended shelf life.",
    items: ["Dehydrated", "Long Shelf Life", "Export Grade", "Premium"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Dehydrated Onion</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>An Onion is a versatile vegetable from the genus Allium known for its strong smell and flavour; used in cooking worldwide and growing as a bulb. Onions can be used fresh, cooked, or as a garnish and are a good source of vitamins, minerals, and fiber.</p>
            <p>Dehydrated onions are fresh onions with most of their moisture removed to preserve them. The process concentrates their flavor and aroma while creating convenient forms like flakes, granules, minced, or powder. They are used in a wide range of dishes, can be added directly to cooking, or rehydrated, and retain most of their original nutrients and shelf life.</p>
            <p>Fresh onions are cleaned, sliced, and then dried using methods like air, sun, or freeze-drying to remove moisture. The process can take place at controlled temperatures, and drying is continued until the moisture content is low.</p>
            <p>The dehydration process is carried out using modern air-drying technology, which gently removes moisture while locking in essential oils, flavor compounds, and nutrients. The result is a product that offers all the benefits of fresh onions---without the mess, labor, or perishability.</p>
            <p>We At Skybound International, we take pride in offering premium-quality Dehydrated Onion, carefully processed to preserve the authentic taste, aroma, and nutritional value of fresh onions.</p>
            <p>We offer customized cut sizes and granulations depending on client requirements---ranging from flakes to minced, chopped, granules, and powder. Dehydrated onions are available in various forms, such as Flakes, Granules, Minced & Powder.</p>
          <ul class="list-disc ml-8 space-y-2">
              <li><strong>Flakes:</strong> Sliced onions that have been dried.</li>
              <li><strong>Granules:</strong> Coarsely ground dehydrated onions.</li>
              <li><strong>Minced:</strong> Small pieces of dehydrated onion.</li>
              <li><strong>Powder:</strong> Finely ground dried onion, which can sometimes include the skins and roots</li>
          </ul>
           
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Dehydrated Onion</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Dehydrated Pink Onion Flakes are widely used in instant food formulations, dry soup mixes, ready meals, spice blends, sauces, gravies, canned foods, pickles, and more. These flakes are known for their sweet-pungent profile and natural pinkish hue, which not only enhance the flavor but also improve the visual appeal of your recipes.</p>
            <p>Dehydrated Red onion flakes are suitable for use in dry mixes, spice blends, instant foods, ready-to-eat meals, and a variety of processed food applications. Because they eliminate the need for peeling, chopping, and storing fresh onions, they are a time-saving, cost-effective solution for food processors, manufacturers, and bulk food service operations around the world.</p>
            <p>Dehydrated White Onion flakes are widely used by international food processing companies, bulk ingredient suppliers, caterers, and seasoning manufacturers due to their robust flavor, extended shelf life, and ease of use.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Varieties of Dehydrated Onion</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>India exports several varieties of dehydrated onions for export, including red, white, and pink onions. These are available in various forms like flakes, chopped, minced, granules, and powder. Common varieties for dehydration include both red and white onions, with pink being a sub-category of red onion products.</p>
          <ul class="list-disc ml-8 space-y-2">
          <li><strong>White Onion:</strong> Highly popular for its mild taste, white onions are processed into flakes, chopped, minced, granulated, and powdered forms.     <div class="text-gray-700 leading-relaxed">
            <p>1. Dehydrated White Onion Flakes</p>
            <p>2. Dehydrated White Onion Chopped</p>
            <p>3. Dehydrated White Onion Minced</p>
            <p>4. Dehydrated White Onion Granules</p>
          </div>
          </li>
              <li><strong>Red Onion:</strong> Dehydrated red onions come in various forms like flakes, chopped, minced, granules, and powder. These are typically used for their flavor and visual appeal in dishes. <div class="text-gray-700 leading-relaxed">
            <p>1. Dehydrated White Onion Flakes</p>
            <p>2. Dehydrated White Onion Chopped</p>
            <p>3. Dehydrated White Onion Minced</p>
            <p>4. Dehydrated White Onion Granules</p>
          </div>
          </li>
          <li><strong>Pink Onion:</strong> Often considered a variety of red onion, pink dehydrated onions are also exported and widely used in food processing, sauces, and seasonings. <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>1. Dehydrated Pink Onion Flakes</p>
            <p>2. Dehydrated Pink Onion Chopped</p>
            <p>3. Dehydrated Pink Onion Minced</p>
            <p>4. Dehydrated Pink Onion Granules</p>
          </div>
          </li>
          </ul>
          </div>
         
 </section>
      <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Dehydrated Onion is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Abundant Raw Material & Ideal Climate:</strong> India is one of the
        world’s largest producers of high-quality onions. Regions like Gujarat
        provide an abundant year-round supply of white, red, and pink varieties,
        ideal for dehydration due to high solid content and strong flavor profiles.
      </li>
      <li>
        <strong>Superior Flavor Retention:</strong> Advanced dehydration
        technologies and careful processing preserve and often concentrate the
        natural taste, aroma, and pungency of fresh onions, ensuring consistent
        results for global food manufacturing and spice blends.
      </li>
      <li>
        <strong>Cost-Effectiveness:</strong> Competitive labor costs and efficient
        large-scale production enable Indian exporters to offer high-quality
        dehydrated onions at competitive prices, helping international buyers
        manage ingredient costs effectively.
      </li>
      <li>
        <strong>Versatility in Forms:</strong> Indian manufacturers offer flakes,
        chopped, minced, granules, and powder, catering to varied texture and
        application needs in soups, sauces, snacks, and ready-to-eat meals.
      </li>
    </ul>
  </div>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Dehydrated Onion</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            
      <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Indonesia</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Brazil</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Kingdom</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Germany</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Oman</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Qatar</div>
          </div>
        </section>

        <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Physical & Chemical Properties of Dehydrated Onion
  </h2>

  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300 text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left font-semibold">
            PROPERTIES
          </th>
          <th class="border border-gray-300 p-3 text-center font-semibold" colspan="4">
            VALUES & LIMITS
          </th>
        </tr>
        <tr class="bg-gray-50">
          <th class="border border-gray-300 p-3"></th>
          <th class="border border-gray-300 p-3 text-center font-semibold">
            Dehydrated Pink/Red/White<br/>Onion Flakes
          </th>
          <th class="border border-gray-300 p-3 text-center font-semibold">
            Dehydrated Pink/Red/White<br/>Onion Chopped
          </th>
          <th class="border border-gray-300 p-3 text-center font-semibold">
            Dehydrated Pink/Red/White<br/>Onion Minced
          </th>
          <th class="border border-gray-300 p-3 text-center font-semibold">
            Dehydrated Pink/Red/White<br/>Onion Granules
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-semibold">Moisture</td>
          <td class="border border-gray-300 p-3 text-center">6% Max</td>
          <td class="border border-gray-300 p-3 text-center">6% Max</td>
          <td class="border border-gray-300 p-3 text-center">6% Max</td>
          <td class="border border-gray-300 p-3 text-center">6% Max</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold">Size</td>
          <td class="border border-gray-300 p-3 text-center">
            8 To 20 MM<br/>(As Per Customer Requirements)
          </td>
          <td class="border border-gray-300 p-3 text-center">
            3 To 5 MM<br/>(As Per Customer Requirements)
          </td>
          <td class="border border-gray-300 p-3 text-center">
            1 To 3 MM<br/>(As Per Customer Requirements)
          </td>
          <td class="border border-gray-300 p-3 text-center">
            0.5 To 2 MM<br/>(As Per Customer Requirements)
          </td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold">Purity</td>
          <td class="border border-gray-300 p-3 text-center">99% Max</td>
          <td class="border border-gray-300 p-3 text-center">99% Max</td>
          <td class="border border-gray-300 p-3 text-center">99% Max</td>
          <td class="border border-gray-300 p-3 text-center">99% Max</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold">Major Defects</td>
          <td class="border border-gray-300 p-3 text-center">1% Max</td>
          <td class="border border-gray-300 p-3 text-center">1% Max</td>
          <td class="border border-gray-300 p-3 text-center">1% Max</td>
          <td class="border border-gray-300 p-3 text-center">1% Max</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold">Place of Origin</td>
          <td class="border border-gray-300 p-3 text-center">India</td>
          <td class="border border-gray-300 p-3 text-center">India</td>
          <td class="border border-gray-300 p-3 text-center">India</td>
          <td class="border border-gray-300 p-3 text-center">India</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold">Ash Content</td>
          <td class="border border-gray-300 p-3 text-center">4% Max</td>
          <td class="border border-gray-300 p-3 text-center">4% Max</td>
          <td class="border border-gray-300 p-3 text-center">4% Max</td>
          <td class="border border-gray-300 p-3 text-center">4% Max</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold">
            Acid Insoluble Ash
          </td>
          <td class="border border-gray-300 p-3 text-center">0.5% Max</td>
          <td class="border border-gray-300 p-3 text-center">0.5% Max</td>
          <td class="border border-gray-300 p-3 text-center">0.5% Max</td>
          <td class="border border-gray-300 p-3 text-center">0.5% Max</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Dehydrated Onion</td>
                </tr>
             
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Allium Cepa</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Flakes; Chopped; Minced; Granules</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; HoReCa; Spice Blends; Ready to eat Products</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Red Onion; Pink Onion; White Onion</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natural Red to White</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Jan - March</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                    <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "dehydrated-onion-powder",
    title: "DEHYDRATED ONION POWDER",
    botanicalName: "Allium Cepa",
    image: dehydratedOnionPowder,
    summary: "Fine dehydrated onion powder for instant flavor in food applications.",
    items: ["Fine Powder", "Long Shelf Life", "Export Grade", "Pure"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Dehydrated Onion Powder</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Dehydrated onions are fresh onions with most of their moisture removed to preserve them. The process concentrates their flavor and aroma while creating convenient forms like flakes, granules, minced, or powder. They are used in a wide range of dishes, can be added directly to cooking, or rehydrated, and retain most of their original nutrients and shelf life.</p>
            <p>Dehydrated Onion Powder is distinguished by its pure composition, smooth texture, and strong aroma, making it a preferred ingredient across multiple culinary and industrial applications worldwide.</p>
            <p>We At Skybound International; We bring you Dehydrated Onion sourced from select Indian farms known for cultivating nutrient-rich onions, this product undergoes a rigorous process of sorting, cleaning, dehydration, and micronized grinding to preserve the natural sharpness, pungency, and flavor of fresh onions in a long-lasting, easy-to-use powder form.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Dehydrated Onion Powder:</h2>
          <ul class="list-disc ml-8 space-y-2">
          <li><strong>Seasoning Blends and Rubs:</strong> It is a key ingredient in many commercial spice mixes, seasoned salts, and dry rubs for meats (chicken, beef, pork), adding a rich, savory depth.</li>
          <li><strong>Soups, Stews, and Sauces:</strong> The fine powder dissolves easily in liquids, providing consistent flavor and a slight thickening effect in smooth sauces, gravies, curries, and soups.</li>
          <li><strong>Dips and Dressings:</strong> It blends seamlessly into creamy dips (like classic onion dip with sour cream) and salad dressings without adding moisture or texture, ensuring a smooth consistency.</li>
          <li><strong>Snack Foods and Bakery Items:</strong> It is widely used in the food industry to season snack foods like chips, crackers, and popcorn. It is also incorporated into savory baked goods such as breads, pies, and quiches.</li>
          <li><strong>Ready-to-Eat (RTE) Meals:</strong> Dehydrated onion powder is a primary ingredient in instant food mixes, such as instant noodles, biryani mixes, and packaged meals, due to its long shelf life and ease of use.</li>
          <li><strong>Food Industry:</strong> Dehydrated Onion Owder is widely used by international food processing companies, bulk ingredient suppliers, caterers, and seasoning manufacturers due to their robust flavor, extended shelf life, and ease of use.</li>
        </ul>
          </section>
     <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Varieties of Dehydrated Onion Powder
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
   <div>
        India exports several varieties of dehydrated onion powder, including
        white and red onion powders. These are available in multiple grades with
        specifications for moisture content, mesh size, and quality tailored to
        customer requirements.
      </div>
    <ul class="list-disc ml-8 space-y-2">
     
      <li>
        <strong>White Onion Powder:</strong> A highly popular export product,
        commonly made from varieties such as “Bombay White.”
      </li>
      <li>
        <strong>Red Onion Powder:</strong> A major export variety offering a
        distinct and robust flavor profile.
      </li>
      <li>
        <strong>Pink Onion Powder:</strong> Often considered a type of red onion,
        widely used in food processing, sauces, and seasoning applications.
      </li>
    </ul>
  </div>
</section>

      <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Dehydrated Onion Powder is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Superior Flavor Retention:</strong> Advanced dehydration
        technologies and careful processing preserve and often concentrate the
        natural taste, aroma, and pungency of fresh onions, ensuring consistent
        results for global food manufacturing and spice blends.
      </li>
      <li>
        <strong>Extended Shelf Life:</strong> Dehydrated onion powder has a shelf
        life of 12–24 months without refrigeration, reducing spoilage, storage
        costs, and logistical challenges compared to fresh produce.
      </li>
      <li>
        <strong>Ease of Use & Convenience:</strong> Eliminates the need for peeling
        and chopping, saving significant labor and preparation time in commercial
        kitchens and processing plants.
      </li>
      <li>
        <strong>Large-Scale Production:</strong> India’s high onion yield and mass
        production capabilities ensure a reliable, continuous supply to meet
        global demand.
      </li>
    </ul>
  </div>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Dehydrated Onion Powder</td>
                </tr>
              
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Allium Cepa</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Ground Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Grind</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; HoReCa; Spice Blends; Ready to Eat Meals</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Red; Pink; White Onion Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natuaral Red to White</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Jan - March</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                      <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "dry-ginger-powder",
    title: "DRY GINGER POWDER",
    botanicalName: "Zingiber Officinale Roscoe",
    image: dryGingerPowder,
    summary: "Premium dried ginger powder with warm, spicy flavor and numerous health benefits.",
    items: ["Aromatic", "Fine Powder", "Export Grade", "Medicinal"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Dry Ginger Powder</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Ginger of commerce is the dried underground stem of the herbaceous tropical plant grown as an annual. The whole plant is refreshingly aromatic and the underground rhizome, raw or processed, is valued as spice.</p>
            <p>It is a tropical plant with the centre of origin in India and Malaysia. Now it is widely cultivated in India, Jamaica, Sierra Leone, Nigeria, Malaysia, Southern China and Japan.</p>
            <p>Dried Ginger is a versatile product that caters to a broad spectrum of industries including food processing, pharmaceuticals, nutraceuticals, cosmetics, and herbal wellness. It posses an intense aroma and a sharp, spicy flavour resembling the natural ginger taste profile.</p>
            <p>Dry ginger is simply fresh ginger that has been carefully processed to remove moisture. The process begins by soaking fresh rhizomes in water overnight. The outer peel is then removed, followed by thorough washing.</p>
            <p>The ginger is then sun dried for about a week, during which it is regularly turned for uniform drying. The result is a pale white dried ginger with an intense aroma and flavour. It is then ground into a fine powder.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Dry Ginger Powder</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Fresh ginger, dry ginger powder, oleoresin and oil are used in food processing. It is indispensable in the manufacture of ginger bread, confectionary, ginger ale, curry powders, certain curried meats, table sauces, in pickling and in the manufacture of certain cordials, ginger cocktail, carbonate drinks, liquors etc.</p>
            <p>In medicine, it is used as carminative and stimulant. It has wider applications in indigenous medicines. The ginger oil is used as food flavourant in soft drinks.</p>
            <p>Ginger helps in digestion since it contains a compound similar to the digestive enzymes found in our digestive tract, which may help to digest a heavy, protein-rich meal more easily.</p>
            <p>Dry Ginger Powder is widely used in spice blends, curries, soups, sauces, marinades, bakery items, and beverages. Also in pharmaceutical industry, used in tablets, syrups, herbal teas, and pain-relief balms for its anti-inflammatory and digestive properties.</p>
          </div>
        </section>

       <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Dry Ginger Powder is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Rich in Essential Oils:</strong> India’s fertile soil and diverse
        climate—especially in regions like Assam, Karnataka, and Kerala—produce
        ginger with high levels of essential oils and gingerol, resulting in a
        potent flavor and aroma.
      </li>
      <li>
        <strong>Consistent Pungency:</strong> Indian ginger is known for its strong,
        pungent kick, making it a preferred choice for recipes and food products.
      </li>
      <li>
        <strong>World’s Leading Producer:</strong> India is the world’s largest
        producer of ginger, with production capacity that supports substantial
        global demand.
      </li>
      <li>
        <strong>Established Expertise:</strong> A long history of spice cultivation
        and processing ensures deep expertise in producing high-quality dry ginger
        powder.
      </li>
    </ul>
  </div>
</section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Dry Ginger Powder</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Morocco</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Germany</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Saudi Arabia</div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Dry Ginger Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Zingiber Officinale Roscoe</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Ground Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Grind</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Spice Blends; Pharmaceutical; Cosmetic</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Yellowish Brown</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Jan - Feb</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                         <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "dry-red-chilli",
    title: "DRY RED CHILLI",
    botanicalName: "Capsicum Annuum L & Capsicum Frutescens L",
    image: dryRedChilli,
    summary: "Premium whole dried red chillies with bold heat and vibrant natural color.",
    items: ["Whole Chilli", "Bold Heat", "Export Grade", "Premium"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Dry Red Chilli</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Chilli is the dried ripe fruit of the genus Capsicum. Capsicum Annuum is an annual sub --shrub, the flowers of which are borne singly and fruits usually pendent, which provide red peppers, cayenne, paprika and chillies and sweet pepper (bell pepper) a mild form with large inflated fruits.</p>
            <p>Capsicum Frutescence is a perennial chilly with small sized pods which are highly pungent. It is commonly known as 'bird chilly' and 'Tabasco'.</p>
            <p>Chilly is reported to be a native of South America and is widely distributed in all tropical and sub tropical countries including India. It was first introduced in India by Portuguese towards the end of 15th Century. Now it is grown all over the world except in colder parts.</p>
            <p>Harvested chilies may be used fresh, or dried, typically on the ground in hot countries, to make a variety of products. Drying enables chilies grown in temperate regions to be used in winter.</p>
            <p>Dry chilli is the sun-dried form of ripe red chili peppers, prized for their heat, smoky flavor, and color. It is a versatile ingredient used whole, crushed, or ground into powders for a wide range of dishes, including curries, stews, and sauces.</p>
            <p>We At Skybound International, source these chillies which are carefully harvested at peak maturity, naturally sun-dried under hygienic conditions, and meticulously cleaned and sorted to maintain their purity and strength.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Dry Red Chilli</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
          <ul class="list-disc ml-8 space-y-2">

            <li>Dry chilly is extensively used as spice in curried dishes. It is also used as an ingredient in curry powder and in seasonings. Whole dried chillies are often fried in hot oil or ghee to infuse the oil with flavor and aroma, a technique common in Indian cuisine for dals and gravies.</li>
            <li>As a medicine it is used as an counter irritant in Lumbago, Neuralgia, and Rheumatic disorders. The enzyme isolated from chilly is used in the treatment of certain type of cancers. Oleoresin capsicum is used in pain balms and vaporubs.</li>
            <li><strong>Teja S-17 Red Chilli</strong> is not only valued in the culinary world but also in pharmaceutical, cosmetics, and defense applications, its high capsaicin content used in creams, sprays, and extracts.</li>
            <li><strong>Guntur Sanam S-4 Red Chilli</strong> is ideal for spice processors, food manufacturing industries, hotels, catering services, and supermarkets. With its strong shelf life and adaptability to various cuisines, it is especially popular in markets across Asia, the Middle East, Europe, and North America.</li>
            <li><strong>Wrinkle S-273 Red Chilli</strong> becomes a preferred choice for use in hot sauces, chilli powder & dry blends, pickles, pastes, ethnic dishes, and value-added food products.</li>
            <li><strong>Byadagi Red Chilli</strong> is used for food processors, spice manufacturers and cosmetic industries around the world. Its natural coloring power is so strong that it is widely used in the extraction of oleoresins, which are used in processed foods, sauces, snacks, chutneys, and even beauty products like lipsticks and creams.</li>
          </ul>
            </div>
        </section>

       <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Varieties of Dry Red Chilli
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Teja S-17:</strong> A popular high-heat variety available with or
        without stems. Teja S-17 is one of the hottest chillies grown in India,
        primarily cultivated in hot southern regions such as Khammam in Telangana
        and Andhra Pradesh, and is widely used in food, medicine, and pepper spray.
      </li>
      <li>
        <strong>Guntur Sannam S4:</strong> A short, dark red, and highly pungent
        variety. It is widely exported, with the Guntur district of Andhra Pradesh
        serving as a major hub for chilli production and export.
      </li>
      <li>
        <strong>Wrinkle S-273:</strong> Long-shaped, dark red chillies with fewer
        seeds, making them ideal for chilli powder and dry cooking applications.
        Known for their unique wrinkled texture and strong export demand.
      </li>
      <li>
        <strong>Byadagi:</strong> Highly valued for its rich red color and mild
        flavor with low heat. This long, thin variety is the second most lucrative
        chilli type in India, with its oleoresin widely used in cosmetics such as
        nail polish and lipstick.
      </li>
    </ul>
  </div>
</section>


        <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Dry Red Chilli is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Variety and Quality:</strong> India produces a vast range of chillies,
        from mild to extremely hot, catering to diverse culinary needs and taste
        preferences worldwide.
      </li>
      <li>
        <strong>Flavor and Color:</strong> Indian chillies are prized for their
        vibrant red color and rich, deep flavor, often achieved without synthetic
        additives due to ideal growing conditions and traditional drying methods.
      </li>
      <li>
        <strong>Health Benefits:</strong> Growing consumer interest in healthy
        ingredients has boosted demand, as chillies are rich in vitamins and
        contain capsaicin, known for boosting metabolism and providing pain relief.
      </li>
      <li>
        <strong>Processing and Value Addition:</strong> India leads in both whole
        and powdered chilli production. Processing into powders, sauces, and
        extracts adds significant value and makes chilli a staple in global food
        manufacturing.
      </li>
      <li>
        <strong>Competitive Pricing and Strong Supply Chain:</strong> As the
        world’s largest producer, India offers competitive pricing along with a
        consistent and reliable supply chain.
      </li>
      <li>
        <strong>Culinary Versatility:</strong> Beyond cooking, Indian chillies and
        their derivatives are widely used in pharmaceuticals and health
        supplements, expanding their global market appeal.
      </li>
    </ul>
  </div>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Dry Red Chilli</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center border">China</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Bangladesh</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Thailand</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Australlia</div>
          </div>
        </section>

      <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Physical & Chemical Properties of Dry Red Chilli
  </h2>

  <div class="overflow-x-auto">
    <table class="w-full border-collapse border border-gray-300 text-gray-700">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left font-semibold">
            PROPERTIES
          </th>
          <th class="border border-gray-300 p-3 text-center font-semibold">
            TEJA S17
          </th>
          <th class="border border-gray-300 p-3 text-center font-semibold">
            GUNTUR SANAM S4
          </th>
          <th class="border border-gray-300 p-3 text-center font-semibold">
            WRINKLED S273
          </th>
          <th class="border border-gray-300 p-3 text-center font-semibold">
            BYADAGI
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="border border-gray-300 p-3 font-semibold">Flavour</td>
          <td class="border border-gray-300 p-3 text-center">High Spicy</td>
          <td class="border border-gray-300 p-3 text-center">Medium Spicy</td>
          <td class="border border-gray-300 p-3 text-center">Medium Spicy</td>
          <td class="border border-gray-300 p-3 text-center">Less Spicy</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold">ASTA Color Value</td>
          <td class="border border-gray-300 p-3 text-center">50 – 60</td>
          <td class="border border-gray-300 p-3 text-center">40 – 50</td>
          <td class="border border-gray-300 p-3 text-center">60 – 80</td>
          <td class="border border-gray-300 p-3 text-center">90 – 140</td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold">Colour</td>
          <td class="border border-gray-300 p-3 text-center">Red</td>
          <td class="border border-gray-300 p-3 text-center">Light Red</td>
          <td class="border border-gray-300 p-3 text-center">Deep Red</td>
          <td class="border border-gray-300 p-3 text-center">Red</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold">
            Pungency (Scoville Heat Units)
          </td>
          <td class="border border-gray-300 p-3 text-center">
            70,000 – 100,000 SHU
          </td>
          <td class="border border-gray-300 p-3 text-center">
            30,000 – 50,000 SHU
          </td>
          <td class="border border-gray-300 p-3 text-center">
            25,000 – 35,000 SHU
          </td>
          <td class="border border-gray-300 p-3 text-center">
            20,000 – 30,000 SHU
          </td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold">Length</td>
          <td class="border border-gray-300 p-3 text-center">10 – 11 cm</td>
          <td class="border border-gray-300 p-3 text-center">8 – 11 cm</td>
          <td class="border border-gray-300 p-3 text-center">8 – 11 cm</td>
          <td class="border border-gray-300 p-3 text-center">14 – 17 cm</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold">Origin</td>
          <td class="border border-gray-300 p-3 text-center">
            Andhra Pradesh, Telangana
          </td>
          <td class="border border-gray-300 p-3 text-center">
            Andhra Pradesh, Telangana, Maharashtra
          </td>
          <td class="border border-gray-300 p-3 text-center">
            Andhra Pradesh & Telangana
          </td>
          <td class="border border-gray-300 p-3 text-center">
            Karnataka & Andhra Pradesh
          </td>
        </tr>

        <tr>
          <td class="border border-gray-300 p-3 font-semibold">Moisture</td>
          <td class="border border-gray-300 p-3 text-center">10%</td>
          <td class="border border-gray-300 p-3 text-center">10%</td>
          <td class="border border-gray-300 p-3 text-center">10%</td>
          <td class="border border-gray-300 p-3 text-center">10%</td>
        </tr>

        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-3 font-semibold">
            Foreign Material
          </td>
          <td class="border border-gray-300 p-3 text-center">2% Maximum</td>
          <td class="border border-gray-300 p-3 text-center">2% Maximum</td>
          <td class="border border-gray-300 p-3 text-center">2% Maximum</td>
          <td class="border border-gray-300 p-3 text-center">2% Maximum</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Dry Red Chilli</td>
                </tr>
              
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Capsicum Annum L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Whole Dry</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">With/ Without Stem</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Culinary; Spice Blends; Pharmaceutical; HoReCa; Cosmetic</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Teja S-17; Sannam S-4; Wrinkle S-273; Byadagi</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natural Red As per Grade</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Jan -- April</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                             <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "mustard-seed",
    title: "MUSTARD SEED",
    botanicalName: "Brassica Juncea L",
    image: mustardSeed,
    summary: "Premium mustard seeds with pungent flavor for authentic Indian cuisines and condiments.",
    items: ["Whole Seeds", "Pungent", "Export Grade", "Premium"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Mustard Seed</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Mustard is an annual herb cultivated as oil seed crop or as vegetable or as fodder, of which, 3 species are known for its condiment value. They are pale yellow mustard (Brassica hirta), brown mustard (Brassica juncea) and black mustard (Brassica nigra).</p>
            <p>Mustard prefers loamy or clayey loam soil. It is grown as rabbi crop in North India. It is raised during rainy season from July to November in South India.</p>
            <p>Mustard seeds are the small round seeds of various mustard plants. The seeds are usually about 1 to 2 millimetres in diameter and may be colored from yellowish white to black.</p>
            <p>Mustard seeds are a rich source of oil and protein. The seed has oil as high as 46--48%, and the whole seed meal has 43.6% protein.</p>
            <p>They are a winter crop, grown in India during the October-November sowing season and harvested between February and March.</p>
            <p>We At Skybound International, we bring the finest quality Mustard Seeds that reflect the richness of Indian agriculture which are meticulously sourced from premium growing regions like Rajasthan, Gujarat, Madhya Pradesh, and Uttar Pradesh---where mustard farming is supported by ideal climate conditions and traditional expertise.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Mustard Seed</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>The major processed products are mustard powder used in the manufacture of mayonnaise, dried or dehydrated mustard leaves, whole mustard seeds etc. Mustard flour has preservative and antioxidant properties in addition to providing flavour and colour.</p>
            <p>Mustard oil is used for body massage during extreme winters, as it is thought to keep the body warm. Mustard seeds are a rich source of oil (33% to 46%) and protein. After oil extraction, the remaining meal is used for animal feed.</p>
            <p>When cooked in oil, whole seeds pop and add flavor to dishes. They are often used for tempering in Indian cooking. The seeds can be ground into a powder to be used as a spice. Mustard seeds are used in cooking as a flavoring and preservative, in various forms like whole, ground powder, and oil.</p>
            <p>They are also used in traditional medicine for their anti-inflammatory properties, to aid digestion, and for topical applications like easing muscle pain. Other uses include skincare, hair growth promotion, and as a natural pest control.</p>
            <p>Yellow mustard is popular in the United States and is often used as a condiment in sandwiches and other dishes. Mustard seeds are first ground into a powder and then mixed with other ingredients to create this condiment.</p>
          </div>
        </section>

 <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Varieties of Mustard Seed
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Yellow Mustard Seeds:</strong> Known for their mild flavor, large
        size, and high oil content. They are used to make yellow mustard paste and
        sauces and are popular globally.
      </li>
      <li>
        <strong>Brown Mustard Seeds:</strong> Medium-pungency seeds widely used in
        Indian cuisine, for oil extraction, and in products such as Dijon mustard.
      </li>
      <li>
        <strong>Black Mustard Seeds:</strong> The most pungent variety, highly
        valued in Indian cooking where frying develops a sweeter, nuttier flavor.
      </li>
    </ul>
  </div>
</section>


    <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Mustard Seed is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Large-Scale Cultivation:</strong> India is one of the world’s largest
        producers of mustard seeds, ensuring a consistent and abundant supply for
        export.
      </li>
      <li>
        <strong>Favorable Conditions:</strong> The country’s climate and soil are
        well-suited for growing high-yield, high-quality mustard seeds.
      </li>
      <li>
        <strong>Competitive Pricing:</strong> Lower labor and production costs make
        Indian mustard seeds more affordable than those from many other countries.
      </li>
      <li>
        <strong>Wide Availability:</strong> Year-round production ensures steady
        availability to meet global demand.
      </li>
      <li>
        <strong>Variety of Types:</strong> India produces yellow, brown, and black
        mustard seeds, catering to diverse culinary and industrial requirements
        worldwide.
      </li>
    </ul>
  </div>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Mustard Seed</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Nepal</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Bangladesh</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Sri Lanka</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">China</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Physical & Chemical Properties of Mustard Seed</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3"><strong>PROPERTIES</strong></td>
                  <td class="border border-gray-300 p-3"><strong>VALUES & LIMITS</strong></td>
                </tr>
             
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name:</td>
                  <td class="border border-gray-300 p-3">Mustard Seeds</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type:</td>
                  <td class="border border-gray-300 p-3">Machine Cleaned / Sortex Cleaned</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Moisture:</td>
                  <td class="border border-gray-300 p-3">10% Max</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Total Ash:</td>
                  <td class="border border-gray-300 p-3">6.50% Max</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Place of Origin:</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Oil Content:</td>
                  <td class="border border-gray-300 p-3">48% Min</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Acid Insoluble Ash:</td>
                  <td class="border border-gray-300 p-3">1.0% Max</td>
                </tr>
               </tbody>
    </table>
  </div>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Mustard Seed</td>
                </tr>
              
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Brassica Juncea L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Whole Seed</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Clean & Sortex Clean</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Oil Ind; Pharmaceutical; Animal Feed</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Yellow; Brown; Black Mustard Seed</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Natural Yellow to Black</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Feb - March</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
                              <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">Container Capacity:</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold">20' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold">40' FT</td>
                  <td class="border border-gray-300 p-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "turmeric-finger",
    title: "TURMERIC FINGER",
    botanicalName: "Curcuma Longa L",
    image: turmericFinger,
    summary: "Whole turmeric fingers with high curcumin content and vibrant golden color.",
    items: ["Whole Fingers", "High Curcumin", "Export Grade", "Golden Color"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Turmeric Finger</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Turmeric is the boiled, dried, cleaned and polished rhizomes of Curcuma longa which is the rawest form of turmeric, also known as "Haldi". The plant is a herbaceous perennial, 60-90 cm high, with a short stem and tufted leaf.</p>
            <p>1-4 flowers are born in axil of the bract opening one at a time. About 30 flowers are produced in a spike. Seeds are produced in capsules and there will be one to numerous sunken capsules in an inflorescence.</p>
            <p>Turmeric is a tropical crop cultivated from sea level to 1200 meter MSL. It grows in light black, black clayey loams and red soils in irrigated and rainfed conditions. The crop cannot stand water logging or alkalinity.</p>
            <p>Turmeric, often called the "Golden Spice of India," has been an integral part of Indian culture, cuisine, and traditional medicine for centuries. The whole, finger-shaped pieces are sun-dried and machine-polished, giving them a deep yellow-orange hue.</p>
            <p>We At Skybound International, we bring you the finest quality Turmeric Fingers, carefully sourced from the most fertile regions of India such as Salem, Erode, Nizamabad, and Alleppey. These regions are globally known for cultivating turmeric with high curcumin content and a vibrant golden-yellow hue, making it ideal for multiple industries worldwide.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Turmeric Finger</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Turmeric is used to flavour and to colour foodstuffs. It is a principal ingredient in curry powder. It is ground to make the turmeric powder commonly used in cooking. Turmeric oleoresin is used in brine pickles and to some extent in mayonnaise and relish formulations, non-alcoholic beverages, gelatins, butter and cheese etc.</p>
            <p>The colour curcumin extracted from turmeric is used as a colourant. Turmeric is also used as a dye in textile industry.</p>
            <p>It is used in the preparation of medicinal oils, ointments and poultice. It is stomachic, carminative, tonic, blood purifier and an antiseptic. It is used in cosmetics. The aqueous extracts has biopesticidal properties.</p>
          </div>
        </section>

       <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Varieties of Turmeric Finger
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
  <div>
        Turmeric fingers are available in several varieties, primarily named after
        their region of origin in India, each offering different characteristics,
        especially in curcumin concentration. Quality is often determined by
        curcumin level and physical properties like hardness and lack of defects.
      </div>
    <ul class="list-disc ml-8 space-y-2">
      
      <li>
        <strong>Lakadong Turmeric (Meghalaya):</strong> Considered one of the best
        varieties globally for its exceptionally high curcumin content, often
        ranging from 7% to 12%.
      </li>
      <li>
        <strong>Alleppey Finger (Kerala):</strong> Known for its orange-yellow flesh
        and good curcumin content, typically between 4% and 7%.
      </li>
      <li>
        <strong>Salem/Erode Turmeric (Tamil Nadu):</strong> Popular for general
        culinary use due to bright golden-yellow color and milder flavor, with
        curcumin content of 2% to 4%.
      </li>
      <li>
        <strong>Nizamabad & Cuddapah (Andhra Pradesh):</strong> Varieties with lower
        curcumin levels, usually between 1.5% and 2.5%.
      </li>
      <li>
        <strong>Sangli/Rajapuri (Maharashtra):</strong> Known for hard, bright
        rhizomes with a good flavor profile.
      </li>
    </ul>
  </div>
</section>


      <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Grades of Turmeric Finger
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>Japan Grade:</strong> Premium quality with a high curcumin content of 3% and above.
      </li>
      <li>
        <strong>Europe Grade:</strong> Meets European Food Safety Standards, typically with 2.5–3% curcumin content.
      </li>
      <li>
        <strong>Good Grade:</strong> Suitable for general use, with curcumin content between 2–2.5%.
      </li>
      <li>
        <strong>FAQ Grade:</strong> Stands for "Fair Average Quality," a standard often used for a variety of exports.
      </li>
    </ul>
  </div>
</section>


      <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Turmeric Finger is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>High Curcumin Content:</strong> Indian turmeric is renowned for its
        high concentration of curcumin, the active compound responsible for its
        color, flavor, and potent medicinal properties, making it valuable for
        pharmaceuticals and nutraceuticals.
      </li>
      <li>
        <strong>Large-Scale Production:</strong> As the world’s largest producer
        (contributing over 80% of global production), India has the extensive
        agricultural land and numerous farmers needed to meet massive global demand.
      </li>
      <li>
        <strong>Diverse Varieties:</strong> India offers a wide range of turmeric
        varieties, allowing exporters to cater to diverse buyer needs based on
        flavor, color, and regional identity.
      </li>
      <li>
        <strong>Quality Control and Purity:</strong> Indian exporters follow
        stringent quality control measures, including inspections and certifications
        (FSSAI, Indian Spice Board), ensuring products meet international standards.
        Whole fingers are less prone to adulteration compared to powdered turmeric.
      </li>
    </ul>
  </div>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Top Importing Countries of Indian Turmeric Finger</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Bangladesh</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Arab Emirates</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United States</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Malaysia</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Morocco</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">United Kingdom</div>
            <div class="bg-gray-50 p-3 rounded-lg text-center border">Saudi Arabia</div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Physical & Chemical Properties of Turmeric Finger</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3"><strong>PROPERTIES</strong></td>
                  <td class="border border-gray-300 p-3"><strong>VALUES & LIMITS</strong></td>
                </tr>
              
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Turmeric Finger</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Length</td>
                  <td class="border border-gray-300 p-3">3 to 6 cm</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Bright yellow to deep orange (As per Variety)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shape</td>
                  <td class="border border-gray-300 p-3">Cylindrical, smooth or rough texture</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Curcumin Content</td>
                  <td class="border border-gray-300 p-3">1.5% to 12% (variety-specific)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Moisture Content</td>
                  <td class="border border-gray-300 p-3">8% to 12% max</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Foreign Matter</td>
                  <td class="border border-gray-300 p-3">0.5% to 2% max</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Polishing</td>
                  <td class="border border-gray-300 p-3">Polished or Unpolished</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Aroma</td>
                  <td class="border border-gray-300 p-3">Earthy, strong, natural</td>
                </tr>
                 </tbody>
    </table>
  </div>
</section>


        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Turmeric Finger</td>
                </tr>
              
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Curcuma Longa L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Whole</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Clean</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Culinary; Pharmaceutical; Cosmetic</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Variety Available</td>
                  <td class="border border-gray-300 p-3">Alleppey; Salem/Erode; Nizamabad; Sangali</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Bright Yellow to Deep Yellow</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Feb - March</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
  {
    slug: "turmeric-powder",
    title: "TURMERIC POWDER",
    botanicalName: "Curcuma Longa L",
    image: turmericPowder,
    summary: "Fine turmeric powder with high curcumin content and vibrant golden color for culinary and medicinal use.",
    items: ["Fine Powder", "High Curcumin", "Export Grade", "Golden Color"],
    content: `<div class="space-y-8">
        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Overview of Turmeric Powder</h2>
          <div class="space-y-3 text-gray-700 leading-relaxed">
            <p>Turmeric Powder, scientifically known as Curcuma longa, is one of the most treasured spices in the world. Turmeric Powder, often called the "Golden Spice of India," has been an integral part of Indian culture, cuisine, and traditional medicine for centuries.</p>
            <p>Garden fresh turmeric powder that has a golden yellow color. Known for its high curcumin (color property) content. It is a popular variety in India, where turmeric is used as a key coloring agent in 'curries'.</p>
            <p>With its deep golden hue and distinctive earthy aroma, Turmeric Powder is an essential ingredient in Indian cooking and a growing staple across global cuisines. It is widely appreciated for its natural healing abilities, anti-inflammatory properties, and powerful antioxidant content, making it a key component in herbal medicine, wellness products, and skincare formulations.</p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Usage of Turmeric Powder</h2>
          <ul class="list-disc ml-8 space-y-2">
          <li><strong>Flavor and color:</strong> It is a key ingredient in many curries, stews, and rice dishes, adding a distinctive flavor and vibrant yellow hue.</li>
          <li><strong>Colorant:</strong> It can be used to color other foods like mustard, butter and cheeses.</li>
          <li><strong>Beverages:</strong> Turmeric is used in drinks like \"golden milk\" (turmeric latte) or smoothies.</li>
          <li><strong>Anti-inflammatory:</strong> The compound curcumin in turmeric has potent anti-inflammatory effects, which can help with conditions like arthritis.</li>
          <li><strong>Skin health:</strong> Topically or internally, it is used for conditions like acne due to its antimicrobial and anti-inflammatory properties.</li>
         </ul>
        </section>

       <section>
  <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">
    Why Indian Turmeric Powder is Preferred for Export?
  </h2>
  <div class="space-y-3 text-gray-700 leading-relaxed">
    <ul class="list-disc ml-8 space-y-2">
      <li>
        <strong>High Curcumin Content:</strong> Indian turmeric is renowned for its
        high concentration of curcumin, the active compound responsible for its
        color, flavor, and potent medicinal properties.
      </li>
      <li>
        <strong>Largest Producer:</strong> India produces over 80% of the world’s
        turmeric, with extensive cultivation across many states having suitable
        soil and climate.
      </li>
      <li>
        <strong>Competitive Pricing:</strong> Indian suppliers offer competitive
        pricing in the global market, making their products attractive to
        international buyers.
      </li>
      <li>
        <strong>Culinary Uses:</strong> Turmeric is a staple in Indian cuisine and
        is increasingly used worldwide for its color, flavor, and as a natural dye.
      </li>
      <li>
        <strong>Health and Wellness:</strong> Growing awareness of turmeric’s
        antioxidant and anti-inflammatory properties has boosted demand in health
        supplements, functional foods, and cosmetics.
      </li>
    </ul>
  </div>
</section>

        <section>
          <h2 class="text-2xl font-bold mb-4 text-primary border-b-2 border-primary pb-2">Table of Specification</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300">
              <tbody>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Product Name</td>
                  <td class="border border-gray-300 p-3">Turmeric Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Botanical Name</td>
                  <td class="border border-gray-300 p-3">Curcumin Longa L</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Form Available</td>
                  <td class="border border-gray-300 p-3">Ground Powder</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Type</td>
                  <td class="border border-gray-300 p-3">Machine Grind</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Origin</td>
                  <td class="border border-gray-300 p-3">India</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Usage</td>
                  <td class="border border-gray-300 p-3">Food Ind; Culinary; Pharmaceutical; Cosmetic</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Color</td>
                  <td class="border border-gray-300 p-3">Bright Yellow to Golden Yellow</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Harvesting Season</td>
                  <td class="border border-gray-300 p-3">Feb - March</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Shelf Life</td>
                  <td class="border border-gray-300 p-3">1 Year From Production Date</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Storage Condition</td>
                  <td class="border border-gray-300 p-3">Cool and Dry (20°C)</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Specification</td>
                  <td class="border border-gray-300 p-3">Detailed Specification Provided Upon Request</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Microbiological</td>
                  <td class="border border-gray-300 p-3">As Per Buyer\'s Requirement & Importing Country Parameter</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Packaging</td>
                  <td class="border border-gray-300 p-3">5KG; 10KG; 15KG; 25KG (Customized As Per Buyer\'s Requirement)</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">Labelling</td>
                  <td class="border border-gray-300 p-3">Customized Labelling As Per Buyer\'s Requirement</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 p-3 font-semibold w-1/3">MOQ</td>
                  <td class="border border-gray-300 p-3 font-bold text-primary">10 MT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>`
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);