import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import * as categoriesService from '../../../../services/categoriesService';
import { validateCategory } from '../helper/formValidationHelper';
import './UpdateCategory.css';

const UpdateCategory = () => {
    const params = useParams();
    const navigate = useNavigate();

    const thisCategoryId = params.id;
    const [currentCategory, setCurrentCategory] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [allCategories, setAllCategories] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const statuses = [
        { value: '1', text: 'Активен' },
        { value: '0', text: 'Неактивен' },
    ]

    useEffect(() => {
        categoriesService.getOne(thisCategoryId)
        .then(result => {
            setCurrentCategory(result) 
        })  
        .catch(err => {
            console.log(err);
        }) 
    }, [thisCategoryId]);

    useEffect(() => {
        categoriesService.getAll()
        .then(result => {
            result.map(category => {
                if(category.docId != thisCategoryId) {
                    setAllCategories((s) => [...s, category]);
                }
             })
                    
        }) 
        .catch(err => {
            console.log(err);
        })  
    }, []);

    useEffect(() => {
       
        if (Object.keys(formErrors).length === 0 && isSubmit) {

             categoriesService.update(currentCategory, thisCategoryId)
            .then(result => {
                setSuccessMessage('Успешно редактирана категория');
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
        setCurrentCategory({ ...currentCategory, [name]: value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateCategory(currentCategory));
        setIsSubmit(true);

        if (Object.keys(formErrors).length === 0 ) {
            e.currentTarget.reset();
        }
    };
 
    return(
        <div className="update-category-component auto-container">            
            <Link to="/admin/list-category" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с категории</span>
            </Link>

            <h2>Категория: {currentCategory.name}</h2>

             {successMessage && <div className="success-message">{successMessage}</div>}

             <form onSubmit={handleSubmit}>
                <div>
                     <label htmlFor="isEnabled">Статус: </label>
                     <select 
                     id="isEnabled" 
                     name="isEnabled" 
                     value={currentCategory.isEnabled} 
                     onChange={(e) => setCurrentCategory(s => ({...s, isEnabled: e.target.value}))}
                     onBlur={handleChange}>
                        {statuses.map(status => <option key={status.value} value={status.value}>{status.text}</option>)}
                    </select> 
                 </div>

                 <div>
                     <label htmlFor="name">Име на категория: </label>
                     <input id="name" name="name" type="text" defaultValue={currentCategory.name} onBlur={handleChange} />
                     <p className="error-message">{formErrors.name}</p>
                 </div>

                 <div>
                     <label htmlFor="description">Описание: </label>
                     <textarea id="description" name="description" defaultValue={currentCategory.description} onBlur={handleChange}></textarea>
                 </div>     

                 <div>
                    <label htmlFor="parent">Родителска категория: </label>
                    <select 
                    id="parent" 
                    name="parent"  
                    value={currentCategory.parent} 
                    onChange={(e) => setCurrentCategory(s => ({...s, parent: e.target.value}))}
                    onBlur={handleChange}>   
                        <option value=""></option> 
                        {allCategories.length > 0 
                        ? allCategories.map(x => 
                            <option key={x.docId} value={x.docId} selected={x.docId === currentCategory.parent}>{x.name}</option>) 
                        : null}                                
                    </select> 
                 </div>

                 <button type="submit">Запазване</button>
             </form>
        </div>
    )
}
export default UpdateCategory;