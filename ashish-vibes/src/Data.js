export const ProjectsData = [
  {
    title: "Title 1",
    image: "https://i.ibb.co/PmwMRCf/logo.png",
    description: "Description for item 1",
  },
  {
    title: "Title 2",
    image: "https://i.ibb.co/PmwMRCf/logo.png",
    description: "Description for item 2",
  },
  {
    title: "Title 3",
    image: "https://i.ibb.co/PmwMRCf/logo.png",
    description: "Description for item 3",
  },
];

//filter Data
export const filterData = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "2",
    title: "Development",
  },
  {
    id: "3",
    title: "Business",
  },
  {
    id: "4",
    title: "Design",
  },
  {
    id: "5",
    title: "Lifestyle",
  },
];

export const apiUrl = {
  data: {
    Development: [
      {
        id: "WD101",
        title: "Web Development Fundamentals",
        description:
          "This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Web%20Development%20Fundamentals.png",
          alt: "Web Development Fundamentals",
        },
      },
      {
        id: "DS201",
        title: "Data Science Essentials",
        description:
          "This course provides an introduction to the fundamental concepts and techniques used in data science. Students will learn how to collect, clean, analyze, and visualize data using popular tools and programming languages like Python and R.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Data%20Science%20Essentials.png",
          alt: "Data Science Essentials",
        },
      },
      {
        id: "ST301",
        title: "Software Testing Fundamentals",
        description:
          "This course covers the basics of software testing, including test planning, test case design, test execution, and defect management. Students will learn how to use popular testing frameworks and tools to ensure the quality and reliability of software applications.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Software%20Testing%20Fundamentals.png",
          alt: "Software Testing Fundamentals",
        },
      },
      {
        id: "MD401",
        title: "Mobile App Development with React Native",
        description:
          "This course teaches students how to build native mobile apps using the React Native framework. Students will learn how to create cross-platform apps that work on both iOS and Android devices, using a single codebase.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Mobile%20App%20Development%20With%20React%20Native.png",
          alt: "Mobile App Development with React Native",
        },
      },
      {
        id: "DO501",
        title: "DevOps for Agile Teams",
        description:
          "This course provides an overview of DevOps principles and practices, with a focus on how they can be applied in agile software development teams. Students will learn how to use popular tools and techniques for continuous integration, continuous delivery, and automated testing.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Development/Devops%20for%20Agile%20Teams.png",
          alt: "DevOps for Agile Teams",
        },
      },
    ],
    Business: [
      {
        id: "MK101",
        title: "Introduction to Marketing",
        description:
          "This course provides an overview of marketing principles and practices, including market research, segmentation, targeting, and positioning. Students will learn how to create effective marketing plans and campaigns, using both traditional and digital marketing techniques.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Introduction%20To%20Marketing.png",
          alt: "Introduction to Marketing",
        },
      },
      {
        id: "LD201",
        title: "Leadership Development",
        description:
          "This course covers the fundamental concepts and skills required for effective leadership, including communication, motivation, delegation, and team building. Students will learn how to lead teams and organizations, and how to handle common leadership challenges.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Leadership%20Development.png",
          alt: "Leadership Development",
        },
      },
      {
        id: "FN301",
        title: "Finance for Non-Financial Managers",
        description:
          "This course provides an introduction to finance concepts and tools for non-financial managers. Students will learn how to read and interpret financial statements, analyze financial data, and make informed financial decisions.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Finance%20for%20Non-Financial%20Managers.png",
          alt: "Finance for Non-Financial Managers",
        },
      },
      {
        id: "OM401",
        title: "Operations Management Fundamentals",
        description:
          "This course covers the basics of operations management, including process design, capacity planning, inventory management, and quality control. Students will learn how to optimize operations to improve efficiency, productivity, and customer satisfaction.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Operations%20Management%20Fundamentals.png",
          alt: "Operations Management Fundamentals",
        },
      },
      {
        id: "PM501",
        title: "Project Management Essentials",
        description:
          "This course provides an overview of project management principles and techniques, including project planning, scheduling, budgeting, risk management, and stakeholder communication. Students will learn how to manage projects effectively, using both traditional and agile project management approaches.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Business/Project%20Management%20Essentials.png",
          alt: "Project Management Essentials",
        },
      },
    ],
    Design: [
      {
        id: "GD101",
        title: "Graphic Design Fundamentals",
        description:
          "This course covers the basic principles of graphic design, including typography, color theory, layout design, and image manipulation. Students will learn how to use industry-standard design software to create effective visual designs for print and digital media.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Design/Graphic%20Design%20Fundamentals.png",
          alt: "Graphic Design Fundamentals",
        },
      },
      {
        id: "UX201",
        title: "User Experience Design",
        description:
          "This course covers the fundamentals of user experience (UX) design, including user research, interaction design, information architecture, and usability testing. Students will learn how to design digital products and services that meet user needs and business goals.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Design/User%20Experience%20Design.png",
          alt: "User Experience Design",
        },
      },
      {
        id: "ID301",
        title: "Industrial Design Essentials",
        description:
          "This course covers the fundamental concepts and techniques used in industrial design, including sketching, prototyping, modeling, and design for manufacturing. Students will learn how to create innovative and functional products that meet user needs and market demands.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Design/Industrial%20Design%20Essentials.png",
          alt: "Industrial Design Essentials",
        },
      },
      {
        id: "FD401",
        title: "Fashion Design Principles",
        description:
          "This course covers the principles and practices of fashion design, including fashion illustration, textile design, pattern making, and garment construction. Students will learn how to design and produce original and stylish clothing for different markets and occasions.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Design/Fashion%20Design%20Principles.png",
          alt: "Fashion Design Principles",
        },
      },
    ],
    Lifestyle: [
      {
        id: "LC101",
        title: "Cooking Basics",
        description:
          "This course provides an introduction to cooking techniques, ingredients, and flavors. Students will learn how to plan and prepare meals, using simple recipes and kitchen tools. The course covers a range of cuisines and dietary preferences.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Cooking%20Basics.png",
          alt: "Cooking Basics",
        },
      },
      {
        id: "LF201",
        title: "Fitness for Life",
        description:
          "This course covers the fundamentals of fitness, including exercise principles, workout planning, and nutrition. Students will learn how to build strength, endurance, and flexibility, and how to create a healthy and sustainable lifestyle.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Fitness%20For%20Life.png",
          alt: "Fitness for Life",
        },
      },
      {
        id: "LT301",
        title: "Travel Photography",
        description:
          "This course covers the fundamentals of travel photography, including composition, lighting, and storytelling. Students will learn how to use a range of camera equipment and editing software to capture and share their travel experiences.",
        image: {
          url: "https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Travel%20Photography.png",
          alt: "Travel Photography",
        },
      },
    ],
  },
};

