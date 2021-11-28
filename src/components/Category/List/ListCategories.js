import React, { useState, useEffect } from "react"
import * as categoriesService from '../../../services/categoriesService';
import { Link } from "react-router-dom"
import './ListCategories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const ListCategories = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [deleteCategory, setDeleteCategory] = useState(false);
    

    useEffect(() => {
        categoriesService.getAll()
        .then(result => {
            setAllCategories(result);
        })  
    }, [deleteCategory]);

    const removeCategory = (e) => {
       let categoryId = e.currentTarget.getAttribute('data-category-id')
       categoriesService.remove(categoryId)
       .then(result => {
           setDeleteCategory(true)
       })  
    }


    return(
        <div className="list-categories-component">
            <Link to="/add-category" className="add-category">
                <span className="icon"><FontAwesomeIcon icon={faPlusSquare} /></span>
                <span className="label">Добави категория</span>
            </Link>

            {allCategories.length > 0
                ? (
                    <ul className="categories-list">
                        {allCategories.map(x => 
                        <li className="category">
                            <span className="name">{x.name}</span>
                            <div className="actions">
                                <Link to={`/update-category/${x.docId}`} className="edit"><FontAwesomeIcon icon={faEdit} /></Link> 
                                <span className="delete" onClick={removeCategory} data-category-id={x.docId}><FontAwesomeIcon icon={faTrash} /></span>
                            </div>
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