// In-memory data storage
interface Profile {
  name: string;
  title: string;
  summary: string;
}

interface About {
  bio: string;
  skills: string[];
  education: string[];
}

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
  technologies: string[];
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

// Portfolio data
export const profile: Profile = {
  name: "Alen joshy",
  title: "Full Stack Developer",
  summary: "Student and aspiring software developer with a passion for building web applications and learning new technologies. Currently seeking opportunities to gain real-world experience and contribute to impactful projects."
};

export const about: About = {
  bio: "I'm a software developer specializing in creating efficient and scalable web applications. I enjoy tackling complex problems and learning new technologies.",
  skills: ["JavaScript", "TypeScript", "Node.js", "Express", "React", "MongoDB", "AWS"],
  education: [
    "BSc Computer Science - University of Toronto",
    "Web Development Bootcamp - Lighthouse Labs"
  ]
};

export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A full-featured online store with user authentication, product management, and payment processing.",
    link: "https://github.com/yourusername/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    name: "price Tracker",
    description: "An application that tracks product prices across multiple online retailers and sends notifications when prices drop.",
    link: "https://github.com/yourusername/price-tracker",
    technologies: ["Python", "Scrapy", "PostgreSQL", "Celery"]
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "A responsive weather application that displays current conditions and forecasts for multiple cities.",
    link: "https://github.com/yourusername/weather-dashboard",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Bootstrap"]
  }
];

// Store contact messages in memory
export const contactMessages: ContactMessage[] = [];
let messageIdCounter = 1;

// Function to add a new contact message
export function addContactMessage(name: string, email: string, message: string): ContactMessage {
  const newMessage: ContactMessage = {
    id: messageIdCounter++,
    name,
    email,
    message,
    timestamp: new Date()
  };
  contactMessages.push(newMessage);
  // print the new message to the console for debugging
  console.log('New contact message added:', newMessage);
  return newMessage;
}