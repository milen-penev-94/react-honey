import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheckSquare, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import * as categoriesService from '../../../../services/categoriesService';
import DeleteConfirmDialog from '../../../Common/DeleteConfirmDialog/DeleteConfirmDialog';
import DeleteAlertDialog from '../../../Common/DeleteConfirmDialog/DeleteAlertDialog';
import './Categories.css';
import ChildCategories from "./ChildCategories";

const Category = ({category, onChange}) => {

    const[hasChildCategories, setHasChildCategories] = useState(false);
    const[showDeleteDialog, setShowDeleteDialog] = useState(false);
    const[showDeleteAlertDialog, setShowDeleteAlertDialog] = useState(false);
    const[categoryId, setCategoryId] = useState();

    useEffect(() => {
        categoriesService.getChildCategories(category.docId)
        .then(result => {
            if (result.length) {
                setHasChildCategories(true)
            }
        })
        .catch(err => {
            console.log(err);
        })  

    }, [onChange]);

    const deleteCategory = (e) => {
        categoriesService.remove(categoryId)
        .then(result => {
            onChange(true);
        })  
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setShowDeleteDialog(false);
        });
     }

     const deleteClickHandler = (e) => {
        e.preventDefault();

        if(!hasChildCategories) {
            setCategoryId(category.docId)
            setShowDeleteDialog(true);
        } else {
            setShowDeleteAlertDialog(true);
        }   
     }

     const closeEventHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(false);
        setShowDeleteAlertDialog(false);
     }

    return (
        <>
            <DeleteAlertDialog show={showDeleteAlertDialog} onClose={closeEventHandler} />
            <DeleteConfirmDialog show={showDeleteDialog} onClose={closeEventHandler} onDelete={deleteCategory} />
            
            <span className="name">{category.name}</span>
            <div className="actions">
                <span className="status">{(category.isEnabled === '1' ? <FontAwesomeIcon icon={faCheckSquare} className="enabled" /> : <FontAwesomeIcon icon={faWindowClose} className="disabled" />)} </span>
                <Link to={`/admin/update-category/${category.docId}`} className="edit">
                    <FontAwesomeIcon icon={faEdit} /> 
                </Link> 
                <span className="delete" onClick={deleteClickHandler}><FontAwesomeIcon icon={faTrash} /></span>
                {/* { (childCategories.length > 0) ? 
                     <span className="delete" onClick={deleteClickCategoryWithChildsHandler}><FontAwesomeIcon icon={faTrash} /></span>
                :
                     <span className="delete" onClick={deleteClickHandler}><FontAwesomeIcon icon={faTrash} /></span>
                } */}
            </div>

            <ChildCategories parentCategory={category} />
            
            {/* {childCategories.length > 0
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
            } */}
        </>
    )
}
export default Category;