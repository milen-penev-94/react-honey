
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as categoriesService from '../../../services/categoriesService';

const Categories = () => {

    const [allCategories, setAllCategories] = useState([])

    useEffect(() => {
        categoriesService.getAll()
        .then(result => {
            setAllCategories(result);
        })
        .catch(err => {
            console.log(err);
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
                            <li><Link to={`/products`}>Всички продукти</Link></li>    

                            { parentCategories().map(parentCategory =>                
                            <li key={parentCategory.docId}><Link to={`/category/${parentCategory.docId}/1`}>{parentCategory.name}</Link>
                                <ul className="child-categories">
                                    {childCategories(parentCategory).map(categoryLevel2 => 
                                        <li key={categoryLevel2.docId}><Link to={`/category/${categoryLevel2.docId}/1`}>{categoryLevel2.name}</Link>
                                            <ul className="child-categories">
                                                {childCategories(categoryLevel2).map(categoryLevel3 => 
                                                    <li key={categoryLevel3.docId}>
                                                        <Link to={`/category/${categoryLevel3.docId}/1`}>{categoryLevel3.name}</Link>
                                                    </li> )}
                                            </ul>
                                        </li> )}
                                </ul>
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