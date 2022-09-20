import React from 'react';
import { useBlogs } from '../../hooks/useBlogs';
import BlogCard from '../BlogCard/BlogCard';

export default function Main() {
  const blogs = useBlogs();
  return (
    <div>
      {blogs.map((blog) => {
        return <BlogCard key={blog.id} title={blog.title} subtitle={blog.subtitle} text={blog.text} image={blog.image} />;
      })}
    </div>
  );
}
