import './App.css';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Features from './component/Features';
import Demo from './component/Demo';
import Testimonial from './component/Testimonial';
import Faq from './component/Faq';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <div className="m-5">
        <Navbar />
        <Home />
        <Features />
      </div>
      <Demo />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
