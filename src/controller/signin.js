const signinModel = require("../models/userModel.js")


const checkUser = async function (req, res) {

    try{

        let {email, password} = req.body;
        // let data = req.query

        if(Object.keys(req.body).length<1) 
        return res.status(400).send({ msg: "Insert Data : BAD REQUEST"})

        if(!email) return res.status(400).send({message : 'please enter email'})
        if(!password) return res.status(400).send({message : 'please enter password'})
        
        

        let checklogin = await signinModel.findOne({email:email, password:password})

       

        if(checklogin) return res.send("logged-in")
        else res.send("not a valid user")

        
    }
    

    catch (err) {
        res.status(500).send({msg: err.message})
    }
};

module.exports.checkUser = checkUser