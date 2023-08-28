import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Support from "./components/Support";
import Collage from "./components/Collage";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import "./assets/css/normalize.scss";
import 'animate.css';

const App = () => (
  <>
    <div className="app-container">
      <section>
        <Header />
        <Hero />
      </section>
      <Collage />
      <Carousel />
      <Support />
    </div>
    <ContactUs />
  </>
)

export default App;
