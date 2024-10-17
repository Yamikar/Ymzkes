import Image from "next/image";
import Header from "./components/Header";
import Productİmage from "./components/Productİmage";
import ProjectImage from "./components/ProjectImage";
import Footer from "./components/Footer";
import MainTitle from "./components/MainTitle";
export default function Home() {
  return (
    <div>
      <Header />
      <MainTitle />
      <Productİmage />
      <Footer />
    </div>
  );
}
