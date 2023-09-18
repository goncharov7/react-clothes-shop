import "./App.css";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductsPromo from "./components/ProductsPromo/ProductsPromo";
import ProductsNew from "./components/ProductsNew/ProductsNew";
import ProductsAutumn from "./components/ProductsAutumn/ProductsAutumn";
import ProductsWinter from "./components/ProductsWinter/ProductsWinter";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <ProductsPromo/>
      <ProductsNew/>
      <ProductsAutumn/>
      <ProductsWinter/>
      <Value/>
      <News/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
