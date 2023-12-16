import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/anshrusia',
  github: 'https://github.com/anshrusia200',
  linkedin: 'https://www.linkedin.com/in/ansh-rusia-690440203/',
};

export const author = {
  name: 'Ansh Rusia',
  email: 'anshrusia2002@gmail.com',
};

export const seoData = {
  title: 'Ansh Rusia | Full-Stack Developer',
  description:
    'Ansh Rusia is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://res.cloudinary.com/appcloudansh/image/upload/v1702754583/eljnhdri8toqqhchmdm5.jpg',
  url: '',
  keywords: [
    'Ansh',
    'Ansh Rusia',
    '@Ansh Rusia',
    'Ansh Rusia',
    'Portfolio',
    'Ansh Rusia Portfolio ',
    'Ansh Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello fren 👋, I'm ",
  title: 'Ansh Rusia.',
  tagline: 'I create visually appealing and interactive experiences on the web',
  description:
    "I'm a passionate Fullstack Web Developer having an experience of creating web applications using ReactJS & NextJS. ",
  specialText: 'Student at @ABV-IIITM Gwalior',

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'React.js',
      'TailwindCSS',
      'Shadcn/ui',
      'Node.js',
      'Express.js',
      'Socket IO',
    ],
  },
  img: '/ansh-rusia.png',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    // {
    //   id: getId(),
    //   title: 'blockchain development',
    //   lottie: {
    //     light: '/lotties/ethereum.json',
    //     dark: '/lotties/ethereum-dark.json',
    //   },
    //   points: [
    //     'Experience in developing Smart Contract using Solidity & Ethereum',
    //     'Developing NFT Smart Contracts using ERC-721 Token Standard',
    //     'Building Dapps with React.js & Solidity using Web3.js',
    //   ],
    //   softwareSkills: [
    //     { name: 'ethereum', icon: 'logos:ethereum' },
    //     { name: 'solidity', icon: 'logos:solidity' },
    //     { name: 'metamask', icon: 'logos:metamask-icon' },
    //   ],
    // },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: 'My experience and volunteering',
  experiences: [
    {
      company: 'Outshade',
      companyUrl: 'https://www.outshade.in/about.html',
      role: 'Fullstack Developer Intern',
      started: 'Jun 2022',
      upto: 'Jul 2022',
      tasks: [
        'Developed Metaverse platform with uniform components, dynamic pages and reusable layouts using React JS.',
        "Collaborated closely 'with' the design team to implement pixel-perfect UI/UX designs, consistently delivering tasks on-time.",
        'Integrated Redux JS for State Management in the application and implemented Design techniques, making the platform cross-compatible and responsive.',
        'Collaborated with clients to gather project requirements and translate them into actionable technical tasks, ensuring            client expectations were met or exceeded.',
        'Worked closely with backend team for frontend integration.',
      ],
    },
    {
      company: 'Abhyast',
      companyUrl: 'https://aseem.abhyast.in/',
      role: 'Web Developer Intern',
      started: 'Mar 2022',
      upto: 'May 2022',
      tasks: [
        'Worked on the Aseem Video conferencing app of the organisation.',
        'Helped the students/users get quick resolution to their issues. Significantly enhanced the User experience with the interactive chatbot.',
        'Developed and integrated a Single question poll feature for the ongoing meeting window',
        ' Developed and integrated a multi question quiz feature using Express and Mongo DB. The sharable quiz facilitated real-time student evaluation for teachers.',
        'Created interactive dashboard to view and edit Schedule Meetings',
      ],
    },
    {
      company: 'Webkriti',
      companyUrl: 'https://www.aasf.in/events',
      role: 'Mentor',
      started: 'Sept 2022',
      upto: 'Oct 2022',
      tasks: [
        'Mentored 2 teams for the Webkriti 2022 event.',
        "AASF's Webkriti initiative for sophomore year students facilitated skill development through engaging team-based web projects, promoting hands-on experience with diverse tech stacks, and fostering real-life project engagement, thus enhancing collaborative learning opportunities.",
      ],
    },
    {
      company: "Hactoberfest'22",
      companyUrl: 'https://hacktoberfest.com/',
      role: 'Contributor and Maintainer',
      started: 'Oct 2022',
      upto: 'Oct 2022',
      tasks: [
        'Contributed in the Hacktoberfest 2022',
        'Merged 22 PRs in development and design tasks.',
        'Recieved 75 PRs and 69 were closed and merged to the main branch.',
        // 'Met project deadlines consistently, delivering good-quality code and designs on time.',
      ],
    },
    {
      company: "Opencode'21 ",
      companyUrl: 'https://opencodeiiita.github.io/',
      role: 'Contributor',
      started: 'Sept 2021',
      upto: 'Oct 2021',
      tasks: [
        'Participated as a contributor in OpenCode organized by IIIT Allahabad.',
        'Merged 5 PRs',
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Voxly (Chat application)',
      url: 'https://voxly-chat.netlify.app/',
      repo: 'https://github.com/anshrusia200/Voxly-Chat',
      img: 'http://res.cloudinary.com/appcloudansh/image/upload/v1702732653/portfolio/shrpx84an6zorhnb53sa.jpg',
      year: 2023,
      tags: ['Next.js', 'Socket.io', 'Clerk'],
    },
    {
      id: getId(),
      name: 'Stream Pal (Media Server)',
      url: 'https://github.com/anshrusia200/StreamPal',
      repo: 'https://github.com/anshrusia200/StreamPal',
      img: 'http://res.cloudinary.com/appcloudansh/image/upload/v1702732249/portfolio/edeac7eipjrqdlyvliah.jpg',
      year: 2023,
      tags: ['React.js', 'Chakra UI', 'Node', 'Express'],
    },
    {
      id: getId(),
      name: 'Devcon (Public Blog)',
      url: 'https://ondevcon.netlify.app/',
      repo: 'https://github.com/anshrusia200/DevCon',
      img: 'http://res.cloudinary.com/appcloudansh/image/upload/v1702735141/portfolio/qnzjcnc6fxhnct0rsd5g.jpg',
      year: 2022,
      tags: ['React.js', 'Express', 'MongoDB'],
    },

    {
      id: getId(),
      name: 'Personal Portfolio',
      url: 'https://github.com/anshrusia200/Next-Portfolio',
      repo: 'https://github.com/anshrusia200/Next-Portfolio',
      img: 'https://res.cloudinary.com/appcloudansh/image/upload/v1702721335/portfolio/l4iy1buea2p8pv3bpox2.jpg',
      year: 2023,
      tags: ['Next.js'],
    },

    {
      id: getId(),
      name: 'Finflow (Expense Splitter)',
      url: 'https://finflow-backend.onrender.com/',
      repo: 'https://github.com/anshrusia200/finflow/tree/main',
      img: 'http://res.cloudinary.com/appcloudansh/image/upload/v1702732349/portfolio/sc1gg2gmzillk7amaqev.jpg',
      year: 2022,
      tags: ['React.js', 'Redux', 'Express', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Appointment Scheduler',
      url: 'https://assignment-ansh-rusia.netlify.app/',
      repo: 'https://github.com/anshrusia200/Calendar-app',
      img: 'https://res.cloudinary.com/appcloudansh/image/upload/v1702732071/portfolio/nsyjbrkdt2cu8mcdsz6o.jpg',
      year: 2022,
      tags: ['React.js', 'Typescript', 'Express'],
    },
    {
      id: getId(),
      name: 'Attendance Mgmt System',
      url: 'https://github.com/anshrusia200/ams-group-8',
      repo: 'https://github.com/anshrusia200/ams-group-8',
      img: 'http://res.cloudinary.com/appcloudansh/image/upload/v1702735925/portfolio/ufdk0hvcrmwmvjma5kty.jpg',
      year: 2022,
      tags: ['React.js', 'MongoDB', 'Express'],
    },
    {
      id: getId(),
      name: 'Next News',
      url: 'https://next-news-liart.vercel.app/',
      repo: 'https://github.com/anshrusia200/Next-News',
      img: 'http://res.cloudinary.com/appcloudansh/image/upload/v1702736398/portfolio/kzn3eddg7oxyjvovdeup.jpg',
      year: 2022,
      tags: ['Next.js', 'Typescript'],
    },
    {
      id: getId(),
      name: 'Task Manager',
      url: 'https://workflow-uqtl.onrender.com/',
      repo: 'https://github.com/anshrusia200/Task-Manager-API',
      img: 'http://res.cloudinary.com/appcloudansh/image/upload/v1702735449/portfolio/ocvnh2prcmcdjttnfmtu.jpg',
      year: 2022,
      tags: ['Express', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for an internship or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    // {
    //   icon: 'lucide:twitter',
    //   url: socialLinks.twitter,
    // },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Thanks for visiting !',
  link: '',
};
