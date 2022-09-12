import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import Banner from "./sections/Banner";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Projects />
    </>
  );
}
