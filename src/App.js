import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Cards";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen max-w-screen">
        <Routes>
          <Route index element={<Home />} exact />
          <Route path="/card" element={<Card />} exact />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
