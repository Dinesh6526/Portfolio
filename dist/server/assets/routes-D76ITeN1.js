import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, Code2, Download, ExternalLink, GraduationCap, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { SiCss, SiExpress, SiGit, SiGithub, SiHtml5, SiInstagram, SiJavascript, SiMysql, SiNodedotjs, SiPython, SiReact, SiX } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
//#region src/data/portfolio.ts
var profile = {
	name: "Dinesh Govindarasu",
	title: "Full-Stack Developer",
	intro: "CSE student building clean, reliable web apps — from responsive interfaces to the APIs and databases behind them.",
	photo: "/profile.png",
	email: "dineshd6526@gmail.com",
	phone: "+91 8122956166",
	location: "Tamil Nadu, India",
	resume: "Resume.pdf"
};
var socials = {
	linkedin: "https://www.linkedin.com/in/dinesh-g-b00518380",
	github: "https://github.com/Dinesh6526",
	x: "https://x.com/Dinesh6526d",
	instagram: "https://www.instagram.com/invites/contact/?utm_content=hm1dc0p&dlrf=311q38atlsbf"
};
var about = {
	paragraphs: [
		"I'm a Computer Science and Engineering student who enjoys turning ideas into real-world applications. I focus on building modern web experiences using JavaScript, React.js, Node.js, Express.js, and MySQL.",
		"I learn best by building projects, solving problems, and exploring new technologies. From designing user-friendly interfaces to developing backend functionality, I enjoy understanding how every part of an application works together.",
		"My goal is to grow as a Full-Stack Developer, build meaningful software, and continuously improve my technical and problem-solving skills."
	],
	goals: [
		"Grow into a full-stack engineer shipping production-grade products",
		"Contribute to real-world teams through internships and open source",
		"Deepen skills in system design, databases and modern frameworks"
	]
};
var skills = [
	"Java",
	"Python",
	"JavaScript",
	"React.js",
	"HTML",
	"CSS",
	"Node.js",
	"MySQL",
	"GitHub",
	"Express.js"
];
var education = [{
	degree: "B.E. Computer Science and Engineering",
	institution: "PGP College Engineering and Technology, Namakkal",
	university: "Anna University",
	period: "2024 – 2028",
	details: "CGPA: 8.1/ 10 · Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems"
}, {
	degree: "Higher Secondary (12th)",
	institution: " Government Higher Secondary School, Dharmapuri",
	university: "Tamil Nadu State Board",
	period: "2020 – 2024",
	details: "Percentage: 70%"
}];
var projects = [
	{
		name: "Project Management Tool",
		description: "A web app for organising projects and tasks, backed by a Node.js/Express server and MySQL database.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript",
			"Node.js",
			"Express.js",
			"MySQL"
		],
		github: "https://github.com/Dinesh6526/Project-_Management-Tool.git"
	},
	{
		name: "E-Commerce Website",
		description: "A storefront-style website for browsing and presenting products.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript"
		],
		github: "https://github.com/Dinesh6526/E-Commerce-.git"
	},
	{
		name: "GitHub Finder",
		description: "Look up GitHub users and view their public profile information.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript"
		],
		github: "https://github.com/Dinesh6526/GitHub-Finder.git"
	},
	{
		name: "ToDo App",
		description: "A simple task list for adding and managing everyday to-dos.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript"
		],
		github: "https://github.com/Dinesh6526/ToDoApp"
	},
	{
		name: "TravelApp Website",
		description: "A responsive travel website that showcases destinations with attractive visuals and useful travel information, helping users explore and discover new places through an engaging interface.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript",
			"java"
		],
		github: "https://github.com/Dinesh6526/TravelApp-Website.git"
	},
	{
		name: "Tech Minds - Wallet & Contract Reputation",
		description: "An intelligent Web3 security platform that analyzes wallet and smart-contract behavior, detects suspicious transactions, assesses risk levels, and provides evidence-based security recommendations for safer blockchain interactions.",
		tech: [
			"HTML",
			"CSS",
			"JavaScript",
			"React.js",
			"Node.js",
			"Python",
			"Ethereum",
			"Web3.js",
			"MySQL"
		],
		github: "https://github.com/Dinesh6526/Tech-Minds.git"
	}
];
var certificates = [
	{
		title: "Multi Hackathon Participation - graviTAs'26",
		issuer: "VIT Vellore",
		date: "September 2026",
		image: "/image-1792435833737.jpeg",
		file: "/image-1792435833737.jpeg"
	},
	{
		title: "Basics of Python",
		issuer: "Infosys Springboard",
		date: "July 6, 2025",
		image: "/image-1792435882014.png",
		file: "/image-1792435882014.png"
	},
	{
		title: "Full Stack Development Internship Offer",
		issuer: "CodeAlpha",
		date: "September 2026",
		image: "/image-1792435976500.png",
		file: "/image-1792435976500.png"
	},
	{
		title: "Full Stack Development Internship",
		issuer: "NoviTech R&D Private Limited",
		date: "June 8 - July 8, 2026",
		image: "/image-1792436032311.png",
		file: "/image-1792436032311.png"
	},
	{
		title: "UI/UX Design Internship",
		issuer: "NoviTech R&D Private Limited",
		date: "June 8 - July 8, 2026",
		image: "/image-1792436068757.png",
		file: "/image-1792436068757.png"
	},
	{
		title: "MERN Stack Courses Internship",
		issuer: "NoviTech R&D Private Limited",
		date: "June 8 - September 18, 2026",
		image: "/image-1792436103138.png",
		file: "/image-1792436103138.png"
	}
];
//#endregion
//#region src/components/ProfileAvatar360.tsx
function ProfileAvatar360({ photo, name, title = "Full-Stack Developer" }) {
	const [isHovered, setIsHovered] = useState(false);
	const [mouseTilt, setMouseTilt] = useState({
		x: 0,
		y: 0
	});
	const [canTilt, setCanTilt] = useState(false);
	const containerRef = useRef(null);
	useEffect(() => {
		const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		const updateTiltPreference = () => {
			setCanTilt(finePointer.matches && !reducedMotion.matches);
		};
		updateTiltPreference();
		finePointer.addEventListener("change", updateTiltPreference);
		reducedMotion.addEventListener("change", updateTiltPreference);
		return () => {
			finePointer.removeEventListener("change", updateTiltPreference);
			reducedMotion.removeEventListener("change", updateTiltPreference);
		};
	}, []);
	const handleMouseMove = (event) => {
		if (!containerRef.current || !canTilt) return;
		const rect = containerRef.current.getBoundingClientRect();
		const x = ((event.clientX - rect.left) / rect.width - .5) * 2;
		const y = ((event.clientY - rect.top) / rect.height - .5) * 2;
		const maxTilt = 8;
		setMouseTilt({
			x: Math.max(-8, Math.min(maxTilt, -y * maxTilt)),
			y: Math.max(-8, Math.min(maxTilt, x * maxTilt))
		});
	};
	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
		setMouseTilt({
			x: 0,
			y: 0
		});
	};
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "relative flex flex-col items-center justify-center",
		children: [/* @__PURE__ */ jsx("div", {
			className: `portrait-glow pointer-events-none absolute -inset-10 sm:-inset-24 md:-inset-32 rounded-full transition-opacity duration-1000 ${isHovered ? "opacity-100 scale-105" : "opacity-90"}`,
			style: {
				background: "radial-gradient(circle at 50% 36%, rgba(220, 145, 65, 0.42) 0%, rgba(165, 100, 38, 0.22) 34%, rgba(65, 35, 12, 0.05) 62%, transparent 75%)",
				filter: "blur(65px)"
			}
		}), /* @__PURE__ */ jsx("div", {
			className: "relative flex items-center justify-center select-none",
			style: { perspective: "1500px" },
			ref: containerRef,
			onMouseMove: handleMouseMove,
			onMouseEnter: handleMouseEnter,
			onMouseLeave: handleMouseLeave,
			children: /* @__PURE__ */ jsx("div", {
				className: "relative flex items-center justify-center",
				style: {
					transformStyle: "preserve-3d",
					transform: `rotateX(${mouseTilt.x}deg) rotateY(${mouseTilt.y}deg) scale(${isHovered && canTilt ? 1.02 : 1})`,
					transition: mouseTilt.x === 0 && mouseTilt.y === 0 ? "transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)" : "transform 100ms ease-out"
				},
				children: photo ? /* @__PURE__ */ jsx("div", {
					className: "hero-portrait-frame relative overflow-visible",
					children: /* @__PURE__ */ jsx("img", {
						src: photo,
						alt: name,
						className: "profile-portrait h-full w-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]",
						loading: "eager"
					})
				}) : /* @__PURE__ */ jsx("div", {
					className: "flex h-96 w-80 items-center justify-center font-display text-8xl font-black text-white/30",
					children: "DG"
				})
			})
		})]
	}) });
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var NAV = [
	["home", "Home"],
	["about", "About"],
	["education", "Education"],
	["skills", "Skills"],
	["projects", "Projects"],
	["certificates", "Certificates"],
	["contact", "Contact"]
];
var HERO_COPY = [
	{
		lines: ["CREATIVE", "DEVELOPER"],
		description: "Passionate about turning ideas into real-world solutions using modern web technologies and clean code."
	},
	{
		lines: ["FULL STACK", "DEVELOPER"],
		description: "Building complete web experiences, from polished interfaces to reliable APIs and databases."
	},
	{
		lines: ["SCALABLE", "SYSTEMS"],
		description: "Designing resilient systems that stay fast, dependable, and ready to grow."
	}
];
var SOCIAL = [
	{
		href: socials.linkedin,
		label: "LinkedIn",
		Icon: FaLinkedin
	},
	{
		href: socials.github,
		label: "GitHub",
		Icon: SiGithub
	},
	{
		href: socials.x,
		label: "X (Twitter)",
		Icon: SiX
	},
	{
		href: socials.instagram,
		label: "Instagram",
		Icon: SiInstagram
	}
];
var SKILL_ICONS = {
	Java: FaJava,
	Python: SiPython,
	JavaScript: SiJavascript,
	"React.js": SiReact,
	HTML: SiHtml5,
	CSS: SiCss,
	"Node.js": SiNodedotjs,
	MySQL: SiMysql,
	Git: SiGit,
	GitHub: SiGithub,
	"VS Code": Code2,
	"Express.js": SiExpress
};
var SKILL_ICON_COLORS = {
	Java: "#f89820",
	Python: "#3776ab",
	JavaScript: "#f7df1e",
	"React.js": "#61dafb",
	HTML: "#e34f26",
	CSS: "#1572b6",
	"Node.js": "#5fa04e",
	MySQL: "#4479a1",
	Git: "#f05032",
	GitHub: "#f4f4f5",
	"VS Code": "#007acc",
	"Express.js": "#f4f4f5"
};
function Socials({ size = "md" }) {
	const s = size === "sm" ? "h-8 w-8" : "h-10 w-10";
	return /* @__PURE__ */ jsx("div", {
		className: "flex gap-2",
		children: SOCIAL.map(({ href, label, Icon }) => /* @__PURE__ */ jsx("a", {
			href,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": label,
			className: `${s} inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-400 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white`,
			children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
		}, label))
	});
}
function SectionHead({ k, title }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-12",
		children: [/* @__PURE__ */ jsx("p", {
			className: "font-mono text-xs uppercase tracking-[0.25em] text-zinc-400",
			children: k
		}), /* @__PURE__ */ jsx("h2", {
			className: "mt-2 font-display text-3xl font-bold tracking-tight text-white md:text-5xl",
			children: title
		})]
	});
}
function Index() {
	const [active, setActive] = useState("home");
	const [open, setOpen] = useState(false);
	const [activeHeroCopy, setActiveHeroCopy] = useState(0);
	useEffect(() => {
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		let interval;
		const updateRotation = () => {
			if (interval !== void 0) window.clearInterval(interval);
			interval = void 0;
			if (!reducedMotion.matches) interval = window.setInterval(() => {
				setActiveHeroCopy((current) => (current + 1) % HERO_COPY.length);
			}, 5600);
		};
		updateRotation();
		reducedMotion.addEventListener("change", updateRotation);
		return () => {
			if (interval !== void 0) window.clearInterval(interval);
			reducedMotion.removeEventListener("change", updateRotation);
		};
	}, []);
	useEffect(() => {
		const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
		NAV.forEach(([id]) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		const rev = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: .1 });
		document.querySelectorAll(".reveal").forEach((el) => rev.observe(el));
		return () => {
			obs.disconnect();
			rev.disconnect();
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#0b0c10] text-[#fafafa] selection:bg-white selection:text-black",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 studio-amber-backdrop opacity-80" }),
			/* @__PURE__ */ jsxs("header", {
				className: "sticky top-0 z-50 border-b border-white/6 bg-[#0c0d10]/80 backdrop-blur-md",
				children: [/* @__PURE__ */ jsxs("nav", {
					className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-6",
					"aria-label": "Main",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#home",
							className: "font-display text-2xl font-bold tracking-tight text-white transition hover:opacity-90",
							children: ["Dinesh", /* @__PURE__ */ jsx("span", {
								className: "text-amber-500",
								children: "."
							})]
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "hidden items-center gap-7 md:flex",
							children: NAV.map(([id, l]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: `#${id}`,
								"aria-current": active === id ? "true" : void 0,
								className: `relative py-1 text-sm tracking-wide transition-all ${active === id ? "text-white font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500" : "text-zinc-400 hover:text-white"}`,
								children: l
							}) }, id))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "hidden sm:inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-6 py-2 text-xs font-medium text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/40 active:scale-95",
								children: "Hire Me"
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setOpen(!open),
								"aria-label": "Menu",
								"aria-expanded": open,
								className: "inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-300 md:hidden",
								children: open ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
							})]
						})
					]
				}), open && /* @__PURE__ */ jsxs("ul", {
					className: "border-t border-white/10 bg-[#0c0d10]/95 px-6 py-4 md:hidden backdrop-blur-xl",
					children: [NAV.map(([id, l]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${id}`,
						onClick: () => setOpen(false),
						className: `block rounded-lg px-3 py-2 text-sm ${active === id ? "text-amber-400 font-semibold bg-white/10" : "text-zinc-400"}`,
						children: l
					}) }, id)), /* @__PURE__ */ jsxs("li", {
						className: "pt-4 mt-2 border-t border-white/10 flex justify-between items-center",
						children: [/* @__PURE__ */ jsx("a", {
							href: "#contact",
							onClick: () => setOpen(false),
							className: "inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold text-black",
							children: "Hire Me"
						}), /* @__PURE__ */ jsx(Socials, { size: "sm" })]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("main", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ jsxs("section", {
						id: "home",
						className: "relative mx-auto flex min-h-[100vh] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-5",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "my-auto grid items-center gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1.45fr)_minmax(0,0.75fr)]",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "text-center xl:text-left",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400",
											children: "HI, I'M DINESH"
										}),
										/* @__PURE__ */ jsx("h1", {
											className: "hero-copy-enter mt-4 font-display text-4xl font-black uppercase tracking-[-0.06em] text-white sm:text-5xl md:text-6xl xl:text-[5.25rem]",
											children: HERO_COPY[activeHeroCopy].lines.map((line) => /* @__PURE__ */ jsx("span", {
												className: "block leading-[0.9]",
												children: line
											}, line))
										}, activeHeroCopy),
										/* @__PURE__ */ jsx("p", {
											className: "mx-auto mt-5 max-w-sm text-sm leading-relaxed text-zinc-400 xl:mx-0",
											children: "CSE student building high-performance web applications with clean architecture and modern user experiences."
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-8 flex flex-wrap items-center justify-center gap-3 xl:justify-start",
											children: [/* @__PURE__ */ jsxs("a", {
												href: "#projects",
												className: "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(255,255,255,0.14)] transition hover:bg-zinc-200 active:scale-95",
												children: [/* @__PURE__ */ jsx("span", { children: "View My Work" }), /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
											}), /* @__PURE__ */ jsx("a", {
												href: "#contact",
												className: "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/4 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/30 active:scale-95",
												children: "Contact Me"
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative flex justify-center py-2",
									children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-x-[10%] bottom-10 top-6 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,168,78,0.26),rgba(255,168,78,0.08)_26%,transparent_58%)] blur-3xl" }), /* @__PURE__ */ jsx(ProfileAvatar360, {
										photo: profile.photo,
										name: profile.name,
										title: profile.title
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center text-center xl:items-start xl:text-left",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-full max-w-xs border-l-2 border-amber-500/80 py-1 pl-4 text-left",
										children: /* @__PURE__ */ jsx("p", {
											className: "hero-copy-enter hero-copy-enter-delayed text-sm leading-relaxed text-zinc-300",
											children: HERO_COPY[activeHeroCopy].description
										}, activeHeroCopy)
									}), /* @__PURE__ */ jsx("div", {
										className: "mt-8 flex items-center justify-center gap-3 xl:justify-start",
										children: SOCIAL.map(({ href, label, Icon }) => /* @__PURE__ */ jsx("a", {
											href,
											target: "_blank",
											rel: "noopener noreferrer",
											"aria-label": label,
											className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/2 text-zinc-400 transition hover:border-white/40 hover:bg-white/10 hover:text-white",
											children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
										}, label))
									})]
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex items-center justify-between border-t border-white/6 pt-6 font-mono text-xs uppercase tracking-wider text-zinc-500",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "#about",
								className: "inline-flex items-center gap-3 text-zinc-400 transition hover:text-white",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "flex h-6 w-3.5 items-start justify-center rounded-full border border-zinc-500 p-0.5",
										children: /* @__PURE__ */ jsx("div", { className: "h-1.5 w-0.5 rounded-full bg-zinc-300 animate-mouse-wheel" })
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-zinc-600",
										children: "|"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs tracking-wider text-zinc-400",
										children: "Scroll Down"
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "hidden sm:block text-[11px] text-zinc-600 tracking-widest",
								children: "TAMIL NADU, INDIA · 2026"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("section", {
						id: "about",
						className: "border-t border-white/8 bg-white/1",
						children: /* @__PURE__ */ jsxs("div", {
							className: "reveal mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx(SectionHead, {
									k: "01 // ABOUT",
									title: "About Me"
								}),
								about.paragraphs.map((p) => /* @__PURE__ */ jsx("p", {
									className: "mb-4 text-base leading-relaxed text-zinc-300",
									children: p
								}, p)),
								/* @__PURE__ */ jsx("div", {
									className: "mt-8 flex flex-wrap gap-4",
									children: /* @__PURE__ */ jsxs("a", {
										href: profile.resume,
										download: true,
										className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black shadow-lg transition hover:bg-zinc-200 active:scale-95",
										children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), " Download Resume"]
									})
								})
							] }), /* @__PURE__ */ jsx("div", {
								className: "space-y-8 lg:pt-16",
								children: /* @__PURE__ */ jsxs("div", {
									className: "relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#111216] shadow-soft",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: profile.photo,
											alt: profile.name,
											className: "h-full w-full object-cover object-center"
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" }),
										/* @__PURE__ */ jsxs("div", {
											className: "absolute inset-x-0 bottom-0 p-6",
											children: [/* @__PURE__ */ jsx("p", {
												className: "font-display text-xl font-bold text-white",
												children: profile.name
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-1 text-sm text-zinc-300",
												children: profile.title
											})]
										})
									]
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "skills",
						className: "reveal border-t border-white/8 bg-white/1 px-6 py-24",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-7xl",
							children: [/* @__PURE__ */ jsx(SectionHead, {
								k: "02 // SKILLS",
								title: "Tools I Work With"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
								children: skills.map((skill) => {
									const Icon = SKILL_ICONS[skill];
									return /* @__PURE__ */ jsxs("div", {
										className: "flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/3 px-2 py-4 text-center transition hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/6",
										children: [/* @__PURE__ */ jsx("span", {
											className: "flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/5",
											children: /* @__PURE__ */ jsx(Icon, {
												"aria-hidden": "true",
												className: "h-8 w-8",
												style: { color: SKILL_ICON_COLORS[skill] }
											})
										}), /* @__PURE__ */ jsx("span", {
											className: "text-xs font-medium text-zinc-300",
											children: skill
										})]
									}, skill);
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "education",
						className: "reveal border-t border-white/8 px-6 py-24",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-5xl",
							children: [/* @__PURE__ */ jsx(SectionHead, {
								k: "03 // EDUCATION",
								title: "Timeline & Academics"
							}), /* @__PURE__ */ jsx("ol", {
								className: "relative ml-4 border-l border-white/15",
								children: education.map((e) => /* @__PURE__ */ jsxs("li", {
									className: "mb-10 ml-8",
									children: [/* @__PURE__ */ jsx("span", {
										className: "absolute -left-4.25 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-[#14151b] text-white shadow-md",
										children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4" })
									}), /* @__PURE__ */ jsxs("div", {
										className: "rounded-2xl border border-white/10 bg-white/2 p-6 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/4",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex flex-wrap items-center justify-between gap-2",
												children: [/* @__PURE__ */ jsx("p", {
													className: "font-mono text-xs uppercase tracking-wider text-zinc-400",
													children: e.period
												}), /* @__PURE__ */ jsx("span", {
													className: "rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-zinc-300",
													children: "Academic"
												})]
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "mt-2 font-display text-xl font-bold text-white",
												children: e.degree
											}),
											/* @__PURE__ */ jsxs("p", {
												className: "text-sm text-zinc-400",
												children: [
													e.institution,
													" · ",
													e.university
												]
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-3 text-sm text-zinc-300 leading-relaxed",
												children: e.details
											})
										]
									})]
								}, e.degree))
							})]
						})
					}),
					/* @__PURE__ */ jsx("section", {
						id: "projects",
						className: "border-t border-white/8 bg-white/1",
						children: /* @__PURE__ */ jsxs("div", {
							className: "reveal mx-auto max-w-7xl px-6 py-24",
							children: [/* @__PURE__ */ jsx(SectionHead, {
								k: "04 // PROJECTS",
								title: "Featured Work"
							}), /* @__PURE__ */ jsx("div", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: projects.map((p, i) => /* @__PURE__ */ jsxs("article", {
									className: "group flex h-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/4",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "relative flex h-24 shrink-0 items-end border-b border-white/6 bg-linear-to-br from-white/5 to-transparent p-4",
										children: [/* @__PURE__ */ jsx(Code2, { className: "absolute right-5 top-5 h-7 w-7 text-white/30 transition-transform group-hover:scale-110 group-hover:text-white" }), /* @__PURE__ */ jsxs("span", {
											className: "max-w-full truncate font-mono text-xs tracking-wider text-zinc-400",
											children: [
												"0",
												i + 1,
												" // ",
												p.name.toUpperCase()
											]
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex min-h-0 flex-1 flex-col p-4",
										children: [
											/* @__PURE__ */ jsx("h3", {
												className: "line-clamp-2 font-display text-lg font-bold text-white group-hover:text-white",
												children: p.name
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-300",
												children: p.description
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-3 flex flex-wrap gap-1.5",
												children: [p.tech.slice(0, 4).map((t) => /* @__PURE__ */ jsx("span", {
													className: "rounded-md border border-white/10 bg-white/4 px-2 py-0.5 font-mono text-[11px] text-zinc-300",
													children: t
												}, t)), p.tech.length > 4 && /* @__PURE__ */ jsxs("span", {
													className: "rounded-md border border-white/10 bg-white/4 px-2 py-0.5 font-mono text-[11px] text-zinc-400",
													children: ["+", p.tech.length - 4]
												})]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-auto flex items-center gap-2 border-t border-white/6 pt-3",
												children: [/* @__PURE__ */ jsxs("a", {
													href: p.github,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white transition hover:bg-white/10 hover:border-white/40",
													children: [/* @__PURE__ */ jsx(SiGithub, { className: "h-3.5 w-3.5" }), " Source Code"]
												}), p.demo && /* @__PURE__ */ jsxs("a", {
													href: p.demo,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-black transition hover:bg-zinc-200",
													children: [/* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }), " Live Demo"]
												})]
											})
										]
									})]
								}, p.name))
							})]
						})
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "certificates",
						className: "reveal mx-auto max-w-7xl border-t border-white/8 px-6 py-24",
						children: [/* @__PURE__ */ jsx(SectionHead, {
							k: "05 // CERTIFICATES",
							title: "Certificates & Accreditations"
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: certificates.map((c, i) => /* @__PURE__ */ jsxs("article", {
								className: "flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/25",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-40 items-center justify-center border-b border-white/6 bg-white",
									children: c.image ? /* @__PURE__ */ jsx("img", {
										src: c.image,
										alt: c.title,
										className: "h-full w-full object-contain"
									}) : /* @__PURE__ */ jsx(Award, { className: "h-10 w-10 text-zinc-400" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex flex-1 flex-col p-6",
									children: [
										/* @__PURE__ */ jsx("h3", {
											className: "font-display font-semibold text-white",
											children: c.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-zinc-400 mt-1",
											children: c.issuer
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 font-mono text-[11px] text-zinc-500",
											children: c.date
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-5 flex flex-wrap gap-3 text-xs",
											children: [c.file ? /* @__PURE__ */ jsx("a", {
												href: c.file,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-zinc-200",
												children: "View Certificate"
											}) : /* @__PURE__ */ jsx("span", {
												className: "rounded-full border border-dashed border-white/20 px-3 py-1.5 text-zinc-500 text-xs",
												children: "Verified"
											}), c.verify && /* @__PURE__ */ jsxs("a", {
												href: c.verify,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center gap-1 py-1.5 text-xs text-zinc-300 hover:text-white",
												children: ["Verify ", /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })]
											})]
										})
									]
								})]
							}, i))
						})]
					}),
					/* @__PURE__ */ jsx(Contact, {})
				]
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "border-t border-white/8 bg-[#090a0d]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-[1360px] gap-8 px-6 py-12 md:grid-cols-3 lg:grid-cols-[1fr_1.5fr_1fr]",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("p", {
								className: "font-display text-lg font-bold text-white",
								children: ["Dinesh ", /* @__PURE__ */ jsx("span", {
									className: "text-zinc-500",
									children: "."
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-xs text-zinc-400",
								children: profile.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-xs text-zinc-500",
								children: "Designed & built with modern web technologies."
							})
						] }),
						/* @__PURE__ */ jsx("nav", {
							"aria-label": "Footer",
							children: /* @__PURE__ */ jsx("ul", {
								className: "flex flex-wrap gap-x-5 gap-y-2 text-xs",
								children: NAV.map(([id, l]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: `#${id}`,
									className: "text-zinc-400 transition hover:text-white",
									children: l
								}) }, id))
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ jsx(Socials, { size: "sm" }), /* @__PURE__ */ jsxs("a", {
								href: `mailto:${profile.email}`,
								className: "inline-flex items-center gap-2 text-xs text-zinc-400 transition hover:text-white",
								children: [
									/* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
									" ",
									profile.email
								]
							})]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "border-t border-white/5 py-6 text-center font-mono text-[11px] text-zinc-600",
					children: /* @__PURE__ */ jsxs("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						profile.name,
						". All rights reserved."
					] })
				})]
			})
		]
	});
}
function Contact() {
	const [err, setErr] = useState({});
	const [status, setStatus] = useState("");
	const submit = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const v = Object.fromEntries([
			"name",
			"email",
			"subject",
			"message"
		].map((k) => [k, String(f.get(k) || "").trim()]));
		const er = {};
		if (!v["name"]) er["name"] = "Please enter your full name.";
		if (!v["email"]) er["email"] = "Please enter your email.";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v["email"])) er["email"] = "Please enter a valid email address.";
		if (!v["subject"]) er["subject"] = "Please enter a subject.";
		if (!v["message"]) er["message"] = "Please write a message.";
		setErr(er);
		if (Object.keys(er).length) {
			setStatus("");
			return;
		}
		const body = `${v["message"]}\n\n— ${v["name"]} (${v["email"]})`;
		window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v["subject"] ?? "")}&body=${encodeURIComponent(body)}`;
		setStatus("ok");
	};
	const field = "mt-1.5 w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white/30 focus:bg-white/6";
	const F = ({ id, label, type = "text" }) => /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("label", {
			htmlFor: id,
			className: "text-xs font-mono uppercase tracking-wider text-zinc-400",
			children: [label, " *"]
		}),
		/* @__PURE__ */ jsx("input", {
			id,
			name: id,
			type,
			"aria-invalid": !!err[id],
			"aria-describedby": `${id}-e`,
			className: field
		}),
		err[id] && /* @__PURE__ */ jsx("p", {
			id: `${id}-e`,
			className: "mt-1 text-xs text-red-400",
			children: err[id]
		})
	] });
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "border-t border-white/8 bg-[#090a0d]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "reveal mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.3fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(SectionHead, {
					k: "05 // CONTACT",
					title: "Get In Touch"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-base text-zinc-300 leading-relaxed",
					children: "Open to full-time roles, internships, and project collaborations. Let's build something remarkable together."
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "mt-8 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3 text-zinc-300",
							children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-white" }), /* @__PURE__ */ jsx("a", {
								href: `mailto:${profile.email}`,
								className: "hover:text-white transition",
								children: profile.email
							})]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3 text-zinc-300",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-white" }), /* @__PURE__ */ jsx("span", { children: profile.phone })]
						}),
						/* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3 text-zinc-300",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-white" }), /* @__PURE__ */ jsx("span", { children: profile.location })]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(Socials, {})
				})
			] }), /* @__PURE__ */ jsxs("form", {
				onSubmit: submit,
				noValidate: true,
				className: "space-y-4 rounded-3xl border border-white/10 bg-white/2 p-8 backdrop-blur-md",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [F({
							id: "name",
							label: "Your Name"
						}), F({
							id: "email",
							label: "Email Address",
							type: "email"
						})]
					}),
					F({
						id: "subject",
						label: "Subject"
					}),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("label", {
							htmlFor: "message",
							className: "text-xs font-mono uppercase tracking-wider text-zinc-400",
							children: "Message *"
						}),
						/* @__PURE__ */ jsx("textarea", {
							id: "message",
							name: "message",
							rows: 5,
							"aria-invalid": !!err["message"],
							className: field
						}),
						err["message"] && /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs text-red-400",
							children: err["message"]
						})
					] }),
					/* @__PURE__ */ jsx("button", {
						type: "submit",
						className: "w-full rounded-full bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-lg transition hover:bg-zinc-200 active:scale-95",
						children: "Send Message"
					}),
					status === "ok" && /* @__PURE__ */ jsxs("p", {
						role: "status",
						className: "rounded-xl border border-white/20 bg-white/5 p-4 text-xs text-zinc-300",
						children: [
							"Your email app will now open with the drafted message. You can also contact me directly at ",
							profile.email,
							"."
						]
					}),
					Object.keys(err).length > 0 && /* @__PURE__ */ jsx("p", {
						role: "alert",
						className: "text-xs text-red-400 font-medium",
						children: "Please fill in all required fields."
					})
				]
			})]
		})
	});
}
//#endregion
export { Index as component };
