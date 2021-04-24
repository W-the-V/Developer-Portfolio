/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Walter Hills",
  title: "Hello, I'm Walter",
  subTitle: emoji("Full-stack Developer"),
  resumeLink:
    "https://docs.google.com/document/d/1I8yRsnTW1eYQBie0czzhz7ZmAAn47Ha1HQrp2nDy9dA/edit?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/W-the-V",
  linkedin: "https://www.linkedin.com/in/walter-hills-a52535205/",
  gmail: "walter.hills5@gmail.com",
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "(So far)",
  skills: [
    emoji("⚡ Git Workflow"),
    emoji("⚡ Test-driven Development"),
    emoji("⚡ Collaborative Programming"),
    emoji("⚡ Data Structures & Algorithms"),
  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      classname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "React.js",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "Redux.js",
      classname: "logos:redux",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Sequelize",
      classname: "logos:sequelize",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Express",
      classname: "simple-icons:express",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "flask",
      classname: "simple-icons:flask",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "SQLAlchemy",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "PostgreSQL",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Docker",
      classname: "vscode-icons:file-type-docker",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Amazon Web Services",
      classname: "la:aws",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Mocha",
      classname: "logos:mocha",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Chai",
      classname: "logos:chai",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Pytest",
      classname: "file-icons:pytest",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "HTML-5",
      classname: "logos:html-5",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "CSS-3",
      classname: "logos:css-3",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Materialize",
      classname: "logos:materializecss",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Bootstrap",
      classname: "logos:bootstrap",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "W-the-V", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "NetSteam",
      subtitle:
        "JavaScript, React / Redux, Express / Sequelize, HTML, CSS, PostgreSQL",
      logo_path: "netsteam.png",
      certificate_link: "https://netsteam.herokuapp.com/",
      alt_name: "netsteam",
      color_code: "#001C55",
    },
    {
      title: "WhateverNote",
      subtitle:
        "JavaScript, React / Redux, Python, Flask / SQLAlchemy, HTML5, CSS, PostgreSQL, Docker",
      logo_path: "whatevernote.png",
      certificate_link: "https://whatevernote-app.herokuapp.com/",
      alt_name: "whatevernote",
      color_code: "#001C55",
    },
    {
      title: "HairBnB",
      subtitle:
        "JavaScript, React / Redux, Express / Sequelize, HTML5, CSS, PostgreSQL",
      logo_path: "hairbnb.png",
      certificate_link: "https://hairbnb-app.herokuapp.com/",
      alt_name: "hairbnb",
      color_code: "#001C55",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Education",

  blogs: [
    {
      url: "https://www.appacademy.io/",
      title: "App Academy",
      description: "Full-stack Software Engineering Bootcamp",
    },
    {
      url: "https://www.utm.edu/",
      title: "University of Tennessee",
      description: "Bachelor's of Science - Psychology 4.0 Major GPA",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "I am currently seeking employment",
  number: "+1 (731)-467-1405 ",
  email_address: "walter.hills5@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
