const userModel = require("../models/userModel")


// Update User Details

const updateUser = async function (req, res) {
    try {
        const { fname, lname, title, password, email } = req.body.data;
        
        let UpdatedDetails = await userModel.findOneAndUpdate({ email: email }, { $set: { fname: fname, lname: lname, title: title, password: password } }, { new: true });
        return res.status(200).send({ msg: "Updated Successfully", res: UpdatedDetails });

    } catch (error) {
        res.status(500).send({ msg: error });
    }
}



// Deactivate/Activate User Account


const deactivateUser = async function (req, res ) {
    try {
        const email = req.body.data.email;
        let DeactivatedUserDetails = await userModel.findOneAndUpdate ({email: email}, [{ $set: { is_deactivated: { $not: "$is_deactivated" }}}],{new:true});
        console.log(DeactivatedUserDetails);
        return res.status(200).send({msg: "Deactivated Successfully", res: DeactivatedUserDetails});

    }
    catch(err){
        console.log(err);
        return res.status(500).send ({msg: err})
    }
}



// Delete User Account Permanently from Database


const permanentlyDeleteUser = async function (req, res ) {
    try {
         
        const email = req.body.data.email;
        let DeletedUserDetails = await userModel.deleteOne({email: email}, {new:true});
        console.log(DeletedUserDetails);
        return res.status(200).send({msg: "Permanently Deleted the account Successfully!", res: DeletedUserDetails});

    }
    catch(err){
        console.log(err);
        return res.status(500).send ({msg: err})
    }
}

// Get User Details

// const getUser = async function (req, res ) {
//     try {
//         let details = await userModel.findOne({email: email})
//         res.status(200).send({status: "User Details", data: checlogin});

//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send ({msg: err})
//     }
// }



// Exporting Modules

module.exports.updateUser = updateUser;
module.exports.deactivateUser = deactivateUser;
module.exports.permanentlyDeleteUser = permanentlyDeleteUser;




