const updateModule = require("../models/userModel")


const updateUser = async function (req, res) {
    try {
        const { Fname, Lname, title, password, email } = req.body.data;
        // agar koi field nahi de raha h update karne ke liye to respone bhej do please enter update fields
        let UpdatedDetails = await updateModule.findOneAndUpdate({ email: email }, { $set: { Fname: Fname, Lname: Lname, title: title, password: password } }, { new: true });
        return res.status(200).send({ msg: "Updated Successfully", res: UpdatedDetails });

    } catch (error) {
        res.status(500).send({ msg: error });
    }
}

module.exports.updateUser = updateUser;
