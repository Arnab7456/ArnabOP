import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Target } from "lucide-react";

export const DATA = {
  name: "Arnab Das",
  initials: "DV",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer & DevOps Practitioner | Active GitHub Contributor | Engaging Tech Enthusiast on Twitter",
  summary:
    "I'm a final-year BTech student in Information Technology at GNIT, focused on [Full Stack Web Development with expertise in the MERN stack  & also building skills in Cloud and DevOps](/#skills), working on continuous integration, deployment pipelines, and containerization to enhance software delivery efficiency. My technical foundation includes Java, Typescript, and Go, which I use for both backend development and solving complex problems.",
  avatarUrl: "/profile.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "AWS",
    "GCP",
    "Argo CD",
    "Jenkins",
    "Terraform"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@arnabdas2753" , icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arnabdas2753@gmail.com",
    tel: "91+ 9064957213",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Arnab7456",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arnab-das7456/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Arnab_devops",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "arnabdas2753@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Upwork",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/upwork.png",
      start: "January 2022",
      end: "present",
      description:
        "Developed and architected cloud-native applications using the MERN stack, with a focus on DevOps practices. Implemented CI/CD pipelines with ArgoCD, and deployed solutions on AWS and Google Cloud Platform (GCP).",
    },
    {
      company: "GNIT",
      badges: [],
      href: "https://gnit.ac.in/",
      location: "on site",
      title: "Full stack web devloper intern",
      logoUrl: "/gnit.png",
      start: "August 2023",
      end: "October 2023",
      description:
        "full stack web development project which is aimed to add new features and interactive UI/UX to the college website. As part of the project, he designed various banners, mailers by understanding the design briefs and promo specifications",
    },
    
    {
      company: "GirlScript Summer of Code",
      href: "https://gssoc.girlscript.tech/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributer",
      logoUrl: "/gssoc.jpg",
      start: "sep 2024",
      end: "Oct 2024",
      description:
        "Contributed to MERN and DevOps-based repositories, ranking 429th out of over 17,000 contributors.",
    },
    {
      company: "Google Developer Student Club GNIT",
      href: "https://www.linkedin.com/company/gdgc-gnit/",
      badges: [],
      location: "Remote",
      title: "Cloud & DevOps Lead , Cloud Facilitator",
      logoUrl: "/gdsc.jpg",
      start: "Aug 2023",
      end: "July 2024",
      description:
        "Pioneered knowledge-sharing sessions on Cloud and DevOps within the GNIT student community. Guided over 120 students in mastering Google Cloud Platform through workshops and hands-on labs.",
    },
  ],
  education: [
    {
      school: "Guru Nanak Institute of Technology",
      href: "https://gnit.ac.in/",
      degree: "Btech Information Technology, CGPA: 8.62",
      logoUrl: "/gnit.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Kalyangarh Vidyamandir",
      href: "/",
      degree: "class X, XII ",
      logoUrl: "/waterloo.png",
      start: "2010",
      end: "2020",
    }
  ],
  projects: [
    {
      title: "Nest Scout",
      href: "https://real-estate-full-stack-app.onrender.com/",
      dates: "may 2024 - june 2024",
      active: true,
      description:
        "developed a MERN Stack web application platform that enables users to rent, buy, or sell flats and houses with minimal brokerage fees, offering a cost-effective solution",
      technologies: [
        "React js",
        "Javascript",
        "Mongodb",
        "Prisma",
        "TailwindCSS",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://real-estate-full-stack-app.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/real.jpg",
      video:
        "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yt.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "ACM (Association for Computing Machinery) B.tech Project Contest 2024",
      dates: "May 04 2024",
      location: "Kolkata, India",
      description:
        "Developed a web application and machine learning model to enhance intelligent tutoring",
      image:
        "https://kolkata.acm.org/w/assets/img/slider/acm_drop.png",
      links: [],
    },
    {
      title: "Hack-O-NIT",
      dates: "May 14th - 15th, 2024",
      location: "Kolkata, India",
      description:
        "Developed a Web application which delivers university campus wide events in real time to all students.",
      image:
        "/nit.jpg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    }
  ],
} as const;
