import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  description: string;
}

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/posts.json')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="blog-list-container">
      <h1>Blog</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="post-card">
            <h2>{post.title}</h2>
            <p className="post-meta">{post.date} &bull; {post.readTime}</p>
            <p>{post.description}</p>
            <span className="read-more">Leia mais</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;