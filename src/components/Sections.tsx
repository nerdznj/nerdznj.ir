"use client";

import { motion } from "framer-motion";
import { Shield, Code, Terminal, Server, Link as LinkIcon, Lock, Cpu, Globe, Database, Bug, Mail, Send, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export function About() {
    return (
        <section id="about" className="py-20 relative z-10">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">درباره من</h2>
                    <p className="text-gray-400">بیش از یک دهه در دنیای فناوری</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {[
                                { title: "🚀 شروع سفر", text: "از ۱۵ سالگی با جاوااسکریپت وارد دنیای برنامه‌نویسی شدم. اولین پروژه‌هام وبسایت‌های ساده بودند، اما همان موقع متوجه شدم که کدنویسی فقط یک مهارت نیست، بلکه یک هنر است.", color: "text-cyber-green" },
                                { title: "🐍 تسلط بر پایتون", text: "پایتون به سرعت تبدیل به زبان اصلی من شد. از وب‌اسکرپینگ تا machine learning، از اتوماسیون تا ساخت ابزارهای امنیتی - پایتون همیشه همراه من بوده.", color: "text-cyber-blue" },
                                { title: "🛡️ ورود به امنیت سایبری", text: "کنجکاوی در مورد ساختار سیستم‌ها و شبکه‌ها منو کشوند به دنیای امنیت سایبری. از تحلیل malware تا تست نفوذ، هر روز در حال یادگیری و کشف چیزهای جدید هستم.", color: "text-cyber-purple" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="bg-card-bg/50 p-6 rounded-xl border border-white/5 hover:border-cyber-green/30 transition-colors"
                                >
                                    <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm text-justify">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-center mb-8 text-white">مهارت‌های کلیدی</h3>
                            {[
                                { name: "امنیت سایبری", p: 95, color: "bg-cyber-green" },
                                { name: "Python Development", p: 90, color: "bg-cyber-blue" },
                                { name: "تست نفوذ", p: 85, color: "bg-cyber-purple" },
                                { name: "JavaScript/Node.js", p: 80, color: "bg-cyber-green" },
                                { name: "Linux Administration", p: 88, color: "bg-cyber-blue" }
                            ].map((skill, i) => (
                                <div key={i} className="skill-bar">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                        <span className="text-sm text-cyber-green">{skill.p}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.p}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Skills() {
    // Reusing the grid layout from original
    const categories = [
        { title: "امنیت سایبری", icon: Shield, items: ["Ethical Hacking", "Vulnerability Analysis", "Incident Response", "Malware Analysis"], color: "text-cyber-green" },
        { title: "برنامه‌نویسی", icon: Code, items: ["Python (Django/Flask)", "JavaScript (React/Node)", "Bash Scripting", "API Development"], color: "text-cyber-blue" },
        { title: "ابزارها", icon: Terminal, items: ["Kali Linux", "Metasploit & Burp", "Docker & K8s", "Git & DevOps"], color: "text-cyber-purple" },
        { title: "پلتفرم‌ها", icon: Server, items: ["Linux Admin", "Cloud Security", "Network Security", "Mobile Security"], color: "text-cyber-green" },
        { title: "گواهینامه‌ها", icon: LinkIcon, items: ["CEH", "OSCP (In Progress)", "Security+", "LPIC"], color: "text-cyber-blue" },
        { title: "تحقیق", icon: Bug, items: ["CVE Research", "Zero-day Discovery", "Threat Intel", "Tool Dev"], color: "text-cyber-purple" },
    ];

    return (
        <section id="skills" className="py-20 bg-card-bg/30 relative z-10">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">تخصص‌ها</h2>
                    <p className="text-gray-400">ابزارها و تکنولوژی‌هایی که با آنها کار می‌کنم</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-card-bg p-6 rounded-xl border border-white/5 hover:border-cyber-green/50 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                                <cat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
                            <ul className="space-y-2">
                                {cat.items.map((item, j) => (
                                    <li key={j} className="text-gray-400 text-sm flex items-center">
                                        <span className={`w-1.5 h-1.5 rounded-full mr-2 ml-2 ${cat.color.replace('text-', 'bg-')}`}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Projects() {
    const projects = [
        { title: "تحلیل آسیب‌پذیری", desc: "ابزار خودکار برای شناسایی آسیب‌پذیری‌های وب", tags: ["Python", "Security"], icon: Bug, color: "text-cyber-green" },
        { title: "مانیتورینگ شبکه", desc: "سیستم مانیتورینگ و هشدار Network Threat", tags: ["Python", "Network"], icon: Server, color: "text-cyber-blue" },
        { title: "ربات تلگرام امنیتی", desc: "ربات اطلاع‌رسانی اخبار CVE و امنیت", tags: ["Bot", "API"], icon: Terminal, color: "text-cyber-purple" },
        { title: "رمزنگاری فایل", desc: "ابزار رمزنگاری مدرن فایل‌ها", tags: ["Crypto", "Python"], icon: Lock, color: "text-cyber-green" },
        { title: "داشبورد امنیتی", desc: "پنل مدیریت وضعیت امنیت سازمان", tags: ["React", "Dashboard"], icon: Database, color: "text-cyber-blue" },
        { title: "ابزار CLI", desc: "تول‌کیت خط فرمان برای لینوکس", tags: ["Bash", "Linux"], icon: Terminal, color: "text-cyber-purple" },
    ];

    return (
        <section id="projects" className="py-20 relative z-10">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">پروژه‌ها</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-card-bg rounded-xl overflow-hidden border border-white/5 hover:border-cyber-green/50 transition-all"
                        >
                            <div className="p-6">
                                <div className="mb-4 flex justify-between items-start">
                                    <div className={`p-3 rounded-lg bg-white/5 ${p.color}`}>
                                        <p.icon className="w-6 h-6" />
                                    </div>
                                    <Link href="https://github.com/nerdznj" target="_blank" className="text-gray-500 hover:text-white">
                                        <Github className="w-5 h-5" />
                                    </Link>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyber-green transition-colors">{p.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 h-10">{p.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map((tag, t) => (
                                        <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="https://github.com/nerdznj" target="_blank" className="inline-flex items-center gap-2 border border-cyber-green text-cyber-green px-6 py-2 rounded-lg hover:bg-cyber-green hover:text-black transition-all">
                        <Github className="w-5 h-5" />
                        مشاهده همه در گیت‌هاب
                    </Link>
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-card-bg/30 relative z-10">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">ارتباط با من</h2>
                    <p className="text-gray-400">برای همکاری، مشاوره یا گفتگو</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-card-bg p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl font-semibold mb-6 text-cyber-green">راه‌های ارتباطی</h3>
                            <div className="space-y-4">
                                <a href="mailto:contact@nerdznj.ir" className="flex items-center gap-4 text-gray-300 hover:text-cyber-green transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium">ایمیل</div>
                                        <div className="text-sm text-gray-500">contact@nerdznj.ir</div>
                                    </div>
                                </a>
                                <a href="https://github.com/nerdznj" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-cyber-green transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium">گیت‌هاب</div>
                                        <div className="text-sm text-gray-500">@nerdznj</div>
                                    </div>
                                </a>
                                <a href="https://twitter.com/Radikal_orea" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-cyber-green transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                        <Twitter className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-medium">توییتر</div>
                                        <div className="text-sm text-gray-500">@Radikal_orea</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card-bg p-6 rounded-xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">نام</label>
                                <input type="text" className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-green transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">ایمیل</label>
                                <input type="email" className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-green transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">پیام</label>
                                <textarea rows={4} className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-green transition-colors"></textarea>
                            </div>
                            <button type="button" className="w-full bg-cyber-green text-black font-bold py-3 rounded-lg hover:bg-cyber-blue transition-colors flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" />
                                ارسال پیام
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
