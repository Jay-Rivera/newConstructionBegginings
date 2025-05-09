export type Service = {
    id: number;
    title: string;
    heading: string;
    description: string;
    body: string;
    heading2 ? : string;
    body2 ?: string;
    image: string;
    buttonLabel: string;
  };
  
  import roofingImg from '../images/new_roof_completed-3.jpg';
  import sidingImg from '../images/sidingMain.jpg';
  import deckImg from '../images/patioMain.jpg';
  import windowImg from "../images/window-main.jpg"
  
  export const services: Service[] = [
    {
      id: 1,
      title: 'Quality Roofing You Can Trust',
      description: "Whether you need a quick repair or a full roof replacement, our expert team delivers fast, reliable service backed by top-tier materials and craftsmanship.",
      heading: "Your Roof is a Long-Term Investment",
      body:"Though no product can halt the aging process, regularly inspecting your roof can help you distinguish between normal wear and signs of trouble. A little attention now can prevent major issues later. When it's time, New Beginnings Construction is here to help with expert re-roofing and shingle replacement services throughout Greater Seattle.",
      image: roofingImg,
      buttonLabel: 'See More',
    },
    {
      id: 2,
      title: 'Durable, Stylish Siding',
      description: 'From modern updates to full replacements, our siding solutions combine lasting protection with standout design. ',
      heading: "adf",
      body: "lorem20",
      image: sidingImg,
      buttonLabel: 'See More',
    },
    {
      id: 3,
      title: 'Custom Decks & Patios Built to Last',
      description: 'Our team builds strong, stylish spaces designed for everyday use and long-term value.',
      heading: "adf",
      body: "lorem20",
      image: deckImg,
      buttonLabel: 'See More',
    },
    {
      id: 4,
      title: 'Transform Your Home with Beautiful, High-Quality Windows',
      description: 'From modern to classic designs, we offer a wide range of window styles to complement your home.',
      heading: "adf",
      body: "lorem20",
      image: windowImg,
      buttonLabel: 'See More',
    },
   
  ];
  