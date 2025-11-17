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

export const HERO_CONTENT = `I am a Software Engineer who enjoys creating practical, intelligent, and high performance systems. I work across backend development, AI driven applications, and data intensive workflows while also contributing to open source software. I enjoy solving real engineering problems and turning ideas into clean, maintainable, and scalable solutions.`;

export const ABOUT_TEXT = `I build software with a focus on clarity, reliability, and long term maintainability. My work includes designing backend services, integrating machine learning models into real applications, and developing data pipelines that support real time insights. I enjoy contributing to open source ecosystems, improving developer workflows, and collaborating across teams to bring complex systems to life.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Software Engineer",
    company: "UB CAVAS Lab",
    domain: "Open Source Software / Systems",
    highlights: [
      "Collaborating on the integration and customization of the open-source Autoware ecosystem, contributing software patches, configuration modules, and system-level improvements.",
      "Developed tooling and automation around build, launch, and configuration workflows using Docker, Python, and Linux scripting, improving reproducibility and reducing onboarding friction.",
      "Engineered debugging utilities and logging pipelines to analyze inter-module communication, system performance, and message latency across distributed nodes.",
      "Refactored and tuned system components to improve stability and integration reliability, enabling smoother interoperability between upstream Autoware modules and in-house extensions."
    ],
    technologies: ["C++", "Python", "Docker", "Linux", "Open Source", "Automation"]
  },
  

  {
    year: "Jul 2022 – Jul 2024",
    role: "Software Engineer",
    company: "Samsung Research & Development, Delhi",
    domain: "Backend / Full Stack",
    highlights: [
      "Designed REST/gRPC microservices powering Samsung’s Big Data Portal, enabling 35% faster insight retrieval.",
      "Built React + Redux real-time dashboards using WebSockets for service-level analytics across engineering teams.",
      "Optimized SQL query plans and caching strategies to speed up multi-million-row analytics workloads by 60%.",
      "Automated CI/CD deployments on AWS EC2 using Docker, Jenkins, and S3, cutting release time by 60%.",
      "Developed OAuth2-based RBAC security layers, improving access-control reliability and preventing unauthorized access.",
      "Engineered C++ middleware integrating Alexa SDK and Spotify APIs for Samsung Soundbars, unlocking a $5M+ product line.",
      "Accelerated Tizen OS firmware builds from 55 → 10 minutes with incremental build optimization."
    ],
    technologies: ["Spring Boot", "PostgreSQL", "Redis", "Docker", "AWS", "React.js", "C++"]
  },

  {
    year: "Jul 2022 – Jul 2024",
    role: "AI/ML Engineer",
    company: "Samsung Research & Development",
    domain: "AI/ML",
    highlights: [
      "Co-architected the GAYA Framework—an ensemble LLM system for summarization, reasoning, and sentiment tasks.",
      "Built RAG pipelines with embedding-based retrieval and token-pruning, reducing inference latency by 40%.",
      "Fine-tuned HuggingFace models for domain QA, reducing hallucinations via context filtering.",
      "Developed Faster R-CNN models combining RGB+LiDAR for 28% improved recall on home-device perception.",
      "Implemented Rainbow RL and D3 Actor-Critic agents achieving 94% success rates in navigation tasks.",
      "Deployed AI microservices on AWS using Kubernetes and CI/CD automation, accelerating releases 3×."
    ],
    technologies: ["Python", "PyTorch", "Transformers", "RAG", "HuggingFace", "RL", "Docker", "Kubernetes"]
  },

  {
    year: "Jun 2021 – Jul 2022",
    role: "Software Engineering Intern",
    company: "Recursion (NIT Durgapur)",
    domain: "AI / Full Stack",
    highlights: [
      "Built a contactless gesture-recognition trainer using OpenCV + MediaPipe with 95% accuracy.",
      "Developed full-stack web apps with React.js and Node.js, reducing page-load latency by 60%.",
      "Implemented Extreme Learning Machines for wireless propagation modeling, outperforming baseline regressions by 18%."
    ],
    technologies: ["OpenCV", "MediaPipe", "React.js", "Node.js", "Python", "TensorFlow"]
  }
];


export const PROJECTS = [
  // Full Stack Projects
  {
    title: "AI ATS Resume Builder (SaaS)",
    image: project1,
    domain: "AI + Full Stack",
    description: "Full-stack platform with NLP-driven keyword scoring, ATS analytics, and a credit-based Stripe billing system.",
    technologies: ["React.js", "Node.js", "MongoDB", "NLP", "Stripe"]
  },
  {
    title: "Image Background Remover (AI SaaS)",
    image: project2,
    domain: "AI + Full Stack",
    description: "AI background removal web app with Clerk auth and pay-per-use credit model.",
    technologies: ["React.js", "Node.js", "MongoDB", "Python", "Clerk", "Stripe"]
  },
  {
    title: "Smart Food Ordering with Live Location",
    image: project3,
    domain: "Full Stack",
    description: "Developed a responsive food ordering platform with Google Maps integration and dynamic routing.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Google Maps API"]
  },

  // Backend Projects
  {
    title: "Kafka → Airflow → Spark Streaming Pipeline",
    image: project4,
    domain: "Data Engineering",
    description: "Real-time data ingestion pipeline with schema evolution and Redshift analytics under 5-second latency.",
    technologies: ["Kafka", "Spark", "Airflow", "AWS S3", "Redshift"]
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
    title: "Real-Time Dashboards for Engineering",
    image: project6,
    domain: "Frontend",
    description: "React + WebSockets dashboards visualizing system metrics and live analytics.",
    technologies: ["React.js", "WebSockets", "Chart.js"]
  },

  // // ML/AI Projects
  {
    title: "RAG-Powered RL Agent Generator",
    image: project7,
    domain: "AI/ML",
    description: "Combined RAG pipelines with policy-gradient RL to dynamically retrieve knowledge and reduce irrelevant responses by 33%.",
    technologies: ["Python", "LangChain", "FAISS", "PyTorch", "RAG"]
  },
  {
    title: "Reinforcement Learning for Robotics",
    image: project8,
    domain: "ML",
    description: "Trained actor-critic RL agents for obstacle-avoiding robots using OpenAI Gym and PyTorch.",
    technologies: ["Python", "Deep RL", "Actor-Critic", "PyTorch"]
  },
  {
    title: "Distributed Big Data Benchmarking",
    image: project9,
    domain: "Data Engineering",
    description: "Benchmarked Spark/Hadoop pipelines for large-scale inference, achieving 20× speedups over multiprocessing.",
    technologies: ["Spark", "Hadoop", "Python"]
  },
  {
    title: "Pix2Pix GAN – Sketch to Photo",
    image: project10,
    domain: "AI/ML",
    description: "Trained a Pix2Pix GAN achieving SSIM 0.72 for sketch-to-photo translation.",
    technologies: ["GANs", "TensorFlow", "Python"]
  }
];

export const CONTACT = {
  address: "1525 Amherst Manor Dr Apt 802, Buffalo, NY",
  // phoneNo: "+1 (716) 709-0989",
  email: "mandrusanjaykumar@gmail.com"
};
