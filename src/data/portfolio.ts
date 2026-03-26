export const siteConfig = {
  name: "Sobhy",
  fullName: "EslamSobhy",
  role: "Front-End Developer",
  email: "eslamsobhy206@gmail.com",
  location: "Cairo, Egypt",
  bio: "I craft pixel-perfect, performant, and accessible user interfaces that bring ideas to life. With a passion for clean code and smooth interactions, I turn complex problems into elegant digital experiences.",
  // Update this to your actual external resume URL
  resumeUrl: "https://drive.google.com/file/d/1jZ7kFJQFwG7j2JbCa-d7cGeV-BtPxa5K/view?usp=drive_link",
  avatarUrl: "/avatar.jpg",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/eslamsobhy", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/eslam-sobhii/", icon: "linkedin" },
    { label: "Resume", url: "https://drive.google.com/file/d/1jZ7kFJQFwG7j2JbCa-d7cGeV-BtPxa5K/view?usp=drive_link", icon: "resume" },
    // { label: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  greeting: "Hello, I'm",
  name: "Eslam Sobhy",
  taglines: [
    "Front-End Developer",
    "UI/UX Enthusiast",
    "React Specialist",
    "Creative Coder",
  ],
  description:
    "I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Turning vision into reality with code.",
  cta: { label: "View My Work", href: "#projects" },
  ctaSecondary: { label: "Get In Touch", href: "#contact" },
};

export const aboutData = {
  title: "About Me",
  subtitle: "Get to know me better",
  paragraphs: [
    "I'm a passionate front-end developer with 3+ years of experience building modern web applications. I specialize in React, Next.js, and TypeScript, creating seamless user experiences that delight users and drive business results.",
    "My journey in web development started with curiosity about how websites work, which quickly turned into a deep passion for crafting beautiful interfaces. I believe that great software is not just about functionality — it's about the experience.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and talks.",
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    // { label: "Happy Clients", value: "5+" },
    { label: "Technologies", value: "25+" },
  ],
};

export const skillsData = {
  title: "Skills & Technologies",
  subtitle: "Tools I use to bring ideas to life",
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Angular", level: 75 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 95 },
        { name: "ES6+", level: 92 },
        { name: "HTML", level: 98 },
        { name: "CSS", level: 98 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Responsive Design", level: 95 },
        { name: "i18n", level: 78 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Figma", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "GraphQL", level: 75 },
        { name: "Testing (Jest)", level: 78 },
        { name: "CI/CD", level: 70 },
      ],
    },
    {
      name: "Libraries & Frameworks",
      skills: [
        { name: "Redux Toolkit", level: 86 },
        { name: "Zustand", level: 85 },
        { name: "React Query", level: 82 },
        { name: "React Hook Form", level: 84 },
        { name: "Framer Motion", level: 80 },
        { name: "GSAP", level: 80 },
        { name: "Sass / SCSS", level: 88 },
        { name: "Ant Design", level: 80 },
        { name: "shadcn/ui", level: 78 },
        { name: "Bootstrap", level: 85 },
        { name: "Material UI", level: 85 },
        { name: "Recharts", level: 78 },
        { name: "Chart.js", level: 80 },
        // { name: "Storybook", level: 75 },
      ],
    },
  ],
};

