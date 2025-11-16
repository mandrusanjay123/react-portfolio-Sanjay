import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";
import project10 from "../assets/projects/project-10.jpg";

export const HERO_CONTENT = `I’m a versatile Software Engineer with experience in backend systems, full-stack web apps, and AI/ML product development. From integrating LLMs at Samsung to deploying autonomous vehicle software at UB, I specialize in building robust, intelligent, and scalable systems.`;

export const ABOUT_TEXT = `With a background in Software Engineering and ML/AI, I’ve developed production-grade systems, integrated deep learning workflows, and engineered scalable backend services. My experience spans cloud platforms, distributed systems, and AI-driven automation. I'm passionate about translating complex requirements into clean code that delivers real impact.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Software Engineer",
    company: "UB CAVAS Autonomous Vehicle",
    domain: "Backend",
    highlights: [
      "Integrated Autoware on Lincoln MKZ using ROS2, C++, and Docker for autonomous navigation.",
      "Simulated LiDAR-based navigation in Carla and Gazebo using Buffalo campus maps.",
      "Fused LiDAR-camera sensor data for real-time localization and control pipelines."
    ],
    technologies: ["C++", "ROS2", "Docker", "Gazebo", "Carla"]
  },
  {
    year: "Jul 2022 - Jul 2024",
    role: "Software Engineer",
    company: "Samsung Research & Development, Noida",
    domain: "Backend",
    highlights: [
      "Built RESTful APIs and PostgreSQL DB schemas for Samsung’s internal VConnect platform.",
      "Integrated Alexa & Spotify via C++ middleware, launching $5M+ soundbar line.",
      "Reduced Tizen build time by 80% via Source Build & CI automation.",
      "Implemented Redis caching & OAuth2 auth flows to improve security and performance."
    ],
    technologies: ["Java", "Spring Boot", "C++", "OAuth2", "Redis", "Jenkins"]
  },
  {
    year: "Feb 2023 - Jul 2024",
    role: "Full Stack Engineer",
    company: "Samsung Research & Development, Noida",
    domain: "Full Stack",
    highlights: [
      "Developed dashboards using React.js, WebSockets, and Chart.js for real-time analytics.",
      "Built frontend/backend microservices for internal user and system metrics.",
      "Enhanced user interface responsiveness and observability across engineering tools."
    ],
    technologies: ["React.js", "Redux", "WebSockets", "Chart.js", "Node.js"]
  },
  {
    year: "Jul 2022 - Feb 2023",
    role: "ML/AI Engineer",
    company: "Samsung Research & Development, Noida",
    domain: "ML",
    highlights: [
      "Led integration of multiple LLMs into internal tools using the Gaya framework.",
      "Reduced hallucinations in GenAI workflows using prompt tuning & RAG-based filtering.",
      "Built multilingual NLP pipelines and auto-tagging systems for smart appliances."
    ],
    technologies: ["Python", "LLM", "NLP", "Gaya Framework", "HuggingFace"]
  },
  {
    year: "Jun 2021 - Jul 2022",
    role: "Software Engineer",
    company: "Recursion",
    domain: "Full Stack",
    highlights: [
      "Developed gesture recognition trainer with OpenCV and MediaPipe (95% accuracy).",
      "Built a food ordering app using Node.js, Express, and Google Maps API.",
      "Created full-stack product demos for dynamic web and AI interaction systems."
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "Node.js", "JavaScript", "HTML/CSS"]
  }
];

export const PROJECTS = [
  // Full Stack Projects
  {
    title: "All-in-One Resume Builder with ATS Tracker",
    image: project1,
    domain: "Full Stack",
    description: "Built a resume builder with real-time NLP scoring and Stripe-based credit system using MERN stack.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "NLP", "Stripe"]
  },
  {
    title: "Image Background Remover (AI SaaS)",
    image: project2,
    domain: "Full Stack",
    description: "Built an AI-powered background remover web app with payment system, user auth, and credit usage model.",
    technologies: ["React.js", "Node.js", "MongoDB", "Clerk", "Stripe", "Python"]
  }
  ,
  {
    title: "Smart Food Ordering with Live Location",
    image: project3,
    domain: "Full Stack",
    description: "Developed a responsive food ordering platform with Google Maps integration and dynamic routing.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Google Maps API"]
  },

  // Backend Projects
  {
    title: "VConnect Platform Microservices",
    image: project4,
    domain: "Backend",
    description: "Engineered scalable backend services and secure auth workflows for Samsung’s VConnect platform.",
    technologies: ["Spring Boot", "PostgreSQL", "OAuth2", "Jenkins", "Redis"]
  },
  {
    title: "Middleware Optimization for Soundbars",
    image: project5,
    domain: "Backend",
    description: "Designed C++ middleware to support Spotify and Alexa APIs in Samsung Soundbars, unlocking $5M revenue.",
    technologies: ["C++", "JavaScript", "Middleware", "Spotify API"]
  },

  // Frontend Projects
  {
    title: "Real-Time Dashboards for Samsung Engineering",
    image: project6,
    domain: "Frontend",
    description: "Created dashboards using React, Chart.js, and WebSockets for real-time system performance tracking.",
    technologies: ["React.js", "Chart.js", "WebSockets", "Redux"]
  },

  // // ML/AI Projects
  {
    title: "GAYA Framework LLM Integration",
    image: project7,
    domain: "ML",
    description: "Integrated multiple LLMs (sentiment, summarization, reasoning) for internal GenAI agents at Samsung.",
    technologies: ["Python", "LLM", "Prompt Engineering", "NLP", "HuggingFace"]
  },
  {
    title: "Reinforcement Learning for Robotics",
    image: project8,
    domain: "ML",
    description: "Trained actor-critic RL agents for obstacle-avoiding robots using OpenAI Gym and PyTorch.",
    technologies: ["Python", "Deep RL", "Actor-Critic", "PyTorch"]
  },
  {
    title: "IoT Data Pipeline & Smart Analytics",
    image: project9,
    domain: "ML",
    description: "Processed 10K+ smart appliance logs using Spark and Hadoop, enabling real-time decisions.",
    technologies: ["Spark", "Hadoop", "Python", "Big Data"]
  },
  {
    title: "Vision-Based Object Detection for RVCs",
    image: project10,
    domain: "ML",
    description: "Built CNN-based object detection for robotic vacuums, improving obstacle recall by 28%.",
    technologies: ["Python", "Computer Vision", "CNNs", "OpenCV"]
  }
];

export const CONTACT = {
  address: "1525 Amherst Manor Dr Apt 802, Buffalo, NY",
  // phoneNo: "+1 (716) 709-0989",
  email: "mandrusanjaykumar@gmail.com"
};
