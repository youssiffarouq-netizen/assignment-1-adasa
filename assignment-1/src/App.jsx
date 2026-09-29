import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar.jsx";
import Footer from "./assets/components/Footer.jsx";
import Home from "./assets/components/Home.jsx";
import About from './assets/components/About';
import Blog from "./assets/components/blog.jsx";
import BlogInfo from "./assets/components/BlogInfo.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:slug" element={<BlogInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
