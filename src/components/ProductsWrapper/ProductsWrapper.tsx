import Product from "../Product/Product";
import { useProducts } from "../../api/Products/useProducts";
import { IProduct } from "../../models/Product";
import { useNavigate } from "react-router-dom";

const ProductsWrapper = () => {
    const { data: products, isLoading } = useProducts();
    const navigate = useNavigate();

    const handleProductClick = (product: IProduct) => {
        navigate(`/product/${product.id}`);
    }

    return (
        <div className="flex">
            <div className="flex flex-wrap">
                { !isLoading &&
                    products!.map((product, index) => {
                        return (
                            <div onClick={() => handleProductClick(product)} key={index} className="hover:cursor-pointer border-solid border-[1px] p-2 m-2 hover:shadow-md">
                                <Product className="flex flex-col gap-1" product={product} key={index} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductsWrapper;