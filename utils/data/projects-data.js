import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Ubuntu Hardening GUI Application',
    description:
      "My team and I developed a GUI-based application for Ubuntu hardening, designed to enhance system security by automating essential configuration settings. I used Electron.js to create a cross-platform desktop application with an intuitive user interface.",
    tools: [
      'Electron.js',
      'Node.js',
      'Bash Scripting',
      'Linux Security Tools',
      'FirewallD',
      'NPM Modules'
    ],
    role: 'Frontend and Backend Developer',
    code: 'https://github.com/Minal1303/ubuntu-hardening.git',
    demo: 'https://github.com/Minal1303/ubuntu-hardening.git',
    image: '/image/Ubuntu Hardening GUI Application-1.jpg', 
  },

  {
    id: 2,
    name: 'Student Management System',
    description:
      'I developed a full-stack Student Management System to streamline student records, attendance, and performance tracking...',
    tools: [
      'ReactJS',
      'Material-UI',
      'TailwindCSS',
      'Node.js',
      'Express.js',
      'MySQL',
      'AWS EC2',
      'AWS S3',
      'JWT',
    ],
    role: 'Full Stack Developer',
    code: 'https://github.com/spuffyffets/MERN-School-Management-System.git',
    demo: 'https://school-commander.vercel.app/',
    image: '/image/Student Management System.png', // ✅ FIXED
  },

  {
    id: 3,
    name: 'Inventory Management System',
    description:
      'A full-stack Inventory Management System developed for a medical store to manage inventory, stock levels, and more...',
    tools: [
      'Angular',
      'TailwindCSS',
      'Spring Boot',
      'MySQL',
      'JWT',
      'REST API',
      'AWS EC2'
    ],
    role: 'Full Stack Developer',
    code: 'https://github.com/spuffyffets/frontend.git',
    demo: 'https://medtrackbysuchit.vercel.app/login',
    image: '/image/Inventory Management System.png', // ✅ FIXED
  },
];
