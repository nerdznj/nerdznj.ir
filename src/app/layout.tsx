import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "امین تقی بیگلو | متخصص امنیت سایبری",
  description: "وبسایت شخصی امین تقی بیگلو، وبسایت رسمی - تحلیل‌های امنیت سایبری، آموزش‌ها و یادداشت‌های تخصصی",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="antialiased bg-dark-bg text-white selection:bg-cyber-green selection:text-black">
        {/* Global Background Effects could go here */}
        <div className="fixed inset-0 z-[-1] opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-dark-bg to-black pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
