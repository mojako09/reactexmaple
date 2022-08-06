import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Click from "./pages/Click";
import BtnThree from "./pages/BtnThree";
import TimeCou from "./pages/TimeCou";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Click" element={<Click />} />
          <Route path="BtnThree" element={<BtnThree />} />
          <Route path="TimeCou" element={<TimeCou />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);