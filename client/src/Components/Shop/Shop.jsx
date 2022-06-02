import React, { useEffect, useState, useSyncExternalStore } from "react";
import NavBarShop from "../NavBar/NavBarShop";
import Footer from "../Footer/Footer";
import styles from "../Shop/Shop.module.css";
import inContainer from "../GlobalCss/InContainer.module.css";
import ProductCard from "./ProductCard";
import { getProducts, filterByPet } from "../../redux/actions/petshopActions";
import { useDispatch, useSelector } from "react-redux";
import ShopSearchbar from "./ShopSearchbar";
import ShopFilters from "./ShopFilters";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Shop = () => {
  const products = useSelector((state) => state.filteredProducts);
  const {user} = useAuth0();
  const [favorites, setFavorites] = useState([])

  let dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:3001/owners/getFavorites/${user.email}`).then(x=>{
    console.log(x.data)
    setFavorites(x.data)
  })
    dispatch(getProducts());

  }, [dispatch]);


  return (
    <div className={styles.container}>
      <NavBarShop />

      <div className={inContainer.container}>
        <span>Atras</span>

        <h1 className={styles.shopTitle}>Pet Shop</h1>

        <div className={styles.shopFlex}>
          <div className={styles.shopFilters}>
            <ShopSearchbar />
            <ShopFilters />
            </div>

            <br />
          <section className={styles.shopGrid}>
            {!products.length
              ? "LOADING"
              : products.map((p) => {
                  return (
                    // <a href={`http://localhost:3000/shop/${p.id}`} key={p.id}>
                      <ProductCard
                        key={p.id}
                        id={p.id}
                        setFavorites={setFavorites}
                        favorites={favorites}
                        isFavorite={favorites&&favorites.includes(p.id)}
                        profilePicture={p.profilePicture}
                        name={p.name}
                        price={p.price}
                      />
                    // </a>
                  );
                })}
          </section>
        </div>

      <Footer />
    </div>
    </div>
  );
};

export default Shop;
