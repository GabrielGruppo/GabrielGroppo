import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  commerce,
  concentramind,
  blog,
  headphone,
  crypto
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Tech Lover",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "PHP intern developer",
    company_name: "IFSP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using PHP, Bootstrap and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "IFSP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Angular intern Developer",
    company_name: "PHAS",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Current",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Gabriel has created many impressive projects using different programming languages, frameworks, and tools. He is always willing to learn new concepts, tackle challenges, and enhance their code quality.",
    name: "Murilo Varges",
    designation: "PHD Professor",
    company: "IFSP",
    image: "https://media.licdn.com/dms/image/C4D03AQGzW3CiSzpxmA/profile-displayphoto-shrink_800_800/0/1574876120135?e=2147483647&v=beta&t=oy7josarnqfClEE86InY3-K2wIICwxTA6UQ_15xs8FE",
  },
  {
    testimonial:
      "He can code in multiple languages and frameworks, and he always delivers high-quality work. He has a knack for making beautiful and user-friendly interfaces. Gabriel is always up to date with the latest trends and innovations in web development",
    name: "Cassio Onodera",
    designation: "Master Professor",
    company: "IFSP",
    image: "https://media.licdn.com/dms/image/C5603AQEgWWrAOenNZw/profile-displayphoto-shrink_400_400/0/1516584626283?e=1701302400&v=beta&t=n05xSSD-0HzWvZ_t8ha-aXgHeNPMppzjUZ-DyXcF2oQ",
  },
  {
    testimonial:
      "Gabriel is an excellent web developer who has created many impressive websites and applications. He has a good knowledge of HTML, CSS, JavaScript, and other web technologies.",
    name: "Edmar Santos",
    designation: "PHD Professor",
    company: "IFSP",
    image: "https://media.licdn.com/dms/image/D4D03AQG5SwZcL6p28A/profile-displayphoto-shrink_400_400/0/1679969753361?e=1701302400&v=beta&t=8iAc6Oi-MIHCJUv6vkPUZ4Wg2JJMoeFqCIQpVZ-Y6Ag",
  },
];

const projects = [
  {
    name: "ConcentraMind",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "frontend",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: concentramind,
    source_code_link: "https://github.com/GabrielGruppo/orgueduMain",
  },
  {
    name: "Cryptoverse",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/GabrielGruppo/project_cryptoverse-main",
  },
  {
    name: "PHP Blog",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/GabrielGruppo/phpblog",
  },
  {
    name: "Ecommerce",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "commercejs",
        color: "pink-text-gradient",
      },
    ],
    image: commerce,
    source_code_link: "https://github.com/GabrielGruppo/ecommerceReactApp",
  },
  {
    name: "Headset ecommerce",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: headphone,
    source_code_link: "https://github.com/GabrielGruppo/headsetEcommerce",
  },
];

export { services, technologies, experiences, testimonials, projects };
