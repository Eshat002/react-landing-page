import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product from "./Components/Product/Product";
import Share from "./Components/Share/Share";
import Ingredient from "./Components/Ingredient/Ingredient";
import BestSeller from "./Components/BestSeller/BestSeller";
import Hero from "./Components/Hero/Hero";
import Feedback from "./Components/Feedback/Feedback";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <Share />
      <Ingredient />
      <BestSeller />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
