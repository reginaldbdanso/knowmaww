import { useState, useEffect } from 'react';
// import BlogPost from './BlogPost';
// import FeaturedPost from './FeaturedPost';
import SearchBar from './SearchBar';

const POSTS_PER_PAGE = 9;

const BlogGrid = () => {
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_POSTS_API_URL);
        const data = await response.json();
        console.log(data.items);
        await setBlogPosts(data.items);
        console.log(typeof(blogPosts['0']));
        console.log(blogPosts['0']);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  const loadMore = () => {
    setVisiblePosts(prevVisible => Math.min(prevVisible + POSTS_PER_PAGE, blogPosts.length));
  };

  return (
    <div>
      {/* <FeaturedPost {...blogPosts} /> */}
      <SearchBar />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {blogPosts.slice(1, visiblePosts).map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div> */}
      
      {visiblePosts < blogPosts.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;