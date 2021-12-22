import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { validate } from './formValidationHelper';
import * as contactsService from '../../services/contactsService';
import useDateNow from '../../hooks/useDateNowState';
import './Contacts.css';

const Contacts = () => {

    const initialValues = {name: "", email: "",  phone: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [dateNow, setDateNow] = useDateNow(new Date());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        if (Object.keys(validate(formValues)).length === 0) {
            e.currentTarget.reset();
        }
    };

    useEffect(() => {
       
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setDateNow(new Date()); 

            const finalFormValues = Object.assign(formValues, {date: dateNow});
            contactsService.save(finalFormValues)
            .then(result => {
                setSuccessMessage('Успешно изпратено запитване');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 2000);
            
            })   
            .catch(err => {
                console.log(err);
            })
        }
    }, [formErrors]);

    return (
        <div className="contacts-component">
             <Helmet>
                <title>Контакти</title>
            </Helmet>

            <section className="page-title centred" style={{backgroundImage: `url("/images/background/page-title.jpg")`}}>
                <div className="auto-container">
                <div className="content-box">
                    <div className="title">
                    <h1>Контакти</h1>
                    </div>
                </div>
                </div>
            </section>

            <div className="row auto-container">
                <div className="col-lg-6 col-md-6 col-sm-12 map">               
                    <h4>Карта</h4>   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1218.647619570089!2d24.60637673627721!3d43.41864668948844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ab8b450cedefb7%3A0x1bf4ab29118a06da!2sul.%20%22Lozenka%22%205%D0%92%2C%205802%20g.k.%20Strogozia%2C%20Pleven!5e0!3m2!1sen!2sbg!4v1639592865361!5m2!1sen!2sbg" width="600" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy"></iframe>
                    <span>гр. Плевен, ул Лозенка №5</span>
                    <span>Телефон: 0886582763</span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4>Изпратете ни съобщение</h4>
                    <form onSubmit={handleSubmit}>
                        {successMessage && <div className="success-message">{successMessage}</div>}    
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <label htmlFor="name">Име: </label>
                                <input name="name" id="name" type="text" onBlur={handleChange} />
                                <p className="error-message">{formErrors.name}</p>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <label htmlFor="email">Имеил: </label>
                                <input name="email" id="email" type="text" onBlur={handleChange} />  
                                <p className="error-message">{formErrors.email}</p>                    
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <label htmlFor="phone">Телефон </label>
                                <input name="phone" id="phone" type="text" onBlur={handleChange} />  
                                <p className="error-message">{formErrors.phone}</p>                      
                            </div>
                        </div> 

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <label htmlFor="message">Съобщение: </label>
                                <textarea name="message" id="message" type="text" onBlur={handleChange}></textarea>    
                                <p className="error-message">{formErrors.message}</p>                     
                            </div>
                        </div>
                        <button type="submit">Изпрати</button>
                    </form> 
                </div>
            </div>
        </div>    
    )
}

export default Contacts