import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fa-brands fa-x-twitter" },
  {
    id: 3,
    href: "https://www.pinterest.com",
    icon: "fa-brands fa-pinterest",
  },
];

<i class="fa-brands fa-pinterest"></i>;

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    subTitle:
      "Enjoy all-inclusive packages with no hidden fees. We get the best rates so you get the best value on your adventure.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    subTitle:
      "Discover hidden trails and breathtaking vistas with our expert guides. Your next unforgettable view is just around the bend.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    subTitle:
      "Rest easy in our hand-picked accommodations after a day of exploration. We believe adventure should be rewarding, not exhausting.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2025",
    title: "Tibet Adventure",
    info: `Journey through the roof of the world to explore ancient monasteries, breathtaking Himalayan landscapes, and rich Buddhist culture in this unforgettable high-altitude adventure.`,
    location: "china",
    duration: "6 days",
    cost: "from $2100",
  },
  {
    id: 2,
    img: tour2,
    date: "october 1st, 2025",
    title: "best of java",
    info: `Discover Indonesia's cultural heartland with volcanic landscapes, ancient temples, and vibrant cities. Experience breathtaking sunrises at Mount Bromo and explore bustling local markets.`,
    location: "indonesia",
    duration: "11 days",
    cost: "from $1400",
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2025",
    title: "explore hong kong",
    info: `Experience the perfect blend of ancient tradition and modern marvel in this vibrant metropolis. From towering skyscrapers to tranquil temples and world-class cuisine.`,
    location: "hong kong",
    duration: "8 days",
    cost: "from $5000",
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2025",
    title: "kenya highlights",
    info: `Witness the spectacular Great Migration, encounter the Big Five on safari drives, and experience Maasai culture in one of Africa's most diverse wildlife destinations.`,
    location: "kenya",
    duration: "20 days",
    cost: "from $3300",
  },
  {
    id: 5,
    img: tour5,
    date: "july 12th, 2025",
    title: "Tanzania Safari",
    info: `Embark on an ultimate African safari adventure across the Serengeti and Ngorongoro Crater, witnessing incredible wildlife including zebras, lions, and elephants in their natural habitat.`,
    location: "tanzania",
    duration: "14 days",
    cost: "from $2800",
  },
  {
    id: 6,
    img: tour6,
    date: "november 3rd, 2025",
    title: "Indian Wonders",
    info: `Explore India's magnificent treasures from the iconic Taj Mahal to ancient forts and vibrant markets. Experience the rich history, diverse cultures, and incredible cuisine of incredible India.`,
    location: "india",
    duration: "12 days",
    cost: "from $1900",
  },
];
