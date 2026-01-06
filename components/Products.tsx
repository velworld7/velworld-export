import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, Send, X, Package, Box, Truck, ShieldCheck, Factory, Globe, Layers, Settings, Mountain, Construction, Scissors, Shirt, MessageSquare, Building2, Globe2, Mail, Phone, Clock, FileText, Ruler } from 'lucide-react';

interface SubProduct {
  name: string;
  labels: string[];
  description: string;
  image: string;
  specs?: {
    varieties?: string[];
    sizing?: string;
    packing?: string;
    capacity?: string;
    features?: string[];
  };
}

interface Category {
  id: string;
  title: string;
  description: string;
  labels: string[];
  image: string;
  subProducts?: SubProduct[];
}

const categories: Category[] = [
  {
    id: "agri",
    title: "Agricultural Products",
    description: "Premium grains, pulses, and farm-fresh spices sourced from India's most fertile belts.",
    labels: ["Organic", "Farm-Fresh", "Export Grade"],
    image: "/image/agri_category.png",
    subProducts: [
      {
        name: "Onion",
        labels: ["Red", "Yellow", "Dehydrated"],
        description: "Fresh Red onions with extended shelf life, packed for global transit standards.",
        image: "/image/onion.png",
        specs: {
          sizing: "Red Onion size varies from 20mm to 70mm",
          packing: "5kg, 10kg, 15kg, 25kg packing in Mesh bags and Jute bags",
          capacity: "29 Metric Tons in 1x40 ft Container"
        }
      },
      {
        name: "Banana",
        labels: ["G9", "Cavendish", "Premium"],
        description: "Strictly monitored G9 bananas, harvested at the peak of quality for international export.",
        image: "/image/banana.png",
        specs: {
          varieties: ["Cavendish"],
          packing: "13 kg Per Carton Box (1540 Carton boxes total)",
          capacity: "20 Metric Tons (or) 1540 Carton box in 1x40 ft Container"
        }
      },
      {
        name: "Cashews",
        labels: ["W320", "W240", "Raw"],
        description: "Premium grade cashews processed with extreme care to maintain crunch and flavor.",
        image: "/image/cashews.png",
        specs: {
          varieties: ["W180, W240, W320, W450", "SW180, SW240, SW320, SW450"],
          packing: "25 lbs & 50 lbs Flexible Pouch / 10 lbs & 25 lbs Tin Packing",
          capacity: "Export Standard Sea-Freight Containers"
        }
      },
      {
        name: "Dry Red Chilli",
        labels: ["Teja", "Guntur", "Byadgi"],
        description: "Vibrant, spicy, and high-color value dried chillies sourced from prime growing regions.",
        image: "/image/red_chilli.png",
        specs: {
          varieties: ["Teja S17, Sannam 334, Byadgi, Wrinkled S-273", "Chilli Flakes, Chilli Powder"],
          packing: "10kg, 25kg, 50kg packed in Jute bags & PP bags",
          capacity: "14 Metric Tons in 1x40 ft Container"
        }
      },
      {
        name: "Rice",
        labels: ["Basmati", "Non-Basmati", "Long Grain"],
        description: "Aromatic and high-yield rice varieties, processed in ultra-modern milling facilities.",
        image: "/image/rice.png",
        specs: {
          varieties: ["Basmati, Non-Basmati, Pesticide Free, Black Rice, Matta"],
          packing: "10kg, 20kg, 25kg, 50kg in PP or Non-Woven Bags",
          capacity: "25 Metric Tons in 1x20 ft Container"
        }
      },
      {
        name: "Gherkins",
        labels: ["Pickles", "Jarred"],
        description: "Freshly harvested and processed gherkins, preserved in brine or vinegar for global markets.",
        image: "/image/gherkins.png",
        specs: {
          varieties: ["Acetic Acid", "Brine", "Vinegar"],
          sizing: "0-3 cm, 1-4 cm, 6-9 cm, 9-12 cm",
          packing: "260 Litre Acetic Acid in 1 HDPE barrels",
          capacity: "80 barrels in 1x20 ft Container (20 Metric Tons)"
        }
      },
      {
        name: "Honey",
        labels: ["Organic", "Pure"],
        description: "100% natural and pure honey sourced from the finest apiaries, rich in taste and health benefits.",
        image: "/image/honey.png",
        specs: {
          varieties: ["Natural", "Sider", "Multi-Flora", "Wild Forest"],
          packing: "5 kg can, 10 kg bucket, 50 kg & 300 kg Barrels/Drum",
          capacity: "60-65 Barrels of 300 kg each in 1x20 ft Container"
        }
      },
      {
        name: "Cardamom",
        labels: ["Green", "Aromatic"],
        description: "Queen of spices, known for its intense aroma and flavor. Handpicked from high-altitude plantations.",
        image: "/image/cardamom.png",
        specs: {
          sizing: "6.5 mm to 8.5 mm",
          packing: "5 kg, 10 kg, 25 kg PP bags with inner liner"
        }
      },
      {
        name: "Coffee",
        labels: ["Arabica", "Robusta"],
        description: "Premium coffee beans sourced from shade-grown estates, offering rich aroma and bold taste.",
        image: "/image/coffee.png",
        specs: {
          varieties: ["Plantation", "Arabica", "Robusta"],
          packing: "Customized packing based on customer requirements"
        }
      },
      {
        name: "Indian Processed Foods",
        labels: ["Ready-to-Eat", "Snacks"],
        description: "A wide range of authentic Indian processed foods, including snacks, sweets, and ready-to-eat meals.",
        image: "/image/indian_processed_foods.png"
      },
      {
        name: "Indian Spices",
        labels: ["Whole", "Ground"],
        description: "A comprehensive collection of aromatic Indian spices like turmeric, pepper, cumin, and coriander.",
        image: "/image/indian_spices.png"
      },
      {
        name: "Indian Pulses",
        labels: ["Protein-Rich", "Staple"],
        description: "High-quality pulses including Toor Dal, Urad Dal, Moong Dal, and Chana, essential for protein-rich diets.",
        image: "/image/indian_pulses.png"
      }
    ]
  },
  {
    id: "coco",
    title: "Coconut Based Products",
    description: "Superior quality mature coconuts, desiccated powder, and cold-pressed virgin oils.",
    labels: ["Mature", "Organic", "Certified"],
    image: "/image/coco_category_v2.png",
    subProducts: [
      {
        name: "Semi-Husked Coconut",
        labels: ["Grade A", "Export"],
        description: "High-quality mature coconuts with husk partially removed for easy handling and processing.",
        image: "/image/semi_husked_coconut.png",
        specs: { sizing: "500g - 700g per nut", packing: "25 nuts per Gunny Bag", capacity: "13.5 MT in 1x20ft Container" }
      },
      { name: "Tender Coconut", labels: ["Fresh", "Natural"], description: "Naturally sweet and refreshing young coconuts, harvested for maximum water content.", image: "/image/tender_coconut.png" },
      { name: "Coco Peat", labels: ["Organic", "Growth"], description: "Sustainable coconut husk fiber used as a superior growing medium.", image: "/image/coco_peat.png" },
      { name: "Coconut Oil", labels: ["Virgin", "Cold-Pressed"], description: "Pure, aromatic oil extracted from fresh coconut meat without chemical processing.", image: "/image/coconut_oil_v2.png" },
      { name: "Dessicated Coconut Powder", labels: ["Fine", "Medium", "Coarse"], description: "High-quality dehydrated coconut meat, perfect for confectioneries and bakeries.", image: "/image/dessicated_coconut.png" },
      { name: "Coconut Chunks", labels: ["Dehydrated", "Fresh Frozen"], description: "Premium cut coconut pieces, preserving natural taste and texture for food industries.", image: "/image/coconut_chunks.png" },
      { name: "Coconut Sugar", labels: ["Organic", "Low GI"], description: "Healthy natural sweetener with a rich caramel flavor, lower glycemic index than regular sugar.", image: "/image/coconut_sugar.png" },
      { name: "Copra", labels: ["Edible", "Milling"], description: "Sun-dried or kiln-dried coconut kernels suitable for oil extraction and food processing.", image: "/image/copra_v3.png" },
      { name: "Coconut Shell Charcoal", labels: ["Eco-Friendly", "High Heat"], description: "Clean-burning charcoal made from coconut shells, ideal for BBQ and industrial fuel.", image: "/image/coconut_charcoal.png" },
      { name: "Coir Products", labels: ["Sustainable", "Biodegradable"], description: "Eco-friendly range including coir pith, fiber, pots, and erosion control mats.", image: "/image/coir_products.png" }
    ]
  },
  {
    id: "match",
    title: "Safety Matches",
    description: "VEL WORLD offer many types of matches, including wax safety matches, kitchen safety matches, veneer safety matches, wooden safety matches, cardboard safety matches, and long barbecue safety matches to customers worldwide.",
    labels: ["Wax", "Cardboard", "Long-Burn", "Private Labelling"],
    image: "/image/match_category.png",
    subProducts: [
      {
        name: "Wax Safety Matches",
        labels: ["Moisture Proof", "High Performance"],
        description: "Premium wax-coated splints ensuring reliable ignition even in humid conditions. Ideal for coastal regions and outdoor use.",
        image: "/image/wax_matches.png",
        specs: { packing: "10s, 50s, 100s boxes", capacity: "Monthly 50+ Containers" }
      },
      {
        name: "Kitchen Safety Matches",
        labels: ["Extra Length", "Safe Grip"],
        description: "Designed for household utility with longer sticks to ensure safety while lighting stoves or ovens.",
        image: "/image/kitchen_matches.png",
        specs: { sizing: "40mm to 50mm", packing: "Value Packs" }
      },
      {
        name: "Veneer Safety Matches",
        labels: ["Quality Timber", "Smooth Burn"],
        description: "Manufactured from high-quality timber veneer, providing a steady flame and consistent performance.",
        image: "/image/veneer_matches.png",
        specs: { features: ["Quality Timber Veneer", "Splinter-free", "Steady burn"] }
      },
      {
        name: "Wooden Safety Matches",
        labels: ["Classic", "Sturdy"],
        description: "Traditional wooden matches known for their strength and reliability, perfect for general purpose use.",
        image: "/image/wooden_matches.png",
        specs: { features: ["Soft Wood Material"], packing: "Standard Consumer Packs" }
      },
      {
        name: "Cardboard Safety Matches",
        labels: ["Eco-Friendly", "Compact"],
        description: "Sustainable safety matches made from high-quality cardboard spills, offering an eco-conscious choice.",
        image: "/image/cardboard_matches.png",
        specs: { features: ["Recycled Board Material", "Biodegradable", "Lightweight"] }
      },
      {
        name: "Long Barbecue Safety Matches",
        labels: ["Extra Long", "Grill Safe"],
        description: "Specialized extra-long matches designed for safely lighting barbecues, fireplaces, and deep candle jars.",
        image: "/image/kitchen_matches.png",
        specs: { sizing: "100mm - 280mm", features: ["Ideal for BBQ, Fireplace, Campfire"] }
      }
    ]
  },
  {
    id: "eng",
    title: "Engineering Products",
    description: "VEL WORLD is a leading wholesaler and exporter of high-quality mild steel, top-grade plates, stainless steel products, and industrial steel materials. We take great pride in supplying reliable steel solutions backed by consistent quality, transparent service, and customer-first values all over the world.",
    labels: ["Steel", "Industrial", "Machinery", "Global"],
    image: "/image/engineering_category_v2.png",
    subProducts: [
      {
        name: "Metals & Alloys",
        labels: ["Iron", "Steel", "Aluminium", "Copper"],
        description: "Significant exports of high-quality iron, steel, aluminium, and copper products for global industries.",
        image: "/image/metals_alloys.png",
        specs: {
          varieties: ["Iron", "Steel", "Aluminium", "Copper"],
          features: ["High Purity", "Custom Alloys", "Industrial Grade"]
        }
      },
      {
        name: "Automobiles & Components",
        labels: ["Cars", "Motorcycles", "Auto Parts"],
        description: "Major exports of cars, motorcycles, and a vast array of precision-engineered auto parts.",
        image: "/image/auto_components.png",
        specs: {
          varieties: ["Passenger Vehicles", "Two-Wheelers", "Commercial Vehicles"],
          features: ["OEM Standards", "High Performance", "Global Compliance"]
        }
      },
      {
        name: "Industrial Machinery",
        labels: ["Engines", "Pumps", "Textile", "Construction"],
        description: "Includes IC engines, boilers, pumps, textile machinery, construction equipment, and food processing machinery.",
        image: "/image/industrial_machinery.png",
        specs: {
          varieties: ["IC Engines", "Boilers", "Pumps", "Textile Machinery", "Construction Equipment"],
          features: ["Heavy Duty", "High Efficiency", "Advanced Technology"]
        }
      },
      {
        name: "Electrical & Electronics",
        labels: ["Generators", "Transformers", "Motors"],
        description: "Supplying generators, transformers, switchgear, motors, and consumer electronics to international markets.",
        image: "/image/electrical_electronics.png",
        specs: {
          varieties: ["Generators", "Transformers", "Switchgear", "Motors", "Consumer Electronics"],
          features: ["Energy Efficient", "Safety Certified", "Modern Design"]
        }
      }
    ]
  },
  {
    id: "leather",
    title: "Leather Goods",
    description: "VEL WORLD is a trusted leather products exporter in India, specializing in crafting premium custom leather bags, wallet, shoes, belt, Jackets, designed to meet the unique needs of global brands.",
    labels: ["Premium", "Handcrafted", "Bespoke", "Genuine"],
    image: "/image/leather_category.png",
    subProducts: [
      {
        name: "Leather Bags",
        labels: ["Travel", "Messenger", "Custom"],
        description: "Premium handcrafted leather bags designed for style, durability, and functionality.",
        image: "/image/leather_bags.png",
        specs: {
          varieties: ["Travel Bags", "Messenger Bags", "Handbags"],
          features: ["Full Grain Leather", "Custom Lining", "Brass Hardware"]
        }
      },
      {
        name: "Wallets & Cardholders",
        labels: ["Bi-Fold", "Slim", "Classic"],
        description: "Elegant leather wallets and cardholders, featuring precise stitching and timeless designs.",
        image: "/image/leather_wallets.png",
        specs: {
          varieties: ["Bi-Fold", "Tri-Fold", "Cardholders"],
          features: ["RFID Protection", "Genuine Leather", "Compact Design"]
        }
      },
      {
        name: "Handcrafted Shoes",
        labels: ["Oxford", "Boots", "Formal"],
        description: "Bespoke leather shoes and boots, offering superior comfort and sophisticated style.",
        image: "/image/leather_shoes.png",
        specs: {
          varieties: ["Oxfords", "Derby", "Boots", "Loafers"],
          features: ["Hand Stitched", "Premium Soles", "Custom Fit"]
        }
      },
      {
        name: "Leather Belts",
        labels: ["Formal", "Casual", "Durable"],
        description: "High-quality genuine leather belts with custom buckles, perfect for any occasion.",
        image: "/image/leather_belts.png",
        specs: {
          varieties: ["Formal Belts", "Casual Belts", "Reversible"],
          features: ["Full Grain", "Brass/Silver Buckles", "Custom Widths"]
        }
      },
      {
        name: "Leather Jackets",
        labels: ["Bomber", "Biker", "Fashion"],
        description: "Stylish leather jackets crafted from soft, premium hides for a perfect fit and finish.",
        image: "/image/leather_jackets.png",
        specs: {
          varieties: ["Bomber Jackets", "Biker Jackets", "Blazers"],
          features: ["Premium Sheep/Lamb Leather", "Custom Zippers", "Satin Lining"]
        }
      }
    ]
  },
  {
    id: "app",
    title: "Apparells & Garments",
    description: "VEL WORLD is powering high-fashion brands across the world, delivering unmatched excellence across the garment industry.",
    labels: ["Cotton", "Knitwear", "Fashion", "Bespoke"],
    image: "/image/app_category.png",
    subProducts: [
      {
        name: "Garments",
        labels: ["Men & Women", "Kids", "Activewear", "Workwear", "Uniforms"],
        description: "Comprehensive range of high-quality apparel for men, women, and children, including uniforms and activewear.",
        image: "/image/garments_fashion.png",
        specs: {
          varieties: ["T-shirts", "Shirts", "Hoodies", "Chinos", "Jeans", "Activewear", "Workwear", "Sarees", "Kurtas", "Intimates"],
          features: ["Premium Fabrics", "Custom Fits", "Sustainable Options"]
        }
      },
      {
        name: "Home Textiles",
        labels: ["Bedding", "Bath", "Kitchen", "Decor", "Floor"],
        description: "Exquisite home textile products designed to elevate living spaces with comfort and style.",
        image: "/image/home_textiles.jpg",
        specs: {
          varieties: ["Bed Sheets", "Towels", "Curtains", "Carpets", "Aprons", "Kitchen Towels", "Napkins", "Mittens", "Blankets", "Floor Cushions", "Quilts", "Pillow Cases", "Table Tops"],
          features: ["High Thread Count", "Durable Weave", "Vibrant Designs"]
        }
      },
      {
        name: "Fabrics",
        labels: ["Cotton & Blends", "Denim", "Silk", "Synthetic", "Wool"],
        description: "Wide selection of premium fabrics ranging from organic blends to technical synthetics for diverse applications.",
        image: "/image/fabrics.jpg",
        specs: {
          varieties: ["Premium Cottons", "Denims", "Organic Blends", "Linens", "Silks", "Woollens", "Synthetics", "Yarn Dyed Fabrics"],
          features: ["Global Sourcing", "Quality Certified", "Custom Weaves"]
        }
      }
    ]
  },
  {
    id: "build",
    title: "Building & Construction",
    description: "Largest exporters of granite and pioneers of the stone fraternity worldwide.",
    labels: ["Granite", "Tiles", "Sandstone", "PVC"],
    image: "/image/build_category.png",
    subProducts: [
      {
        name: "Natural Stones & Granite",
        labels: ["Premium", "Durable", "Export"],
        description: "Largest exporters of granite offering everything from rough blocks to gangsaw slabs.",
        image: "/image/granite.png",
        specs: {
          varieties: ["Rough Blocks", "Gangsaw Slabs", "Cutter Slabs", "Tiles"],
          features: ["High-Quality Polished Finish", "Custom Cutting Available"]
        }
      }
    ]
  }
];

