import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import FilterStructure from "./Components/FilterStructure";
import AddOwner from "./Components/Forms/AddOwner";
import AddPet from "./Components/Forms/AddPet";
import { Quesos } from "./Components/Landing/FlujoRegistro/quesos";
import Profile from "./Views/Profile/Profile.jsx";
import ProductDetail from "./Components/Shop/ProductDetail";

import { useAuth0 } from "@auth0/auth0-react";
import NotRegistered from "./Components/Auth0/notRegistered";




function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route exact path="/shop/:id" element={<ProductDetail/>} />

          <Route
            path="/filterstructure"
            element={isAuthenticated ? <FilterStructure /> : <NotRegistered />}
          />
          <Route
            path="/agregarUsuario"
            element={isAuthenticated ? <AddOwner /> : <NotRegistered />}
          />
          <Route
            path="/agregarMascota"
            element={isAuthenticated ? <AddPet /> : <NotRegistered />}
          />
          <Route
            path="/quesosflaco"
            element={isAuthenticated ? <Quesos /> : <NotRegistered />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <NotRegistered />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
