import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IProduct } from "../../models/Product";

const getProducts = async () => {
    return (await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`)).data as IProduct[];
}

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    })
}