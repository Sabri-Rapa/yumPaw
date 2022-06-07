import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import Landing from "./Components/Landing/Landing";
import NotRegistered from "./Components/Auth0/notRegistered";
import { Quesos } from "./Components/Landing/FlujoRegistro/quesos";
import Home from './Components/Home/Home';

import AddOwner from './Components/Forms/AddOwner'
import AddPet from "./Components/Forms/AddPet";
import InfoProvider from "./Components/Forms/InfoProvider";
import InfoOwner from "./Components/Forms/InfoOwner";
import Walk from "./Components/Forms/Walk";
import Lodging from "./Components/Forms/Lodging";

import Shop from './Components/Shop/Shop';
import ProductDetail from "./Components/Shop/ProductDetail";
import Confirmación from "./Components/Shop/MercadoPago/Confirmación";
import PurchaseConfirmation from "./Components/Shop/MercadoPago/PurchaseConfirmation";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";

import Providers from "./Components/Providers/Providers";
import DetailProvider from "./Components/Providers/DetailProvider";
import Booking from "./Components/Providers/Booking";
import CheckoutBooking from "./Components/Providers/CheckoutBooking";

import Loading from "./Components/Loading/loading";
import Chat from "./Components/Chat/Chat";
import Favorites from "./Components/Favorites/Favorites";

import Profile from "./Views/Profile/Profile.jsx";
import About from "./Views/Profile/About";
import Contact from "./Views/Profile/Contact";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path='/inicio' element={
            isAuthenticated && !isLoading ? <Home/> : <Loading/>
          }/>
          <Route path="/nosotros" element={<About/>} />
          <Route path="/contacto" element={<Contact/>} />
          <Route path='/shop' element={
            !isLoading ? <Shop/> : <Loading/>}/>
          <Route path='/shop/:id' element={
            !isLoading ? <ProductDetail/> : <Loading/>
          }/>
          <Route path='/agregarusuario' element={
            isAuthenticated && !isLoading ? <AddOwner/> : <Loading/>
          }/>
          <Route path='/agregarmascota' element={
            isAuthenticated && !isLoading ? <AddPet/> : <Loading/>
          }/>
          <Route path='/tipo-usuario' element={
            isAuthenticated && !isLoading ? <Quesos/> : <Loading/>
          }/>
          <Route path='/mi-perfil' element={
            isAuthenticated && !isLoading ? <Profile/> : <Loading/>
          }/>
          <Route path='/servicio' element={
            isAuthenticated && !isLoading ? <InfoProvider/> : <Loading/>
          }/>
          <Route path='/providers' element={
            isAuthenticated && !isLoading ? <Providers/> : <Loading/>
          }/>
          <Route path='/providers/:name' element={
            isAuthenticated && !isLoading ? <DetailProvider/> : <Loading/>
          }/>
          <Route path='/chat/:providerEmail/:ownerEmail' element={
            isAuthenticated && !isLoading ? <Chat/> : <Loading />
          } />
          <Route path='/favoritos' element={
            isAuthenticated && !isLoading ? <Favorites/> : <Loading />
          }/>
          <Route path='/mis-datos' element={
            isAuthenticated && !isLoading ? <InfoOwner/> : <Loading/>
          }/>
          <Route path="/no-registrado" element={<NotRegistered></NotRegistered>}></Route>
          <Route path="/mi-carrito" element={<ShoppingCart/>}/>
          <Route path="/confirmacion" element={
          isAuthenticated && !isLoading ? <Confirmación/> : <Loading/>}/>
          <Route path="/purchaseConfirmation" element={
          isAuthenticated && !isLoading ? <PurchaseConfirmation/> : <Loading/>}/>
          <Route path="/paseo" element={
          isAuthenticated && !isLoading ? <Walk/> : <Loading/>}/>
          <Route path="/hospedaje" element={
          isAuthenticated && !isLoading ? <Lodging/> : <Loading/>}/>
          <Route path='/reservar-servicio' element={
          isAuthenticated && !isLoading ? <Booking/> : <Loading/>}/>
          <Route path='/confirmar-reserva' element={
          isAuthenticated && !isLoading ? <CheckoutBooking/> : <Loading/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;