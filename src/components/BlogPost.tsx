import React from 'react';
import { format } from 'date-fns';
import { BloggerPost } from '../types/blogger';

interface BlogPostProps {
  post: BloggerPost;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        <a href={post.url} className="hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </a>
      </h2>
      
      <div className="flex items-center mb-4 space-x-4">
        <img
          src={post.author.image.url}
          alt={post.author.displayName}
          className="w-10 h-10 rounded-full border-2 border-gray-200"
        />
        <div>
          <p className="text-sm font-medium text-gray-700">
            By <a href={post.author.url} className="text-blue-600 hover:underline">{post.author.displayName}</a>
          </p>
          <p className="text-sm text-gray-500">
            {format(new Date(post.published), 'MMMM d, yyyy')}
          </p>
        </div>
      </div>

      <div 
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.labels && post.labels.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {post.labels.map((label: string) => (
            <span
              key={label}
              className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};
