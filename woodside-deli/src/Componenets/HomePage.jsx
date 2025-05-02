import Home from "./Home/Home.jsx";
import Carousel from "./Carousel/Carousel.jsx";
import Services from "./Services/Services.jsx";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Testimonials from "./Testimonials.jsx";

const HomePage = ({ setPage }) => {
  return (
    <div>
      <Home />
      <Carousel />
      <Services setPage={setPage} />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
