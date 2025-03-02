import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./Componenets/Menu/Menu.jsx";
import NavigationBar from "./Componenets/NavBar/NavigationBar.jsx";
import HomePage from "./Componenets/HomePage.jsx";
import AboutPage from "./Componenets/AboutPage.jsx";
import Catering from "./Componenets/Catering.jsx";
import HoursLocation from "./Componenets/HoursLocation.jsx";

const App = () => {
  const [page, setPage] = useState("home");

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <>
      <div className="overflow-x-hidden">
        <NavigationBar setPage={setPage} />
        {page === "home" && <HomePage key="home" />}
        {page === "menu" && <Menu key="menu" />}
        {page === "hours-location" && <HoursLocation key="hours-location" />}
        {page === "about" && <AboutPage key="about" />}
        {page === "catering" && <Catering key="catering" />}
      </div>
    </>
  );
};

export default App;