export const experienceData = {
  title: "Experience",
  subtitle: "My professional journey",
  items: [
    {
      id: 1,
      role: "Front-End Developer",
      company: "Crowd Analyzer",
      period: "Mar 2024 – Present",
      description: [
        "Owned greenfield app initiatives end-to-end — from product discovery and architecture to delivery and iteration.",
        "Implemented a scalable design system to ensure UI consistency, faster delivery, and a polished UX across the platform.",
        "Performance-first mindset: introduced virtualized infinite scrolling for large listings, reducing memory usage by 85% while keeping interactions smooth.",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SASS", "Git & Github"],
    },
    {
      id: 2,
      role: "Front-End Developer",
      company: "Extend | The Ad Network",
      period: "Aug 2023 – Mar 2024",
      description: [
        "Built and maintained two web portals: a client-facing React app and an admin Angular dashboard.",
        "Implemented responsive UI components aligned with the design system, including interactive charts.",
        "Collaborated closely with backend teams to integrate APIs, ensuring smooth data flow and efficient user operations.",
        "Shifted video editing from server-side processing to a client-side WebAssembly workflow, improving UX responsiveness, performance, and the operation team’s productivity.",
      ],
      technologies: ["React", "Angular", "TypeScript", "Sass", "Zustand", "Chart.js", "WebAssembly", "React Query", "Axios", "i18n", "Ant Design", "REST APIs", "Postman", "Figma", "Git & Github"],
    },
    {
      id: 3,
      role: "Front-End Developer",
      company: "Crete Agency",
      period: "May 2023 – Aug 2023",
      description: [
        "Integrated frontend components with an existing Laravel MVC (Blade) backend, ensuring proper data flow and consistent UI behavior across the application.",
        "Fixed UI bugs and enhanced features using JavaScript, CSS, and Blade templates, improving usability and consistency.",
        "Collaborated closely with backend developers to ensure smooth frontend–backend integration, accurate data handling, and reliable application functionality.",
      ],
      technologies: ["Blade", "Laravel", "JavaScript", "CSS", "PHP", "MySQL", "Git & Github"],
    },
    // {
    //   id: 4,
    //   role: "Freelance Web Developer",
    //   company: "Self-Employed",
    //   period: "2020 – 2021",
    //   description:
    //     "Delivered 10+ websites for small businesses and individuals. Gained experience in client communication, project management, and full delivery lifecycle.",
    //   technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    // },
  ],
};

export const educationData = {
  title: "Education",
  subtitle: "My academic background",
  items: [
    {
      id: 1,
      degree: "B.Sc. in Computer Science",
      institution: "Ain Shams University",
      period: "2017 – 2021",
      description:
        "Focused on software engineering, Data Structures (DS) and algorithms, and OOP. Applied these concepts to web development and image processing through many hands-on projects. Graduated with honors and led multiple front-end focused projects.",
      details: ["GPA: 3.15 / 4.0", "Senior project: Post grad. management system for Ain Shams University"],
    },
    {
      id: 2,
      degree: "ITI Intensive Code Camp - Full Stack Web Development using MEARN Stack",
      institution: "ITI",
      period: "2023",
      description:
        "Hands-on full-stack program building lots of real projects with HTML, CSS, JavaScript, TypeScript, SASS, Bootstrap, React, Angular, plus MongoDB and Node/Express APIs for end-to-end web development.",
      details: [
        "Built 3+ production-ready front-end projects",
        "Graduation project: Electronix E-commerce app with two portals (client-facing and seller portal).",
      ],
    },
    {
      id: 3,
      degree: "Continuous Learning",
      institution: "Online Courses & Workshops",
      period: "Ongoing",
      description:
        "Regularly invest time in staying up to date with the latest front-end tools and best practices.",
      details: ["React, Next.js, and TypeScript courses", "Design systems, UI/UX, and animation workshops"],
    },
  ],
};

export const projectsData = {
  title: "Featured Projects",
  subtitle: "Some things I've built",
  items: [
    {
      id: 1,
      title: "Liqaa-25",
      description:
        "A private network for senior leaders across sectors, built to foster a supportive space for sharing ideas and experience. The platform connects peers so they can collaborate, exchange knowledge, and develop stronger strategies together.",
      image: "/assets/liqaa-project.png",
      technologies: ["Next.js", "TypeScript", "SASS", "i18n"],
      liveUrl: "https://www.25.community/",
      githubUrl: "",
      featured: true,
    },
    {
      id: 2,
      title: "Balaconah",
      description:
        "A Saudi-focused platform on marketing and communications—timely, original coverage with the long-term goal of becoming the sector’s primary reference. It weaves together industry stories, campaign and creative analysis, design and brand identity, creator features, events, awards, and agency job listings, backed by a rich ad library, an advertising glossary, live data-backed reports, and a directory of agencies and professionals to make discovery and outreach easier.",
      image: "/assets/balaconah-project.png",
      technologies: ["Next.js", "TypeScript", "SASS", "Ant Design", "Axios", "i18n"],
      liveUrl: "https://www.balaconah.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "iBeats - Crowd Ads.",
      description:
        "In today’s advertising-saturated world, Crowd Analyzer Advertisements helps you move beyond surface metrics by monitoring and analyzing the celebrity and influencer ad landscape. It provides a 12+ month archive and lets you categorize ads by brand, influencer, topic, company, and product through flexible digital agreements.",
      image: "/assets/crowd-ads-project.png",
      technologies: ["React.js", "Angular", "TypeScript", "React Query", "Zustand", "SASS", "Ant Design", "Axios", "i18n", "Recharts", "Vite"],
      liveUrl: "https://crowdanalyzer.com/advertisements/",
      githubUrl: "#",
      featured: true,
    },
    // {
    //   id: 4,
    //   title: "Weather Dashboard",
    //   description:
    //     "A beautiful weather app with animated backgrounds, 7-day forecasts, and location-based data using the OpenWeather API.",
    //   image: "/projects/weather.jpg",
    //   technologies: ["React", "Chart.js", "OpenWeather API", "CSS"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "Blog Platform",
    //   description:
    //     "A modern blog with MDX support, dark mode, search, tags, and an RSS feed. Optimized for SEO and fast page loads.",
    //   image: "/projects/blog.jpg",
    //   technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Real-Time Chat App",
    //   description:
    //     "A messaging application with rooms, typing indicators, read receipts, and media sharing powered by WebSockets.",
    //   image: "/projects/chat.jpg",
    //   technologies: ["React", "Socket.io", "Express", "MongoDB"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
  ],
};

export const testimonialsData = {
  title: "Testimonials",
  subtitle: "What people say about working with me",
  items: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      quote:
        "Sobhy is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to translate designs into pixel-perfect interfaces is remarkable.",
      avatar: "/testimonials/sarah.jpg",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "CTO at StartupHub",
      quote:
        "Working with Sobhy was a game-changer for our team. He brought a level of expertise and professionalism that elevated our entire front-end architecture.",
      avatar: "/testimonials/ahmed.jpg",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Design Lead at Digital Agency X",
      quote:
        "I've never worked with a developer who understands design intent as well as Sobhy. He bridges the gap between design and development effortlessly.",
      avatar: "/testimonials/emily.jpg",
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Freelance Client",
      quote:
        "Sobhy delivered my project ahead of schedule and exceeded all my expectations. His communication throughout the process was excellent. Highly recommended!",
      avatar: "/testimonials/michael.jpg",
    },
  ],
};

export const contactData = {
  title: "Get In Touch",
  subtitle: "Have a project in mind? Let's talk about it.",
  email: "eslamsobhy206@gmail.com",
  phone: "+201114304705",
  location: "Cairo, Egypt",
  formFields: [
    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
    { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry" },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project..." },
  ],
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Eslam Sobhy. All rights reserved.`,
  tagline: "Crafted with passion and clean code.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
