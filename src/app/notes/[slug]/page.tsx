import { getNoteData, getAllNotes } from "@/lib/notes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateStaticParams() {
    const notes = getAllNotes();
    return notes.map((note) => ({
        slug: note.slug,
    }));
}

export default async function NotePost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const noteData = await getNoteData(slug);

    return (
        <main className="min-h-screen bg-dark-bg">
            <Navbar />

            {/* Header with background glow */}
            <div className="relative pt-32 pb-12 px-4 border-b border-white/5 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyber-green/5 blur-3xl -z-10"></div>
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <Link href="/notes" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowRight className="w-4 h-4 ml-2" />
                        بازگشت به لیست
                    </Link>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">{noteData.title}</h1>
                    <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
                        <span className="bg-white/5 px-3 py-1 rounded-full">{new Date(noteData.date).toLocaleDateString('fa-IR')}</span>
                        {noteData.tags && noteData.tags.map((tag: string) => (
                            <span key={tag} className="text-cyber-blue">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl">
                <div className="bg-card-bg rounded-2xl p-8 lg:p-12 border border-white/5 shadow-2xl">
                    <article
                        className="prose prose-invert prose-lg max-w-none prose-headings:text-cyber-green prose-a:text-cyber-blue prose-img:rounded-xl prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10"
                        dangerouslySetInnerHTML={{ __html: noteData.contentHtml }}
                    />
                </div>
            </div>
            <Footer />
        </main>
    )
}
