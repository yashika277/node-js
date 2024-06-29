import {BrowserRouter as  Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import AddBooks from "./Pages/AddBooks";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books />} />
          <Route path="/addBooks" exact element={<AddBooks />} />
        </Routes>





    </>
  );
}

export default App;
