import './App.css';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import NavBar from './Components/Navbar';
import ItemCount from "./Components/ItemCount"
import ItemListContainer from './Components/ItemListContainer';



const App = () => {
  return (
      <><NavBar /><ItemCount /><ItemListContainer /></>
      
      
      
      
  );
  
  
};




export default App;