interface ProductsProps {
  activeCatId: string | null;
  onSelectCategory: (id: string | null) => void;
}

const Products: React.FC<ProductsProps> = ({ activeCatId, onSelectCategory }) => {
  const [activeSubProduct, setActiveSubProduct] = useState<SubProduct | null>(null);
  const [showEnquiry, setShowEnquiry] = useState<{ isOpen: boolean; product: string }>({ isOpen: false, product: '' });

  const selectedCategory = categories.find(c => c.id === activeCatId);

  // Handle Browser Back Button for Category & Product Modal
  useEffect(() => {
    const handlePopState = () => {
      if (activeSubProduct) {
        setActiveSubProduct(null);
      } else if (activeCatId) {
        onSelectCategory(null);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Push state when opening category or product
    if (activeCatId && !activeSubProduct) {
      // Only push if we aren't already there? 
      // Simple implementation: Just let browser stack build up, but careful not to loop
      // We can use replaceState if we want to update the URL without pushing
      // But user WANTS to push so Back button works.
      // We'll manage this by only pushing if `history.state` doesn't match
      if (history.state?.view !== 'category') {
        window.history.pushState({ view: 'category' }, '');
      }
    }

    if (activeSubProduct) {
      if (history.state?.view !== 'product') {
        window.history.pushState({ view: 'product' }, '');
      }
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeCatId, activeSubProduct, onSelectCategory]);

  const EnquiryModal = ({ productType, onClose }: { productType: string; onClose: () => void }) => {
    const [formData, setFormData] = useState({
      name: '',
      companyName: '',
      companyWebsite: '',
      email: '',
      phoneNumber: '',
      productType: productType || '',
      quantityPacking: '',
      deliveryTime: '',
      message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Enquiry Submitted:', formData);
      alert('Enquiry sent successfully! Our team will contact you soon.');
      onClose();
    };

    return (
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in" onClick={onClose} />
        <div className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-apple-up border border-black/5">
          <button onClick={onClose} className="absolute top-8 right-8 z-20 p-3 bg-black/5 hover:bg-black/10 rounded-full text-black transition-all">
            <X size={20} />
          </button>

          <div className="p-8 md:p-14 overflow-y-auto max-h-[90vh]">
            <div className="mb-10 text-center">
              <span className="text-[#0066cc] font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Request Quotation</span>
              <h3 className="text-4xl md:text-5xl font-bebas tracking-tight text-[#1d1d1f] uppercase">Digital Enquiry</h3>
              <p className="text-[#86868b] mt-4 font-medium italic text-lg">"Bridge the gap to global trade with precision."</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0066cc] transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <input required placeholder="YOUR FULL NAME" className="w-full bg-black/5 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent"
                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                </div>

                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0066cc] transition-colors">
                    <Building2 size={18} />
                  </div>
                  <input required placeholder="COMPANY NAME" className="w-full bg-black/5 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent"
                    value={formData.companyName} onChange={e => setFormData({ ...formData, companyName: e.target.value })} />
                </div>

                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0066cc] transition-colors">
                    <Globe2 size={18} />
                  </div>
                  <input placeholder="COMPANY WEBSITE (OPTIONAL)" className="w-full bg-black/5 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent"
                    value={formData.companyWebsite} onChange={e => setFormData({ ...formData, companyWebsite: e.target.value })} />
                </div>

                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0066cc] transition-colors">
                    <Mail size={18} />
                  </div>
                  <input required type="email" placeholder="EMAIL ADDRESS" className="w-full bg-black/5 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent"
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0066cc] transition-colors">
                    <Phone size={18} />
                  </div>
                  <input required placeholder="PHONE NUMBER / WHATSAPP" className="w-full bg-black/5 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent"
                    value={formData.phoneNumber} onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })} />
                </div>

                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0066cc] transition-colors">
                    <FileText size={18} />
                  </div>
                  <input required placeholder="PRODUCT TYPE" className="w-full bg-black/5 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent"
                    value={formData.productType} onChange={e => setFormData({ ...formData, productType: e.target.value })} />
                </div>

                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0066cc] transition-colors">
                    <Layers size={18} />
                  </div>
                  <input required placeholder="QUANTITY & PACKING DETAILS" className="w-full bg-black/5 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent"
                    value={formData.quantityPacking} onChange={e => setFormData({ ...formData, quantityPacking: e.target.value })} />
                </div>

                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b] group-focus-within:text-[#0066cc] transition-colors">
                    <Clock size={18} />
                  </div>
                  <input required placeholder="PREFERRED DELIVERY TIME" className="w-full bg-black/5 rounded-2xl pl-14 pr-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent"
                    value={formData.deliveryTime} onChange={e => setFormData({ ...formData, deliveryTime: e.target.value })} />
                </div>
              </div>

              <div className="col-span-1 md:col-span-2">
                <textarea rows={4} placeholder="YOUR DETAILED MESSAGE" className="w-full bg-black/5 rounded-[2rem] px-8 py-6 text-xs font-bold tracking-widest uppercase focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#0066cc]/20 transition-all border border-transparent resize-none"
                  value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
              </div>

              <div className="col-span-1 md:col-span-2 mt-4">
                <button type="submit" className="w-full py-6 bg-[#0066cc] text-white rounded-full font-black tracking-[0.5em] uppercase text-[11px] hover:bg-black transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98]">
                  Submit Global Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Mobile: Z-index 9999 & Max Contrast for Full Screen
  const ProductDetailModal = ({ product, onClose }: { product: SubProduct; onClose: () => void }) => (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-8">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in" onClick={onClose} />

      <div className="relative w-full max-w-6xl bg-[var(--bg)] border border-[var(--border)] rounded-none md:rounded-[4rem] h-full md:h-auto overflow-hidden flex flex-col md:flex-row shadow-premium animate-apple-up">

        <button onClick={onClose} className="absolute top-6 right-6 z-30 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all border border-white/10">
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
          <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100" />
          <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 pr-6">
            <h3 className="text-5xl md:text-8xl font-bebas text-white tracking-tight uppercase leading-none drop-shadow-2xl shadow-black text-shadow-lg">{product.name}</h3>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-[var(--bg)] overflow-y-auto max-h-[90vh]">
          <div className="mb-14">
            <span className="text-[#0066cc] font-bold tracking-[0.5em] uppercase text-[11px] mb-6 block">Technical Details</span>
            <p className="text-[var(--text-secondary)] text-xl md:text-2xl font-medium leading-snug italic">"{product.description}"</p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {product.specs?.features && (
              <div className="flex gap-8 group">
                <div className="p-5 bg-[var(--card-bg)] rounded-3xl border border-[var(--border)] shadow-premium group-hover:scale-110 transition-transform">
                  <Settings size={28} className="text-[#0066cc]" />
                </div>
                <div>
                  <h5 className="text-[var(--text)] font-bold tracking-[0.3em] text-[11px] uppercase mb-2">Key Highlights</h5>
                  <ul className="space-y-2">
                    {product.specs.features.map((f, i) => (
                      <li key={i} className="text-[var(--text-secondary)] text-base font-semibold border-l-2 border-[#0066cc]/30 pl-4">{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {product.specs?.varieties && (
              <div className="flex gap-8 group">
                <div className="p-5 bg-[var(--card-bg)] rounded-3xl border border-[var(--border)] shadow-premium group-hover:scale-110 transition-transform">
                  <Box size={28} className="text-[#0066cc]" />
                </div>
                <div>
                  <h5 className="text-[var(--text)] font-bold tracking-[0.3em] text-[11px] uppercase mb-2">Product Varieties</h5>
                  <div className="flex flex-wrap gap-3">
                    {product.specs.varieties.map((v, i) => (
                      <span key={i} className="text-[var(--text-secondary)] text-base font-semibold border-l-2 border-[#0066cc] pl-4">{v}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {product.specs?.sizing && (
              <div className="flex gap-8 group">
                <div className="p-5 bg-[var(--card-bg)] rounded-3xl border border-[var(--border)] shadow-premium group-hover:scale-110 transition-transform">
                  <Ruler size={28} className="text-[#0066cc]" />
                </div>
                <div>
                  <h5 className="text-[var(--text)] font-bold tracking-[0.3em] text-[11px] uppercase mb-2">Sizing & Grading</h5>
                  <p className="text-[var(--text-secondary)] text-base font-semibold border-l-2 border-[#0066cc] pl-4">{product.specs.sizing}</p>
                </div>
              </div>
            )}

            {product.specs?.packing && (
              <div className="flex gap-8 group">
                <div className="p-5 bg-[var(--card-bg)] rounded-3xl border border-[var(--border)] shadow-premium group-hover:scale-110 transition-transform">
                  <Package size={28} className="text-[#0066cc]" />
                </div>
                <div>
                  <h5 className="text-[var(--text)] font-bold tracking-[0.3em] text-[11px] uppercase mb-2">Packaging Details</h5>
                  <p className="text-[var(--text-secondary)] text-base font-semibold border-l-2 border-[#0066cc] pl-4">{product.specs.packing}</p>
                </div>
              </div>
            )}

            {product.specs?.capacity && (
              <div className="flex gap-8 group">
                <div className="p-5 bg-[var(--card-bg)] rounded-3xl border border-[var(--border)] shadow-premium group-hover:scale-110 transition-transform">
                  <Truck size={28} className="text-[#0066cc]" />
                </div>
                <div>
                  <h5 className="text-[var(--text)] font-bold tracking-[0.3em] text-[11px] uppercase mb-2">Load Capacity</h5>
                  <p className="text-[var(--text-secondary)] text-base font-semibold border-l-2 border-[#0066cc] pl-4">{product.specs.capacity}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-20 pt-12 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-8">
            <button onClick={() => setShowEnquiry({ isOpen: true, product: product.name })} className="w-full sm:w-auto px-14 py-5 bg-[#0066cc] text-white rounded-full font-bold tracking-widest text-[11px] uppercase hover:bg-[#0077ed] transition-all transform active:scale-95 shadow-xl shadow-blue-500/20">
              Request Enquiry
            </button>
            <span className="text-[var(--text-secondary)] text-[11px] font-bold tracking-[0.4em] uppercase">ISO Certified Quality</span>
          </div>
        </div>
      </div>
    </div >
  );

  return (
    <section id="products" className={`relative bg-[var(--bg)] overflow-hidden transition-all duration-700 ${activeCatId ? 'py-20' : 'py-40 border-t border-[var(--border)]'}`}>
      {activeSubProduct && <ProductDetailModal product={activeSubProduct} onClose={() => setActiveSubProduct(null)} />}
      {showEnquiry.isOpen && <EnquiryModal productType={showEnquiry.product} onClose={() => setShowEnquiry({ isOpen: false, product: '' })} />}

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">

        <div className="mb-24">
          {!activeCatId ? (
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="opacity-0 animate-apple-in">
                <span className="text-[#0066cc] font-bold tracking-[0.5em] uppercase text-[11px] mb-6 block">Our Global Catalog</span>
                <h2 className="text-[14vw] md:text-[8vw] lg:text-[7vw] font-bebas leading-[0.8] tracking-tight text-[var(--text)] uppercase mb-4">
                  WORLD-CLASS <br />
                  <span className="text-[#0066cc]/40">PORTFOLIO</span>
                </h2>
              </div>
            </div>
          ) : (
            <div className="opacity-0 animate-apple-in">
              <button onClick={() => {
                onSelectCategory(null);
                setTimeout(() => {
                  const element = document.getElementById('products');
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }, 300);
              }} className="group mb-12 flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors uppercase text-[11px] font-bold tracking-[0.4em]">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Return to Full Experience
              </button>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                <h2 className="text-[12vw] md:text-[6vw] font-bebas leading-tight uppercase text-[#1d1d1f]">
                  {selectedCategory?.title}
                </h2>
              </div>
              <p className="max-w-4xl text-[#86868b] text-xl md:text-2xl font-medium leading-relaxed mb-16">
                {selectedCategory?.description}
              </p>
            </div>
          )}
        </div>

        {!activeCatId ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((cat, idx) => (
              <div key={cat.id} className="group opacity-0 animate-apple-in" style={{ animationDelay: `${0.3 + (idx * 0.1)}s` }}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[3.5rem] bg-white border border-black/5 shadow-premium transition-all duration-700 hover:-translate-y-6 hover:shadow-[0_60px_100px_rgba(0,0,0,0.1)] cursor-pointer" onClick={() => { onSelectCategory(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="flex flex-wrap gap-3 mb-8">
                      {cat.labels.map((l, i) => (
                        <span key={i} className="px-4 py-1.5 bg-white/60 backdrop-blur-xl border border-black/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#1d1d1f]">{l}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-6">
                      <h4 className="text-4xl md:text-5xl font-bebas tracking-tight text-[#1d1d1f] uppercase group-hover:text-[#0066cc] transition-colors">{cat.title}</h4>
                      <ArrowUpRight size={28} className="text-[#0066cc] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                  </div>
                </div>
                {/* Inquiry Box Button - Category Level */}
                <div className="mt-6 flex justify-end px-4">
                  <button onClick={(e) => { e.stopPropagation(); setShowEnquiry({ isOpen: true, product: cat.title }); }} className="px-8 py-4 glass-card rounded-full border border-black/5 shadow-premium text-[9px] font-black tracking-[0.4em] uppercase text-[#1d1d1f] hover:bg-black hover:text-white transition-all flex items-center gap-3 active:scale-95">
                    Quick Inquiry
                    <MessageSquare size={14} className="opacity-40" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {selectedCategory?.subProducts?.map((sub, idx) => (
              <div key={idx} className="group opacity-0 animate-apple-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="bg-white rounded-[3.5rem] overflow-hidden border border-black/5 group-hover:border-[#0066cc]/20 transition-all duration-500 flex flex-col h-full shadow-premium cursor-pointer relative" onClick={() => setActiveSubProduct(sub)}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={sub.image} alt={sub.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-8 flex flex-wrap gap-2">
                      {sub.labels.map((lbl, lidx) => (
                        <span key={lidx} className="bg-white/40 backdrop-blur-xl px-4 py-1.5 rounded-full text-[9px] font-bold tracking-[0.3em] text-[#1d1d1f] uppercase border border-black/5">{lbl}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-5xl font-bebas tracking-tight text-[#1d1d1f] uppercase group-hover:text-[#0066cc] transition-colors">{sub.name}</h4>
                      <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center group-hover:bg-[#0066cc] transition-colors">
                        <ArrowUpRight size={20} className="text-[#0066cc] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <p className="text-[#86868b] text-base font-medium leading-relaxed mb-10 flex-grow line-clamp-2">{sub.description}</p>

                    {/* Inquiry Box Button - Product Level */}
                    <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                      <span className="text-[10px] font-bold tracking-[0.4em] text-black/60 uppercase">Standard Export Grade</span>
                      <button onClick={(e) => { e.stopPropagation(); setShowEnquiry({ isOpen: true, product: sub.name }); }} className="px-6 py-3 bg-black/[0.03] hover:bg-[#0066cc] hover:text-white rounded-full text-[9px] font-black tracking-[0.4em] uppercase transition-all flex items-center gap-2 active:scale-95">
                        Inquire
                        <MessageSquare size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes apple-up {
          from { opacity: 0; transform: translateY(60px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-apple-up { animation: apple-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
};

export default Products;