export const ServiceCard = [
  {
    image: "https://i.ibb.co/1qCzZRw/development-4536630-1280.png",
    title: "Web Development",
    description:
      "I create dynamic, user-friendly websites tailored to your needs. Whether it's a sleek business site or an interactive e-commerce platform, I ensure seamless functionality and a smooth user experience.",
  },
  {
    image: "https://i.ibb.co/pZQCDjS/ads.png",
    title: "Advertisement",
    description:
      "I craft compelling campaigns that captivate audiences and drive results. From conceptualizing innovative ideas to executing strategic plans, my goal is to elevate your brand’s presence.",
  },
  {
    image: "https://i.ibb.co/XFs30bD/graphics-3.png",
    title: "Design",
    description:
      "I blend creativity with functionality to produce visually stunning and effective solutions. I create eye-catching posters, sleek web pages, and memorable logos that stand out. My focus is on aesthetics and usability to bring your vision to life.",
  },
];

export const educationData = [
  {
    "company": "ABC University",
    "jobTitle": "Bachelor of Science in Computer Science",
    "years": "2015 - 2019",
    "description": "Studied core computer science subjects including algorithms, data structures, and software engineering."
  },
  {
    "company": "XYZ Institute",
    "jobTitle": "Master of Science in Software Engineering",
    "years": "2019 - 2021",
    "description": "Specialized in software development methodologies, project management, and advanced programming."
  },
  {
    "company": "XYZ InstituteInstituteInstitute",
    "jobTitle": "Master of Science in Software Engineering",
    "years": "2019 - 2021",
    "description": "Specialized in software development methodologies, project management, and advanced programming."
  }
];

export const experienceData = [
  {
    "company_name": "Bahwan Cybertek PVT LTD",
    "position": "Software Engineer",
    "start_date": "2022-07-22",
    "end_date": "Present",
    "responsibilities": [
      "Designed and implemented software solutions for product features.",
      "Collaborated with cross-functional teams to deliver projects on time.",
      "Identified and resolved technical issues in a timely manner.",
      "Contributed to the improvement of development processes and methodologies."
    ],
    "achievements": [
      "Received Employee of the Month award for outstanding performance.",
      "Reduced system downtime by 20% through implementation of performance optimization strategies."
    ]
  },
  {
    "company_name": "Another Company",
    "position": "Another Position",
    "start_date": "2020-01-01",
    "end_date": "2022-06-30",
    "responsibilities": [
      "Developed new features for the company's flagship product.",
      "Participated in code reviews and provided constructive feedback.",
      "Researched and implemented emerging technologies to improve product functionality."
    ],
    "achievements": [
      "Led a team that successfully launched a major product update ahead of schedule.",
    ]
  },
];
