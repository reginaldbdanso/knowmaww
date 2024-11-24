import { useQuery } from 'react-query';
import axios from 'axios';
import { BloggerPost } from '../types/blogger';

const BLOGGER_API_KEY = import.meta.env.VITE_BLOGGER_API_KEY;
const BLOG_ID = import.meta.env.VITE_BLOG_ID;

const fetchBlogPosts = async (): Promise<BloggerPost[]> => {
  const response = await axios.get(
    `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${BLOGGER_API_KEY}`
  );
  return response.data.items;
};

export const useBlogPosts = () => {
  return useQuery<BloggerPost[], Error>('blogPosts', fetchBlogPosts);
};