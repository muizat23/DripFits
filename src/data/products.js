import birkin from "../assets/images/birkin.jpeg";
import birkin2 from "../assets/images/birkin2.jpeg";
import crocs from "../assets/images/crocs.jpeg";
import crocs2 from "../assets/images/crocs2.jpeg";
import baggyJean1 from "../assets/images/baggy jean1.jpeg";
import baggyJean2 from "../assets/images/baggy jean2.jpeg";
import baggyJean3 from "../assets/images/baggy jean3.jpeg";
import baggyJean4 from "../assets/images/baggy jean4.jpeg";
import baggyJean5 from "../assets/images/baggy jean5.jpeg";
import jeanJort1 from "../assets/images/jean jort1.jpeg";
import jeanJort2 from "../assets/images/jean jort2.jpeg";
import roundNeck1 from "../assets/images/round neck 1.jpeg";
import roundNeck2 from "../assets/images/round neck 2.jpeg";
import roundNeck3 from "../assets/images/round neck 3.jpeg";
import roundNeck4 from "../assets/images/round neck 4.jpeg";
import roundNeck5 from "../assets/images/round neck 5.jpeg";
import numericSneakers from "../assets/images/numeric sneakers.jpeg";
import nikeNocta from "../assets/images/nike nocta.jpeg";
import crossBag from "../assets/images/cross bag.jpeg";

const products = [
  {
  id: 1,
  name: "Baggy Jeans",
  price: 11000,
  category: "Men",
  image: baggyJean1,
  images: [
    baggyJean1,
    baggyJean2,
    baggyJean3,
    baggyJean4,
    baggyJean5,
  ],
  sizes: ["30", "31", "32", "33", "34"],

},
  {
  id: 2,
  name: "Jean Jorts",
  price: 11000,
  category: "Men",
  image: jeanJort1,
  images: [
    jeanJort1,
    jeanJort2,
  ],
    sizes: ["32", "33", "34"],

},
  {
  id: 3,
  name: "Round Neck",
  price: 9000,
  category: "Unisex",
  image: roundNeck1,
  images: [
    roundNeck1,
    roundNeck2,
    roundNeck3,
    roundNeck4,
    roundNeck5,
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
},
  {
  id: 4,
  name: "Numeric Sneakers",
  price: 22000,
  category: "Footwears",
  image: numericSneakers,
  sizes: ["37", "38", "39", "40", "41", "42", "43", "44", "45"],
},
{
  id: 5,
  name: "Nike Nocta",
  price: 31000,
  category: "Footwears",
  image: nikeNocta,
  sizes: ["37", "38", "39", "40", "41", "42", "43", "44", "45"],
},
  {
    id: 6,
    name: "ZARA CLOGS",
    price: 16000,
    category: "Footwears",
    image: birkin,
    sizes: ["40", "41", "42", "43", "44", "45"],
    images: [birkin, birkin2],
  },
  {
    id: 7,
    name: "MARVEL SPIDER-MAN CROCS",
    price: 40000,
    category: "Footwears",
    image: crocs,
    sizes: ["37", "38", "39", "40", "41", "42", "43", "44", "45"],
    images: [crocs, crocs2],
  },
  {
  id: 8,
  name: "Cross Bag",
  price: 20000,
  category: "Unisex",
  color: "Black",
  image: crossBag,
},
];

export default products;