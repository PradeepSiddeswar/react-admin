export default function valideteInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username= "username required"
    }

    if(!values.email) {
        errors.email = "Email.required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z-9.-]*\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.password) {
        errors.password = "Password.required"
    } else if(values.password.length < 6 ) {
        errors.password = 'Password Needs to be 6characters or more';
    } 

    if(!values.password2) {
        errors.password2= "Password.required"
    } else if (values.password2 !== values.password) {
        errors.password2 = 'passwords do not match';
    }

    return errors;
}