import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./Menu/Menu.jsx";
import NavigationBar from "./NavBar/NavigationBar.jsx";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import Catering from "./Catering.jsx";
import HoursLocation from "./HoursLocation.jsx";

const App = () => {
  const [scrollToLunch, setScrollToLunch] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  const ScrollToLunchHandler = () => {
    const lunchSection = document.getElementById("lunch");
    if (lunchSection) {
      lunchSection.scrollIntoView({ behavior: "smooth" });
    }
    setScrollToLunch(false);
  };

  return (
    <Router basename="/Woodside-Deli-Website">
      <div className="overflow-x-hidden">
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage setScrollToLunch={setScrollToLunch} />}
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/hours-location" element={<HoursLocation />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catering" element={<Catering />} />
        </Routes>
        {scrollToLunch && ScrollToLunchHandler()}
      </div>
    </Router>
  );
};

export default App;
