import { useAuth0, User } from "@auth0/auth0-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Shop/ProductCard.module.css";
import { TYPES } from "../../redux/actions/shoppingActions";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const ProductCard = ({ profilePicture, name, price, id }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/shop/${id}`}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={profilePicture} alt="" className={styles.cardImg} />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png"
            alt=""
            className={styles.addFav}
          />
          <div className={styles.cardInfo}>
            <h2 className={styles.cardTitle}>{name}</h2>
            <div className={styles.cardBottom}>
              <p className={styles.price}>${price}</p>
              {/* <button className={styles.addButton} onClick={()=>{
=======
import axios from "axios";

const ProductCard = ({profilePicture, name, price, isFavorite, id, setFavorites, favorites}) => {
  const {user} = useAuth0();
  const dispatch = useDispatch()
  const addFavorite = async()=>{
    if(!isFavorite){
      const AllOwners = await axios.get("http://localhost:3001/owners")
      // console.log(owner)
      const owner = AllOwners.data.find(x=>x.email === user.email)
      console.log(owner)
      let objToPut = {
        ...owner,
        favorites:owner.favorites[0]?[...owner.favorites, id]:[id]
      }
      setFavorites([...favorites,id])
      console.log(objToPut)
      await axios.put("http://localhost:3001/owners/addFavorite", objToPut)
    }
    else{
      const AllOwners = await axios.get("http://localhost:3001/owners")
      // console.log(owner)
      const owner = AllOwners.data.find(x=>x.email === user.email)
      console.log(owner)
      let objToPut = {
        ...owner,
        favorites:owner.favorites[0]?owner.favorites.filter(x=>x !== id):[]
      }
      setFavorites(favorites.filter(x=>x !== id))
      console.log(objToPut)
      await axios.put("http://localhost:3001/owners/addFavorite", objToPut)
    }
    
  }

  return (
    // <Link to={`/shop/${id}`}>
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={profilePicture} alt="" className={styles.cardImg} />
        <img src={!isFavorite?"https://static.vecteezy.com/system/resources/previews/005/218/113/non_2x/heart-contour-outline-line-icon-black-color-illustration-image-thin-flat-style-vector.jpg":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png"} alt="" className={styles.addFav} onClick={addFavorite}/>
        <div className={styles.cardInfo}>
          <h2 className={styles.cardTitle}>{name}</h2>
          <div className={styles.cardBottom}>
            <p className={styles.price}>${price}</p>
            {/* <button className={styles.addButton} onClick={()=>{
>>>>>>> b61d6ff6af9cb2f6d9654cceae934290b93721b0
              dispatch({
              type:TYPES.ADD_TO_CART,
              payload:id,
            })}}>Agregar al carrito</button> */}
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </Link>
=======
    </div>
    // </Link>
>>>>>>> fc850ca6722e6fa61c21363fd478391863800e1a
  );
};

export default ProductCard;
