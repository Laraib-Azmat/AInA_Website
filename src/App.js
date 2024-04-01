import Header from "./Components/Header-sec/Header";
import DataSet from "./Components/Data-sec/DataSet";
import Emotion from "./Components/Emotion-sec/Emotion";
import "./App.css";
import Contact from "./Components/Contact-sec/Contact";
import About from "./Components/Testimonials/About";
import Slider from "./Components/Card-slider/Slider";
import NavBar from "./Components/Header-sec/NavBar";
import Footer from "./Components/Footer-sec/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <DataSet />
      <About />
      <Emotion />
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
