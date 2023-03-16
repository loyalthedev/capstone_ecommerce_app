import { useContext } from "react";
import './Shop.styles.scss';
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;