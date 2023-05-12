import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Pages/Create";
import View from "./Pages/View";

function App() {
  return (
    <div className="App w-100">
      <BrowserRouter>
        <h2 className="my-3 text-center">HostBuddy Inc Assignment</h2>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/view" element={<View />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
