import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Cart from './pages/cart';
import Navbar from "./components/navbar"; 
import About from "./pages/about";
import Contact from './pages/contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>  
    </BrowserRouter>
  );
}
 
export default App;
