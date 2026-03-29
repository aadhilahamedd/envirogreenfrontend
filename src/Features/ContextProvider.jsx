import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()
export const addResponseContext = createContext()
export const editResponseContext = createContext()

function ContextProvider({children}) {
    // Initialize cart from localStorage if available
    const [cart, setcart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('envirogreen_cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Failed to parse cart from local storage", error);
            return [];
        }
    });

    const [searchKey, setSearchKey] = useState("");
    const [addResponse, setAddResponse] = useState("")
    const [editResponse, setEditResponse] = useState("")

    // Keep localStorage updated whenever cart changes
    useEffect(() => {
        try {
            localStorage.setItem('envirogreen_cart', JSON.stringify(cart));
        } catch (error) {
            console.error("Failed to save cart to local storage", error);
        }
    }, [cart]);

    return (
        <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
            <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
                <CartContext.Provider value={{ cart, setcart, searchKey, setSearchKey }}>
                    {children}
                </CartContext.Provider>
            </editResponseContext.Provider>
        </addResponseContext.Provider>
    )
}

export default ContextProvider
