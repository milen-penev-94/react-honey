
import React, { useState, useEffect } from "react"
import * as categoriesService from '../../../services/categoriesService';
import { Link } from "react-router-dom"

const Categories = () => {

    const [allCategories, setAllCategories] = useState([])

    useEffect(() => {
        categoriesService.getAll()
        .then(result => {
            setAllCategories(result);
        })  
    }, []);

    function parentCategories() {
        let parentCategoriesArr = []
        allCategories.map(category => {
            if (!category.parent) {
                parentCategoriesArr.push(category)
            }
        })
        return parentCategoriesArr
    }

    function childCategories(parentCategory) {
        let childCategoriesArr = []
        allCategories.map(category => {
           if(category.parent == parentCategory.docId) {
               childCategoriesArr.push(category)
           }
        })
    
       return childCategoriesArr
    }

    return (   
        <div className="sidebar-widget category-widget">
            <div className="widget-title">
                <h4>Категории</h4>
            </div>
            <div className="widget-content">
                {parentCategories().length > 0
                    ? (
                        <ul className="category-list clearfix">
                            { parentCategories().map(parentCategory => 
                            <li key={parentCategory.docId}>
                                <li><Link to={`/producs/category/${parentCategory.docId}`}>{parentCategory.name}</Link>
                                    <ul className="child-categories">
                                        {childCategories(parentCategory).map(childCategory => 
                                            <li key={childCategory.docId}><Link to={`/producs/category/${childCategory.docId}`}>{childCategory.name}</Link></li> )}
                                    </ul>
                                </li>
                            </li>
                            )}
                        </ul>
                    ) 
                    : <p className="no-data">Няма налични категории в базата с данни!</p>
                }
            </div>
        </div>     
    )
}

export default Categories