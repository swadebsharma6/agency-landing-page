import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing/Pricing";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";



const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Service/>
      <Testimonial/>
      <Pricing/>
      <FAQ/>
      <Trial/>
      <Footer/>
    </div>
  );
};

export default App;