import socialscape from "../images/socialscape.png";
import wayfarer from "../images/wayfarer.png";
import suitehealth from "../images/suitehealth.png";
import bartender from "../images/bartender.png";

const data = [
  {
    title: "Social Scape",
    desc:
      "A social media platform to connect, chat, and share content with friends.",
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
      "An online community to share travel experiences of popular cities around the world.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    image: wayfarer,
    repoLink: "https://github.com/gabe-ng/wayfarer",
    date: "July 2018",
    featured: true
  },
  {
    title: "Suite Health",
    desc:
      "A health service to search food macronutrients and workouts and share custom meals and exercise circuits.",
    tech: ["JS", "jQuery", "CSS", "Python", "Django", "Postgres", "Api.ai"],
    image: suitehealth,
    repoLink: "https://github.com/gabe-ng/suite-health",
    date: "July 2018",
    featured: true
  },
  {
    title: "DevHub",
    desc: "A centrailized hub to search for developer jobs, articles, and resources.",
    tech: ["React", "Axios", "Bootstrap"],
    repoLink: "https://github.com/gabe-ng/devhub",
    liveLink: "https://gabe-ng.github.io/devhub/",
    date: "September 2018",
    featured: false
  },
  {
    title: "Personal Site V3",
    desc: "The third iteration of my personal website using a dark theme.",
    tech: ["HTML", "CSS", "JS"],
    repoLink: "https://github.com/gabe-ng/gabe-ng.github.io",
    liveLink: "https://gabe-ng.github.io/",
    date: "August 2018",
    featured: false
  },
  {
    title: "Bartender",
    desc: "A cocktail search app helping you decide what to drink next.",
    tech: ["jQuery", "CSS", "Node.js", "Express", "MongoDB"],
    image: bartender,
    repoLink: "https://github.com/gabe-ng/bartender",
    liveLink: "https://cocktailfinder.herokuapp.com/",
    date: "June 2018",
    featured: false
  },
  {
    title: "Frogger Clone",
    desc: "A frogger arcade game clone made using HTML Canvas.",
    tech: ["HTML", "HTML Canvas", "CSS", "JS"],
    repoLink: "https://github.com/gabe-ng/frogger-clone",
    liveLink: "https://gabe-ng.github.io/frogger-clone/",
    date: "December 2017",
    featured: false
  }
];

export default data;
