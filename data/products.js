 export function getProduct(productId){
  let matchingProduct;


  products.forEach((product) =>  {

      if (product.id  === productId){

          matchingProduct = product;
      }

      });

      return matchingProduct;
}




export const products = [
  {
    id: "1ah",
    image: "images/products/mower4.jpg",
    name: "CRAFTSMAN T2200K Turn Tight 42-in 20-HP V-Twin Riding Lawn Mower",
    desc: 'Product Dimentions: 70"D x 52"W x 43"H',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 129900,
    keywords: [
      "mower",
      "farm",
      "games",
      "devices"
    ]
  },
  {
    id: "1ag",
    image: "images/products/mower3.jpg",
    name: "N2000 Robot Lawn Mower ",
    desc: 'Perimeter Wire Free RTK,TOF,Vision Robotic Lawnmower 1.5 Acres,AI-Assisted Mapping,Virtual Boundary,Multi-Zone Management,APP Control,Cut Height 0.8"-3.5",Anti-Theft',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 129900,
    keywords: [
      "mower",
      "farm",
      "games",
      "devices"
    ]
  },
  {
    id: "1af",
    image: "images/products/mower2.jpg",
    name: "EGO Power+ LM2135SP 21-Inch Select Cut Lawn Mower ",
    desc: 'With Touch Drive Self-Propelled Technology 7.5Ah Battery and Rapid Charger Included',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 28900,
    keywords: [
      "mower",
      "farm",
      "games",
      "devices"
    ]
  },
  {
    id: "1ae",
    image: "images/products/mower1.jpg",
    name: "Robot Lawn Mower ",
    desc: 'With Stable Boundary Wire for 1/4 Acre - 300% Higher Efficiency of Grid-Shaped Mowing Path, Automatic Robotic Lawn Cutter Mowers with Auto Mapping & Recharge, IPX6 Waterproof',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 32000,
    keywords: [
      "mower",
      "farm",
      "games",
      "devices"
    ]
  },
  {
    id: "1ad",
    image: "images/products/ps4.jpg",
    name: "Sony PlayStation 5 Console ",
    desc: 'Sony PlayStation 5 Console (Disc Edition) - Japanese Import - White',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 30000,
    keywords: [
      "ps",
      "electronics",
      "games",
      "devices"
    ]
  },
  {
    id: "1ac",
    image: "images/products/ps3.jpg",
    name: "Logitech G Pro Racing Wheel + Pro Racing Pedal Bundle - PS5/PS4/PC",
    desc: 'Logitech G Pro Racing Wheel + Pro Racing Pedal Bundle',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 48000,
    keywords: [
      "ps",
      "electronics",
      "games",
      "devices"
    ]
  },
  {
    id: "1ab",
    image: "images/products/ps2.jpg",
    name: "PlayStation 5 Pro Console",
    desc: 'Included in box: PS5 Pro console, DualSense wireless controller, 2TB SSD, 2 Horizontal Stand Feet, HDMI cable, AC power cord, printed materials, ASTRO’s PLAYROOM (Pre-installed game)',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 28000,
    keywords: [
      "ps",
      "electronics",
      "games",
      "devices"
    ]
  },
  {
    id: "1aa",
    image: "images/products/ps1.jpg",
    name: "PlayStation®5 console (slim)",
    desc: 'Model Number CFI-2000. Includes DualSense Wireless Controller, 1TB SSD, Disc Drive, 2 Horizontal Stand Feet, HDMI Cable, AC power cord, USB cable, printed materials, ASTRO’s PLAYROOM (Pre-installed game)',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 18000,
    keywords: [
      "ps",
      "electronics",
      "games",
      "devices"
    ]
  },
  {
    id: "1z",
    image: "images/products/phone9.jpg",
    name: "iPhone 16 Pro | 256GB | Desert Titanium",
    desc: 'Features: 8GB RAM, 256GB ROM, 6.8 inches, Unlocked, 5G ,6800mAh',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 70000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  {
    id: "1y",
    image: "images/products/phone8.jpg",
    name: "SAMSUNG Galaxy Z Flip 6 AI Cell Phone, Unlocked Android Smartphone",
    desc: 'Features: 12GB RAM, 512GB ROM, 6.3 inches, Unlocked, 5G , 7000mAh',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 68000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  {
    id: "1x",
    image: "images/products/phone7.jpg",
    name: "Samsung Galaxy S24 Ultra 5G, Black Titanium",
    desc: 'Features: GSM Unlocked, International Version 1TB + 12GB RAM ',
    rating: {
      stars: 5,
      count: 2047
    },
    priceCents: 65000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  {
    id: "1w",
    image: "images/products/phone6.jpg",
    name: "Apple iPhone 16 Pro, Black Titanium",
    desc: 'Features: 16GB RAM, 1024GB ROM, 6.9 inches, Unlocked, 5G ',
    rating: {
      stars: 4.5,
      count: 1047
    },
    priceCents: 85000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  {
    id: "1v",
    image: "images/products/phone5.jpg",
    name: "Google Pixel 9 - Unlocked Android Smartphone ",
    desc: 'Features: 12GB RAM, 256GB ROM, 6.3 inches, Unlocked, 5G ',
    rating: {
      stars: 4.5,
      count: 1047
    },
    priceCents: 35000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  {
    id: "1u",
    image: "images/products/phone4.jpg",
    name: "Google Pixel 9 Pro Fold - Unlocked Android Smartphone ",
    desc: 'Features: 16GB RAM, 512GB ROM, 6.3 inches, Unlocked, 5G ',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 75000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  {
    id: "1t",
    image: "images/products/phone3.jpg",
    name: "Apple iPhone 15 Pro, 512GB, Black Titanium - Unlocked",
    desc: 'Features: 8GB RAM, 512GB ROM, 6.1 inches, Unlocked, 5G ',
    rating: {
      stars: 5,
      count: 2047
    },
    priceCents: 45000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  {
    id: "1s",
    image: "images/products/phone2.jpg",
    name: "SAMSUNG Galaxy S24 FE AI Phone",
    desc: 'Features: 8GB RAM, 256GB ROM, 6.7 inches, Unlocked, 5G ',
    rating: {
      stars: 5,
      count: 2047
    },
    priceCents: 35000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  {
    id: "1r",
    image: "images/products/phone1.jpg",
    name: "Apple iPhone 14 Pro, 256GB, Deep Purple - Refurbished",
    desc: 'Features: 8GB RAM, 256GB ROM, 6.1 inches, Unlocked, 5G ',
    rating: {
      stars: 4.5,
      count: 1047
    },
    priceCents: 30000,
    keywords: [
      "phone",
      "electronics",
      "iphone",
      "devices"
    ]
  },
  
  {
    id: "1q",
    image: "images/products/hoody10.jpg",
    name: "Denny&Dora Hooded Shearling Jacket Mens B3 Flight Jacket Short Leather Jacket Mans Sheepskin Aviator Fur Coat",
    desc: 'Generous Fashion Lapel Hooded Design, Selection Of Lambs Wool, Exquisite Workmanship, Each Wonderful Moment',
    rating: {
      stars: 5,
      count: 2047
    },
    priceCents: 31500,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1p",
    image: "images/products/hoody9.jpg",
    name: "Urban Backwoods Buzzsaw Hoodie Hooded Sweatshirt Sweater",
    desc: 'Hoodie Hooded Sweatshirt Sweater with high wearing comfort!',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 21500,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1o",
    image: "images/products/hoody7.jpg",
    name: "RMC MKWS Black Empire Hoody REDM2329",
    desc: 'RMC MKWS black empire hoody REDM2329',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 11500,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1n",
    image: "images/products/hoody8.jpg",
    name: "Mens nylon functional jacket REDM4420",
    desc: 'RMC Jeans mens nylon functional jacket REDM4420',
    rating: {
      stars: 5,
      count: 2047
    },
    priceCents: 28000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1m",
    image: "images/products/hoody6.jpg",
    name: "Pendleton Men's Brownsvillle Wool Coat",
    desc: 'Genuine shearling collar, Button closures, patch pockets',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 20000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1l",
    image: "images/products/hoody5.jpg",
    name: "Rasco FR Canvas Hooded Jacket",
    desc: 'FR Hoodies for Men 10.5oz FR Sweatshirt 100% Cotton FR Pullover and Zipper Front Flame Resistant Hooded Shirts',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 10000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1k",
    image: "images/products/hoody4.jpg",
    name: "Stormy Kromer Tailgate Pullover – Men’s Cold Weather Hoodie Sweater Dark Navy",
    desc: 'Made in the USA, Pull On closure, Machine Wash',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 11900,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1j-1",
    image: "images/products/hoody3.jpg",
    name: "Fjallraven Keb Padded Hoodie - Men's",
    desc: 'Ideal for hiking. Stretchy polyester is filled with the new synthetic G-Loft Supreme which has properties similar to down. Full-zip closure with attached hood.',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 12900,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1j-2",
    image: "images/products/hoody2.jpg",
    name: "Fight Power USA Hoodie",
    desc: 'Thanks to its heavyweight fabric, it maintains sharp lines along the edges and lasts a long time',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 15900,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1i",
    image: "images/products/hoody1.jpg",
    name: "SITKA Gear Men's Grinder Insulated Fleece Camo Hunting Hoody",
    desc: 'Provides warmth in addition to being water-repellent in light rain.',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 11800,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1h-1",
    image: "images/products/freezer4.jpg",
    name: 'Kratos Commercial Freezer, 2-Door Reach-in Freezer.',
    desc: 'The product is Dimensions 33.37"D x 54.12"W x 80"H.',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 99000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1h-2",
    image: "images/products/pool4.jpg",
    name: 'Barrington Billiards Multiple Styles Pool Table, Preassembled Playfields with Complete Billiard Accessory Sets',
    desc: 'The product is Dimensions 100"L x 56"W x 31"H and the recommended room size is 17’ x 14’ to allow for cue stick movement around the table',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 38000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1g-1",
    image: "images/products/freezer3.jpg",
    name: 'Single Door Commercial Reach In Stainless Steel Freezer',
    desc: 'PEAK COLD 29" wide x 32.2" deep x 82.5" tall with 23 Cubic Ft interior space.',
    rating: {
      stars: 5,
      count: 3047
    },
    priceCents: 79000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1g-2",
    image: "images/products/pool3.jpg",
    name: 'GoSports 6, 7, or 8 ft Billiards Table - Portable Pool Table ',
    desc: 'Includes Full Set of Balls, 2 Cue Sticks, Chalk and Felt Brush. Great size for competitive games, but small enough to store anywhere; Assembled: 84 L x 47 W x 31 H inches',
    rating: {
      stars: 4.5,
      count: 1047
    },
    priceCents: 19900,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1f-1",
    image: "images/products/freezer2.jpg",
    name: 'Kenmore 21 Cu. Ft. (600L) Convertible Upright Freezer/Refrigerator',
    desc: 'The product is Dimensions 30.8"D x 33.1"W x 74.6"H. 21 Cu. Ft. (595L) Capacity: With 21 cubic feet of storage space, this huge upright fridge/freezer can store up to 735 lbs of food!',
    rating: {
      stars: 5,
      count: 1047
    },
    priceCents: 49000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1i-1",
    image: "images/products/pool5.jpg",
    name: 'Mizerak Dynasty Space Saver 6.5’ Billiard Table',
    desc: 'The product is Dimensions 78"L x 44"W x 32"H. Automatic ball return.',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 38000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "1i-2",
    image: "images/products/pool4.jpg",
    name: 'Barrington Billiards Multiple Styles Pool Table, Preassembled Playfields with Complete Billiard Accessory Sets',
    desc: 'The product is Dimensions 100"L x 56"W x 31"H and the recommended room size is 17’ x 14’ to allow for cue stick movement around the table',
    rating: {
      stars: 4.5,
      count: 2047
    },
    priceCents: 38000,
    keywords: [
      "couch",
      "sofa",
      "living",
      "room"
    ]
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    desc:"Fabric Blend: our cushioned crew length socks for men are made with a blend of 51% polyester, 39% cotton, 8% rayon, and 2% spandex, these socks will feel soft against your skin and effectively wick moisture to keep your feet dry throughout the day",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 6090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    desc: "Create a consistent feel and texture over the entire surface of the basketball to provide unparalleled control. Approved for play by the national federation of state high school associations (NFHS)",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 8095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    desc: "Classic fit for loose comfort . A great choice for everyday or work wear",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 6099,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    desc:"Bagels, crumpets, brioche, homemade artisan bread — all your favorites slide easily into the slots without the usual cramming and crumbling. After toasting, the extended bread lifter gently rises to the ideal height for easy access.    ",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 21899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    desc:"Includes 6 dinner plates made of durable AB-grade porcelain with a white finish.Product dimensions: 10.5 x 10.5 inches (LxW, exterior), 7.2 x 7.2 inches (LxW, recessed interior) ",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 6067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    desc: "Oven-Safe & durably built. This bakeware set can handle high-heat up to 446° F; making the set suitable for a wide range of baking needs & a 0. 6 mm thick with a rolled edge to keep metal from warping/flexing",
    rating: {
      stars: 4.5,
      count: 175
    },
    priceCents: 7099,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 317
    },
    priceCents: 8400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 7599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 5899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 10390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 4070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 30
    },
    priceCents: 4560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 4.5,
      count: 562
    },
    priceCents: 6499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 8599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 6699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 10074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 5374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    desc:"",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 9799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    desc:"This men's fleece hoodie shell is made of 55% cotton +45% polyester, and lining is made of 95% high quality polyester wool, soft and skin-friendly, warm and comfortable, bring you warm enough in the cold winter days",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 9400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
  
];