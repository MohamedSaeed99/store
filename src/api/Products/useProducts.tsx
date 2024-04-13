import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IProduct } from "../../models/Product";

const getProducts = async () => {
    return (await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`)).data as IProduct[];
}

const getProductById = async (product_id: string) => {
    return (await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/${product_id}`)).data as IProduct;
}

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })
}

export const useProductById = (product_id: string) => {
    return useQuery({
        queryKey: ["products"],
        queryFn: () => getProductById(product_id)
    })
}