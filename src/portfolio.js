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
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      skillName: "Python",
      classname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://docs.python.org/3/",
    },
    {
      skillName: "React.js",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
      link: "https://reactjs.org/docs/getting-started.html",
    },
    {
      skillName: "Redux.js",
      classname: "logos:redux",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://redux.js.org/",
    },
    {
      skillName: "Sequelize",
      classname: "logos:sequelize",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://sequelize.org/",
    },
    {
      skillName: "Express",
      classname: "simple-icons:express",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://expressjs.com/en/api.html",
    },
    {
      skillName: "GitHub",
      classname: "logos:github-icon",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://docs.github.com/en",
    },

    {
      skillName: "Flask",
      classname: "simple-icons:flask",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://flask.palletsprojects.com/en/1.1.x/",
    },
    {
      skillName: "SQLAlchemy",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://docs.sqlalchemy.org/en/14/",
    },
    {
      skillName: "PostgreSQL",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://www.postgresql.org/docs/",
    },
    {
      skillName: "Docker",
      classname: "vscode-icons:file-type-docker",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://docs.docker.com/",
    },
    {
      skillName: "AWS S3",
      classname: "la:aws",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://docs.aws.amazon.com/",
    },
    {
      skillName: "Mocha.js",
      classname: "logos:mocha",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://mochajs.org/",
    },
    {
      skillName: "Chai.js",
      classname: "logos:chai",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://www.chaijs.com/api/bdd/",
    },
    {
      skillName: "Pytest",
      classname: "file-icons:pytest",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://docs.pytest.org/en/stable/contents.html",
    },
    {
      skillName: "HTML-5",
      classname: "logos:html-5",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      skillName: "CSS-3",
      classname: "logos:css-3",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      skillName: "Materialize",
      classname: "logos:materializecss",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://materializecss.com/",
    },
    {
      skillName: "Bootstrap",
      classname: "logos:bootstrap",
      style: {
        backgroundColor: "transparent",
      },
      link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
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
      certificate_link2: "https://github.com/W-the-V/NetSteam",
      about:
        "NetSteam is a full-stack conceptual combination of Netflix and Steam into a single application focused on the sharing and review of Video-Game trailers. Users can create, read, update, and delete reviews as well as see their total reviews posted beside their review seamlessly without refresh. These reviews contain both a text component and a rating component that can both be edited. Users can also change their profile picture and username (with validation) which will automatically update anywhere on the site that the picture can be seen, also without refresh. Users can view trailers in a variety of places as well as have trailers sorted on their home page in sections that will provide video game trailers by popularity or genre. Users can search the video game trailers by clicking any of the genre buttons on each trailer content section or by utilizing the search bar at the top which will show a modal that will live update with relevant information as the user types.",
    },
    {
      title: "WhateverNote",
      subtitle:
        "JavaScript, React / Redux, Python, Flask / SQLAlchemy, HTML5, CSS, PostgreSQL, Docker",
      logo_path: "whatevernote.png",
      certificate_link: "https://whatevernote-app.herokuapp.com/",
      alt_name: "whatevernote",
      color_code: "#001C55",
      certificate_link2: "https://github.com/W-the-V/WhatEverNote",
      about:
        "Collaborative full-stack application based on the website 'EverNote'. Users can create notes with rich text-editing as well as notebooks to store them.",
    },
    {
      title: "HairBnB",
      subtitle:
        "JavaScript, React / Redux, Express / Sequelize, HTML5, CSS, PostgreSQL",
      logo_path: "hairbnb.png",
      certificate_link: "https://hairbnb-app.herokuapp.com/",
      alt_name: "hairbnb",
      color_code: "#001C55",
      certificate_link2: "https://github.com/W-the-V/hairBnB",
      about:
        "Full-stack application based on the website 'AirBnB' but for all manner of hair cutting establishments. users can search for hair cutting establishments by barbershops, salons, and hair donation types. Utilizes the google maps API for increased user experience",
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
