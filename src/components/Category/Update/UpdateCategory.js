import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import * as categoriesService from '../../../services/categoriesService';
import './UpdateCategory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const UpdateCategory = () => {
    let params = useParams()
    let thisCategoryId = params.id

    const [currentCategory, setCurrentCategory] = useState({})
    const [allCategories, setAllCategories] = useState([]);
    const [updateForm, setUpdateForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    useEffect(() => {

        categoriesService.getOne(thisCategoryId)
        .then(result => {
            setCurrentCategory(result)
        })   
       
    }, [updateForm]);

    useEffect(() => {
        categoriesService.getAll()
            .then(result => {
                setAllCategories(result);
            })   
    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault(); 

        let formData = new FormData(e.currentTarget);
        let {isEnabled, name, description, parent} = Object.fromEntries(formData)

        if (name.length < 3) {
            setErrorMessage('Името неможе да е по-малко от 3 символа')
        }

        if (name.length > 3 ) {
            
            let category = {isEnabled, name, description, parent}

            categoriesService.update(category, thisCategoryId)
            .then(result => {
                if(result) {
                    setSuccessMessage('Успешно редактирана категория')
                    setUpdateForm(true)
                    setTimeout(() =>{
                        setSuccessMessage('')
                    }, 2000)
                }
            })   
            .catch(err => {
                console.log(err)
            })
        }
    }

    return(
        <div className="update-category-component">            
            <Link to="/list-category" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с категории</span>
            </Link>

             {successMessage && <div className="success-message">{successMessage}</div>}
             {errorMessage && <div className="error-message">{errorMessage}</div>}

             <form onSubmit={handleSubmit}>
                <div>
                     <label htmlFor="isEnabled">Статус: </label>
                     <select id="isEnabled" name="isEnabled" data-test={currentCategory.isEnabled}>
                         <option value="1" selected={(currentCategory.isEnabled === 1) ? 'selected' : null}>Активна</option>
                         <option value="0" selected={(currentCategory.isEnabled === 1) ? null : 'selected' }>Неактивна</option>
                     </select>
                 </div>

                 <div>
                     <label htmlFor="name">Име на категория: </label>
                     <input id="name" name="name" type="text" defaultValue={currentCategory.name} />
                 </div>

                 <div>
                     <label htmlFor="description">Описание: </label>
                     <textarea id="description" name="description" defaultValue={currentCategory.description}></textarea>
                 </div>     

                 <div>
                     <label htmlFor="parent">Родителска категория: </label>
                     <select id="parent" name="parent">   
                        <option defaultValue=""></option> 
                         {allCategories.length > 0 
                            ? allCategories.map(x => 
                                <option key={x.docId} value={x.docId} selected={x.docId === currentCategory.parent ? 'selected' : ''}>{x.name}</option>) 
                            : null}                                
                     </select>
                 </div>

                 <button type="submit">Запазване</button>
             </form>
        </div>
    )
}
export default UpdateCategory;