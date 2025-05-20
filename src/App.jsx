import Banner from "./components/Banner";
import Header from "./components/Header";
import Pricing from "./components/Pricing/Pricing";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";



const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Service/>
      <Testimonial/>
      <Pricing/>
    </div>
  );
};

export default App;