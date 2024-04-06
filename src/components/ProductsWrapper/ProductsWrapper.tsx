import { IProduct } from "../../models/Product";
import Product from "../Product/Product";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addProduct } from "../../redux/features/product_slice";
import { useProducts } from "../../api/Products/useProducts";

const ProductsWrapper = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: products, isLoading } = useProducts();

    const handleAddProduct = (product: IProduct) => {
        dispatch(addProduct(product));
    }

    return (
        <div className="flex flex-wrap">
            { !isLoading &&
                products!.map((product, index) => {
                    return (
                        <div key={index} className="border-solid border-[1px] p-2 m-2 hover:shadow-md">
                            <Product className="flex flex-col gap-1" product={product} key={index} />
                            <div className="flex justify-center items-center">
                                <Button onClick={() => handleAddProduct(product)}>Add to Cart</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsWrapper;