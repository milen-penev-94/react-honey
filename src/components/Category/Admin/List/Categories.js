import React, { useState, useEffect } from "react"
import * as categoriesService from '../../../../services/categoriesService';
import { Link } from "react-router-dom"
import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Category from "./Category";

const Categories = () => {
    const [parentCategories, setParentCategories] = useState([]);
    const [deleteCategory, setDeleteCategory] = useState(false);

    useEffect(() => {
        setDeleteCategory(false)

        categoriesService.getParentCategories()
        .then(result => {
            setParentCategories(result);
        })
        .catch(err => {
            console.log(err);
        })  

    }, [deleteCategory]);

    function changeDeteleCategory(newValue) {
        setDeleteCategory(newValue)
    }

    return(
        <div className="list-categories-component auto-container">

            <Link to="/profile" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към профила</span>
            </Link>
            
            <Link to="/admin/add-category" className="add-category profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faPlusSquare} /></span>
                <span className="label">Добави категория</span>
            </Link>

            <h2>Категории</h2>

            {parentCategories.length > 0
                ? (
                    <ul className="categories-list">
                        { parentCategories.map(parentCategory => 
                        <li className="category" key={parentCategory.docId}  >
                            { <Category category={parentCategory} deleteCategory={deleteCategory} onChange={changeDeteleCategory} /> }
                        </li>
                        )}
                    </ul>
                ) 
                : <p className="no-data">Няма налични категории в базата с данни!</p>
            }
        </div>
    )
}
export default Categories;