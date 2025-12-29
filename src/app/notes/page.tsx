import { getAllNotes } from "@/lib/notes";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotesPage() {
    const notes = getAllNotes();

    return (
        <main className="min-h-screen pt-20 flex flex-col">
            <Navbar />
            <div className="container mx-auto px-4 lg:px-8 py-12 flex-grow">
                <h1 className="text-4xl font-bold mb-12 text-center text-cyber-green text-shadow">یادداشت‌ها و اخبار</h1>

                {notes.length === 0 ? (
                    <div className="text-center text-gray-400">هنوز خبری منتشر نشده است.</div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {notes.map(note => (
                            <Link href={`/notes/${note.slug}`} key={note.slug} className="group flex flex-col h-full bg-card-bg border border-white/5 rounded-xl overflow-hidden hover:border-cyber-green transition-all hover:shadow-[0_0_20px_rgba(0,255,153,0.1)] hover:-translate-y-2">
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs text-cyber-blue px-2 py-1 rounded-full bg-cyber-blue/10">
                                            {new Date(note.date).toLocaleDateString('fa-IR')}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-cyber-green transition-colors">{note.title}</h2>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow text-justify">{note.description || "مطالعه متن کامل..."}</p>
                                    <div className="text-cyber-green text-sm font-medium flex items-center mt-auto">
                                        ادامه مطلب
                                        <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </main>
    )
}
