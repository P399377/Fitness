import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Plans from "./pages/plans/Plans";
import NotFound from "./pages/notFound/NotFound";
import Trainers from "./pages/trainers/Trainers";
import Gallery from "./pages/gallary/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
      {/* <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <NotFound />
      <Trainers /> */}
    </BrowserRouter>
  );
};

export default App;
