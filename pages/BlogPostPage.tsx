import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  description: string;
  content: string;
}

const BlogPostPage: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => response.json())
      .then((data) => {
        const currentPost = data.find((p: Post) => p.slug === slug);
        setPost(currentPost);
      });
  }, [slug]);

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="blog-article-container">
        <div className="prose">
            <h1>{post.title}</h1>
            <p className="post-meta">{post.date} &bull; {post.readTime}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    </div>
  );
};

export default BlogPostPage;