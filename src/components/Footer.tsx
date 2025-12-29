import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-cyber-green/20 py-8 relative z-10">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 flex items-center gap-1">
                            © ۲۰۲۵ Nerdznj. ساخته شده با
                            <Heart className="w-4 h-4 text-red-500 fill-red-500 mx-1" />
                            توسط
                            <Link href="/" className="text-cyber-green hover:text-cyber-blue transition-colors">
                                امین تقی بیگلو
                            </Link>
                        </p>
                    </div>
                    <div className="flex space-x-4 space-x-reverse">
                        <Link href="/privacy" className="text-gray-400 hover:text-cyber-green transition-colors text-sm">
                            حریم خصوصی
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-cyber-green transition-colors text-sm">
                            شرایط استفاده
                        </Link>
                        <Link href="/sitemap.xml" className="text-gray-400 hover:text-cyber-green transition-colors text-sm">
                            نقشه سایت
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
