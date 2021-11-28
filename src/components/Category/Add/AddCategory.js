import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as categoriesService from '../../../services/categoriesService';
import './AddCategory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const AddCategory = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [allCategories, setAllCategories] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        categoriesService.getAll()
            .then(result => {
                setAllCategories(result);
            })   
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        let form = e.currentTarget
        let formData = new FormData(e.currentTarget);
        let {isEnabled, name, description, parent} = Object.fromEntries(formData)

        if (name.length < 3) {
            setErrorMessage('Името неможе да е по-малко от 3 символа')
        }

        if (name.length > 3 ) {
            
            let newCategory = {isEnabled, name, description, parent}
            console.log(newCategory)

            categoriesService.save(newCategory)
            .then(result => {
                if(result) {
                    form.reset()
                    setErrorMessage("")
                    setSuccessMessage("Успешно запаметена категория")
                    setTimeout(() => {
                        setSuccessMessage("")
                        navigate("/list-category")
                    }, 3000)
                } 
            })   
            .catch(err => {
                console.err(err)
            })
        }
    }

    return(
        <div className="add-category-component">
            <Link to="/list-category" className="cancel">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с категории</span>
            </Link>

            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="isEnabled">Статус: </label>
                    <select id="isEnabled" name="isEnabled">
                        <option value="1">Активна</option>
                        <option value="0">Неактивна</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="name">Име на категория: </label>
                    <input id="name" name="name" type="text" />
                </div>

                <div>
                    <label htmlFor="description">Описание: </label>
                    <textarea id="description" name="description"></textarea>
                </div>     

                <div>
                    <label htmlFor="parent">Родителска среща: </label>
                    <select id="parent" name="parent">   
                        <option defaultValue=""></option>                   
                        {allCategories.length > 0 ? allCategories.map(x => <option key={x.docId} value={x.docId}>{x.name}</option>) : null}                       
                    </select>
                </div>

                <button type="submit">Запазване</button>
            </form>
        </div>
    )
}
export default AddCategory;