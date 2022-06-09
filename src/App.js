import React from "react";
import Navbar from "./componenents/Navbar";
import Hero from "./componenents/Hero";
import Newsletter from "./componenents/Newsletter";
import Sellit from "./componenents/Sellit";
import Box from "./componenents/Box";
import Footer from "./componenents/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sellit />
      <Newsletter />
      <Box />
      <Footer />
    </div>
  );
}

export default App;
