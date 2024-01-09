import React from "react";
// Components
import Navbar from "../components/navbar";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
