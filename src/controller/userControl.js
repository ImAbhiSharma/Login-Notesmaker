const userModel = require("../models/userModel");
const  { isValid,isValidName, isValidTitle, isValidEmail, isValidPassword} = require("../utility/validations")
// Create User API


const createUser = async function (req, res) {
    try{
        let {fname, lname, title, email, password, validation} = req.body;

        if(Object.keys(req.body).length<1) 
        return res.status(400).send({ msg: "Insert Data : BAD REQUEST"})

        if (!isValid(fname)) {
            return res.status(400).send({msg:"Enter First Name"})
        }

        if (!isValidName(fname)) {
            return res.status(400).send({ msg: "fname only take alphabets"})
        }

        if(!isValid(lname)) {
            return res.status(400).send({msg: "Enter Last Name"})
        }

        if(!isValidName(lname)){
            return res.status(400).send({msg: "lname only take alphabets"})
        }

        if(!isValid(title)) {
            return res.status(400).send({msg: "create Title Name"})
        }

        if(!isValidTitle(title)) {
            return res.status(400).send({msg: "Enter title from this ['Mr', 'Mrs', 'Miss']"})
        }

        if(!isValid(email)) {
            return res.status(400).send({msg: "Enter Email-id"})
        }

        if(!isValidEmail(email)) {
            return res.status(400).send({msg: "Enter Valid Email"})
        }

        let checkEmail = await userModel.findOne({email:email})
        console.log(checkEmail)
        if(checkEmail) return res.status(400).send({msg: "Email Already Registered"})

        if(!isValid(password)) {
            return res.status(400).send({msg:"Create Password"})
        }

        if(!isValidPassword(password)) {
            return res.status(400).send({msg:"Minimum eight, atleast one letter and one number"})
        }

        // if(!isValidValidation(is_deleted)) {
        //     return res.status(400).send({message : 'Only in 0 or 1'})
        // }

        let savedData = await userModel.create(req.body);
        return res.status(200).send({status:true, data: savedData});
    }
    catch (err) {
        res.status(500).send({msg: err.message})
    }
};

module.exports.createUser = createUser
