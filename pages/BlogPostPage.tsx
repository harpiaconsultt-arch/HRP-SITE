import React, { useState, useEffect } from 'react';

interface Post {
    slug: string;
    title: string;
    seoTitle?: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
    content: string;
}

interface BlogPostPageProps {
    slug: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('/posts.json');
                const posts = await response.json();
                const currentPost = posts.find((p: Post) => p.slug === slug);
                setPost(currentPost);
            // Fix: Added braces to the catch block to fix syntax error.
            } catch (error) {
                console.error("Failed to fetch post:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [slug]);

    useEffect(() => {
        if (post) {
            // Update title and meta description for SEO
            document.title = post.seoTitle || `${post.title} | Harpia Consultoria`;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', post.excerpt);
            }
        }
        return () => {
             // Reset to default when component unmounts
             document.title = 'Laudos de Engenharia Civil, Mecânica e Segurança em Barbacena | Harpia Consultoria';
             const metaDescription = document.querySelector('meta[name="description"]');
             if (metaDescription) {
                metaDescription.setAttribute('content', 'Especialistas em laudos técnicos em Barbacena e região. Mestres e doutores em engenharia civil, mecânica e segurança do trabalho. Precisa de um laudo fundamentado? Fale conosco e solicite um orçamento via WhatsApp!');
            }
        };
    }, [post]);

    if (loading) {
        return <div className="text-center py-40 text-slate-400">Carregando artigo...</div>;
    }

    if (!post) {
        return <div className="text-center py-40 text-slate-400">Artigo não encontrado. <a href="#/blog" className="text-primary underline">Voltar para o blog</a>.</div>;
    }

    const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
    });

    return (
        <article className="py-28 bg-surface-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <p className="text-primary font-semibold mb-2">{post.category}</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{post.title}</h1>
                    <p className="text-slate-400 text-sm">Publicado em {formattedDate}</p>
                </header>
                
                <img 
                    src={post.imageUrl} 
                    alt={`Imagem principal para ${post.title}`}
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-12"
                    loading="lazy"
                />

                <div 
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-20 p-8 rounded-lg border border-slate-700 bg-slate-800 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Precisa de um Laudo Técnico Especializado?</h3>
                    <p className="text-slate-400 mb-6">Nossa equipe está pronta para oferecer um diagnóstico preciso e fundamentado para sua necessidade.</p>
                    <a 
                        href="https://api.whatsapp.com/send?phone=5531982162913&text=Ol%C3%A1!%20Vi%20um%20artigo%20no%20blog%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-green-600 text-white font-bold rounded-md text-sm transition-colors duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/40"
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor"><path d="M19.05 4.94A9.85 9.85 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.73-1.11-5.2-2.9-7.07zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.81.83-3.04-.2-.31a8.34 8.34 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.23.86 5.82 2.45s2.45 3.62 2.45 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72s-.02-.38.1-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41.04-.3-.02-.43c-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.42-.15 0-.3 0-.46 0s-.39.06-.6.31c-.2.25-.78.76-.78 1.85s.8 2.15.91 2.3s1.58 2.4 3.8 3.36c.55.24.93.38 1.24.48.55.17 1.05.14 1.44.09.43-.06 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.05-.12-.2-.19-.44-.31z" /></svg>
                        Enviar via WhatsApp
                    </a>
                </div>
            </div>
        </article>
    );
};

export default BlogPostPage;