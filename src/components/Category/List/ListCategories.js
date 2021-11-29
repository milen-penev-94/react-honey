import React, { useState, useEffect } from "react"
import * as categoriesService from '../../../services/categoriesService';
import { Link } from "react-router-dom"
import './ListCategories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlusSquare, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import ListCategory from "./ListCategory";

const ListCategories = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [deleteCategory, setDeleteCategory] = useState(false);

    useEffect(() => {
        categoriesService.getParentCategories()
        .then(result => {
            setAllCategories(result);
        })  
    }, [deleteCategory]);

    function changeDeteleCategory(newValue) {
        setDeleteCategory(newValue)
    }

    return(
        <div className="list-categories-component">

            <Link to="/" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към профила</span>
            </Link>
            
            <Link to="/admin/add-category" className="add-category profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faPlusSquare} /></span>
                <span className="label">Добави категория</span>
            </Link>

            {allCategories.length > 0
                ? (
                    <ul className="categories-list">
                        {allCategories.map(x => 
                        <li className="category">
                            <ListCategory category={x} deleteCategory={deleteCategory} onChange={changeDeteleCategory} />
                        </li>
                        )}
                    </ul>
                ) 
                : <p className="no-data">No categories in database!</p>
            }
        </div>
    )
}
export default ListCategories;