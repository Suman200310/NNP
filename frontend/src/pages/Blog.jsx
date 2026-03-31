import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const posts = blogPosts;

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1 className="blog-title">Student <span className="highlight">Blog</span></h1>
        <p className="blog-subtitle">Latest news, guides, and stories for the Nepali student community.</p>
      </header>

      <div className="blog-list">
        {posts.map((post, i) => (
          <div key={i} className="blog-card">
            <div className="blog-meta">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.dateLabel} • {post.readTime}</span>
            </div>
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-footer">
              <Link className="read-more" to={`/blog/${post.id}`}>
                Read Full Article <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;