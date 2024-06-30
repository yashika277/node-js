import { Route, Routes } from "react-router-dom";
import "./App.css"
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import AddBooks from "./Pages/AddBooks";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books />} />
          <Route path="/addBooks" exact element={<AddBooks />} />
        </Routes>
        <Footer />
      </div>




    </>
  );
}

export default App;
