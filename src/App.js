import { Route, Routes } from "react-router-dom";
import "./App.css";
import BT from "./Component/BT";
import Demo from "./Component/Demo";
import FT from "./Component/FT";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import SourceBT from "./Component/SourceBT";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
       
          <Route path="/FT" element={<FT />} />
          <Route path="/BT" element={<BT />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SBT" element={<SourceBT />} />
       
      </Routes>
    </>
  );
}

export default App;
