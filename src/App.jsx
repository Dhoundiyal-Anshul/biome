import Canvas from "./canvas";
import "./index.css";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import Nav from "./Nav";
import Hero from "./Hero";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
      <div className="w-full relative min-h-screen text-white">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} imageSet="hale" />
        ))}
      </div>
      <Nav />
      <Hero />
      <div className="w-full relative min-h-screen text-white">
        {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} imageSet="plank" />
        ))}
      </div>
    </>
  );
}

export default App;
