
import { useState, useEffect } from "react";
import {Helmet} from "react-helmet";
 import { validate } from './formValidationHelper'
import './Contacts.css'

const Contacts = () => {

    const initialValues = {name: "", email: "",  phone: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
       
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //console.log(formValues);
            console.log('minava');
        }
    }, [formErrors]);

    return (
        <div className="auto-container contacts-component">
             <Helmet>
                <title>Контакти</title>
            </Helmet>

            <h1>Контакти</h1>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="name">Име: </label>
                        <input name="name" id="name" type="text" onBlur={handleChange}  />
                        <p>{formErrors.name}</p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="email">Имеил: </label>
                        <input name="email" id="email" type="text" onBlur={handleChange} />  
                        <p>{formErrors.email}</p>                    
                    </div>
                </div> 

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="phone">Телефон </label>
                        <input name="phone" id="phone" type="text" onBlur={handleChange} />  
                        <p>{formErrors.phone}</p>                      
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label htmlFor="message">Съобщение: </label>
                        <textarea name="message" id="message" type="text" onBlur={handleChange}></textarea>    
                        <p>{formErrors.message}</p>                     
                    </div>
                </div>
                <button className="">Submit</button>
            </form> 
        </div>    
    )
}

export default Contacts