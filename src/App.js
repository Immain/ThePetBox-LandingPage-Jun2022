import React from "react";
import Navbar from "./componenents/Navbar";
import Newsletter from "./componenents/Newsletter";
import Sellit from "./componenents/Sellit";
import Box from "./componenents/Box";
import Footer from "./componenents/Footer";
import Head from "./componenents/Head";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Sellit />
      <Newsletter />
      <Box />
      <Footer />
    </div>
  );
}

export default App;
