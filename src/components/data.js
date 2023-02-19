import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const tours = [
  {
    id: 1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    icon: "fas fa-map",
    days: "6 days",
    cost: "from $1200",
    country: "China",
    img: tour1,
  },
  {
    id: 2,
    date: "october 11th, 2020",
    title: "best of java",
    icon: "fas fa-map",
    days: "11 days",
    cost: "from $1400",
    country: "China",
    img: tour2,
  },
  {
    id: 3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    icon: "fas fa-map",
    days: "8 days",
    cost: "from $5000",
    country: "Indonesia",
    img: tour3,
  },
  {
    id: 4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    icon: "fas fa-map",
    days: "20 days",
    cost: "from $3300",
    country: "Kenya",
    img: tour4,
  },
];
