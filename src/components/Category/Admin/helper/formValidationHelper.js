export const validateCategory = (values) => {
    const errors = {};

    if (values.name.length < 3) {
        errors.name =  'Името не може да е по-малко от 3 символа!';
    }
 
    return errors;
};
