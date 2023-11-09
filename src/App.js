import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Product/Product";
import Share from "./Components/Share/Share";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <Share />
    </div>
  );
}

export default App;
