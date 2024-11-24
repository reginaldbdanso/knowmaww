
import React from 'react';
import { BlogPost } from './BlogPost';
import { BloggerPost } from '../types/blogger';

interface BlogListProps {
  posts: BloggerPost[];
  isLoading: boolean;
  error: Error | null;
}

export const BlogList: React.FC<BlogListProps> = ({ posts, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <p className="text-red-600 font-medium">Error loading posts: {error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
      {posts.length === 0 && !isLoading && (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No posts found.</p>
        </div>
      )}
    </div>
  );
};
