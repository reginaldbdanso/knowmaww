import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import { BlogList } from './components/BlogList';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { useBlogPosts } from './hooks/useBlogPosts';
import { QueryClient, QueryClientProvider } from 'react-query';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

const queryClient = new QueryClient();

function BlogApp() {
  const { data: posts = [], isLoading, error } = useBlogPosts();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
            <h1 className="text-5xl font-bold text-gray-900 mb-12">Blog</h1>
            <BlogList posts={posts} isLoading={isLoading} error={error} />
            {/* <FeaturedPost /> */}
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <Header />
            <Routes>
                <Route path="/" element={<BlogApp />} />
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
                  <Footer />
        </Router>
    </QueryClientProvider>
  );
}

export default App;