import React from "react";
import './App.css'
import Header from "./components/Header"
import Routes from "./components/Routes"
import Footer from "./components/Footer";

const App = () => {
  // The app function returns the header component and the routes component
  // The routes component is the bit that will be replaced from the routing - that's how it knows where to go!!!
  // Stuff that should be on every page should be around the routes component - but is that good practise?
  // what needs to be a component and what can just be plain html?
  return (
    <>
    {/* because of the way these components are written, header will be on every "page", as will the h1 and footer. The routes component in between is where routed components appear */}
      <Header />
      <Routes />
      <Footer />
      {/* should the footer be a component even if its not dynamic? Logically it won't get re-used. Do we still go with single responsibilty here? I think I will make this a component later */}
    </>
  );
}

export default App;