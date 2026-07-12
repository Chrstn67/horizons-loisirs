import { useScrollReveal } from "../hooks/useScrollReveal.js";
import Hero from "./Hero.jsx";
import Director from "./Director.jsx";

export default function Home() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <Director />
    </>
  );
}
