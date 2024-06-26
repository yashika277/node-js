import React from "react";

// import required modules
import Header from "./Components/Header";
import BookStore from "./Components/BookStore";
import Mainwrapper from "./Components/Mainwrapper";

function App() {
  return (
    <>
      <div className="book-store">
        <Header />
        <BookStore />
        <Mainwrapper />
      </div>
    </>
  );
}

export default App;
