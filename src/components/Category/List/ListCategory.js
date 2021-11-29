import React, { useState, useEffect } from "react"
import * as categoriesService from '../../../services/categoriesService';
import { Link } from "react-router-dom"
import './ListCategories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheckSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const ListCategory = ({category, onChange}) => {
    const [childCategories, setChildCategories] = useState([]);
    const [deleteChildCategory, setDeleteChildCategory] = useState(false);

    useEffect(() => {
        categoriesService.getChildCategories(category.docId)
        .then(result => {
            setChildCategories(result);
        })  
    }, [deleteChildCategory]);

    function changeDeteleChildCategory() {
        setDeleteChildCategory(true)
    }

    const removeCategory = (e) => {
        let categoryId = e.currentTarget.getAttribute('data-category-id')
        categoriesService.remove(categoryId)
        .then(result => {
            onChange(true);
        })  
     }

    return (
        <>
            <span className="name">{category.name}</span>
            <div className="actions">
                <span className="status">{(category.isEnabled === '1' ? <FontAwesomeIcon icon={faCheckSquare} className="enabled" /> : <FontAwesomeIcon icon={faWindowClose} className="disabled" />)} </span>
                <Link to={`/admin/update-category/${category.docId}`} className="edit"><FontAwesomeIcon icon={faEdit} />  </Link> 
                <span className="delete" onClick={removeCategory} data-category-id={category.docId}><FontAwesomeIcon icon={faTrash} /></span>
            </div>
            
            {childCategories.length > 0
                ? (
                    <div className="child-categories">
                        <ul className="categories-list">
                            {childCategories.map(x => 
                            <li className="category">
                                <ListCategory category={x} deleteCategory={deleteChildCategory} onChange={changeDeteleChildCategory} />
                            </li>
                            )}
                        </ul>
                    </div>
                ) 
                : null
            }
        </>
    )
}
export default ListCategory;