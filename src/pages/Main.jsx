import Header from "../layout/header/Header";
import Navbar from "../layout/navbar/Navbar";
import Gallery from "./gallery/Gallery";
import { Route, Routes } from "react-router";
import Home from "./home/Home";
import Video from "./video/Video";
import About from "./about-us/About";
import BuildingSolution from "./building-solution/BuildingSolution";
import Login from "../login/Login";

const Main = () => {
  return (
    <main className="bg-white h-screen rounded-xl overflow-hidden flex flex-col">
      <Header />
      
      <section className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/building-solution" element={<BuildingSolution/>} />
        </Routes>
      </section>
      <Navbar />
    </main>
  );
};

export default Main;
