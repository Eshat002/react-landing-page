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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
      <Share />
      <Ingredient />
      <BestSeller />
    </div>
  );
}

export default App;
