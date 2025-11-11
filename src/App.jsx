import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      {/* <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section> */}
    </>
  );
}

export default App;
