import Image from "next/image";
import Banner from "./scection/banner";
import Features from "./scection/features";
import Video from "./scection/video";
import About from "./scection/about";
import Opinions from "./scection/opinions";
import Teams from "./scection/teams";
import Contact from "./scection/Contact";

export default function Home() {
  return (
    <>
    <Banner />
    <Features />
    <Video />
    <About />
    <Opinions />
    <Teams />
    <Contact />
    </>
  );
}
