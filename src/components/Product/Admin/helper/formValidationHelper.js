export const validateProduct = (values) => {
    const errors = {};

    if (values.name.length < 3) {
        errors.name =  'Името неможе да е по-малко от 3 символа!';
    }

    if (values.description.length < 3) {
        errors.description = 'Описанието неможе да е по-малко от 3 символа!';
    }

    if (!values.image) {
        errors.image = 'Снимката е задължителна!';
    }

    if (!values.price) {
        errors.price = 'Цената е задължителна!';
    } else {

        if (isNaN(values.price)) {
            errors.price = 'Цената трябва да е число!'
        } else {

            if (parseFloat(values.price) <= 0) {
                errors.price = 'Цената трябва да е по-голяма от 0!';
            }
        }
    }   
    
    if (values.salePrice) {
        if (isNaN(values.salePrice)) {
            errors.salePrice = 'Промоционалната цена трябва да е число!';
        } else {

            if (parseFloat(values.salePrice) <= 0) {
                errors.salePrice = 'Промоционалната цена трябва да е по-голяма от 0!';
            }

            if  (parseFloat(values.salePrice) > parseFloat(values.price)) {
                errors.salePrice = 'Промоционалната цена не може да е по-висока от редовната цена!';
            }
        }
    }  

    if (values.quantity) {
        if (isNaN(values.quantity)) {
            errors.quantity = 'Количеството трябва да е число!';
        } 
    }  
        
    return errors;
};
