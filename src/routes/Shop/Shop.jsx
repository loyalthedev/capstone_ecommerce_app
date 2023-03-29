import { Route, Routes } from "react-router-dom";

import { useContext, Fragment } from 'react';
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
// import CategoriesPreview from "../../routes/CategoriesPreview/CategoriesPreview";
import "./Shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  );
};

export default Shop;
