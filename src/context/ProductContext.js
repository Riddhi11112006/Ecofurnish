import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

const dummyProducts = [
  {
    id: 1,
    title: 'Sicily Sofa - Three Seater',
    category: 'Sofa',
    price: 15239,
    rent: '₹1,200/month',
    image: 'https://m.media-amazon.com/images/I/81zNdfxY2YL._UF894,1000_QL80_.jpg',
    source: 'olx',
    sourceUrl: 'https://www.olx.in',
    keywords: ['sofa', 'three seater', 'living room', 'couch', 'sicily']
  },
  {
    id: 2,
    title: 'Solimo Petra Box Storage Solid Sheesham',
    category: 'Bed',
    price: 23999,
    rent: '₹2,000/month',
    image: 'https://m.media-amazon.com/images/I/61bIH2IZfUL._SX425_.jpg',
    source: 'amazon',
    keywords: ['bed', 'storage', 'sheesham', 'solimo', 'petra']
  },
  {
    id: 3,
    title: 'Fleurs De Recolite Sheesham Wood Solid Wood Side Table',
    category: 'Table',
    price: 745,
    rent: '₹80/month',
    image: 'https://images.woodenstreet.de/image/cache/data/side-end-table/vadis-chair-side-table/revised/honey/updated/1-750x650.jpg',
    source: 'olx',
    keywords: ['table', 'side table', 'wood', 'sheesham']
  },
  {
    id: 4,
    title: 'BM WOOD FURNITURE Solid Sheesham Wood 1 Seater Sofa',
    category: 'Sofa',
    price: 14999,
    rent: '₹1,100/month',
    image: 'https://tse3.mm.bing.net/th/id/OIP.SOAXM8pBbwjqNMEn0fEg9wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    source: 'wakefit',
    keywords: ['sofa', 'sheesham', 'wood', 'bm wood', '1 seater']
  },
  {
    id: 5,
    title: 'Solimo Fegtoh Chair with Wooden Seat',
    category: 'Chair',
    price: 2699,
    rent: '₹200/month',
    image: 'https://m.media-amazon.com/images/I/91hIrzZgCuL._SL1500_.jpg',
    source: 'flipkart',
    keywords: ['chair', 'wooden', 'solimo', 'fegtoh']
  },
  {
    id: 6,
    title: 'The Artment Vista Arched Floor Full Length Mirror',
    category: 'Mirror',
    price: 5639,
    rent: '₹350/month',
    image: 'https://m.media-amazon.com/images/I/71A5dL4-q4L._SL1500_.jpg',
    source: 'amazon',
    keywords: ['mirror', 'arched', 'full length', 'artment', 'vista']
  },
  {
    id: 7,
    title: 'Curio Centre Hanging Cotton Rope Chair',
    category: 'Chair',
    price: 899,
    rent: '₹90/month',
    image: 'https://m.media-amazon.com/images/I/61iC5HzJhLL._SL1000_.jpg',
    source: 'flipkart',
    keywords: ['chair', 'hanging', 'cotton', 'curio centre']
  },
  {
    id: 8,
    title: 'BLUEWUD Christy Engineering TV Cabinet',
    category: 'Cabinet',
    price: 4149,
    rent: '₹300/month',
    image: 'https://m.media-amazon.com/images/I/71OktFCWALL._SL1317_.jpg',
    source: 'flipkart',
    keywords: ['cabinet', 'tv', 'bluewud', 'christy']
  },
  {
    id: 9,
    title: 'Urban Ladder Modern Bookshelf',
    category: 'Bookshelf',
    price: 7999,
    rent: '₹400/month',
    image: 'https://www.ulcdn.net/images/products/809111/product/Hayden_Display_Shelf_californian_walnut_lp.png?1683922966',
    source: 'urban ladder',
    keywords: ['bookshelf', 'modern', 'ladder', 'storage']
  },
  {
    id: 10,
    title: 'Ikea Minimalist Study Desk',
    category: 'Desk',
    price: 4999,
    rent: '₹250/month',
    image: 'https://tse1.mm.bing.net/th/id/OIP.yrO3KfrqydhU9X3hF3HK6gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    source: 'ikea',
    keywords: ['desk', 'study', 'ikea', 'minimalist']
  },
  {
    id: 11,
    title: 'Wakefit Queen Size Mattress',
    category: 'Mattress',
    price: 8999,
    rent: '₹600/month',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
    source: 'wakefit',
    keywords: ['mattress', 'queen', 'wakefit', 'bed']
  },
  {
    id: 12,
    title: 'Flipkart Modern Floor Lamp',
    category: 'Lamp',
    price: 1999,
    rent: '₹120/month',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHT-O7He9b6wkzD90xSXwRsTGzs5o2GXHmrg&s',
    source: 'flipkart',
    keywords: ['lamp', 'floor', 'modern', 'flipkart']
  },
  {
    id: 13,
    title: 'Amazon Basics Recliner',
    category: 'Recliner',
    price: 12999,
    rent: '₹900/month',
    image: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=600&q=80',
    source: 'amazon',
    keywords: ['recliner', 'amazon', 'basics', 'chair']
  },
  {
    id: 14,
    title: 'Urban Ladder Dining Set (4 Seater)',
    category: 'Dining',
    price: 15999,
    rent: '₹1,000/month',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80',
    source: 'urban ladder',
    keywords: ['dining', 'set', 'urban ladder', 'table', '4 seater']
  },
  {
    id: 15,
    title: 'Flipkart Shoe Rack',
    category: 'Shoe Rack',
    price: 2499,
    rent: '₹150/month',
    image: 'https://adona.in/cdn/shop/files/adona-woods-acacia-pulldown-shoerack-cushioned-seat-maple_9_copy_1200x1200.webp?v=1737373997',
    source: 'flipkart',
    keywords: ['shoe rack', 'flipkart', 'storage']
  }
];

export const ProductProvider = ({ children }) => {
  const [products] = useState(dummyProducts);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <ProductContext.Provider value={{ products, wishlist, cart, addToWishlist, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
