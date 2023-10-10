import React, { useContext } from 'react';
import './Shop.css';
import { ShopContext } from './ShopContext';

function Shop() {
    const { display, cart, products, addToCart, removeFromCart, toggleCartDisplay } = useContext(ShopContext);

    return (
        <>
            <div className='shopNav'>
                <img src="burger-menu.svg" alt="Menu" />
                <p>My Shop</p>
                <button onClick={toggleCartDisplay} className="cartButton">
                    <img src="cart.svg" className="cartSvg" alt="Toggle Cart Display" />
                </button>
            </div>
            {display && (
                <div className='Panier'>
                    <p>Mon panier</p>
                    <hr />
                    <div className='articles'>
                        {cart.map(item => (
                            <div className="cart-item" key={item.id}>
                                <span>{item.title} - {item.price}€ x {item.quantity}</span>
                                <button onClick={() => removeFromCart(item.id)} class="panierButton">Supprimer</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className='produits'>
                {products.map(product => (
                    <div className="produit" key={product.id}>
                        <h4>{product.title}</h4>
                        <div className='imageContainer'>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <p>{product.price}€</p>
                        <button onClick={() => addToCart(product)}>Acheter</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Shop;