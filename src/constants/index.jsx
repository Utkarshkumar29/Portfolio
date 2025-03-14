export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
]


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-7, 3, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const myProjects = [
  {
    title: 'DualChat – Real Time Chat System',
    desc: 'Built on the MERN stack, DualChat enables seamless real-time messaging. Using Socket.io, it cuts response times from 5 seconds to under 1 second, enhancing user engagement. This optimization ensures smooth, instant conversations and higher satisfaction.',
    subdesc:
      'With Socket.io, messages arrive in under 100ms for a lag-free experience. Scalable and reliable, DualChat is ideal for social chats, customer support, and team collaboration.',
    href: 'https://chat-room-fscl.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/dualChat.jpg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/nodejs.svg',
      },
      {
        id: 3,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
      },
      {
        id: 4,
        name: 'Scoket.io',
        path: '/assets/socketio.svg',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/express.svg',
      },
    ],
  },
  {
    title: 'Innovative Digital Solutions for the Future',
    desc: 'We craft visually stunning static websites with seamless functionality, blending creativity and technology. From Metaverse hubs to financial dashboards, our designs focus on engagement and clarity.',
    subdesc:
      'With an intuitive roadmap layout, we ensure structured project flow and easy navigation. Our responsive designs adapt smoothly across devices, creating a standout digital experience. 🚀',
    href: 'https://earn-management-nine.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/earnManagement.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Styled Components',
        path: '/assets/styled-components.svg',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
    ],
  },
  {
    title: 'Fun Games – Web Game Development',
    desc: 'Created two interactive games with Collision Detection using HTML, CSS, and JavaScript. Strengthened skills in game logic and event-driven programming to enhance responsiveness and gameplay. Optimized code for smooth performance and browser rendering.',
    subdesc:
      'These improvements ensure seamless interactions, reducing lag and enabling complex mechanics. The result is an engaging and dynamic gaming experience for users.',
    href: 'https://fun-games-nine.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/funGames.jpg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
    ],
  },
  {
    title: 'Market Insights Dashboard',
    desc: 'Designed an interactive dashboard for real-time business analytics, tracking revenue, orders, and average order value. Integrated data visualization tools to compare market trends and identify growth opportunities.',
    subdesc:
      'Optimized for usability with customizable views and export options. Features market positioning analysis to help businesses make informed decisions.',
    href: 'https://arch-store-3.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/arch.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
    ],
  },
];


export const workExperiences = [
  {
    id: 1,
    name: 'Employee Forums',
    pos: 'ReactJs/NextJs Intern',
    duration: 'March, 2024 - Present',
    point_1: "Identified and resolved a high volume of bugs in React.js/Next.js applications, significantly enhancing the overall user experience and reducing crash rates.",
    point_2: "Optimized code readability and reusability by refactoring key components, reducing technical debt, and improving site performance by 15%.",
    point_3: "Successfully implemented 50% of UI changes in collaboration with design teams, leading to improved site aesthetics and a 15% boost in responsiveness.",
    point_4: "Developed and led the creation of a fully responsive website from scratch, integrating static and dynamic components with a structured, reusable architecture to enhance scalability and maintainability.",
    icon: '/assets/ef.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ParaDox Alpha Foundation',
    pos: 'Web Developer Intern',
    duration: 'July 2023 - November 2022',
    point_1: "Developed responsive frontends optimized for mobile views, improving mobile traffic engagement by 20% through efficient design and cross-device compatibility.",
    point_2: "Developed a seamless connection with Spotify's Web API for music streaming capabilities, leading to an increase of over 200 new app downloads per month as users engaged more deeply with tailored audio experiences.",
    point_3: "Established organized folder structures for scalable code management, improving team efficiency in project collaboration by 30%.",
    point_4: "Adapted to changing project requirements by enhancing functionality with additional features, resulting in a 15% improvement in user satisfaction.",
    icon: '/assets/ParadoxAlpha.jpg',
    animation: 'clapping',
  }
];