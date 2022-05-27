import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from "./Components/Landing/Landing";
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import FilterStructure from './Components/FilterStructure';
import AddOwner from './Components/Forms/AddOwner'
import AddPet from "./Components/Forms/AddPet";
import { Quesos } from "./Components/Landing/FlujoRegistro/quesos";


function App() {
  return (
    <BrowserRouter>      
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/filterstructure' element={<FilterStructure />} />
          <Route path='/agregarUsuario' element={<AddOwner />} />
          <Route path='/agregarMascota' element={<AddPet />} />
          <Route path='/quesosflaco' element={<Quesos />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
