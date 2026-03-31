// Sample data to seed the database
const sampleCareers = [
  {
    title: "Software Engineer",
    category: "IT",
    description: "Design, develop, and maintain software applications for various industries.",
    roadmap: [
      "Complete +2 in Science or Computer Science",
      "Bachelor's in Computer Science or IT (4 years)",
      "Learn programming languages: Python, JavaScript, Java",
      "Build portfolio of projects",
      "Apply for internships",
      "Start as Junior Developer"
    ],
    duration: "4-5 years",
    cost: "NPR 400,000 - 800,000 for Bachelor's degree",
    resources: [
      "Online platforms: Coursera, Udemy, edX",
      "Local IT training centers",
      "College clubs and hackathons",
      "GitHub for open source contribution"
    ],
    requiredSkills: ["Programming", "Problem Solving", "Database Management", "Version Control"],
    salary: "NPR 30,000 - 150,000 per month",
    demand: "High"
  },
  {
    title: "Medical Doctor",
    category: "Medical",
    description: "Diagnose and treat illnesses, prescribe medications, and provide healthcare services.",
    roadmap: [
      "Complete +2 in Science with Biology",
      "Clear MBBS entrance exam (CEE)",
      "Complete MBBS (5.5 years including internship)",
      "Obtain license from Nepal Medical Council",
      "Specialization (MD/MS) - optional",
      "Start practice or join hospital"
    ],
    duration: "5.5 - 8 years",
    cost: "NPR 4,000,000 - 8,000,000 for MBBS",
    resources: [
      "Medical colleges in Nepal",
      "Coaching for entrance exams",
      "Medical journals and publications",
      "Hospital internships"
    ],
    requiredSkills: ["Critical Thinking", "Communication", "Empathy", "Medical Knowledge"],
    salary: "NPR 80,000 - 300,000 per month",
    demand: "High"
  },
  {
    title: "Civil Engineer",
    category: "Engineering",
    description: "Plan, design, and oversee construction of infrastructure projects like roads, bridges, and buildings.",
    roadmap: [
      "Complete +2 in Science with Mathematics",
      "Bachelor's in Civil Engineering (4 years)",
      "Get license from Nepal Engineering Council",
      "Gain practical experience through internships",
      "Specialize in specific areas",
      "Start own consultancy or join construction firms"
    ],
    duration: "4-6 years",
    cost: "NPR 500,000 - 1,200,000 for Bachelor's",
    resources: [
      "Engineering colleges in Nepal",
      "AutoCAD and design software training",
      "Construction site internships",
      "Professional organizations like NEC"
    ],
    requiredSkills: ["Mathematics", "Design Software", "Project Management", "Problem Solving"],
    salary: "NPR 40,000 - 150,000 per month",
    demand: "Medium"
  },
  {
    title: "Data Scientist",
    category: "IT",
    description: "Analyze complex data to help organizations make better decisions using machine learning and statistics.",
    roadmap: [
      "Complete +2 in Science or Management",
      "Bachelor's in Computer Science, Statistics, or Mathematics",
      "Learn Python, R, SQL, and data analysis tools",
      "Master machine learning algorithms",
      "Build data science portfolio on Kaggle",
      "Apply for data analyst/scientist positions"
    ],
    duration: "4-5 years",
    cost: "NPR 300,000 - 600,000 for Bachelor's",
    resources: [
      "DataCamp, Coursera Data Science specializations",
      "Kaggle competitions",
      "YouTube tutorials and blogs",
      "Data science communities"
    ],
    requiredSkills: ["Python", "Statistics", "Machine Learning", "Data Visualization"],
    salary: "NPR 50,000 - 200,000 per month",
    demand: "High"
  }
];

const sampleSkills = [
  {
    name: "Python Programming",
    category: "Technical",
    description: "Learn Python programming language for software development, data science, and automation.",
    steps: [
      "Learn Python basics: variables, loops, functions",
      "Understand object-oriented programming",
      "Practice with libraries like NumPy, Pandas",
      "Build projects like web scraper or data analysis",
      "Learn frameworks like Django or Flask"
    ],
    resources: [
      "Python.org official tutorial",
      "Codecademy Python course",
      "YouTube: Corey Schafer",
      "Book: Python Crash Course"
    ],
    timeRequired: "3-4 months",
    difficulty: "Beginner"
  },
  {
    name: "Public Speaking",
    category: "Soft Skills",
    description: "Develop confidence and effectiveness in speaking to audiences.",
    steps: [
      "Join Toastmasters club",
      "Practice speaking in front of mirror",
      "Record and review your speeches",
      "Volunteer for presentations",
      "Get feedback and improve"
    ],
    resources: [
      "Toastmasters Nepal",
      "TED Talks for inspiration",
      "Online courses on public speaking",
      "Communication workshops"
    ],
    timeRequired: "2-3 months",
    difficulty: "Beginner"
  },
  {
    name: "Web Development",
    category: "Technical",
    description: "Learn to build modern websites and web applications.",
    steps: [
      "Learn HTML, CSS, JavaScript fundamentals",
      "Master React.js or Vue.js",
      "Learn backend with Node.js",
      "Understand databases (MongoDB, PostgreSQL)",
      "Build full-stack projects"
    ],
    resources: [
      "freeCodeCamp",
      "The Odin Project",
      "MDN Web Docs",
      "YouTube tutorials"
    ],
    timeRequired: "6-8 months",
    difficulty: "Intermediate"
  }
];

const sampleArticles = [
  {
    title: "Top 10 In-Demand Careers in Nepal for 2024",
    category: "Career Tips",
    content: "Full article content about in-demand careers in Nepal including IT, healthcare, and engineering sectors...",
    excerpt: "Discover the most promising career paths in Nepal's growing economy with high job prospects and competitive salaries.",
    author: "Career Expert",
    date: new Date("2024-01-15"),
    readTime: "8 min read"
  },
  {
    title: "Complete Guide to Studying in Australia",
    category: "Study Abroad",
    content: "Detailed guide about studying in Australia including universities, costs, scholarships, and visa process...",
    excerpt: "Everything Nepali students need to know about pursuing higher education in Australia - from application to arrival.",
    author: "Education Counselor",
    date: new Date("2024-01-10"),
    readTime: "12 min read"
  },
  {
    title: "How to Choose the Right Career Path",
    category: "Career Tips",
    content: "Step-by-step guide to help students identify their strengths, interests, and choose a suitable career...",
    excerpt: "A comprehensive framework for making informed career decisions based on your personality, skills, and market demand.",
    author: "Career Coach",
    date: new Date("2024-01-05"),
    readTime: "6 min read"
  },
  {
    title: "Scholarship Opportunities for Nepali Students",
    category: "Study Abroad",
    content: "List of available scholarships for Nepali students in different countries with application tips...",
    excerpt: "Don't let financial constraints hold you back. Explore these scholarship options for studying abroad.",
    author: "Financial Aid Expert",
    date: new Date("2024-01-01"),
    readTime: "10 min read"
  }
];

module.exports = { sampleCareers, sampleSkills, sampleArticles };