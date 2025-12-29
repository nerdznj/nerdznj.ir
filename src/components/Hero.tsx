"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Code, BookOpen, Terminal } from "lucide-react";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "امین تقی بیگلو";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index + 1));
            index++;
            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-cyber-green/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyber-blue/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto text-center relative z-10">
                {/* Avatar */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8 inline-block"
                >
                    <div className="w-32 h-32 lg:w-40 lg:h-40 relative mx-auto">
                        {/* Fallback to a div if image missing, but we expect it */}
                        <div className="w-full h-full rounded-full border-4 border-cyber-green shadow-[0_0_30px_rgba(0,255,153,0.5)] overflow-hidden relative z-10 animate-[float_6s_ease-in-out_infinite]">
                            <Image
                                src="/assets/avatar.png"
                                alt="Amin Taghi Beigloo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute inset-0 rounded-full border-4 border-cyber-blue animate-pulse opacity-50 z-0 scale-110"></div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyber-green rounded-full border-4 border-dark-bg flex items-center justify-center z-20">
                        <Shield className="w-4 h-4 text-black" />
                    </div>
                </motion.div>

                {/* Main Heading */}
                <div className="mb-8">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-4"
                    >
                        <span className="text-white">سلام، من </span>
                        <span className="bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent min-w-[200px] inline-block text-right">
                            {text}
                            <span className="animate-[blink-caret_0.75s_step-end_infinite] border-r-2 border-cyber-green ml-1">&nbsp;</span>
                        </span>
                    </motion.h1>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl lg:text-2xl text-gray-300 font-medium mb-6"
                    >
                        متخصص امنیت سایبری • برنامه‌نویس • مشاور فناوری
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        از ۱۵ سالگی با جاوااسکریپت آغاز کردم و امروز با پایتون و امنیت سایبری،
                        دنیای دیجیتال را امن‌تر و بهتر می‌سازم
                    </motion.p>
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <Link href="/#contact" className="px-8 py-3 bg-cyber-green text-black font-bold rounded-lg hover:bg-cyber-blue transition-colors flex items-center shadow-[0_0_20px_rgba(0,255,153,0.3)] hover:shadow-[0_0_30px_rgba(0,204,255,0.5)]">
                        <Shield className="w-5 h-5 ml-2" />
                        تماس با من
                    </Link>
                    <Link href="/notes" className="px-8 py-3 bg-card-bg border border-cyber-green/30 text-white font-bold rounded-lg hover:border-cyber-green hover:bg-white/5 transition-all flex items-center">
                        <BookOpen className="w-5 h-5 ml-2" />
                        مطالعه یادداشت‌ها
                    </Link>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { val: "6+", label: "سال تجربه", color: "text-cyber-green" },
                        { val: "+15", label: "پروژه انجام شده", color: "text-cyber-blue" },
                        { val: "1", label: "مقاله منتشر شده", color: "text-cyber-purple" },
                        { val: "5+", label: "تست امنیتی", color: "text-cyber-green" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-card-bg/50 backdrop-blur border border-white/5 p-4 rounded-xl hover:border-cyber-green/30 transition-colors">
                            <div className={`text-2xl lg:text-3xl font-bold mb-2 ${stat.color}`}>{stat.val}</div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
