import React from 'react';
import cl from "../module/products.module.css"
import Category from "./category";
const Products = () => {
    return (
        <div className={cl.Products}>
            <div className={cl.Products__Container}>
                <div className={cl.content__container}>
                    <div className={cl.filters}>
                        <div className={cl.Category}>
                            <Category name={"Холодильники"}></Category>
                        </div>
                        <div className={cl.filtersProduct}>

                        </div>
                    </div>
                    <div className={cl.AllProductContainer}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;