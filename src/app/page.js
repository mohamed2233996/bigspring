import Image from "next/image";
import Banner from "./scection/banner";
import Features from "./scection/features";
import Video from "./scection/video";
import About from "./scection/about";

export default function Home() {
  return (
    <>
    <Banner />
    <Features />
    <Video />
    <About />
    </>
  );
}
