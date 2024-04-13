import { useParams } from "react-router-dom";
import { useProductById } from "../../api/Products/useProducts";

const ProductDetail = () => {
    const { product_id } = useParams();
    const { data: product, isLoading } = useProductById(product_id!);

    return (
        <div className="inline-block">
            <div className='w-3/4 h-'>
                <img className='object-cover' src={product?.image}/>
            </div>
            <div>
                {product?.name}
            </div>
        </div>
    )

}

export default ProductDetail;