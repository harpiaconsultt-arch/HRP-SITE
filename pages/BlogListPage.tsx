import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import posts from '../posts.json';

const BlogListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog de Engenharia Diagnóstica</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Artigos técnicos sobre patologias construtivas, perícias e manutenção predial.
          </p>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 h-full flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <span className="bg-emerald-100 text-emerald-800 py-1 px-3 rounded-full font-medium text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center text-slate-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <span className="text-emerald-600 font-semibold text-sm flex items-center">
                      Ler artigo <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;
