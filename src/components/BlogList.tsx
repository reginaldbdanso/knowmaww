import React from 'react';
import { BloggerPost } from '../types/blogger';

interface BlogListProps {
  posts: BloggerPost[];
  isLoading: boolean;
  error: Error | null;
}

// Helper function to extract the first image URL from HTML content
const extractFirstImage = (content: string): string | null => {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content.match(imgRegex);
  return match ? match[1] : null;
};

// Helper function to extract excerpt from HTML content
const extractExcerpt = (content: string, maxLength: number = 200): string => {
  // Remove HTML tags and images
  const plainText = content
    .replace(/<img[^>]+>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
  
  // Get first few characters
  const excerpt = plainText.slice(0, maxLength);
  return excerpt.length < plainText.length ? `${excerpt}...` : excerpt;
};

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
      {posts.map((post) => {
        const coverImage = extractFirstImage(post.content);
        const excerpt = extractExcerpt(post.content);
        
        return (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden h-[250px] flex">
            {/* Image column (1/4 width) */}
            <div className="w-1/4 flex-shrink-0">
              {coverImage && (
                <img
                  src={coverImage}
                  alt={post.title}
                  className="w-full h-[250px] object-cover"
                />
              )}
            </div>
            
            {/* Content column (3/4 width) */}
            <div className="w-3/4 p-6 flex flex-col">
              {/* Title */}
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                <a href={post.url} className="hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </a>
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 flex-grow">
                {excerpt}
              </p>

              {/* Author and Date */}
              <div className="flex items-center mb-4 space-x-4">
                <img
                  src={post.author.image.url}
                  alt={post.author.displayName}
                  className="w-10 h-10 rounded-full border-2 border-gray-200"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    By <a href={post.author.url} className="text-blue-600 hover:underline">
                      {post.author.displayName}
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(post.published).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {/* Labels/Categories */}
              {post.labels && post.labels.length > 0 && (
                <div className="flex flex-wrap gap-2">
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
            </div>
          </article>
        );
      })}
      
      {posts.length === 0 && !isLoading && (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No posts found.</p>
        </div>
      )}
    </div>
  );
};