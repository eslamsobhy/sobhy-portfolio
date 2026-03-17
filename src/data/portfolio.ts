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
  { label: "Testimonials", href: "#testimonials" },
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
    "I'm a passionate front-end developer with 4+ years of experience building modern web applications. I specialize in React, Next.js, and TypeScript, creating seamless user experiences that delight users and drive business results.",
    "My journey in web development started with curiosity about how websites work, which quickly turned into a deep passion for crafting beautiful interfaces. I believe that great software is not just about functionality — it's about the experience.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and talks.",
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Happy Clients", value: "5+" },
    { label: "Technologies", value: "15+" },
  ],
};

export const skillsData = {
  title: "Skills & Technologies",
  subtitle: "Tools I use to bring ideas to life",
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 98 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Figma", level: 80 },
        { name: "REST APIs", level: 88 },
        { name: "GraphQL", level: 75 },
        { name: "Testing (Jest)", level: 78 },
        { name: "CI/CD", level: 70 },
      ],
    },
    {
      name: "Libraries & Frameworks",
      skills: [
        { name: "Redux / Zustand", level: 85 },
        { name: "Framer Motion", level: 82 },
        { name: "GSAP", level: 80 },
        { name: "Sass / SCSS", level: 88 },
        { name: "Material UI", level: 85 },
        { name: "Storybook", level: 75 },
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
      role: "Senior Front-End Developer",
      company: "TechCorp Inc.",
      period: "2024 – Present",
      description:
        "Leading the front-end team in building a SaaS platform serving 50K+ users. Architected the design system and improved performance by 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      role: "Front-End Developer",
      company: "Digital Agency X",
      period: "2022 – 2024",
      description:
        "Developed responsive web applications for various clients across e-commerce, healthcare, and fintech industries. Mentored junior developers.",
      technologies: ["React", "JavaScript", "Sass", "Redux"],
    },
    {
      id: 3,
      role: "Junior Front-End Developer",
      company: "StartupHub",
      period: "2021 – 2022",
      description:
        "Built interactive UI components and collaborated closely with designers to implement pixel-perfect interfaces for an early-stage startup.",
      technologies: ["React", "CSS Modules", "Firebase", "Git"],
    },
    {
      id: 4,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2020 – 2021",
      description:
        "Delivered 10+ websites for small businesses and individuals. Gained experience in client communication, project management, and full delivery lifecycle.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ],
};

export const educationData = {
  title: "Education",
  subtitle: "My academic background",
  items: [
    {
      id: 1,
      degree: "B.Sc. in Computer Science",
      institution: "Cairo University",
      period: "2016 – 2020",
      description:
        "Focused on software engineering, algorithms, and human-computer interaction. Graduated with honors and led multiple front-end focused projects.",
      details: ["GPA: 3.7 / 4.0", "Senior project: Responsive web platform for e-learning"],
    },
    {
      id: 2,
      degree: "Front-End Web Development Nanodegree",
      institution: "Udacity",
      period: "2021",
      description:
        "Hands-on program covering modern JavaScript, responsive design, and performance optimization with real-world projects.",
      details: ["Built 3+ production-ready front-end projects", "Emphasis on accessibility and performance"],
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
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with cart, checkout, payment integration, and admin dashboard. Built with performance and accessibility in mind.",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A Kanban-style project management tool with drag-and-drop, real-time updates, and team collaboration features.",
      image: "/projects/taskapp.jpg",
      technologies: ["React", "Redux", "Socket.io", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Generator",
      description:
        "A tool that lets developers create stunning portfolio websites by filling in a simple form. Exports clean, deployable code.",
      image: "/projects/portfolio-gen.jpg",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A beautiful weather app with animated backgrounds, 7-day forecasts, and location-based data using the OpenWeather API.",
      image: "/projects/weather.jpg",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "A modern blog with MDX support, dark mode, search, tags, and an RSS feed. Optimized for SEO and fast page loads.",
      image: "/projects/blog.jpg",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Real-Time Chat App",
      description:
        "A messaging application with rooms, typing indicators, read receipts, and media sharing powered by WebSockets.",
      image: "/projects/chat.jpg",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
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
  email: "sobhy@example.com",
  phone: "+20 123 456 7890",
  location: "Cairo, Egypt",
  formFields: [
    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
    { name: "email", label: "Your Email", type: "email", placeholder: "john@example.com" },
    { name: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry" },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project..." },
  ],
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Sobhy Ahmed. All rights reserved.`,
  tagline: "Crafted with passion and clean code.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
