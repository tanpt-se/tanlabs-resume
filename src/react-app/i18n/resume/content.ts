import type { ResumeContent } from "../types";

import { ANAVI_STORE_COLLECTED } from "./anavi-store-collected";
import { JINJER_STORE_COLLECTED } from "./jinjer-store-collected";
import { KIKKER_STORE_COLLECTED } from "./kikker-store-collected";
import { REDCAP_STORE_COLLECTED } from "./redcap-store-collected";
import { UPRIDE_STORE_COLLECTED } from "./upride-store-collected";

export const resumeContent: ResumeContent = {
	profile: {
		name: "Phạm Trọng Tận",
		title: "Frontend & React Native Technical Lead",
		location: "Tay Hoa - Dak Lak",
		phone: "(+84) 378 542 540",
		email: "phamtrongtandhcn2@gmail.com",
		photoCaption:
			"Phạm Trọng Tận presents enterprise web and mobile engineering at an internal technical sharing session.",
		birthDate: "Sep 30, 1997",
	},
	summary: [
		"Frontend & React Native Technical Lead with 7 years of experience building scalable web and mobile applications using React, React Native, Next.js, and TypeScript.",
		"Led Agile teams of up to 20 engineers, driving frontend architecture, code quality, technical direction, and successful product delivery for enterprise clients across Japan, Korea, Singapore, and the Netherlands.",
		"Experienced in designing high-performance applications with real-time communication, BLE/IoT integration, offline-first architecture, and OTA deployment, while collaborating closely with product managers, designers, QA engineers, and global stakeholders.",
		"Passionate about building scalable frontend architecture, mentoring engineers, and delivering products that balance business goals, user experience, and engineering excellence.",
	],
	experiences: [
		{
			company: "GCode INC, Ha Noi",
			role: "Frontend / React Native Lead",
			period: "Apr 2025 – Mar 2026",
			highlights: [
				"Led React Native and frontend delivery for A-NAVI (Japan), owning mobile architecture, technical direction, and delivery planning.",
				"Managed production release support — Android/iOS builds, app store publishing, and post-release monitoring.",
				"Handled project proposals and estimation for new initiatives.",
				"Built and optimized the company website gcode.jp, including SEO improvements.",
				"Reviewed Figma designs, checked technical feasibility, and ensured high-quality implementation.",
			],
		},
		{
			company: "FPT Software, Quy Nhon, Gia Lai",
			role: "Frontend / React Native Lead",
			period: "Sep 2022 – Mar 2025",
			highlights: [
				"Led React Native and frontend delivery for 6 projects serving Japanese, Korean, and Singaporean clients (AMO, UPRIDE, Research 360, Jinjer Admin, Maintage, Honda 26M).",
				"Built scalable cross-platform mobile and web apps using React Native, React, Vue.js, TypeScript, and cloud services.",
				"Acted as frontend/mobile owner, making technical decisions and coordinating with backend, QA, UX, and client-side teams.",
				"Participated in project proposals and pre-sales, contributing to winning multiple major projects (including LG CNS and Honda).",
				"Mentored junior developers through structured code reviews, technical guidance, and frontend/mobile best practices.",
				"Served as Guest Lecturer at Quy Nhon University and FPT University, training IT students on React Native and modern Front-End development (2023 – 2024).",
				"Led the Training Department at Business Unit level, establishing technical playbooks and scaling learning programs for engineering teams (2023 – 2025).",
			],
		},
		{
			company: "Infodation, Khanh Hoa",
			role: "React Native Engineer",
			period: "Aug 2019 – Mar 2022",
			highlights: [
				"Sole React Native developer on Kikker Energie — a smart energy platform for a Dutch green supplier.",
				"Migrated RN codebase from JavaScript to TypeScript; built real-time usage dashboards with D3.js/Chart.js.",
				"Set up OTA deployment via Revopush (CodePush) for rapid production releases.",
				"Used Firebase for remote config, debugging, and crash monitoring; enforced ESLint/Prettier code quality.",
				"Worked directly with European stakeholders (Design, PO, QC, BA) to refine features.",
				"Also served as Graphic Designer, creating UI mockups and visual assets.",
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
					"Oversaw technical architecture and delivery planning for a comprehensive PropTech platform spanning React Native (mobile), Web, Backend APIs, and Admin modules.",
					"Engineered real-time rental tracking, automated tax reporting for Japanese investors, and secure paperless contract management.",
					"Spearheaded WebView integration within React Native to reuse Web UI layouts, reducing mobile development effort by 80%.",
					"Leveraged Firebase for mobile monitoring, crash reporting, remote config, and push notifications via FCM.",
					"Advised clients on system optimization strategies and handled OWASP security best practices to ensure robust application security.",
				],
				"Product Delivery & Engineering Excellence": [
					"Automated code quality checks by integrating ESLint/Prettier into GitLab CI, cutting team code-review effort by 20%.",
					"Handled end-to-end production builds and store deployment (iOS App Store / Google Play) independently.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Translated complex Figma designs into high-performance, production-ready interfaces.",
					"Integrated the LiveChat SDK across platforms to boost real-time customer engagement.",
					"Worked directly with the Japanese client PM (Japanese-speaking) to align technical delivery with business requirements.",
					"Authored system documentation; PM distributed to the entire team for alignment.",
				],
				"Team Mentorship & Agile Coordination": [
					"Led a Frontend & Mobile cross-functional team through Agile delivery cycles, taking ownership of implementation quality and delivery schedules.",
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
				"Authored system analysis and design documentation to upgrade Honda clients running version 23M (in production since 2023) to version 26M without disrupting live operations. Ensured consistency across versions and prevented system drift; produced data-flow diagrams and behavior diagrams for improvement and update workflows.",
			techStack: ["Figma", "UML", "Excel", "Jira", "Agile/Scrum", "GitHub"],
			position: "Business Analyst",
			teamMembers: [
				{ count: 3, role: "PM" },
				{ count: 5, role: "BA" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Authored system analysis and design documentation for upgrading the Honda platform from version 23M (in production since 2023) to version 26M.",
					"Produced data-flow diagrams and behavior diagrams for improvement and update workflows, ensuring version consistency and preventing system drift.",
					"Designed ERD and UML diagrams using Excel and Draw.io to map system relationships and behavior.",
				],
				"Product Delivery & Engineering Excellence": [
					"Ensured a non-disruptive upgrade path from 23M to 26M, maintaining live operations throughout the transition.",
					"Used Excel to document and compare system behavior between old and new versions, creating traceable specifications.",
					"Wrote user stories and acceptance criteria for development and QC teams.",
					"Supported UAT (User Acceptance Testing) to validate upgrade quality.",
					"Conducted risk assessment and impact analysis for the version upgrade.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Analyzed and improved user behavior flows, acting as a PO to bridge user needs with technical implementation.",
					"Used Figma to create and describe new UI mockups for the 26M upgrade, providing visual specifications for the development team.",
					"Gathered requirements directly from Japanese and Singaporean clients, working with Global PM and BA team.",
					"Facilitated demos and sprint reviews with clients and global stakeholders.",
					"Authored API specifications and Postman collections for the development team.",
				],
				"Team Mentorship & Agile Coordination": [
					"Conducted regular Knowledge Sharing Sessions (KSS) with the team to align understanding of system changes and upgrade strategies.",
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
				"Contributed to the development of MAINTAGE, a comprehensive maintenance management platform by MASS Co., Ltd. (Japan). The system was designed to digitize and optimize the end-to-end maintenance workflow for facilities and infrastructure. By shifting from manual scheduling and paper-based reporting to a centralized digital ecosystem, the platform significantly enhanced operational transparency, reduced equipment downtime, and facilitated efficient data-driven decision-making for facility managers.",
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
					"Contributed to form validation and reactive data flows using RxJS within the Angular ecosystem.",
					"Adjusted and fine-tuned CSS configurations to match design specifications and ensure consistent UI.",
				],
				"Product Delivery & Engineering Excellence": [
					"Acted as debugger and production maintainer, identifying, triaging, and resolving runtime issues to ensure platform stability.",
					"Enforced code quality via ESLint and Prettier across the project lifecycle.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Participated in Figma design reviews with the Japanese client, providing technical feasibility feedback and ensuring design-to-code accuracy.",
				],
				"Team Mentorship & Agile Coordination": [
					"Conducted knowledge-sharing sessions on common bugs, root causes, and safe deployment strategies — ensuring fixes could be rolled out without impacting system stability.",
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
				"Contributed to the development of RESEARCH 360, a strategic research intelligence platform by LG CNS. The project was designed to transform traditional research management into a digitized, data-driven ecosystem. By providing a centralized hub for managing the entire research lifecycle, the platform significantly enhanced collaborative efficiency and enabled organizations to leverage AI-powered analytics for faster, more accurate strategic decision-making.",
			techStack: ["React", "Redux Toolkit", "Agile/Scrum", "Jira", "Figma", "GitHub", "AWS", "Tailwind CSS", "PostgreSQL"],
			position: "Frontend Lead",
			teamMembers: [
				{ count: 1, role: "PM" },
				{ count: 1, role: "BE" },
				{ count: 3, role: "FE" },
			],
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Architected and built the entire frontend from scratch, establishing the project structure, component hierarchy, and data flow.",
					"Implemented Authentication and Role-Based Access Control (RBAC) for secure, permission-aware routing across the platform.",
					"Managed global state using Redux Toolkit for predictable and scalable state management.",
					"Provided technical solutions and system design analysis as a BA, optimizing project architecture for scalability and maintainability.",
					"Integrated REST APIs developed by the Korean team, ensuring seamless data flow between frontend and backend.",
					"Optimized image handling from server, implementing efficient loading and caching strategies.",
				],
				"Product Delivery & Engineering Excellence": [
					"Enforced code quality standards via ESLint and Prettier across the project lifecycle.",
					"Managed version control for both BE and FE using GitHub + AWS versioning.",
					"Monitored application logs and investigated production issues using AWS CloudWatch.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Collaborated with the Korean (KR) design team on UI/UX, providing technical feasibility feedback and ensuring pixel-perfect implementation.",
					"Worked cross-functionally with KR stakeholders for API integration and system architecture decisions.",
				],
				"Team Mentorship & Agile Coordination": [
					"Guided and mentored junior developers throughout the project, improving code quality and team capability.",
					"Acted as a bridge between technical and business sides, conducting solution analysis and system design like a BA.",
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
				"Contributed to the development of JINJER ADMIN, the centralized administration portal for the leading cloud-based integrated HR management platform (HCM) by jinjer Co., Ltd. (Japan). The platform streamlines the entire HR lifecycle—from personnel data and attendance tracking to payroll computation and talent evaluation—into a single unified database. The Admin portal empowers HR professionals and enterprise managers to automate routine tasks, ensure compliance, and make data-driven decisions seamlessly.",
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
					"Owned technical direction, system architecture, PostgreSQL database schema design, and secure role-based access control (RBAC).",
					"Rewrote the entire frontend from scratch to upgrade from a legacy version to Vue 3 + TypeScript, establishing core project structures and optimizing state management via Pinia.",
					"Built permission-aware routing across the admin portal.",
					"Developed email templates using Node.js deployed on AWS Lambda, integrating SES + SNS for enterprise-grade email and notification delivery.",
					"Utilized S3 for static asset storage and distribution; CloudWatch for system monitoring and log management.",
					"Collaborated with the client's SA (Solution Architect) team to structure and debug email delivery configurations.",
					"Investigated and managed system logs during incidents, ensuring fast root-cause tracing and recovery.",
				],
				"Product Delivery & Engineering Excellence": [
					"Streamlined CI/CD deployment pipelines, reducing system deployment time by 30%.",
					"Formulated unit testing strategies with GitHub Copilot, achieving ~90% test coverage across critical modules.",
					"Configured Slack notifications for build and deployment pipelines, keeping the team informed of release status in real-time.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Reviewed Figma designs for technical feasibility and converted complex layouts into production-quality interfaces.",
					"Optimized rendering and image loading speeds for enterprise HR workflows.",
					"Worked 100% with Japanese clients through comtors (interpreters) for official meetings; communicated directly in English via Slack with the SA team on architecture, API contracts, and technical solutions.",
				],
				"Team Mentorship & Agile Coordination": [
					"Led a fullstack team of 20 engineers (with frequent personnel changes throughout the project lifecycle), managing Agile delivery and upholding engineering standards.",
					"Mentored freshers and junior frontend engineers, covering fundamentals, code review practices, and best practices.",
					"Organized multiple Knowledge Sharing Sessions (KSS) internally and wrote system documentation as a BA, ensuring comprehensive knowledge capture.",
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
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Built interactive analytics dashboards using D3.js / Chart.js to visualize device usage time and user engagement metrics.",
					"Architected a real-time chat system using Socket.IO for instant messaging between creators and supporters.",
					"Implemented motion/animation-based reaction features for posts using React Native Reanimated or similar motion libraries, enhancing user engagement.",
					"Designed an Offline-first architecture with intelligent caching strategies to ensure a smooth experience regardless of connectivity.",
					"Optimized image delivery pipeline from server/CDN, implementing lazy loading, compression, and cache layers to reduce bandwidth and improve load times.",
				],
				"Product Delivery & Engineering Excellence": [
					"Managed end-to-end production releases, from build through OTA updates and app store deployment.",
					"Maintained code quality via ESLint and Prettier enforcement across the project lifecycle.",
					"Used Firebase for remote config management, A/B testing feature flags, and runtime debugging.",
					"Ensured production stability through proactive monitoring and crash resolution.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Collaborated on ~50% of UI/UX design alongside an external design team, balancing creative vision with technical feasibility.",
					"Worked directly with Product Owners and clients to gather requirements, validate features, and iterate on the product vision.",
					"Converted design specifications into polished, production-ready social networking interfaces.",
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
				"Contributed to the AMO Project, an innovative blockchain-based automotive data platform developed by Penta Security (AMO Labs). The project aimed to establish a decentralized \"Car Data Market,\" enabling the secure sharing, monetization, and exchange of vehicle data. By leveraging blockchain technology and advanced cryptography, the platform built a smart mobility ecosystem where drivers, auto manufacturers, and service providers can seamlessly interact, ensuring that user data is fairly valued and securely utilized.",
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
					"Architected and built the entire React Native application from scratch, designing the system architecture, component tree, and data flow without legacy constraints.",
					"Built custom data visualizations using D3.js / Chart.js to render vehicle route maps and driving frequency analytics.",
					"Integrated BLE communication with OBD II devices to collect real-time vehicle telemetry (speed, fuel, diagnostics, etc.).",
					"Implemented Web3 cryptography for end-to-end data encryption, ensuring secure transmission and storage of sensitive vehicle data within a decentralized marketplace.",
					"Designed an Offline-first architecture, allowing data collection and queuing when disconnected, with seamless sync when connectivity is restored.",
					"Engineered real-time data relay pipelines combining BLE → Socket.IO → NestJS backend, reflecting Bluetooth device data to the server in near-real-time.",
					"Collaborated with the Korean team on NestJS API design and integration, replacing GraphQL with RESTful endpoints.",
				],
				"Product Delivery & Engineering Excellence": [
					"Maintained code quality standards via ESLint and Prettier enforcement across the project lifecycle.",
					"Managed internal release cycles via TestFlight (iOS) and APK (Android) for stakeholder review — no production distribution.",
					"Ensured data security compliance through Web3 encryption and offline-first data handling patterns.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Designed 100% of the UI/UX independently, translating the Car Data Market concept into intuitive user interfaces without a dedicated designer.",
					"Coordinated with Korean stakeholders (Penta Security / AMO Labs) on API contracts, data models, and feature scoping.",
				],
				"Team Mentorship & Agile Coordination": [
					"Mentored junior and fresher engineers throughout the project, helping them onboard and understand the blockchain/cryptography domain.",
					"Balanced hands-on development with team training, ensuring knowledge transfer on Web3, BLE, and offline-first patterns.",
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
				"Developed RedCap Mobility, a comprehensive B2B corporate fleet management and mobility platform built in collaboration with LG Electronics (LGE) for RedCapTour. The solution was designed to digitize traditional vehicle management operations, optimizing operational efficiency by eliminating time-consuming manual paperwork and physical key handovers. By shifting to a smart management ecosystem, the platform successfully streamlined corporate car-sharing and integrated vehicle control for diverse enterprise clients.",
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
					"Architected real-time data pipelines using Socket.IO to ingest live telemetry from vehicle devices, enabling instant fleet status updates.",
					"Implemented Bluetooth Low Energy (BLE) integration for secure device-to-vehicle connectivity, bridging IoT hardware with the mobile app.",
					"Led the team-wide migration from JavaScript to TypeScript, enforcing type safety across the codebase.",
					"Integrated GraphQL for flexible and efficient API consumption, handling client-specific data schemas.",
					"Built reservation, dispatch, return, and vehicle-control flows for corporate car-sharing use cases.",
					"Implemented dashboards for live fleet status, trip records, and usage analytics using D3.js/Chart.js.",
					"Optimized image capture and processing pipeline to handle user-uploaded photos efficiently.",
				],
				"Product Delivery & Engineering Excellence": [
					"Managed OTA production releases via Revopush (CodePush), handling end-to-end build and deployment to production.",
					"Enforced code quality gates using ESLint and Prettier before every build cycle.",
					"Leveraged Firebase for runtime debugging, remote config, and crash monitoring.",
					"Validated telematics integrations, data flows, and production readiness with backend, QA, and LG Electronics partners.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Reviewed Figma designs for technical feasibility and converted fleet-management workflows into production-quality interfaces.",
					"Coordinated delivery with Korean client (RedCapTour) and LGE stakeholders across time zones.",
					"Worked closely with Design team and Product Owners to continuously refine UI/UX for fleet operators and drivers.",
				],
				"Team Mentorship & Agile Coordination": [
					"Led and guided the React Native team through the JS-to-TypeScript migration, establishing new coding standards and review practices.",
					"Coordinated cross-functional delivery across Design, PO, and QC teams to meet enterprise deadlines.",
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
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Led the migration of a React Native codebase from JavaScript to TypeScript, significantly improving type safety, code maintainability, and developer experience across the team.",
					"Architected real-time data visualization components using D3.js and Chart.js to render complex gas/electricity usage charts for end-users.",
					"Implemented deep linking to enable seamless navigation from push notifications and external links directly into specific app screens.",
				],
				"Product Delivery & Engineering Excellence": [
					"Established OTA update distribution pipelines via Revopush (CodePush), handling production builds and direct uploads to ensure rapid, safe releases.",
					"Enforced code quality standards by integrating ESLint and Prettier into the development workflow, catching issues before build.",
					"Leveraged Firebase for runtime debugging, remote config management, and production monitoring.",
					"Collaborated with QC/BA teams and supported Automation Test efforts to maintain high delivery quality.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Partnered closely with Design team and Product Owners to continuously refine and optimize UI/UX for end-users, ensuring pixel-perfect, intuitive interfaces.",
					"Configured and updated Angular frontend forms and UI layouts, bridging the gap between design specs and functional product.",
					"Worked alongside cross-functional stakeholders (Design, PO, QC, BA) to translate requirements into deliverable features.",
				],
				"Team Mentorship & Agile Coordination": [
					"Mentored and trained fresher and junior engineers through structured knowledge-sharing sessions, accelerating team capability growth.",
					"Progressed from individual contributor to Team Lead, taking ownership of delivery schedules and code quality within the React Native track.",
				],
			},
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
			responsibilities: {
				"Technical Leadership & Architecture": [
					"Owned architecture, implementation, and handoff for React web and React Native mobile products.",
					"Scoped and delivered MVPs and feature increments for startup and small-business clients.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Advised on UI/UX feasibility, release readiness, and maintainable delivery practices with client stakeholders.",
				],
			},
		},
	],
	language: "English (Intermediate): Daily communication in Agile teams",
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
