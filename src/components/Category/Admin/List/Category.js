import React, { useState } from "react"
import * as categoriesService from '../../../../services/categoriesService';
import { Link } from "react-router-dom"
import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faCheckSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons'

const Category = ({category, onChange, childCategories}) => {
    const [deleteChildCategory, setDeleteChildCategory] = useState(false);

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

     const removeCategoryWithChilds = (e) => {
        alert('Не можете да изтриете категория която има наследници')
     }

    return (
        <>
            <span className="name">{category.name}</span>
            <div className="actions">
                <span className="status">{(category.isEnabled === '1' ? <FontAwesomeIcon icon={faCheckSquare} className="enabled" /> : <FontAwesomeIcon icon={faWindowClose} className="disabled" />)} </span>
                <Link to={`/admin/update-category/${category.docId}`} className="edit"><FontAwesomeIcon icon={faEdit} />  </Link> 
                { (childCategories.length > 0) ? 
                     <span className="delete" onClick={removeCategoryWithChilds}><FontAwesomeIcon icon={faTrash} /></span>
                :
                     <span className="delete" onClick={removeCategory} data-category-id={category.docId}><FontAwesomeIcon icon={faTrash} /></span>
                }
            </div>
            
            {childCategories.length > 0
                ? (
                    <div className="child-categories">
                        <ul className="categories-list">
                            {childCategories.map(x => 
                            <li className="category" key={x.docId}>
                                <Category category={x} childCategories={[]} deleteCategory={deleteChildCategory} onChange={changeDeteleChildCategory} />
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
export default Category;