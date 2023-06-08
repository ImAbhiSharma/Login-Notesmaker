
const mongoose = require("mongoose")

//Value Validation
const isValid = function(value){
    if(typeof value ==='undefined' || value ===null)  return false
    if(typeof value ==='string' && value.trim().length ===0)return false
    return true
}

//Name Validation
const isValidName =function(name){
    const  nameRegex =/^[a-zA-Z]{2,30}$/
    return nameRegex.test(name)
}

//Title Validation
const isValidTitle =function(title){
    return ["Mr", "Mrs", "Miss"].indexOf(title) !== -1
}

//Email Validation
const isValidEmail = function(email){
    const emailRegex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/
    return emailRegex.test(email)

}

//Password Validation
const isValidPassword = function(password){
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passRegex.test(password)
}





module.exports = { isValid,isValidName, isValidTitle, isValidEmail, isValidPassword }