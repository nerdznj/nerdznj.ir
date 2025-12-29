"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "خانه", href: "/" },
        { name: "درباره من", href: "/#about" },
        { name: "مهارت‌ها", href: "/#skills" },
        { name: "پروژه‌ها", href: "/#projects" },
        { name: "یادداشت‌ها", href: "/notes" },
        { name: "تماس", href: "/#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/80 backdrop-blur-md border-b border-cyber-green/20 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Terminal className="text-black w-6 h-6" />
                        </div>
                        <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">
                            Nerdznj
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative text-gray-300 hover:text-white transition-colors duration-300 py-2 group",
                                    pathname === link.href && "text-cyber-green"
                                )}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-green transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Controls */}
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-cyber-green">
                            <Moon className="w-5 h-5" />
                        </button>
                        <button
                            className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden mt-4 absolute top-full left-0 right-0 p-4 bg-card-bg/95 backdrop-blur-md border-b border-cyber-green/20 animate-in slide-in-from-top-5">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-cyber-green transition-colors px-4 py-2 hover:bg-white/5 rounded-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
