export const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.name) {
        errors.name = "Името е задължително!";
    }

    if (!values.email) {
        errors.email = "Имейла е задължителен!";
    } else if (!regex.test(values.email)) {
        errors.email = "Невалиден формат за имейл!";
    }

    if (!values.phone) {
        errors.phone =  "Телефона е задължителен!";
        } else {
        if (isNaN(values.phone)) {
            errors.phone = " Телефона трябва да е число!";
        }
    }

    if (!values.message) {
        errors.message = "Съобщението е задължително!";
    }
        
    return errors;
};
