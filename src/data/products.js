import birkin from "../assets/images/birkin.jpeg";
import birkin2 from "../assets/images/birkin2.jpeg";
import crocs from "../assets/images/crocs.jpeg";
import crocs2 from "../assets/images/crocs2.jpeg";

const products = [
  {
    id: 1,
    name: "Classic Brown Shirt",
    price: 18000,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Relaxed Fit Trousers",
    price: 25000,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Oversized Casual Shirt",
    price: 22000,
    category: "Unisex",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Everyday Cotton T-Shirt",
    price: 12000,
    category: "Unisex",
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "ZARA CLOGS",
    price: 16000,
    category: "Footwears",
    image: birkin,
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [birkin, birkin2],
  },
  {
    id: 6,
    name: "MARVEL SPIDER-MAN CROCS",
    price: 40000,
    category: "Footwears",
    image: crocs,
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44", "45"],
    images: [crocs, crocs2],
  },
];

export default products;