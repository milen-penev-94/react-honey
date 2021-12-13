import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { validateCategory } from '../helper/formValidationHelper';
import * as categoriesService from '../../../../services/categoriesService';
import './AddCategory.css'

const AddCategory = () => {
    const initialValues = {isEnabled: '1', name: '', description: '',  parent: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [allCategories, setAllCategories] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate()

    const statuses = [
        { value: '1', text: 'Активен' },
        { value: '0', text: 'Неактивен' },
    ]

    useEffect(() => {
        categoriesService.getAll()
            .then(result => {
                setAllCategories(result)
            })   
            .catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            categoriesService.save(formValues)
            .then(result => {
                setSuccessMessage('Успешно добавен продукт');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 2000);
            
            })   
            .catch(err => {
                console.log(err);
            })
        } 
    }, [formErrors]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateCategory(formValues));
        setIsSubmit(true);

        if ( Object.keys(formErrors).length === 0 ) {
            e.currentTarget.reset();
        }
    };

    return(
        <div className="add-category-component auto-container">
            <Link to="/admin/list-category" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с категории</span>
            </Link>

            <h2>Добавяне на категория</h2>

            {successMessage && <div className="success-message">{successMessage}</div>}
         
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="isEnabled">Статус: </label>
                        <select id="isEnabled" name="isEnabled">
                            {statuses.map(status => <option key={status.value} value={status.value}>{status.text}</option>)}
                        </select> 
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="name">Име на категория: </label>
                        <input id="name" name="name" type="text" onBlur={handleChange} />
                        <p className="error-message">{formErrors.name}</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="description">Описание: </label>
                    <textarea id="description" name="description" onBlur={handleChange}></textarea>
                </div>     

                <div>
                    <label htmlFor="parent">Родителска категория: </label>

                    {<select id="parent" name="parent" onBlur={handleChange}>   
                        <option defaultValue=""></option>                   
                        {allCategories.length > 0 ? allCategories.map(x => <option key={x.docId} value={x.docId}>{x.name}</option>) : null}                       
                    </select>}
                </div>

                <button type="submit">Запазване</button>
            </form>
        </div>
    )
}
export default AddCategory;