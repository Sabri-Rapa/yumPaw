import React, { useEffect, useState } from "react";
import NavBarShop from "../NavBar/NavBarShop";
import Footer from "../Footer/Footer";
import styles from "../Shop/Shop.module.css";
import inContainer from "../GlobalCss/InContainer.module.css";
import ProductCard from "./ProductCard";
import { getProducts, filterByPet } from "../../redux/actions/petshopActions";
import { useDispatch, useSelector } from "react-redux";
import ShopSearchbar from "./ShopSearchbar";
import ShopFilters from "./ShopFilters";

import {Link} from 'react-router-dom'


const Shop = () => {
  const products = useSelector((state) => state.filteredProducts);

  let dispatch = useDispatch();

  useEffect(() => {
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
                    <Link to={`/products/${p.id}`} key={p.id}>
                      <ProductCard
                        key={p.id}
                        profilePicture={p.profilePicture}
                        name={p.name}
                        price={p.price}
                      />
                    </Link>
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
