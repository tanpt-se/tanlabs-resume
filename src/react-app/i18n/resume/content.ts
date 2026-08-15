import type { ResumeContent } from "../types";

import { ANAVI_STORE_COLLECTED } from "./anavi-store-collected";
import { JINJER_STORE_COLLECTED } from "./jinjer-store-collected";
import { KIKKER_STORE_COLLECTED } from "./kikker-store-collected";
import { REDCAP_STORE_COLLECTED } from "./redcap-store-collected";
import { UPRIDE_STORE_COLLECTED } from "./upride-store-collected";

export const resumeContent: ResumeContent = {
	profile: {
		name: "Phạm Trọng Tận",
		title: "Frontend & React Native Lead",
		location: "Dak Lak, Viet Nam",
		phone: "(+84) 378 542 540",
		email: "phamtrongtandhcn2@gmail.com",
		birthDate: "Sep 30, 1997",
	},
	summary: [
		"Frontend & React Native Lead with 7 years building scalable web and mobile apps in React, React Native, Next.js, and TypeScript.",
		"Led Agile teams of up to 20 engineers, driving frontend architecture, code quality, technical direction, and delivery for enterprise clients in Japan, Korea, Singapore, and the Netherlands.",
		"Experienced in high-performance apps with real-time communication, BLE/IoT, offline-first architecture, and OTA, working closely with PMs, designers, QA, and global stakeholders.",
		"Passionate about scalable frontend architecture, mentoring engineers, and products that balance business goals, UX, and engineering excellence.",
	],
	experiences: [
		{
			company: "GCode INC, Ha Noi",
			role: "Frontend / React Native Lead",
			period: "Apr 2025 – Mar 2026",
			highlights: [
				"Led React Native and frontend delivery for A-NAVI (Japan), owning mobile architecture, technical direction, and delivery planning.",
				"Managed production releases — Android/iOS builds, store publishing, and post-release monitoring.",
				"Handled project proposals and estimation for new initiatives.",
				"Built and optimized gcode.jp, including SEO improvements.",
				"Reviewed Figma designs for technical feasibility and high-quality implementation.",
			],
		},
		{
			company: "FPT Software, Quy Nhon, Gia Lai",
			role: "Frontend / React Native Lead",
			period: "Sep 2022 – Mar 2025",
			highlights: [
				"Led React Native and frontend delivery for 6 projects for Japanese, Korean, and Singaporean clients (AMO, UPRIDE, Research 360, Jinjer Admin, Maintage, Honda 26M).",
				"Built scalable cross-platform mobile and web apps with React Native, React, Vue.js, TypeScript, and cloud services.",
				"Acted as frontend/mobile owner, making technical decisions and coordinating with backend, QA, UX, and client teams.",
				"Joined pre-sales and proposals that helped win major projects, including LG CNS and Honda.",
				"Mentored juniors through code reviews, technical guidance, and frontend/mobile best practices.",
				"Guest Lecturer at Quy Nhon University and FPT University on React Native and modern Front-End (2023 – 2024).",
				"Led the Business Unit Training Department, building technical playbooks and scaling learning for engineering teams (2023 – 2025).",
			],
		},
		{
			company: "Infodation, Khanh Hoa",
			role: "React Native Engineer",
			period: "Aug 2019 – Mar 2022",
			highlights: [
				"Sole React Native developer on Kikker Energie — a smart energy platform for a Dutch green supplier.",
				"Migrated the RN codebase from JavaScript to TypeScript; built real-time usage dashboards with D3.js/Chart.js.",
				"Set up OTA via Revopush (CodePush) for rapid production releases.",
				"Used Firebase for remote config, debugging, and crash monitoring; enforced ESLint/Prettier.",
				"Worked directly with European stakeholders (Design, PO, QC, BA) to refine features.",
				"Also served as Graphic Designer for UI mockups and visual assets.",
				"Mentored juniors through code reviews and knowledge-sharing sessions.",
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
				"Developed A-NAVI, a PropTech platform and digital asset portal for AMAX Co., Ltd. clients and investors (Tokyo). It connects the property manager with owners to digitize workflows and improve the investment experience, focused on pre-owned one-room apartments in Tokyo. Moving off manual processes streamlined administration, improved data transparency, and raised long-term customer satisfaction.",
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
			position: "Tech Lead",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "BE" },
				{ count: 1, role: "SA" },
				{ count: 2, role: "FE" },
				{ count: 3, role: "QC" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Oversaw architecture and delivery planning for a PropTech platform spanning React Native, Web, Backend APIs, and Admin.",
					"Engineered real-time rental tracking, automated tax reporting for Japanese investors, and secure paperless contract management.",
					"Spearheaded WebView in React Native to reuse Web UI layouts, cutting mobile effort by 80%.",
					"Leveraged Firebase for mobile monitoring, crash reporting, remote config, and FCM push notifications.",
					"Advised clients on system optimization and applied OWASP practices for application security.",
				],
				"Product Delivery & Engineering Excellence": [
					"Automated code quality by integrating ESLint/Prettier into GitLab CI, cutting code-review effort by 20%.",
					"Handled end-to-end production builds and store deployment (iOS App Store / Google Play) independently.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Translated complex Figma designs into high-performance, production-ready interfaces.",
					"Integrated the LiveChat SDK across platforms to boost real-time customer engagement.",
					"Worked with the Japanese-speaking client PM to align technical delivery with business needs.",
					"Authored system documentation; PM distributed it to the whole team.",
				],
				"Team Mentorship & Agile Coordination": [
					"Led a Frontend & Mobile team through Agile cycles, owning implementation quality and delivery schedules.",
				],
			},
		},
		{
			name: "Honda 26M",
			company: "Honda",
			clientUrl: "https://www.honda.com",
			market: "Global",
			period: "Sep 2024 – Mar 2025",
			domain: "System Upgrade (Automotive)",
			description:
				"Authored analysis and design docs to upgrade Honda clients from 23M (live since 2023) to 26M without disrupting operations. Kept versions consistent, prevented drift, and produced data-flow and behavior diagrams for upgrade workflows.",
			techStack: ["Figma", "UML", "Excel", "Jira", "Agile/Scrum", "GitHub"],
			position: "Business Analyst",
			teamMembers: [
				{ count: 3, role: "PM" },
				{ count: 5, role: "BA" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Authored analysis and design docs for upgrading Honda from 23M (live since 2023) to 26M.",
					"Produced data-flow and behavior diagrams for upgrade workflows, keeping versions consistent and preventing drift.",
					"Designed ERD and UML diagrams in Excel and Draw.io to map system relationships and behavior.",
				],
				"Product Delivery & Engineering Excellence": [
					"Ensured a non-disruptive upgrade from 23M to 26M, keeping live operations running.",
					"Used Excel to compare old vs new system behavior and create traceable specifications.",
					"Wrote user stories and acceptance criteria for development and QC.",
					"Supported UAT to validate upgrade quality.",
					"Conducted risk assessment and impact analysis for the version upgrade.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Analyzed and improved user behavior flows, acting as PO to bridge user needs with implementation.",
					"Created Figma UI mockups for the 26M upgrade as visual specs for development.",
					"Gathered requirements from Japanese and Singaporean clients with the Global PM and BA team.",
					"Facilitated demos and sprint reviews with clients and global stakeholders.",
					"Authored API specifications and Postman collections for development.",
				],
				"Team Mentorship & Agile Coordination": [
					"Ran regular Knowledge Sharing Sessions (KSS) so the team stayed aligned on system changes and upgrade strategy.",
				],
			},
		},
		{
			name: "Maintage",
			company: "MASS Co., Ltd.",
			clientUrl: "https://www.mass.co.jp/",
			market: "Japan",
			period: "Jun 2024 – Sep 2024",
			domain: "Maintenance Management",
			description:
				"Contributed to MAINTAGE, a maintenance management platform by MASS Co., Ltd. (Japan) that digitizes end-to-end facility and infrastructure workflows. Replacing manual scheduling and paper reports with a central digital system improved transparency, cut equipment downtime, and supported data-driven decisions for facility managers.",
			techStack: ["Angular", "RxJS", "Agile/Scrum", "Jira", "Figma", "GitLab", "Tailwind CSS", "PostgreSQL"],
			position: "Frontend Team Member",
			teamMembers: [
				{ count: 3, role: "FE" },
				{ count: 3, role: "BE" },
				{ count: 1, role: "PM" },
				{ count: 4, role: "QC" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Contributed to form validation and reactive data flows using RxJS in Angular.",
					"Fine-tuned CSS to match design specs and keep UI consistent.",
				],
				"Product Delivery & Engineering Excellence": [
					"Debugged and maintained production, triaging runtime issues to keep the platform stable.",
					"Enforced code quality via ESLint and Prettier across the project lifecycle.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Joined Figma reviews with the Japanese client, giving feasibility feedback and keeping design-to-code accurate.",
				],
				"Team Mentorship & Agile Coordination": [
					"Ran knowledge-sharing on common bugs, root causes, and safe deploys so fixes shipped without hurting stability.",
				],
			},
		},
		{
			name: "Research 360",
			company: "LG CNS",
			clientUrl: "https://www.lgcns.com/",
			market: "South Korea",
			period: "Sep 2023 – Sep 2024",
			domain: "R&D (Survey Management & Operations)",
			description:
				"Contributed to RESEARCH 360, an LG CNS research intelligence platform that digitizes the research lifecycle. A central hub improved collaboration and used AI analytics for faster, more accurate strategic decisions.",
			techStack: ["React", "Redux Toolkit", "Agile/Scrum", "Jira", "Figma", "GitHub", "AWS", "Tailwind CSS", "PostgreSQL"],
			position: "Frontend Lead",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "BE" },
				{ count: 3, role: "FE" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Built the frontend from scratch: project structure, component hierarchy, and data flow.",
					"Implemented Authentication and RBAC for secure, permission-aware routing.",
					"Managed global state with Redux Toolkit for predictable, scalable state.",
					"Provided BA-style solution and system design analysis to keep the architecture scalable and maintainable.",
					"Integrated REST APIs from the Korean team for seamless frontend–backend data flow.",
					"Optimized server image handling with efficient loading and caching.",
				],
				"Product Delivery & Engineering Excellence": [
					"Enforced code quality via ESLint and Prettier across the project lifecycle.",
					"Managed BE and FE version control with GitHub + AWS versioning.",
					"Monitored logs and production issues with AWS CloudWatch.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Worked with the Korean design team on UI/UX, giving feasibility feedback and pixel-perfect implementation.",
					"Worked with KR stakeholders on API integration and system architecture.",
				],
				"Team Mentorship & Agile Coordination": [
					"Mentored juniors throughout the project, improving code quality and team capability.",
					"Bridged technical and business sides, doing solution analysis and system design like a BA.",
				],
			},
		},
		{
			name: "Jinjer Admin",
			company: "Jinjer Co., Ltd.",
			clientUrl: JINJER_STORE_COLLECTED.websiteUrl,
			market: "Japan",
			period: "Jun 2023 – Jun 2024",
			domain: "HR Tech & Enterprise SaaS",
			description:
				"Contributed to JINJER ADMIN, the admin portal for jinjer Co., Ltd.'s cloud HCM platform. It unifies personnel data, attendance, payroll, and talent evaluation in one database so HR teams can automate routine work, stay compliant, and decide from data.",
			storeLinks: [
				{
					platform: "web",
					title: "Jinjer HCM Portal",
					url: JINJER_STORE_COLLECTED.webApp.url,
				},
			],
			techStack: ["Vue.js", "Pinia", "Agile/Scrum", "Jira", "Slack", "Figma", "GitHub", "AWS", "SendGrid", "Tailwind CSS", "Docker", "PostgreSQL"],
			position: "Fullstack Tech Lead",
			teamMembers: [
				{ count: 1, role: "SA" },
				{ count: 2, role: "PM" },
				{ count: 1, role: "Sub PM" },
				{ count: 1, role: "BrSE" },
				{ count: 1, role: "Comtor" },
				{ count: 3, role: "QC" },
				{ count: 3, role: "FE" },
				{ count: 3, role: "BE" },
				{ count: 2, role: "BA" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Owned technical direction, system architecture, PostgreSQL schema design, and secure RBAC.",
					"Rewrote the frontend from a legacy stack to Vue 3 + TypeScript, setting project structure and Pinia state management.",
					"Built permission-aware routing across the admin portal.",
					"Built Node.js email templates on AWS Lambda with SES + SNS for email and notifications.",
					"Used S3 for static assets and CloudWatch for monitoring and logs.",
					"Worked with the client's SA team to structure and debug email delivery.",
					"Investigated incident logs for fast root-cause tracing and recovery.",
				],
				"Product Delivery & Engineering Excellence": [
					"Streamlined CI/CD pipelines, cutting deployment time by 30%.",
					"Formulated unit testing with GitHub Copilot, reaching ~90% coverage on critical modules.",
					"Configured Slack notifications for build and deploy pipelines so the team saw release status in real time.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Reviewed Figma for feasibility and converted complex layouts into production-quality interfaces.",
					"Optimized rendering and image loading for enterprise HR workflows.",
					"Met Japanese clients via interpreters; used English on Slack with the SA team on architecture, API contracts, and solutions.",
				],
				"Team Mentorship & Agile Coordination": [
					"Led a fullstack team of 20 through frequent personnel changes, managing Agile delivery and engineering standards.",
					"Mentored freshers and junior frontend engineers on fundamentals, code review, and best practices.",
					"Ran internal KSS sessions and wrote BA-style system docs to capture knowledge.",
				],
			},
		},
		{
			name: UPRIDE_STORE_COLLECTED.projectName,
			company: UPRIDE_STORE_COLLECTED.developer,
			clientUrl: UPRIDE_STORE_COLLECTED.websiteUrl,
			market: UPRIDE_STORE_COLLECTED.market,
			period: UPRIDE_STORE_COLLECTED.period,
			domain: "Creative Arts & Community",
			description:
				"Developed UPRIDE, a global creative arts platform and social network by U Trend that empowers artists and celebrates cultural diversity. It connects creatives with audiences and investors so projects can grow through community support and sponsorship.",
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
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Built interactive analytics dashboards with D3.js / Chart.js for device usage time and engagement metrics.",
					"Architected a real-time chat system with Socket.IO for messaging between creators and supporters.",
					"Built motion-based post reactions with React Native Reanimated (or similar) to raise engagement.",
					"Designed an offline-first architecture with caching so the app stays smooth without connectivity.",
					"Optimized image delivery from server/CDN with lazy loading, compression, and cache to cut bandwidth and load time.",
				],
				"Product Delivery & Engineering Excellence": [
					"Managed end-to-end production releases, from build through OTA and app store deployment.",
					"Maintained code quality via ESLint and Prettier across the project lifecycle.",
					"Used Firebase for remote config, A/B feature flags, and runtime debugging.",
					"Kept production stable through proactive monitoring and crash resolution.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Co-designed ~50% of UI/UX with an external design team, balancing creative vision and feasibility.",
					"Worked with Product Owners and clients to gather requirements, validate features, and iterate on product vision.",
					"Converted design specs into polished, production-ready social networking interfaces.",
				],
			},
		},
		{
			name: "AMO",
			company: "Penta Security",
			clientUrl: "https://www.pentasecurity.com",
			market: "South Korea",
			period: "Oct 2022 – May 2023",
			domain: "R&D (Automotive & IoT)",
			description:
				"Contributed to AMO, a blockchain automotive data platform by Penta Security (AMO Labs). It builds a decentralized Car Data Market for secure sharing and monetization of vehicle data, so drivers, manufacturers, and service providers can exchange fairly valued, well-protected data.",
			techStack: ["React", "React Native", "React Native CLI", "Web3", "Socket.IO", "OBD II", "Redux Saga", "Redux Toolkit", "Mantine", "Agile/Scrum", "Jira", "D3/Chart.js", "Figma", "GitHub", "NestJS", "Azure", "PostgreSQL"],
			position: "React Native Lead",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "QC" },
				{ count: 2, role: "React Native Devs" },
				{ count: 1, role: "Comtor" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Built the React Native app from scratch: architecture, component tree, and data flow, with no legacy constraints.",
					"Built custom visualizations with D3.js / Chart.js for vehicle route maps and driving frequency.",
					"Integrated BLE with OBD II devices to collect real-time vehicle telemetry (speed, fuel, diagnostics).",
					"Implemented Web3 cryptography for end-to-end encryption of vehicle data in a decentralized marketplace.",
					"Designed an offline-first architecture: collect and queue data offline, then sync when connectivity returns.",
					"Built real-time pipelines BLE → Socket.IO → NestJS to relay Bluetooth device data to the server.",
					"Worked with the Korean team on NestJS API design and integration, replacing GraphQL with REST.",
				],
				"Product Delivery & Engineering Excellence": [
					"Maintained code quality via ESLint and Prettier across the project lifecycle.",
					"Managed internal releases via TestFlight (iOS) and APK (Android) for stakeholder review — no production distribution.",
					"Kept data secure through Web3 encryption and offline-first handling.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Designed 100% of the UI/UX, turning the Car Data Market concept into interfaces without a dedicated designer.",
					"Coordinated with Korean stakeholders (Penta Security / AMO Labs) on API contracts, data models, and feature scope.",
				],
				"Team Mentorship & Agile Coordination": [
					"Mentored juniors and freshers on onboarding and the blockchain/cryptography domain.",
					"Balanced hands-on development with training on Web3, BLE, and offline-first patterns.",
				],
			},
		},
		{
			name: "Redcap Mobility",
			company: "RedCapTour Co., Ltd.",
			clientUrl: REDCAP_STORE_COLLECTED.websiteUrl,
			market: "South Korea",
			period: "Jul 2022 – Sep 2022",
			domain: "Fleet Mobility & Telematics",
			description:
				"Developed RedCap Mobility, a B2B fleet and mobility platform with LG Electronics for RedCapTour. It digitizes vehicle operations by removing manual paperwork and physical key handovers, streamlining corporate car-sharing and vehicle control for enterprise clients.",
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
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "QC" },
				{ count: 2, role: "React Native Devs" },
				{ count: 1, role: "Comtor" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Led React Native delivery for RedCap Mobility (RMS), coordinating architecture, implementation quality, and release planning.",
					"Built Socket.IO pipelines for live vehicle telemetry and instant fleet status updates.",
					"Integrated BLE for secure device-to-vehicle connectivity between IoT hardware and the mobile app.",
					"Led the team-wide migration from JavaScript to TypeScript, enforcing type safety.",
					"Integrated GraphQL for flexible API consumption and client-specific data schemas.",
					"Built reservation, dispatch, return, and vehicle-control flows for corporate car-sharing.",
					"Implemented dashboards for live fleet status, trip records, and usage analytics with D3.js/Chart.js.",
					"Optimized image capture and processing for user-uploaded photos.",
				],
				"Product Delivery & Engineering Excellence": [
					"Managed OTA production releases via Revopush (CodePush), from build through production deploy.",
					"Enforced ESLint and Prettier gates before every build.",
					"Used Firebase for runtime debugging, remote config, and crash monitoring.",
					"Validated telematics, data flows, and production readiness with backend, QA, and LG Electronics.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Reviewed Figma for feasibility and converted fleet-management workflows into production-quality interfaces.",
					"Coordinated delivery with RedCapTour and LGE stakeholders across time zones.",
					"Worked with Design and POs to refine UI/UX for fleet operators and drivers.",
				],
				"Team Mentorship & Agile Coordination": [
					"Led the React Native team through JS-to-TypeScript, setting coding standards and review practices.",
					"Coordinated Design, PO, and QC to meet enterprise deadlines.",
				],
			},
		},
		{
			name: "Kikker Energie",
			company: "Kikker Energie B.V.",
			clientUrl: KIKKER_STORE_COLLECTED.websiteUrl,
			market: "Netherlands / EU",
			period: "Aug 2019 – Mar 2022",
			domain: "Energy Management",
			description:
				"Contributed to Kikker App, a smart energy platform for Dutch green supplier Kikker Energie. It gives users real-time insight into gas and electricity use so they can cut consumption and environmental impact.",
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
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Led the React Native JS-to-TypeScript migration, improving type safety, maintainability, and developer experience.",
					"Built real-time D3.js/Chart.js visualizations for gas and electricity usage.",
					"Implemented deep linking from push notifications and external links into specific app screens.",
				],
				"Product Delivery & Engineering Excellence": [
					"Set up OTA via Revopush (CodePush), handling production builds and uploads for rapid, safe releases.",
					"Enforced ESLint and Prettier in the workflow to catch issues before build.",
					"Used Firebase for runtime debugging, remote config, and production monitoring.",
					"Worked with QC/BA and supported automation tests to keep delivery quality high.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Worked with Design and POs to refine UI/UX into pixel-perfect, intuitive interfaces.",
					"Updated Angular forms and UI layouts from design specs into working product.",
					"Worked with Design, PO, QC, and BA to turn requirements into deliverable features.",
				],
				"Team Mentorship & Agile Coordination": [
					"Mentored freshers and juniors through knowledge-sharing sessions to grow team capability.",
					"Moved from IC to Team Lead, owning delivery schedules and code quality on the React Native track.",
				],
			},
		},
	],
	language: {
		name: "English (upper-Intermediate)",
		detail: "Daily communication in Agile teams",
	},
	education: {
		school: "Telecommunications University, Nha Trang",
		url: "https://tcu.edu.vn",
		year: "2019",
		degree: "Bachelor's in Information Technology",
	},
	portrait: {
		src: "/work-photo.png",
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
			id: "versionControl",
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
