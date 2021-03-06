const user = require("../models/User");

module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username must not empty';
    }
    if(email.trim() === ''){
        errors.email = 'Email must not be empty';
    }
    else {
        const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email.match(regEx)){
            errors.email = 'Email must be a valid email address';
        }
    }
    if(password === ''){
        errors.password = 'Password must not empty'
    }else if(password !== confirmPassword){
        errors.password = 'Password must match';
    }

    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.vaidateLoginInput = (username, password) => {
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username must not empty';
    }
    if(password.trim() === ''){
        errors.username = 'Password must not empty';
    }
    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}