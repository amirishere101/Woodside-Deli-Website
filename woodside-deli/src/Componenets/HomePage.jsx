import Home from "./Home/Home.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import Services from "./Services/Services.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Testimonials from "./Testimonials.jsx";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Carousel />
      <Services />
      <Banner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
