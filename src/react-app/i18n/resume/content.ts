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
		linkedin: "https://www.linkedin.com/in/nikinpham/",
		github: "https://github.com/tanpt-se?tab=repositories",
		birthDate: "Sep 30, 1997",
	},
	summary: [
		"Frontend and React Native Lead with 7 years of experience building web and mobile apps with React, React Native, Next.js, and TypeScript.",
		"Led Agile teams of up to 10 members. Owned frontend architecture, code quality, planning, and delivery for clients in Japan, South Korea, Singapore, and the Netherlands.",
		"Improved React Native app performance and built features for real-time data, BLE/IoT, offline use, and OTA updates.",
		"Worked with product managers, designers, QA teams, and clients. Also mentored junior engineers.",
	],
	experiences: [
		{
			company: "GCode INC, Ha Noi",
			role: "Frontend / React Native Lead",
			period: "Apr 2025 – Mar 2026",
			highlights: [
				"Led React Native and frontend delivery for A-NAVI in Japan.",
				"Owned mobile architecture, technical planning, and delivery.",
				"Managed Android and iOS builds, store releases, and production monitoring.",
				"Prepared project proposals and estimates for new work.",
				"Built and improved gcode.jp, including SEO work.",
			],
		},
		{
			company: "FPT Software, Quy Nhon, Gia Lai",
			role: "Frontend / React Native Lead",
			period: "Sep 2022 – Mar 2025",
			highlights: [
				"Led React Native and frontend delivery for projects in Japan and Vietnam.",
				"Built mobile and web apps with React Native, React, Vue.js, TypeScript, and cloud services.",
				"Made technical decisions and worked with backend, QA, UX, and client teams.",
				"Supported pre-sales and proposals for enterprise projects, including LG CNS.",
				"Mentored junior engineers through code reviews and technical training.",
				"Taught React Native and modern frontend development at Quy Nhon University and FPT University (2023 – 2024).",
				"Led the Business Unit Training Department and created training guides for engineers (2023 – 2025).",
			],
		},
		{
			company: "Infodation, Khanh Hoa",
			role: "React Native Engineer",
			period: "Aug 2019 – Mar 2022",
			highlights: [
				"Worked as the main React Native developer for Kikker Energie, a smart energy app in the Netherlands.",
				"Moved the app from JavaScript to TypeScript and built real-time charts with D3.js and Chart.js.",
				"Set up OTA updates with Revopush (CodePush).",
				"Used Firebase for remote config, error checks, and crash monitoring.",
				"Worked with design, product, QA, and business teams in Europe.",
				"Created UI mockups and visual assets when needed.",
				"Mentored junior engineers through code reviews and team sessions.",
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
				"A-NAVI is a PropTech platform for property managers and investors in Tokyo. It replaces manual work with digital rental tracking, reports, and contracts.",
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
					"Led architecture and delivery planning for the React Native app, web app, APIs, and admin portal.",
					"Built real-time rental tracking, tax reports, and paperless contract features.",
					"Used WebView to reuse web screens in React Native and reduced mobile UI work by 80%.",
					"Set up Firebase monitoring, crash reports, remote config, and push notifications.",
					"Reviewed app security with OWASP practices.",
				],
				"Product Delivery & Engineering Excellence": [
					"Added ESLint and Prettier to GitLab CI and reduced code-review work by 20%.",
					"Built and released the app to the App Store and Google Play.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Built responsive screens from Figma designs.",
					"Added the LiveChat SDK to web and mobile apps.",
					"Worked with the Japanese client PM on business and technical needs.",
					"Wrote system documents for the full team.",
				],
				"Team Mentorship & Agile Coordination": [
					"Led the frontend and mobile team and managed code quality and delivery dates.",
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
				"Jinjer Admin is an HR management portal for employee data, attendance, payroll, and reviews. The development team had up to 10 members.",
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
					"Led system design, PostgreSQL database design, and RBAC security.",
					"Moved the frontend from a legacy stack to Vue 3, TypeScript, and Pinia.",
					"Built routes and screens based on user permissions.",
					"Built email templates with Node.js, AWS Lambda, SES, and SNS.",
					"Used S3 for files and CloudWatch for logs and monitoring.",
					"Worked with the client team to fix email delivery issues.",
					"Used logs to find root causes and fix production issues.",
				],
				"Product Delivery & Engineering Excellence": [
					"Improved CI/CD pipelines and cut deployment time by 30%.",
					"Used GitHub Copilot to help write unit tests. Critical modules reached about 90% test coverage.",
					"Added Slack alerts for build and deployment status.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Reviewed Figma designs and built the required screens.",
					"Improved screen rendering and image loading.",
					"Worked with Japanese clients and the system architect team on APIs and solutions.",
				],
				"Team Mentorship & Agile Coordination": [
					"Led a full-stack team of up to 10 members and managed Agile delivery and code standards.",
					"Mentored new and junior engineers through code reviews and training.",
					"Ran team training sessions and wrote system documents.",
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
				"UPRIDE is a mobile social network for artists, supporters, and investors. Users can share work, chat, view reports, and support creative projects.",
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
					"Built usage and engagement charts with D3.js and Chart.js.",
					"Built real-time chat with Socket.IO.",
					"Built animated reactions for social posts.",
					"Added offline support and local caching.",
					"Improved image speed with lazy loading, compression, and caching.",
				],
				"Product Delivery & Engineering Excellence": [
					"Managed builds, OTA updates, and app store releases.",
					"Used ESLint and Prettier to keep code quality consistent.",
					"Used Firebase for remote config, feature flags, and error checks.",
					"Checked crashes and fixed production issues.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Designed about 50% of the UI with an external design team.",
					"Worked with product owners and clients to define and review features.",
					"Built responsive social network screens from the designs.",
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
					"Redcap Mobility is a B2B app for company vehicles and car sharing. It supports booking, vehicle control, trip records, and live fleet data.",
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
						"Led React Native architecture, code quality, and release planning.",
						"Built live vehicle data updates with Socket.IO.",
						"Connected IoT devices to the mobile app through BLE.",
						"Led the move from JavaScript to TypeScript.",
						"Connected GraphQL APIs and client data.",
						"Built booking, dispatch, return, and vehicle-control flows.",
						"Built fleet and trip charts with D3.js and Chart.js.",
						"Improved image capture and upload speed.",
					],
					"Product Delivery & Engineering Excellence": [
						"Managed OTA production releases with Revopush (CodePush).",
						"Added ESLint and Prettier checks before each build.",
						"Used Firebase for error checks, remote config, and crash monitoring.",
						"Tested vehicle data and releases with backend, QA, and LG Electronics.",
					],
					"Cross-functional Collaboration & UI/UX": [
						"Reviewed Figma designs and built fleet management screens.",
						"Worked with RedCapTour and LG Electronics across time zones.",
						"Worked with designers and product owners to improve the UI.",
					],
					"Team Mentorship & Agile Coordination": [
						"Led the React Native team during the move to TypeScript.",
						"Worked with design, product, and QA teams to meet delivery dates.",
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
				"Kikker is a mobile app for gas and electricity users in the Netherlands. It shows real-time energy use and helps users track their costs.",
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
					"Led the move from JavaScript to TypeScript.",
					"Built real-time energy charts with D3.js and Chart.js.",
					"Added deep links from push notifications and web links.",
				],
				"Product Delivery & Engineering Excellence": [
					"Set up OTA updates with Revopush (CodePush).",
					"Added ESLint and Prettier checks before builds.",
					"Used Firebase for error checks, remote config, and production monitoring.",
					"Worked with QA and BA teams on automated tests.",
				],
				"Cross-functional Collaboration & UI/UX": [
					"Worked with designers and product owners to improve the UI.",
					"Built Angular forms and screens from designs.",
					"Worked with design, product, QA, and BA teams to deliver features.",
				],
				"Team Mentorship & Agile Coordination": [
					"Mentored new and junior engineers through team training.",
					"Moved from engineer to Team Lead and managed delivery dates and code quality.",
				],
			},
		},
	],
	language: {
		name: "English (Upper-intermediate)",
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
