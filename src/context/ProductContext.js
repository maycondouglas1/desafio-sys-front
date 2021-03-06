import axios from "axios";
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ContextProvider = ({ children }) => {
    // Local URL, type your URL here
    const API_URL = "http://localhost:9901";
    
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState("");

    // Product services
    const getProducts = async () => {
        try {
            const res = await axios.get(`${API_URL}/products`);
            setProducts(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getProduct = async (id) => {
        try {
            const res = await axios.get(`${API_URL}/products/${id}`);
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const createProduct = async (product) => {
        try {
            await axios.post(`${API_URL}/products`, product);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${API_URL}/products/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async (product, id) => {
        try {
            await axios.put(`${API_URL}/products/${id}`, product);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ProductContext.Provider value={{
            products,
            product,
            getProducts,
            getProduct,
            createProduct,
            deleteProduct,
            updateProduct,
        }}>
            {children}
        </ProductContext.Provider>
    )
}