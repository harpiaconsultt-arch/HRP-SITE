import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import BackToTopButton from './components/BackToTopButton';

// Gets the logical path from the URL hash, e.g., "#/blog" -> "/blog"
const getPathFromHash = () => window.location.hash.substring(1) || '/';

const App: React.FC = () => {
    const [path, setPath] = useState(getPathFromHash());

    useEffect(() => {
        // Handles browser back/forward buttons and direct hash changes
        const onHashChange = () => {
            setPath(getPathFromHash());
            window.scrollTo(0, 0);
        };

        window.addEventListener('hashchange', onHashChange);

        // Global click handler to manage navigation
        const handleLinkClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const anchor = target.closest('a');
            const href = anchor?.getAttribute('href');
            
            if (!anchor || !href || anchor.target === '_blank' || href.startsWith('http') || event.metaKey || event.ctrlKey) {
                return;
            }

            // Special handling for links to homepage sections from other pages
            if (href.startsWith('/#')) {
                event.preventDefault();
                const targetId = href.substring(2);
                const currentPath = getPathFromHash();
                
                if (currentPath === '/') {
                    // Already on the homepage, just scroll smoothly
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // On another page, navigate to homepage first, then scroll
                    window.location.hash = '/'; 
                    // The `hashchange` listener handles the page update.
                    // We need a small delay to ensure the HomePage is rendered before scrolling.
                    setTimeout(() => {
                        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            } 
            // For standard hash links like "#/blog", we let the browser handle it.
            // The click will change the hash, which triggers our 'hashchange' listener.
        };

        document.addEventListener('click', handleLinkClick);

        return () => {
            window.removeEventListener('hashchange', onHashChange);
            document.removeEventListener('click', handleLinkClick);
        };
    }, []);

    const renderPage = () => {
        if (path === '/blog') {
            return <BlogListPage />;
        }
        if (path.startsWith('/blog/')) {
            const slug = path.split('/').pop() || '';
            return <BlogPostPage slug={slug} />;
        }
        return <HomePage />;
    };

    return (
        <div className="bg-background-dark">
            <Header />
            <main>{renderPage()}</main>
            <Footer />
            <WhatsAppButton />
            <BackToTopButton />
        </div>
    );
};

export default App;