export type Service = {
    id: number;
    title: string;
    description: string;
    image: string;
    buttonLabel: string;
  };
  
  import testImg from '../images/new_roof_completed-2.jpg';
  import sidingImg from '../images/10-Mar 24, 2025 22-34-38-4XTs.jpg';
  import deckImg from '../images/roofingafter-3.jpg';
  import roofImg from "../images/new_roof_completed-3.jpg"
  
  export const services: Service[] = [
    {
      id: 1,
      title: 'Roofing',
      description: "lorem40",
      image: testImg,
      buttonLabel: 'See More',
    },
    {
      id: 2,
      title: 'Siding',
      description: 'Stylish and protective siding solutions asdf wer asdf asdxvc.',
      image: sidingImg,
      buttonLabel: 'See More',
    },
    {
      id: 3,
      title: 'Decks',
      description: 'Stylish and protective Decks solutions.',
      image: deckImg,
      buttonLabel: 'See More',
    },
    {
      id: 4,
      title: 'Decks',
      description: 'Stylish and protective Decks solutions.',
      image: deckImg,
      buttonLabel: 'See More',
    },
    {
      id: 5,
      title: 'Roofing',
      description: 'Stylish and protective roofing solutions.',
      image: roofImg,
      buttonLabel: 'See More',
    },
  ];
  