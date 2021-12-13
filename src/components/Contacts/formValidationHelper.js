export const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.name) {
        errors.name = "Името е задължително!";
    }

    if (!values.email) {
        errors.email = "Имеила е задължителен!";
    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
        errors.phone = "Името е задължително!";
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
