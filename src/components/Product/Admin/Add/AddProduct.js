import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as categoriesService from '../../../../services/categoriesService';
import * as productService from '../../../../services/productService';
import './AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

const AddProduct = () => {
    const [errorMessage, setErrorMessage] = useState([])
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
        let { isEnabled, name, description, image, quantity, category, sku, price, salePrice } = Object.fromEntries(formData)

        let errors = [];

        if (name.length < 3) {
            errors.push('Името неможе да е по-малко от 3 символа')
        }

        if (description.length < 3) {
            errors.push('Описанието неможе да е по-малко от 3 символа')
        }

        if (!image.length) {
            errors.push('Снимката е задължителна')
        }

        if (!price.length) {
            errors.push('Цената е задължителна')
        } else {

            if (isNaN(price)) {
                errors.push('Цената трябва да е число')
            } else {

                if (parseFloat(price) <= 0) {
                    errors.push('Цената трябва да е по-голяма от 0')
                }
            }
        }   
        
        if (salePrice.length) {
            if (isNaN(salePrice)) {
                errors.push('Промоционалната цена трябва да е число')
            } else {

                if (parseFloat(salePrice) <= 0) {
                    errors.push('Промоционалната цена трябва да е по-голяма от 0')
                }
            }
        }  

        if (quantity.length) {
            if (isNaN(quantity)) {
                errors.push('Количеството трябва да е число')
            } 
        }  
        
        if (errors.length > 0) {
            setErrorMessage(errors)  
        } else {
            
            let newProduct = {isEnabled, name, description, image, quantity, category, sku, price, salePrice}

            productService.save(newProduct)
            .then(result => {
                if(result) {
                    form.reset()
                    setErrorMessage([])
                    setSuccessMessage('Успешно добавен продукт')
                    setTimeout(() => {
                        setSuccessMessage('')
                    }, 2000)
                } else {
                    //TODO  add Err
                }
            })  
        }
    }

    return(
        <div className="add-product-component auto-container">
            <Link to="/admin/list-products" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с продукти</span>
            </Link>

            <h2>Добавяне на продукт</h2>

            {successMessage && <div className="success-message">{successMessage}</div>}

            <div className={(errorMessage.length > 0) ? 'error-message' : null}>
                { (errorMessage.length > 0) ? errorMessage.map((error) =>
                    <div>{error}</div>
                ) : null}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="two-column">
                    <label htmlFor="isEnabled">Статус: </label>
                    <select id="isEnabled" name="isEnabled">
                        <option value="1">Активен</option>
                        <option value="0">Неактивен</option>
                    </select>
                </div>

                <div className="two-column">
                    <label htmlFor="name">Име на продукт: </label>
                    <input id="name" name="name" type="text" />
                </div>

                <div>
                    <label htmlFor="description">Описание: </label>
                    <textarea id="description" name="description"></textarea>
                </div>     

                <div className="two-column">
                    <label htmlFor="image">Снимка (url) </label>
                    <input id="image" name="image" type="text" />
                </div>     


                <div className="two-column">
                    <label htmlFor="quantity">Количество </label>
                    <input id="quantity" name="quantity" type="text" />
                </div>     

                <div className="two-column" >
                    <label htmlFor="category">Категория: </label>
                    <select id="category" name="category">   
                        <option defaultValue=""></option>                   
                        {allCategories.length > 0 ? allCategories.map(x => <option key={x.docId} value={x.docId}>{x.name}</option>) : null}                       
                    </select>
                </div>

                <div className="two-column">
                    <label htmlFor="sku">Артикулен номер: </label>
                    <input id="sku" name="sku" type="text" />
                </div>  

                <div className="two-column">
                    <label htmlFor="price">Цена: </label>
                    <input id="price" name="price" type="text" />
                </div>

                <div className="two-column">
                    <label htmlFor="salePrice">Промоционална цена: </label>
                    <input id="salePrice" name="salePrice" type="text" />
                </div>

                <div>
                     <button type="submit">Запазване</button>
                </div>
            </form>
        </div>
    )
}
export default AddProduct;