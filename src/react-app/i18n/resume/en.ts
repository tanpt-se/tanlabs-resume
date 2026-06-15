import type { ResumeContent } from "../types";

export const resumeEn: ResumeContent = {
	profile: {
		name: "Phạm Trọng Tận",
		title: "React Native Lead / Frontend Leader",
		location: "Tay Hoa - Dak Lak",
		phone: "(+84) 378 542 540",
		email: "phamtrongtandhcn2@gmail.com",
		eyebrow: "Lead Frontend Engineer",
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
			company: "AMAX",
			market: "Japan",
			period: "Mar 2024 – Mar 2025",
			domain: "Real Estate",
			description:
				"Developed A-NAVI, an owner-facing rental property management application designed to improve customer satisfaction and streamline rental management operations for a growing number of properties and property owners. The system included a React Native mobile application, responsive web interfaces, backend APIs, and admin-related modules to support rental data, contracts, owner communication, and operational workflows.",
			techStack: [
				"Next.js",
				"React Native",
				"React Query",
				"Redux Toolkit",
				"NestJS",
				"PostgreSQL",
				"AWS",
				"GitLab CI",
				"Firebase",
				"Figma",
				"Axios",
				"LiveChat",
			],
			position: "Frontend & Mobile Leader",
			teamSize: "5 members",
			responsibilities: [
				"Led Frontend & Mobile development: Steered technical direction, established code architectures, and managed delivery planning for a 5-member team.",
				"Resource Efficiency: Spearheaded the integration of WebView within React Native to reuse Web UI layouts, reducing mobile development effort by 80% and accelerating product launch.",
				"Quality Optimization: Set up automated code quality checks by integrating ESLint/Prettier into GitLab CI, successfully cutting down team review effort by 20%.",
				"UI/UX Implementation: Collaborated with designers to review Figma technical feasibility, converting complex designs into high-performance, production-ready web and mobile interfaces.",
				"Feature Integration: Integrated LiveChat.com SDK across platforms to support real-time customer communication and boost user engagement.",
			],
		},
		{
			name: "AMO",
			company: "Penta Security",
			market: "South Korea",
			period: "Jul 2023 – Feb 2025",
			domain: "Automotive & IoT",
			description:
				"Developed a vehicle monitoring system integrating OBD II devices with a React Native dashboard to capture and visualize real-time vehicle data. The project served as a Proof of Concept (PoC) leveraging Web3 technology to enable users to connect their vehicles, track driving behavior, and earn rewards through on-chain interactions.",
			techStack: [
				"React",
				"React Native",
				"React Query",
				"Redux Toolkit",
				"NestJS",
				"PostgreSQL",
				"AWS",
				"GitLab CI",
				"Firebase",
				"Figma",
				"Bluetooth",
				"Web3",
			],
			position: "Sub-Technical Leader",
			teamSize: "5 members",
			responsibilities: [
				"Technical Leadership & R&D: Steered the technical direction, established mobile architecture from scratch, and managed delivery planning for the connected-vehicle PoC. Supported long-term R&D planning and technical validation.",
				"Cross-Border Collaboration: Coordinated directly with backend teams and the South Korea Lab team to validate system feasibility, data flows, and encryption approaches.",
				"Hardware & IoT Integration: Implemented native Bluetooth connectivity to sync real-time OBD II diagnostic data directly with mobile devices, building real-time dashboards for trip statistics and driving behavior visualization.",
				"Security & Web3 Implementation: Applied D.AMO-based data encryption for secure API data transmission; integrated Web3 APIs to link driving activities with blockchain reward mechanisms.",
				"UI/UX Delivery: Evaluated Figma designs for technical feasibility, converting complex wireframes into high-performance, production-quality mobile interfaces.",
			],
		},
		{
			name: "Jinjer Admin",
			company: "Jinjer",
			market: "Japan",
			period: "Sep 2022 – Jun 2024",
			domain: "HR Tech & Enterprise SaaS",
			description:
				"Developed Jinjer Admin from scratch, an enterprise internal administration platform designed to help operation teams manage customer and end-user support workflows. The system focused on admin operations, account management, role-based access control, authentication, security/session handling, notifications, and email-related workflows.",
			techStack: [
				"Vue.js",
				"TypeScript",
				"Pinia",
				"Laravel",
				"MySQL",
				"AWS",
				"Jest",
				"Figma",
				"GitHub Copilot",
				"Axios",
			],
			position: "Technical Leader",
			teamSize: "20 members",
			responsibilities: [
				"Technical Leadership & Architecture: Led a 20-member fullstack development team; owned the technical direction, system architecture, database schema design, and secure role-based access control (RBAC) mechanisms.",
				"DevOps Optimization: Streamlined CI/CD deployment pipelines, successfully reducing system deployment time by 30%.",
				"Frontend Architecture (From Scratch): Architected the frontend application using Vue 3 and TypeScript; established core project structures, optimized state management via Pinia, and enforced strict frontend permission-aware routing.",
				"Quality Assurance & AI Augmentation: Formulated and maintained robust unit testing strategies, leveraging GitHub Copilot to achieve ~90% test coverage across critical modules.",
				"Performance & UI Delivery: Reviewed Figma designs for technical feasibility, converting complex layouts into high-performance, production-quality interfaces while optimizing rendering and image loading speeds.",
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
			url: "https://interstate21.com/certificate/?code=5G27SCF",
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
				{ name: "React", years: 7 },
				{ name: "Next.js", years: 4 },
				{ name: "Vue.js", years: 3 },
				{ name: "TypeScript", years: 6 },
			],
		},
		{
			id: "mobile",
			skills: [{ name: "React Native", years: 7 }],
		},
		{
			id: "stateManagement",
			skills: [
				{ name: "Redux Toolkit", years: 5 },
				{ name: "React Query", years: 4 },
				{ name: "Pinia", years: 3 },
			],
		},
		{
			id: "backend",
			skills: [{ name: "NestJS", years: 4 }],
		},
		{
			id: "cloud",
			skills: [{ name: "AWS", years: 4 }],
		},
		{
			id: "devops",
			skills: [{ name: "GitLab CI", years: 4 }],
		},
		{
			id: "uiUx",
			skills: [{ name: "Figma", years: 5 }],
		},
		{
			id: "methodology",
			skills: [{ name: "Agile/Scrum", years: 7 }],
		},
	],
};
