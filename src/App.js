import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Pages/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
