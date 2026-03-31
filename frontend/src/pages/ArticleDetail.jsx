import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/global.css';
import '../styles/Article.css';

const API = import.meta.env.VITE_API_URL + '/api';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);

    fetch(`${API}/articles/${id}`)
      .then(r => r.json())
      .then(data => {
        if (!alive) return;
        if (data.success) setArticle(data.data);
        setLoading(false);
      })
      .catch(() => {
        if (!alive) return;
        setArticle(null);
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [id]);

  if (loading) return <div className="container">Loading Article...</div>;
  if (!article) return <div className="container">Article not found.</div>;

  return (
    <div className="container">
      <article className="full-article">
        <header className="article-header">
          <span className="category-badge">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="article-date">
            {article.dateLabel ? article.dateLabel : new Date(article.date || article.dateISO).toLocaleDateString()}
          </p>
        </header>
        
        <hr />

        <div className="article-content">
          {Array.isArray(article.content)
            ? article.content.map((block, idx) => {
                if (typeof block !== 'string') return null;

                if (block.startsWith('### ')) {
                  return (
                    <h2 key={idx} className="article-h2">
                      {block.replace(/^###\s+/, '')}
                    </h2>
                  );
                }

                if (block.startsWith('- ')) {
                  // Handle bullet blocks that are written as multiple "- " lines in one string
                  const lines = block.split('\n').filter((l) => l.trim().startsWith('- '));
                  if (!lines.length) return <p key={idx}>{block}</p>;
                  return (
                    <ul key={idx} className="article-list">
                      {lines.map((l) => (
                        <li key={l}>{l.replace(/^-+\s*/, '')}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={idx} className="article-p">
                    {block}
                  </p>
                );
              })
            : (
              <p className="article-p">{article.content}</p>
            )}
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;