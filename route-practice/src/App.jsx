import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsLayout from "./pages/products/ProductsLayout";
import ProductsList from "./pages/products/ProductsList";
import ProductDetail from "./pages/products/ProductDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
