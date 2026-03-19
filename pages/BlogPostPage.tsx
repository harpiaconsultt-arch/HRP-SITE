import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User, ArrowRight } from 'lucide-react';
import posts from '../posts.json';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900">
        <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
        <p className="text-slate-600 mb-8">O artigo que você procura não existe ou foi removido.</p>
        <Link to="/blog" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors flex items-center">
          <ArrowLeft className="mr-2 w-5 h-5" /> Voltar ao Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="text-emerald-400 hover:text-emerald-300 font-medium mb-6 inline-flex items-center text-sm">
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar ao Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>Gustavo Santos</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <span className="bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-800">
              {post.category}
            </span>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto py-16 px-6">
        <div 
          className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-li:text-slate-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Precisa de um laudo técnico?</h3>
            <p className="text-emerald-800 mb-8 max-w-xl mx-auto">
              Entre em contato agora mesmo e fale diretamente com um Engenheiro Especialista para resolver seu problema.
            </p>
            <a 
              href="https://wa.me/5532935018000" 
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Falar no WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
