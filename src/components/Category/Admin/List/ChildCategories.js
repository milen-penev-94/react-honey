import React, { useState, useEffect } from "react"
import * as categoriesService from '../../../../services/categoriesService';
import Category from "./Category";

const ChildCategories = ({ parentCategory }) => {

    const [childCategories, setChildCategories] = useState([]);
    const [deleteCategory, setDeleteCategory] = useState(false);

    useEffect(() => {
        setDeleteCategory(false)

        categoriesService.getAll()
        .then(result => {
            result.map(category => {
                if(category.parent == parentCategory.docId) {
                    setChildCategories((s) => [...s, category]);
                }
             })
        })
        .catch(err => {
            console.log(err);
        })  

    }, [deleteCategory]);

    function changeDeteleCategory(newValue) {
        setDeleteCategory(newValue)
    }

    return (
        <>
            {childCategories &&
            <div className="child-categories">
                <ul className="categories-list">
                    {childCategories.map(x => 
                    <li className="category" key={x.docId}>
                        <Category category={x} deleteCategory={deleteCategory} onChange={changeDeteleCategory} />
                    </li>
                    )}
                </ul>
            </div>       
            }       
        </>
    )
}

export default ChildCategories