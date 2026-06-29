import type { ResumeContent } from "../types";

import { ANAVI_STORE_COLLECTED } from "./anavi-store-collected";
import { JINJER_STORE_COLLECTED } from "./jinjer-store-collected";
import { KIKKER_STORE_COLLECTED } from "./kikker-store-collected";
import { REDCAP_STORE_COLLECTED } from "./redcap-store-collected";
import { UPRIDE_STORE_COLLECTED } from "./upride-store-collected";

export const resumeContent: ResumeContent = {
	profile: {
		name: "Phạm Trọng Tận",
		title: "React Native Lead / Frontend Leader",
		location: "Tay Hoa - Dak Lak",
		phone: "(+84) 378 542 540",
		email: "phamtrongtandhcn2@gmail.com",
		photoCaption:
			"Phạm Trọng Tận presents enterprise web and mobile engineering at an internal technical sharing session.",
		birthDate: "Sep 30, 1997",
	},
	summary: [
		"Senior Technical Leadership: 7+ years of experience building scalable enterprise web and mobile applications; successfully led cross-functional teams of up to 20 engineers in Agile/Scrum environments for global markets.",
		"Architecture & Engineering Excellence: Expert in front-end system design, reusable component libraries, and automated CI/CD quality gates using React, Next.js, Vue.js, TypeScript, and modern state management.",
		"UX Engineering Mindset: Strong UI/UX sense with hands-on experience bridging the gap between Figma designs and technical feasibility to deliver real-time dashboards and complex workflow interfaces.",
	],
	experiences: [
		{
			company: "GCode INC, Ha Noi",
			role: "Frontend / React Native Lead",
			period: "Apr 2025 – Mar 2026",
			highlights: [
				"Led React Native and frontend delivery for Japanese enterprise clients, owning mobile architecture, technical direction, implementation quality, and delivery planning.",
				"Managed mobile production release support, including Android/iOS build verification, deployment coordination, app store publishing support, and post-release monitoring.",
				"Defined frontend/mobile development standards, reusable component strategy, coding practices, and scalable team workflows.",
				"Reviewed Figma designs, checked technical feasibility, and ensured high-quality implementation across web and mobile interfaces.",
				"Coordinated with backend, QA, UX, and client stakeholders to deliver stable production-ready features aligned with business requirements.",
			],
		},
		{
			company: "FPT Software, Quy Nhon, Gia Lai",
			role: "Frontend / React Native Lead",
			period: "Sep 2022 – Mar 2025",
			highlights: [
				"Led frontend and React Native development for enterprise Japanese, Singaporean, and Korean clients.",
				"Built scalable web and cross-platform mobile applications using React, React Native, Next.js, TypeScript, and cloud-based services.",
				"Acted as frontend/mobile owner for assigned modules, making technical decisions and coordinating implementation with backend, QA, UX, and client-side teams.",
				"Improved mobile performance, reusable component architecture, and production delivery quality across web and mobile platforms.",
				"Mentored junior developers through structured code reviews, technical guidance, and frontend/mobile development best practices.",
				"Served as a Guest Lecturer at Quy Nhon University and FPT University, training IT students on React Native and modern Front-End development (2023 – 2024).",
				"Participated in the bidding and pre-sales process, successfully winning over 4 major projects for the company (including LG CNS and Honda).",
				"Led the Training Department at the Business Unit level, establishing technical playbooks and scaling learning programs for engineering teams (2023 - 2025).",
			],
		},
		{
			company: "Infodation, Khanh Hoa",
			role: "React Native Engineer",
			period: "Aug 2019 – Mar 2022",
			highlights: [
				"Developed and maintained cross-platform mobile and web applications for Dutch energy management systems.",
				"Built responsive dashboards and mobile features using React Native, Angular, TypeScript, and Azure-based services.",
				"Contributed to React Native architecture adoption for cross-platform deployment and code reuse.",
				"Migrated legacy JavaScript codebase to TypeScript, improving maintainability, type safety, and long-term scalability.",
				"Collaborated directly with European stakeholders to clarify requirements, improve UX, and optimize system performance.",
			],
		},
	],
	projects: [
		{
			name: "A-NAVI",
			company: "AMAX Co., Ltd.",
			clientUrl: ANAVI_STORE_COLLECTED.websiteUrl,
			market: "Japan",
			period: "Apr 2025 – Mar 2026",
			domain: "Real Estate",
			description:
				"Developed A-NAVI, a specialized PropTech platform and digital asset management portal designed exclusively for the clients and investors of AMAX Co., Ltd. (Tokyo, Japan). The system establishes a direct connection between the property management company and property owners to digitize traditional workflows and optimize the real estate investment experience, with a primary focus on the pre-owned one-room apartment segment in Tokyo. By shifting from manual processes to a digitized ecosystem, the project successfully streamlined administrative procedures, enhanced data transparency, and drove long-term customer satisfaction and retention.",
			storeLinks: [
				{
					platform: "google-play",
					title: "A-NAVI on Google Play",
					url: ANAVI_STORE_COLLECTED.android.url,
				},
				{
					platform: "app-store",
					title: "A-NAVI on App Store",
					url: ANAVI_STORE_COLLECTED.ios.url,
				},
			],
			techStack: ["Swift", "Kotlin", "React Native CLI", "Socket.IO", "Agile/Scrum", "Jira", "Figma", "GitLab", "NestJS", "Firebase", "AWS", "Next.js", "Tailwind CSS", "Redux Saga", "React Query", "PostgreSQL"],
			position: "React Native Lead / Frontend Leader",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "BE" },
				{ count: 1, role: "SA" },
				{ count: 2, role: "FE" },
				{ count: 3, role: "QC" },
			],
			responsibilities: [
				"Technical Leadership: Led a 5-member Frontend & Mobile team to develop a comprehensive PropTech platform (React Native, Web, Backend APIs, Admin modules), overseeing technical architecture and delivery planning.",
				"Core Feature Development: Engineered key functionalities including real-time rental tracking, automated tax reporting for Japanese investors, and a secure digital repository for paperless contract management.",
				"Resource Optimization: Spearheaded WebView integration within React Native to reuse Web UI layouts, slashing mobile development effort by 80% and accelerating product launch.",
				"Quality Assurance: Automated code quality checks by integrating ESLint/Prettier into GitLab CI, successfully cutting down team code-review effort by 20%.",
				"UI/UX & System Integration: Translated complex Figma designs into high-performance, production-ready interfaces and integrated the LiveChat SDK across platforms to boost real-time customer engagement.",
			],
		},
		{
			name: "Honda 26M",
			company: "Honda",
			clientUrl: "https://www.honda.com",
			market: "Global",
			period: "Sep 2024 – Mar 2025",
			domain: "System Upgrade (Automotive)",
			description:
				"Authored system analysis and design documentation to upgrade Honda clients running version 23M (in production since 2023) to version 26M without disrupting live operations. Ensured consistency across versions and prevented system drift; produced data-flow diagrams and behavior diagrams for improvement and update workflows.",
			techStack: ["Figma", "UML", "Excel", "Jira", "Agile/Scrum", "GitHub"],
			position: "Business Analyst",
			teamMembers: [
				{ count: 3, role: "PM" },
				{ count: 5, role: "BA" },
			],
			responsibilities: [],
		},
		{
			name: "Maintage",
			company: "MASS Co., Ltd.",
			clientUrl: "https://www.mass.co.jp/",
			market: "Japan",
			period: "Jun 2024 – Sep 2024",
			domain: "Maintenance Management",
			description:
				"Contributed to the development of MAINTAGE, a comprehensive maintenance management platform by MASS Co., Ltd. (Japan). The system was designed to digitize and optimize the end-to-end maintenance workflow for facilities and infrastructure. By shifting from manual scheduling and paper-based reporting to a centralized digital ecosystem, the platform significantly enhanced operational transparency, reduced equipment downtime, and facilitated efficient data-driven decision-making for facility managers.",
			techStack: ["Angular", "RxJS", "Agile/Scrum", "Jira", "Figma", "GitLab", "Tailwind CSS", "PostgreSQL"],
			position: "Frontend Team Member",
			teamMembers: [
				{ count: 3, role: "FE" },
				{ count: 3, role: "BE" },
				{ count: 1, role: "PM" },
				{ count: 4, role: "QC" },
			],
			responsibilities: [],
		},
		{
			name: "Research 360",
			company: "LG CNS",
			clientUrl: "https://www.lgcns.com/",
			market: "South Korea",
			period: "Sep 2023 – Sep 2024",
			domain: "R&D (Survey Management & Operations)",
			description:
				"Contributed to the development of RESEARCH 360, a strategic research intelligence platform by LG CNS. The project was designed to transform traditional research management into a digitized, data-driven ecosystem. By providing a centralized hub for managing the entire research lifecycle, the platform significantly enhanced collaborative efficiency and enabled organizations to leverage AI-powered analytics for faster, more accurate strategic decision-making.",
			techStack: ["React", "Redux Toolkit", "Agile/Scrum", "Jira", "Figma", "GitHub", "AWS", "Tailwind CSS", "PostgreSQL"],
			position: "Frontend Lead",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "BE" },
				{ count: 3, role: "FE" },
			],
			responsibilities: [],
		},
		{
			name: "Jinjer Admin",
			company: "Jinjer Co., Ltd.",
			clientUrl: JINJER_STORE_COLLECTED.websiteUrl,
			market: "Japan",
			period: "Jun 2023 – Jun 2024",
			domain: "HR Tech & Enterprise SaaS",
			description:
				"Contributed to the development of JINJER ADMIN, the centralized administration portal for the leading cloud-based integrated HR management platform (HCM) by jinjer Co., Ltd. (Japan). The platform streamlines the entire HR lifecycle—from personnel data and attendance tracking to payroll computation and talent evaluation—into a single unified database. The Admin portal empowers HR professionals and enterprise managers to automate routine tasks, ensure compliance, and make data-driven decisions seamlessly.",
			storeLinks: [
				{
					platform: "web",
					title: "Jinjer HCM Portal",
					url: JINJER_STORE_COLLECTED.webApp.url,
				},
			],
			techStack: ["Vue.js", "Pinia", "Agile/Scrum", "Jira", "Figma", "GitHub", "AWS", "Tailwind CSS", "Docker", "PostgreSQL"],
			position: "Technical Leader",
			teamMembers: [
				{ count: 1, role: "SA" },
				{ count: 2, role: "PM" },
				{ count: 1, role: "Sub PM" },
				{ count: 3, role: "QC" },
				{ count: 3, role: "FE" },
				{ count: 3, role: "BE" },
				{ count: 2, role: "BA" },
			],
			responsibilities: [
				"Technical Leadership & Architecture: Led a 20-member fullstack development team; owned the technical direction, system architecture, database schema design, and secure role-based access control (RBAC) mechanisms.",
				"DevOps Optimization: Streamlined CI/CD deployment pipelines, successfully reducing system deployment time by 30%.",
				"Frontend Architecture (From Scratch): Architected the frontend application using Vue 3 and TypeScript; established core project structures, optimized state management via Pinia, and enforced strict frontend permission-aware routing.",
				"Quality Assurance & AI Augmentation: Formulated and maintained robust unit testing strategies, leveraging GitHub Copilot to achieve ~90% test coverage across critical modules.",
				"Performance & UI Delivery: Reviewed Figma designs for technical feasibility, converting complex layouts into high-performance, production-quality interfaces while optimizing rendering and image loading speeds.",
			],
		},
		{
			name: UPRIDE_STORE_COLLECTED.projectName,
			company: UPRIDE_STORE_COLLECTED.developer,
			clientUrl: UPRIDE_STORE_COLLECTED.websiteUrl,
			market: UPRIDE_STORE_COLLECTED.market,
			period: UPRIDE_STORE_COLLECTED.period,
			domain: "Creative Arts & Community",
			description:
				"Developed UPRIDE, a global creative arts platform and social network by U Trend, designed to empower artists and celebrate cultural diversity. The platform serves as a digital ecosystem that connects creative professionals with audiences and investors, aiming to foster artistic inspiration and bring creative projects to life through community-driven support and sponsorship.",
			storeLinks: [
				{
					platform: "google-play",
					title: "UPride on Google Play",
					url: UPRIDE_STORE_COLLECTED.android.url,
				},
				{
					platform: "app-store",
					title: "UPride on App Store",
					url: UPRIDE_STORE_COLLECTED.ios.url,
				},
			],
			techStack: ["Agile/Scrum", "Lark", "Jira", "D3/Chart.js", "Figma", "GitHub", "Firebase", "React Native CLI", "Socket.IO", "AWS", "Tailwind CSS", "Redux Saga", "PostgreSQL"],
			position: "React Native Team Member",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "BE" },
				{ count: 2, role: "Mobile" },
			],
			responsibilities: [],
		},
		{
			name: "AMO",
			company: "Penta Security",
			clientUrl: "https://www.pentasecurity.com",
			market: "South Korea",
			period: "Aug 2022 – May 2023",
			domain: "R&D (Automotive & IoT)",
			description:
				"Contributed to the AMO Project, an innovative blockchain-based automotive data platform developed by Penta Security (AMO Labs). The project aimed to establish a decentralized \"Car Data Market,\" enabling the secure sharing, monetization, and exchange of vehicle data. By leveraging blockchain technology and advanced cryptography, the platform built a smart mobility ecosystem where drivers, auto manufacturers, and service providers can seamlessly interact, ensuring that user data is fairly valued and securely utilized.",
			techStack: ["React", "React Native", "React Native CLI", "Web3", "Socket.IO", "OBD II", "Redux Saga", "Redux Toolkit", "Mantine", "Agile/Scrum", "Jira", "D3/Chart.js", "Figma", "GitHub", "NestJS", "Azure", "PostgreSQL"],
			position: "React Native Lead",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "QC" },
				{ count: 2, role: "React Native Devs" },
			],
			responsibilities: [],
		},
		{
			name: "Redcap Mobility",
			company: "RedCapTour Co., Ltd.",
			clientUrl: REDCAP_STORE_COLLECTED.websiteUrl,
			market: "South Korea",
			period: "Apr 2022 – Jul 2022",
			domain: "Fleet Mobility & Telematics",
			description:
				"Developed 레드캡 모빌리티 (RedCap Mobility), a comprehensive B2B corporate fleet management and mobility platform built in collaboration with LG Electronics (LGE) for RedCapTour. The solution was designed to digitize traditional vehicle management operations, optimizing operational efficiency by eliminating time-consuming manual paperwork and physical key handovers. By shifting to a smart management ecosystem, the platform successfully streamlined corporate car-sharing and integrated vehicle control for diverse enterprise clients.",
			storeLinks: [
				{
					platform: "google-play",
					title: "Redcap Mobility on Google Play",
					url: REDCAP_STORE_COLLECTED.android.url,
				},
				{
					platform: "app-store",
					title: "Redcap Mobility on App Store",
					url: REDCAP_STORE_COLLECTED.ios.url,
				},
			],
			techStack: ["Agile/Scrum", "Jira", "D3/Chart.js", "Figma", "GitHub", "GraphQL", "Firebase", "React Native CLI", "Socket.IO", "Redux Saga"],
			position: "React Native Lead",
			teamMembers: [],
			responsibilities: [
				"Mobile & Frontend Leadership: Led React Native delivery for the RedCap Mobility (RMS) app, coordinating architecture, implementation quality, and release planning with Korean client and LGE stakeholders.",
				"Fleet Operations UX: Built reservation, dispatch, return, and vehicle-control flows for corporate car-sharing and fleet monitoring use cases.",
				"Real-Time Monitoring: Implemented dashboards and mobile views for live vehicle status, trip records, and operational visibility across shared fleet assets.",
				"Cross-Team Collaboration: Worked with backend, QA, and LG Electronics partners to validate telematics integrations, data flows, and production readiness.",
				"UI/UX Delivery: Reviewed Figma designs for technical feasibility and converted complex fleet-management workflows into stable, production-quality interfaces.",
			],
		},
		{
			name: "Kikker Energie",
			company: "Kikker Energie B.V.",
			clientUrl: KIKKER_STORE_COLLECTED.websiteUrl,
			market: "Netherlands / EU",
			period: "Aug 2019 – Mar 2022",
			domain: "Energy Management",
			description:
				"Contributed to the development of Kikker App, a smart energy management platform for Kikker Energie, a green energy supplier based in the Netherlands. Aligning with the company's core mission to actively reduce energy consumption, the platform provides end-users with real-time, data-driven insights into their gas and electricity usage. The system successfully empowered consumers to make eco-conscious decisions, optimize their consumption habits, and minimize environmental impact.",
			storeLinks: [
				{
					platform: "google-play",
					title: "Kikker Energie on Google Play",
					url: KIKKER_STORE_COLLECTED.android.url,
				},
				{
					platform: "app-store",
					title: "Kikker Energie on App Store",
					url: KIKKER_STORE_COLLECTED.ios.url,
				},
			],
			techStack: ["Revopush", "Realm DB", "Angular", "RxJS", "Agile/Scrum", "Jira", "D3/Chart.js", "SVN", "Figma", "Firebase", "React Native CLI", "Socket.IO", "Bootstrap", "Redux Saga", "Docker", "MySQL"],
			position: "Team Member → React Native Lead",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "PO" },
				{ count: 1, role: "SA" },
				{ count: 3, role: "BA" },
				{ count: 3, role: "QC" },
				{ count: 4, role: "FE" },
				{ count: 3, role: "Mobile" },
			],
			responsibilities: [],
		},
		{
			name: "Freelance & Consulting",
			company: "Independent (NDA-bound clients)",
			market: "Vietnam / Remote",
			period: "2019 – Present",
			domain: "Web & Mobile Product Development",
			description:
				"Delivered web and mobile solutions for independent clients alongside full-time roles. Engagements include MVP builds, feature delivery, performance improvements, and technical advisory. Client names and product details are not disclosed under NDA.",
			techStack: [
				"React",
				"Next.js",
				"React Native CLI",
				"Tailwind CSS",
				"Node.js",
				"Strapi",
				"WordPress",
				"PostgreSQL",
				"Supabase",
				"Firebase",
				"Cloudflare",
				"Figma",
				"Fastlane",
				"GitHub",
			],
			position: "Full-Stack / Mobile Consultant",
			teamMembers: [{ count: 1, role: "Solo or small squad" }],
			responsibilities: [
				"Scoped and delivered MVPs and feature increments for startup and small-business clients.",
				"Owned architecture, implementation, and handoff for React web and React Native mobile products.",
				"Advised on UI/UX feasibility, release readiness, and maintainable delivery practices.",
			],
		},
	],
	languages: [
		"English (Intermediate): Daily communication in Agile teams",
	],
	education: {
		school: "Telecommunications University, Nha Trang",
		url: "https://tcu.edu.vn",
		year: "2019",
		degree: "Bachelor's in Information Technology",
		photoCaption:
			"Training cooperation announcement between FPT University Quy Nhon and FPT Software Quy Nhon.",
	},
	certifications: [
		{
			name: "React Developer Expert, Interstate21",
			url: "https://www.linkedin.com/feed/update/urn:li:activity:7223362708753072128/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADU4B2UBNV9qlociQpmPluSt5nlq0ymglVc",
		},
		{
			name: "Professional Scrum Master™ I, Scrum.org",
			url: "https://www.scrum.org/certificates/959304",
		},
		{
			name: "Cloud DevOps Engineer, Udacity",
			url: "https://www.udacity.com/certificate/e/4308b242-3c02-11ee-80b3-03477b797c73",
		},
	],
	skillCategories: [
		{
			id: "frontend",
			skills: [
				{ name: "React", years: 4 },
				{ name: "Next.js", years: 2 },
				{ name: "Angular", years: 3 },
				{ name: "Vue.js", years: 1 },
				{ name: "WordPress", years: 7 },
			],
		},
		{
			id: "mobile",
			skills: [
				{ name: "React Native CLI", years: 7 },
				{ name: "Swift", years: 6 / 12 },
				{ name: "Kotlin", years: 6 / 12 },
			],
		},
		{
			id: "stateManagement",
			skills: [
				{ name: "Redux Saga", years: 6 },
				{ name: "Redux Toolkit", years: 2 },
				{ name: "RxJS", years: 3 },
				{ name: "Pinia", years: 1 },
				{ name: "React Query", years: 2 },
			],
		},
		{
			id: "uiUx",
			skills: [
				{ name: "Figma", years: 7 },
				{ name: "D3/Chart.js", years: 5 },
				{ name: "Bootstrap", years: 3 },
				{ name: "Tailwind CSS", years: 2 },
				{ name: "Mantine", years: 1 },
			],
		},
		{
			id: "backend",
			skills: [
				{ name: "Socket.IO", years: 6 },
				{ name: "NestJS", years: 2 },
				{ name: "GraphQL", years: 1 },
				{ name: "Node.js", years: 1 },
				{ name: "Strapi", years: 1 },
			],
		},
		{
			id: "database",
			skills: [
				{ name: "Realm DB", years: 3 },
				{ name: "PostgreSQL", years: 3 },
				{ name: "MySQL", years: 3 },
				{ name: "Supabase", years: 1 },
			],
		},
		{
			id: "cloud",
			skills: [
				{ name: "Firebase", years: 5 },
				{ name: "AWS", years: 2 },
				{ name: "Azure", years: 1 },
				{ name: "Cloudflare", years: 1 },
			],
		},
		{
			id: "devops",
			skills: [
				{ name: "SVN", years: 3 },
				{ name: "GitLab", years: 1 },
				{ name: "GitHub", years: 7 },
			],
		},
		{
			id: "devOps",
			skills: [
				{ name: "Revopush", years: 3 },
				{ name: "Docker", years: 4 },
				{ name: "Fastlane", years: 2 },
			],
		},
		{
			id: "methodology",
			skills: [
				{ name: "Agile/Scrum", years: 7 },
				{ name: "Jira", years: 7 },
				{ name: "Lark", years: 1 },
			],
		},
	],
};
