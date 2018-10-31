import socialscape from "../images/socialscape.png";
import wayfarer from "../images/wayfarer.png";
import suitehealth from "../images/suitehealth.png";
import bartender from "../images/bartender.png";

const data = [
  {
    title: "Social Scape",
    desc:
      "Social media platform to connect, chat, and share content with friends",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Multer",
      "JSON Web Tokens",
      "BCrypt",
      "Socket.IO"
    ],
    image: socialscape,
    repoLink: "https://github.com/gabe-ng/social-scape",
    date: "August 2018",
    featured: true
  },
  {
    title: "Wayfarer",
    desc:
      "Online community to share travel experiences in popular cities around the world",
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    image: wayfarer,
    repoLink: "https://github.com/gabe-ng/wayfarer",
    date: "July 2018",
    featured: true
  },
  {
    title: "Suite Health",
    desc:
      "Health service to search food macronutrients and workouts and share custom meals and exercise circuits",
    tech: ["JS", "jQuery", "CSS", "Python", "Django", "Postgres", "Api.ai"],
    image: suitehealth,
    repoLink: "https://github.com/gabe-ng/suite-health",
    date: "July 2018",
    featured: true
  },
  {
    title: "DevHub",
    desc: "Search for Developer jobs, articles, and resources",
    tech: ["React", "Axios", "Bootstrap"],
    repoLink: "https://github.com/gabe-ng/devhub",
    date: "September 2018",
    featured: false
  },
  {
    title: "Personal Site V3",
    desc: "Third iteration of my personal website",
    tech: ["HTML", "CSS", "JS"],
    repoLink: "https://github.com/gabe-ng/gabe-ng.github.io",
    date: "August 2018",
    featured: false
  },
  {
    title: "Bartender",
    desc: "A cocktail search app helping you decide what to drink next",
    tech: ["jQuery", "CSS", "Node.js", "Express", "MongoDB"],
    image: bartender,
    repoLink: "https://github.com/gabe-ng/bartender",
    date: "June 2018",
    featured: false
  },
  {
    title: "Frogger Clone",
    desc: "Frogger arcade game clone made using HTML Canvas",
    tech: ["HTML", "HTML Canvas", "CSS", "JS"],
    repoLink: "https://github.com/gabe-ng/frogger-clone",
    date: "December 2017",
    featured: false
  }
];

export default data;
