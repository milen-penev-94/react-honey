export const validateCheckout = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.name) {
        console.log(values.name)
        errors.name = "Името е задължително!";
    }

    if (!values.lastName) {
        errors.lastName = "Фамилията е задължителна!";
    }

    if (!values.email) {
        errors.email = "Имеила е задължителен!";
    } else if (!regex.test(values.email)) {
        errors.email = "Невалиден формат за имеил!";
    }

    if (!values.phone) {

        errors.phone =  "Телефона е задължителен!";
        } else {
        if (isNaN(values.phone)) {
            errors.phone = " Телефона трябва да е число!";
        }
    }

    if (!values.city) {
        errors.city = "Населеното място е задължително!";
    }

    if (!values.address) {
        errors.address = "Населеното място е задължително!";
    } else {
        if (values.address.length < 3) {
            errors.address = "Адреса не може да е по-малко от 3 символа!";
        }
    }
        
    return errors;
};
