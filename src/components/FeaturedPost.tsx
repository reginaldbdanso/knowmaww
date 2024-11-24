import React from 'react';
import { format } from 'date-fns';

interface FeaturedPostProps {
  kind: string;
    id: string;
    blog: {
      id: string;
    };
    published: string;
    updated: string;
    url: string;
    selfLink: string;
    title: string;
    content: string;
    author: {
      id: string;
      displayName: string;
      url: string;
      image: {
        url: string;
      };
    };
    replies: {
      totalItems: string;
      selfLink: string;
    };
    labels?: string[];
    etag: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = (props) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg mb-12">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2">
          <img 
            className="h-64 w-full object-cover md:h-full"
            src='props.coverImage'
            alt={props.title}
          />
        </div>
        <div className="p-8 md:w-1/2">
          <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-2">{props.labels}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{props.title}</h2>
          {/* <p className="text-gray-600 mb-6">{props.excerpt}</p> */}
          <div className="flex items-center">
            <img className="h-10 w-10 rounded-full mr-4" src='{props.author.image}' alt={props.author.displayName} />
            <div>
              <p className="text-sm font-medium text-gray-900">{props.author.displayName}</p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={props.published}>
                  {format(new Date(props.published), 'MMMM d, yyyy')}
                </time>
                <span aria-hidden="true">&middot;</span>
                {/* <span>{props.readTime}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;