import { Inter } from "next/font/google";
import Header from "./components/Header";
import Section2 from "./components/Section2";
import Features from "./components/Features";
import Content from "@/pages/components/Content";
import Section3 from "./components/Section3";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Section2 />
      <Features />
      <Content />
      <Section3 />
      <Footer />
    </div>
  );
}
