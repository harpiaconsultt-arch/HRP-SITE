import React, { useState, useEffect } from 'react';
import { trackEvent } from '../utils/tracking';

interface Post {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/posts.json');
                const data = await response.json();
                const sortedPosts = data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setPosts(sortedPosts.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch posts for homepage section:", error);
            }
        };
        fetchPosts();
    }, []);

    const handlePdfDownload = () => {
        trackEvent('click_download_pdf', { pdf_name: 'brochure_harpia_consultoria' });
    };

    const handleReadMore = (slug: string) => {
        trackEvent('click_read_more', { post_slug: slug });
    }

    return (
        <section className="py-20 bg-slate-950" id="blog">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Últimas do Blog</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Informações e dicas sobre engenharia diagnóstica, laudos e perícias.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {posts.map((post) => (
                        <div key={post.slug} className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex flex-col group">
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-center text-xs mb-3">
                                    <span className="bg-primary/10 text-primary px-2 py-1 rounded font-semibold">{post.category}</span>
                                    <span className="text-slate-500">{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{post.excerpt}</p>
                            </div>
                            <div className="p-6 bg-slate-800/50 mt-auto">
                                <a 
                                    href={`#/blog/${post.slug}`}
                                    onClick={() => handleReadMore(post.slug)}
                                    className="text-primary font-semibold text-sm hover:underline"
                                >
                                    Ler mais <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                     <a 
                        href="#/blog"
                        className="inline-flex items-center px-6 py-3 border border-slate-500 text-sm font-medium rounded text-white hover:bg-slate-800 hover:border-slate-400 transition-all"
                    >
                        Ver todos os posts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;