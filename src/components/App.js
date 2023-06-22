
import React from "react";
import './../styles/App.css';
import Haeder from "./Header";
import Main from "./Main";
import Footer from "./Footer.js";



const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Haeder />
        <Main />
        <Footer />
    </div>
  )
}

export default App
