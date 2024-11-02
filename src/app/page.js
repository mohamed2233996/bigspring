import Image from "next/image";
import Banner from "../section/banner";
import Features from "../section/features";
import Video from "../section/video";
import About from "../section/about";
import Opinions from "../section/opinions";
import Teams from "../section/teams";
import Contact from "../section/Contact";

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
