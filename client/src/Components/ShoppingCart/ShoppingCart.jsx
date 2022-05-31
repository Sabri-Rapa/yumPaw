import { useReducer } from 'react';
import { shoppingInitialState, shoppingReducer } from '../../redux/reducer/shoppingReducer';
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import { TYPES } from '../../redux/actions/shoppingActions';
import '../../index.css';
import NavBarShop from '../NavBar/NavBarShop';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const cart = useSelector(state=> state.cart);


    // const addToCart = (id) => {
    //     console.log(id);
    //     dispatch({
    //         type: TYPES.ADD_TO_CART,
    //         payload: id
    //     });
    // };

    // const delFromCart = (id, all = false) => {
    //     console.log(id, all);
    //     if (all) {
    //         dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id});
    //     } else {
    //         dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id});
    //     }
    // };

    // const clearCart = () => {
    //     dispatch({ type: TYPES.CLEAR_CART })
    // };

    return (
        <div>
            <NavBarShop/>
            <h2>Carrito de Compras</h2>

            {/* <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map(product => (
                    <ProductItem
                        key={product.id}
                        data={product}
                        addToCart={addToCart} />
                ))}
            </article> */}

            <article className="box">
                <h3>Carrito</h3>
                <button>Limpiar Carrito</button>

                {
                    cart.map((item, index) => (   //onClick={clearCart}
                        <CartItem key={index} name={item.name} image={item.profilePicture}/>//delFromCart={delFromCart}
                    ))
                }
            </article>
        </div>
    )
};

export default ShoppingCart;