'use client';
import { createContext, useContext, useState, ReactNode } from "react";

type CartContextType = {
    cartCount: number;
    incrementCart: () => void;
};

const CartContext = createContext<CartContextType>({
    cartCount: 0,
    incrementCart: () => { },
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartCount, setCartCount] = useState(0);
    const incrementCart = () => setCartCount(prev => prev + 1);

    return (
        <CartContext.Provider value={{ cartCount, incrementCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
