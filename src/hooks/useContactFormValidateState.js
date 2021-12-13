import { useState, useEffect } from 'react';

const useContactFormValidateState = () => {
    const [errors, setErrors] = useState([]);

    // useEffect(() => {

    //     let today = newDate;
    //     let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    //     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //     let dateTime = date+' '+time;

    //     setDateNow(dateTime)
    // }, [newDate]);

    const validateName = (e) => {
    
        const value = e.currentTarget.value
    
        if (value.length < 3) {
            console.log('Прекалено малко символи')
        }
    }

    return [
        errors,
        setErrors
    ]
};

export default useContactFormValidateState;