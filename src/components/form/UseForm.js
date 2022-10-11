import { useState, useEffect } from "react";




const UseForm = validete => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        gender: ""
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)



    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });

    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validete(values));
        setIsSubmitting(true);
    }

    return { handleChange, values, handleSubmit, errors };
};

export default UseForm;
