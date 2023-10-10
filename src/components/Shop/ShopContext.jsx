import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(r => r.json())
            .then(setProducts);
    }, []);

    const addToCart = (product) => {
        const existingProduct = cart.find(p => p.id === product.id);
        if (existingProduct) {
            setCart(cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id));
    };

    const toggleCartDisplay = () => {
        setDisplay(!display);
    };

    const contextValues = {
        products,
        cart,
        display,
        addToCart,
        removeFromCart,
        toggleCartDisplay,
    };

    return (
        <ShopContext.Provider value={contextValues}>
            {children}
        </ShopContext.Provider>
    );
};