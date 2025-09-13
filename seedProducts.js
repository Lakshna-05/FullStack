const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Classic Leather Loafers",
    slug: "classic-leather-loafers",
    description: "Premium leather loafers perfect for formal occasions",
    shortDescription: "Premium leather loafers for formal wear",
    category: "men",
    subcategory: "formal",
    brand: "SlipperShop Premium",
    material: "leather",
    basePrice: 2999,
    discountPercentage: 15,
    variants: [
      {
        color: "Black",
        colorCode: "#000000",
        sizes: [
          { size: "7", stock: 10, price: 2999 },
          { size: "8", stock: 15, price: 2999 },
          { size: "9", stock: 12, price: 2999 },
          { size: "10", stock: 8, price: 2999 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop", isPrimary: false }
        ]
      },
      {
        color: "Brown",
        colorCode: "#8B4513",
        sizes: [
          { size: "7", stock: 8, price: 2999 },
          { size: "8", stock: 12, price: 2999 },
          { size: "9", stock: 10, price: 2999 },
          { size: "10", stock: 6, price: 2999 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.5,
    totalReviews: 23,
    isActive: true,
    isFeatured: true
  },
  {
    name: "Comfortable Canvas Sneakers",
    slug: "comfortable-canvas-sneakers",
    description: "Lightweight canvas sneakers for everyday wear",
    shortDescription: "Lightweight canvas sneakers for daily comfort",
    category: "unisex",
    subcategory: "casual",
    brand: "ComfortWalk",
    material: "fabric",
    basePrice: 1499,
    discountPercentage: 20,
    variants: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        sizes: [
          { size: "6", stock: 15, price: 1499 },
          { size: "7", stock: 20, price: 1499 },
          { size: "8", stock: 18, price: 1499 },
          { size: "9", stock: 12, price: 1499 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop", isPrimary: false }
        ]
      },
      {
        color: "Navy Blue",
        colorCode: "#000080",
        sizes: [
          { size: "6", stock: 10, price: 1499 },
          { size: "7", stock: 15, price: 1499 },
          { size: "8", stock: 14, price: 1499 },
          { size: "9", stock: 8, price: 1499 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.2,
    totalReviews: 45,
    isActive: true,
    isFeatured: true
  },
  {
    name: "Cozy House Slippers",
    slug: "cozy-house-slippers",
    description: "Soft and warm slippers for indoor comfort",
    shortDescription: "Soft and warm indoor slippers",
    category: "unisex",
    subcategory: "home",
    brand: "HomeComfort",
    material: "wool",
    basePrice: 899,
    discountPercentage: 10,
    variants: [
      {
        color: "Gray",
        colorCode: "#808080",
        sizes: [
          { size: "S", stock: 20, price: 899 },
          { size: "M", stock: 25, price: 899 },
          { size: "L", stock: 18, price: 899 },
          { size: "XL", stock: 12, price: 899 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop", isPrimary: false }
        ]
      },
      {
        color: "Pink",
        colorCode: "#FFC0CB",
        sizes: [
          { size: "S", stock: 15, price: 899 },
          { size: "M", stock: 20, price: 899 },
          { size: "L", stock: 12, price: 899 },
          { size: "XL", stock: 8, price: 899 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.7,
    totalReviews: 67,
    isActive: true,
    isFeatured: false
  },
  {
    name: "Athletic Running Shoes",
    slug: "athletic-running-shoes",
    description: "High-performance running shoes with advanced cushioning",
    shortDescription: "High-performance running shoes with cushioning",
    category: "unisex",
    subcategory: "sports",
    brand: "SportMax",
    material: "synthetic",
    basePrice: 3999,
    discountPercentage: 25,
    variants: [
      {
        color: "Red",
        colorCode: "#FF0000",
        sizes: [
          { size: "7", stock: 12, price: 3999 },
          { size: "8", stock: 18, price: 3999 },
          { size: "9", stock: 15, price: 3999 },
          { size: "10", stock: 10, price: 3999 },
          { size: "11", stock: 6, price: 3999 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop", isPrimary: false }
        ]
      },
      {
        color: "Black",
        colorCode: "#000000",
        sizes: [
          { size: "7", stock: 15, price: 3999 },
          { size: "8", stock: 20, price: 3999 },
          { size: "9", stock: 18, price: 3999 },
          { size: "10", stock: 12, price: 3999 },
          { size: "11", stock: 8, price: 3999 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.8,
    totalReviews: 89,
    isActive: true,
    isFeatured: true
  },
  {
    name: "Elegant Women's Heels",
    slug: "elegant-womens-heels",
    description: "Stylish high heels perfect for special occasions",
    shortDescription: "Stylish high heels for special occasions",
    category: "women",
    subcategory: "formal",
    brand: "EleganceWear",
    material: "leather",
    basePrice: 2499,
    discountPercentage: 30,
    variants: [
      {
        color: "Black",
        colorCode: "#000000",
        sizes: [
          { size: "6", stock: 8, price: 2499 },
          { size: "7", stock: 12, price: 2499 },
          { size: "8", stock: 15, price: 2499 },
          { size: "9", stock: 10, price: 2499 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1596702962634-9f4c5c6a7b8a?w=400&h=400&fit=crop", isPrimary: false }
        ]
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        sizes: [
          { size: "6", stock: 6, price: 2499 },
          { size: "7", stock: 10, price: 2499 },
          { size: "8", stock: 12, price: 2499 },
          { size: "9", stock: 8, price: 2499 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.3,
    totalReviews: 34,
    isActive: true,
    isFeatured: false
  },
  {
    name: "Kids Colorful Sandals",
    slug: "kids-colorful-sandals",
    description: "Fun and comfortable sandals for children",
    shortDescription: "Fun and comfortable kids sandals",
    category: "kids",
    subcategory: "casual",
    brand: "KidsJoy",
    material: "rubber",
    basePrice: 799,
    discountPercentage: 15,
    variants: [
      {
        color: "Blue",
        colorCode: "#0000FF",
        sizes: [
          { size: "10", stock: 15, price: 799 },
          { size: "11", stock: 18, price: 799 },
          { size: "12", stock: 20, price: 799 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop", isPrimary: false }
        ]
      },
      {
        color: "Pink",
        colorCode: "#FFC0CB",
        sizes: [
          { size: "10", stock: 12, price: 799 },
          { size: "11", stock: 15, price: 799 },
          { size: "12", stock: 18, price: 799 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.6,
    totalReviews: 28,
    isActive: true,
    isFeatured: true
  },
  {
    name: "Premium Oxford Shoes",
    slug: "premium-oxford-shoes",
    description: "Classic oxford shoes crafted from genuine leather for professional occasions",
    shortDescription: "Classic oxford shoes for professional wear",
    category: "men",
    subcategory: "formal",
    brand: "ClassicWear",
    material: "leather",
    basePrice: 3499,
    discountPercentage: 20,
    variants: [
      {
        color: "Black",
        colorCode: "#000000",
        sizes: [
          { size: "7", stock: 12, price: 3499 },
          { size: "8", stock: 18, price: 3499 },
          { size: "9", stock: 15, price: 3499 },
          { size: "10", stock: 10, price: 3499 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.4,
    totalReviews: 56,
    isActive: true,
    isFeatured: false
  },
  {
    name: "Casual Flip Flops",
    slug: "casual-flip-flops",
    description: "Comfortable flip flops perfect for beach and casual outings",
    shortDescription: "Comfortable flip flops for casual wear",
    category: "unisex",
    subcategory: "casual",
    brand: "BeachWalk",
    material: "rubber",
    basePrice: 599,
    discountPercentage: 25,
    variants: [
      {
        color: "Blue",
        colorCode: "#0000FF",
        sizes: [
          { size: "6", stock: 20, price: 599 },
          { size: "7", stock: 25, price: 599 },
          { size: "8", stock: 22, price: 599 },
          { size: "9", stock: 18, price: 599 }
        ],
        images: [
          { url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pixelsquid.com%2Fpng%2Fblack-casual-shoes-3235149900811343222&psig=AOvVaw0J90qF8C5jiipg7y1dPhoS&ust=1757845799565000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjvi4XE1Y8DFQAAAAAdAAAAABAE", isPrimary: true },
          { url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pixelsquid.com%2Fpng%2Fblack-casual-shoes-3235149900811343222&psig=AOvVaw0J90qF8C5jiipg7y1dPhoS&ust=1757845799565000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjvi4XE1Y8DFQAAAAAdAAAAABAE", isPrimary: false }
        ]
      },
      {
        color: "Black",
        colorCode: "#000000",
        sizes: [
          { size: "6", stock: 15, price: 599 },
          { size: "7", stock: 20, price: 599 },
          { size: "8", stock: 18, price: 599 },
          { size: "9", stock: 12, price: 599 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.1,
    totalReviews: 78,
    isActive: true,
    isFeatured: true
  },
  {
    name: "Women's Ballet Flats",
    slug: "womens-ballet-flats",
    description: "Elegant ballet flats that combine comfort with style for everyday wear",
    shortDescription: "Elegant ballet flats for everyday comfort",
    category: "women",
    subcategory: "casual",
    brand: "GracefulSteps",
    material: "leather",
    basePrice: 1899,
    discountPercentage: 15,
    variants: [
      {
        color: "Nude",
        colorCode: "#F5DEB3",
        sizes: [
          { size: "6", stock: 14, price: 1899 },
          { size: "7", stock: 18, price: 1899 },
          { size: "8", stock: 16, price: 1899 },
          { size: "9", stock: 12, price: 1899 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1596702962634-9f4c5c6a7b8a?w=400&h=400&fit=crop", isPrimary: false }
        ]
      },
      {
        color: "Black",
        colorCode: "#000000",
        sizes: [
          { size: "6", stock: 12, price: 1899 },
          { size: "7", stock: 16, price: 1899 },
          { size: "8", stock: 14, price: 1899 },
          { size: "9", stock: 10, price: 1899 }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop", isPrimary: true },
          { url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop", isPrimary: false }
        ]
      }
    ],
    averageRating: 4.5,
    totalReviews: 92,
    isActive: true,
    isFeatured: true
  }
];

async function seedProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/slippershop');
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log('Sample products inserted successfully');

    console.log(`Inserted ${sampleProducts.length} products`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();
