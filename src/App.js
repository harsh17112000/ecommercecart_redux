import Header from './Components/Header';
import './App.css';
import Cards from './Components/Cards';
import CartDetails from './Components/CartDetails';
import "./Components/style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CartDetails />} />
      </Routes>
    </>
  );
}

export default App;
