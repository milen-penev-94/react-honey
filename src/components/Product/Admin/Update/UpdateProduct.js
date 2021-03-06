import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import * as productService from '../../../../services/productService';
import * as categoriesService from '../../../../services/categoriesService';
import { validateProduct } from '../helper/formValidationHelper';
import './UpdateProduct.css'

const UpdateProduct = () => {
    const params = useParams();

    const thisProductId = params.id;
    const [currentProduct, setCurrentProduct] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [allCategories, setAllCategories] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const statuses = [
        { value: '1', text: 'Активен' },
        { value: '0', text: 'Неактивен' },
    ]

    useEffect(() => {
        productService.getOne(thisProductId)
        .then(result => {
            setCurrentProduct(result);
        })   
        .catch(err => {
            console.log(err);
        })
       
    }, []);

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

             productService.update(currentProduct, thisProductId)
            .then(result => {
                setSuccessMessage('Успешно редактиран продукт');
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
        setCurrentProduct({ ...currentProduct, [name]: value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateProduct(currentProduct));
        setIsSubmit(true);

        if (Object.keys(validateProduct(currentProduct)).length === 0 ) {
            e.currentTarget.reset();
        }
    };

    return (
        <div className="update-product-component auto-container">

            <Helmet>
                <title>{currentProduct.name}</title>
            </Helmet>

            <Link to="/admin/list-products" className="cancel profile-action-button">
                <span className="icon"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
                <span className="label">Към листа с продуки</span>
            </Link>

            <h2>Продукт: {currentProduct.name}</h2>

            {successMessage && <div className="success-message">{successMessage}</div>}

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="isEnabled">Статус: </label>
                        <select 
                        id="isEnabled" 
                        name="isEnabled" 
                        onChange={(e) => setCurrentProduct(s => ({...s, isEnabled: e.target.value}))}
                        value={currentProduct.isEnabled}
                        onBlur={handleChange}>
                            {statuses.map(status => <option key={status.value} value={status.value}>{status.text}</option>)}
                        </select> 
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="name">Име на продукт: </label>
                        <input id="name" name="name" type="text" defaultValue={currentProduct.name} onBlur={handleChange} />
                        <p className="error-message">{formErrors.name}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <label htmlFor="description">Описание: </label>
                        <textarea id="description" name="description" defaultValue={currentProduct.description} onBlur={handleChange}></textarea>
                        <p className="error-message">{formErrors.description}</p>
                    </div>     
                </div>     

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="image">Снимка (url) </label>
                        <input id="image" name="image" type="text" defaultValue={currentProduct.image}  onBlur={handleChange}/>
                        <p className="error-message">{formErrors.image}</p>
                    </div>     


                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="quantity">Количество </label>
                        <input id="quantity" name="quantity" type="text" defaultValue={currentProduct.quantity}  onBlur={handleChange}/>
                        <p className="error-message">{formErrors.quantity}</p>
                    </div>     
                </div>     

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="category" >Категория: </label>
                        <select 
                        id="category" 
                        name="category"  
                        value={currentProduct.category} 
                        onChange={(e) => setCurrentProduct(s => ({...s, category: e.target.value}))}
                        onBlur={handleChange}>   
                            <option value=""></option> 
                            {allCategories.length > 0 
                            ? allCategories.map(x => 
                                <option key={x.docId} value={x.docId} >{x.name}</option>) 
                            : null}                                
                        </select> 
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="sku" >Артикулен номер </label>
                        <input id="sku" name="sku" type="text" defaultValue={currentProduct.sku} onBlur={handleChange} />
                    </div>    
                </div>    

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="price">Цена: </label>
                        <input id="price" name="price" type="text" defaultValue={currentProduct.price} onBlur={handleChange} />
                        <p className="error-message">{formErrors.price}</p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="salePrice">Промоционална цена: </label>
                        <input id="salePrice" name="salePrice" type="text" defaultValue={currentProduct.salePrice} onBlur={handleChange} />
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

export default UpdateProduct;