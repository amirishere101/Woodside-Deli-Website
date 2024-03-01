import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "./Componenets/Menu/Menu.jsx";
import NavigationBar from "./Componenets/NavBar/NavigationBar.jsx";
import Home from "./Componenets/Home/Home.jsx";

const App = () => {
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
        <NavigationBar />
        <Home />
        <Menu />
        {/*
        <About />
        <Menu />
        <Contact /> */}
      </div>
    </>
  );
};

export default App;
