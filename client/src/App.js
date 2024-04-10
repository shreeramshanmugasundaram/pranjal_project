import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PestSolution from "./Pages/PestSolution";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Link to="/pest">Click here to sell pest details</Link>}
        />
        <Route path="/pest" element={<PestSolution />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
