/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Antoine Haddad",
  title: "Bienvenue! Moi c'est Antoine",
  subTitle: emoji(
    "Bienvenue sur mon portfolio en ligne, où je partage mes compétences, mon expérience et ma passion pour l'intégration multimédia, le génie électrique et bien plus encore."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10QKJe3uKXQXKM0KuiS4jKtFXZNPZDa_z/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/YourAntidote",
  linkedin: "https://www.linkedin.com/in/antoine-haddad16/",
  gmail: "Antoine_Haddad1@yahoo,ca",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section


const skillsSection = {
  title: "À propos",
  subTitle: "Étudiant en technique d'intégration multimédias depuis maintenant 2 ans et demi, j'ai appris et découvert une multidute de languages de programmations et de logiciels :",

  
  skills: [
    emoji(
      "Mon objectif de vie est de rejoindre une équipe passionnée travaillant dans le domaine du média interactif. Mon ambition est de contribuer au développement du divertissement interactif, où je pourrais apporter ma créativité et mes compétences pour créer des expériences engageantes et innovantes. Je suis déterminé à être un acteur clé dans la conception et la réalisation de projets multimédias qui captivent et enthousiasment le public, tout en explorant de nouvelles frontières de l'interactivité. Mon rêve est de jouer un rôle significatif dans l'évolution du divertissement interactif et de participer à la création d'expériences inoubliables pour les utilisateurs du monde entier. "
    ),

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab  fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fas unity"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Collège Montmorency",
      logo: require("./assets/images/logo-college-montmorency.png"),
      subHeader: "Programme en Techniques d'intégration multimédia",
      duration: "Août 2021 - Aujourd'hui",
      desc: "Projets sélectionnés afin d'être publié sur le site officiel du programme.",
      descBullets: [
        "https://timmontmorency.myportfolio.com/video-polychrome-2022",
        "https://timmontmorency.myportfolio.com/image-autoportraits-2021",
        "https://timmontmorency.myportfolio.com/image-generique-de-film-2021"
      ]
    },
    {
      schoolName: "Collège de Mainsonneuve",
      logo: require("./assets/images/logo-college-maisonneuve.png"),
      subHeader: "Programme en Électronique Programmable(Technologie du Génie Électrique)",
      duration: "Août 2019 - Mai 2021"
    },
    {
      schoolName: "École secondaire George-Vanier",
      logo: require("./assets/images/logo-george.png"),
      subHeader: "Profil Comédie Musciale Avancée",
      duration: "Août 2014 - Juin 2019",
      desc: "Diplôme d'étude secondaire obtenu",

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Équipe de construction et d'électronique",
      company: "Escaparium",
      companylogo: require("./assets/images/logo-escape.png"),
      date: "Juin 2023 – Aujourd'hui",
      desc: "Je construis des salles d'évasion au sein d'une équipe.",
      descBullets: [
        "Assemblage de structures en bois",
        "Assemblage et soudage de pièces électroniques"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Mes projets",
  subtitle: "Mes meilleurs projets jusqu'à ce jour !",
  projects: [
    {
      image: require("./assets/images/rift.png"),
      projectName: "Item's Rift",
      projectDesc: "Item's Rift est un jeu-quiz que j'ai développé en utilisant des langages web à des fins personnelles. Ce quiz est basé sur l'univers du jeu vidéo League of Legends.",
      technology: "Languages: HTML5, CSS, JavaScript",
      footerLink: [
        {
          name: "Item's Rift",
          url: "https://yourantidote.github.io/Items_Rift/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cristal.webp"),
      projectName: "Cristal",
      projectDesc: "Cristal est un projet à la fois visuel et auditif, où chaque membre de l'équipe avait pour mission de créer une composante en 3D et de l'animer.",
      role: "Rôle: Modélisateur 3D, animateur 3D, monteur vidéo et sonore",
      technology: "Technologie: Maya, Reaper, VCV Rack, DaVinci Resolve",
      footerLink: [
        {
          name: "Cristal - Youtube",
          url: "https://youtu.be/Jn3yiE3OJA0",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/MDM1.png"),
      projectName: "Mal du Miroir",
      projectDesc: "Mal du Miroir est un projet vidéo auxquelle j'ai contribué pendant 2 mois avec mes partenaires. Le projet repose sur la technologie du logiciel MadMapper.",
      role: "Rôle: Cadreur, monteur vidéo et sonore",
      technology: "Technologie: Maya, Reaper, VCV Rack, DaVinci Resolve et MadMapper",
      footerLink: [
        {
          name: "Mal du Miroir - Youtube",
          url: "https://youtu.be/yJVsUHux11Y"
        }
      ]
    },
    {
      image: require("./assets/images/MDM1.png"),
      projectName: "Mal du Miroir",
      projectDesc: "Mal du Miroir est un projet vidéo auxquelle j'ai contribué pendant 2 mois avec mes partenaires. Le projet repose sur la technologie du logiciel MadMapper.",
      role: "Rôle: Cadreur, monteur vidéo et sonore",
      technology: "Technologie: Maya, Reaper, VCV Rack, DaVinci Resolve et MadMapper",
      footerLink: [
        {
          name: "Mal du Miroir - Youtube",
          url: "https://youtu.be/yJVsUHux11Y"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "fasle", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Me contacter ☎️"),
  subtitle:
  "Envie de discuter d'un projet ou simplement de dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "(408) 408-6666",
  email_address: "Antoine_haddad1@yahoo.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
