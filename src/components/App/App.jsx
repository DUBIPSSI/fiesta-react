import './App.css'
import Counter from '../Counter/Counter'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Fiesta from '../Fiesta/Fiesta';
import NoPage from '../NoPage/NoPage';
import Quizz from '../Quizz/Quizz';
import Shop from '../Shop/Shop';
import { ShopContextProvider } from '../Shop/ShopContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/fiesta" element={<Fiesta />} />
            <Route path="/quizz" element={<Quizz />} />
            <Route path="/shop" element={<ShopContextProvider><Shop /></ShopContextProvider>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
