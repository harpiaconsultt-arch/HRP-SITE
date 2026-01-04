import React, { useState, useEffect } from 'react';

interface Post {
    slug: string;
    title: string;
    seoTitle?: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    imageUrl: string;
}

const BlogListPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set unique meta tags for this page
        document.title = 'Blog e Artigos Técnicos | Harpia Consultoria';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Acompanhe nossos artigos sobre engenharia diagnóstica, laudos técnicos, perícias, e as últimas novidades da engenharia em Barbacena e região.');
        }

        const fetchPosts = async () => {
            try {
                const response = await fetch('/posts.json');
                const data = await response.json();
                const sortedPosts = data.sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setPosts(sortedPosts);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    
    return (
        <section className="py-28 bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Blog e Artigos Técnicos</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">Informações e dicas sobre engenharia diagnóstica, laudos e perícias.</p>
                </div>

                {loading ? (
                    <p className="text-center text-slate-400">Carregando posts...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <a href={`#/blog/${post.slug}`} key={post.slug} className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col group transition-transform hover:-translate-y-1">
                                <img 
                                    src={post.imageUrl} 
                                    alt={`Imagem para o post: ${post.title}`}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex justify-between items-center text-xs mb-3">
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded font-semibold">{post.category}</span>
                                        <span className="text-slate-500">{post.readTime}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors flex-grow">{post.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
                                    <div className="mt-auto text-primary font-semibold text-sm">
                                        Ler mais <span aria-hidden="true">→</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogListPage;