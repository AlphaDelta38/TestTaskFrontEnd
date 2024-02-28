import React from 'react';
import cl from '../module/category.module.css'

interface CategoryInterface{
    name: string
}
const Category = ({name}: CategoryInterface) => {
    return (
        <div className={cl.Category}>
            {name}
        </div>
    );
};

export default Category;