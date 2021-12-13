import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import * as categoriesService from '../../../../services/categoriesService';
import * as productService from '../../../../services/productService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { validateProduct } from '../helper/formValidationHelper';
import './AddProduct.css';

const AddProduct = () => {
    const initialValues = {isEnabled: "1", name: "", description: "",  image: "", quantity: "", category: "", sku: "", price: "", salePrice: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [allCategories, setAllCategories] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate()

    const statuses = [
        { value: "1", text: 'Активен' },
        { value: "0", text: 'Неактивен' },
    ]

    useEffect(() => {
        categoriesService.getAll()
            .then(result => {
                setAllCategories(result);
            }) 
            .catch(err => {
                console.log(err);
            })  
    }, []);

    useEffect(() => {
       
        if (Object.keys(formErrors).length === 0 && isSubmit) {

             productService.save(formValues)
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
        setFormErrors(validateProduct(formValues));
        setIsSubmit(true);

        if (Object.keys(formErrors).length === 0 ) {
            e.currentTarget.reset();
        }
    };
   
    return(
        <div className="add-product-component auto-container">

            <Helmet>
                <title>Добавяне на продукт</title>
            </Helmet>

            <Link to="/admin/list-products" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с продукти</span>
            </Link>

            <h2>Добавяне на продукт</h2>

            {successMessage && <div className="success-message">{successMessage}</div>}

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="isEnabled">Статус: </label>

                        <select id="isEnabled" name="isEnabled" onBlur={handleChange}>
                            {statuses.map(status => <option key={status.value} value={status.value}>{status.text}</option>)}
                        </select> 
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="name">Име на продукт: </label>
                        <input id="name" name="name" type="text" onBlur={handleChange} />
                        <p className="error-message">{formErrors.name}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="description">Описание: </label>
                        <textarea id="description" name="description" onBlur={handleChange}></textarea>
                        <p className="error-message">{formErrors.description}</p>
                    </div>     
                </div>     

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="image">Снимка (url) </label>
                        <input id="image" name="image" type="text" onBlur={handleChange} />
                        <p className="error-message">{formErrors.image}</p>
                    </div>     


                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="quantity">Количество </label>
                        <input id="quantity" name="quantity" type="text" onBlur={handleChange} />
                        <p className="error-message">{formErrors.quantity}</p>
                    </div>  
                </div>   

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12" >
                        <label htmlFor="category">Категория: </label>
                        <select id="category" name="category" onBlur={handleChange}>   
                            <option defaultValue=""></option>                   
                            {allCategories.length > 0 ? allCategories.map(x => <option key={x.docId} value={x.docId}>{x.name}</option>) : null}                       
                        </select>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="sku">Артикулен номер: </label>
                        <input id="sku" name="sku" type="text" onBlur={handleChange} />
                    </div>  
                </div>  

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="price">Цена: </label>
                        <input id="price" name="price" type="text" onBlur={handleChange} />
                        <p className="error-message">{formErrors.price}</p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="salePrice">Промоционална цена: </label>
                        <input id="salePrice" name="salePrice" type="text" onBlur={handleChange} />
                        <p className="error-message">{formErrors.salePrice}</p>
                    </div>
                </div>

                <div>
                     <button type="submit">Запазване</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduct;