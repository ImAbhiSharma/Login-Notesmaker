const bodyparser=require('body-parser')
const mongoose = require("mongoose");
const express = require("express");
const path = require('path');
const app = express();
app.use(bodyparser.json())


const frontend_route = require('./routes/frontend.js');
const backend_route = require('./routes/backend.js');


app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://abhi25252525:Reactjs@cluster0.whjnfaa.mongodb.net/chat_app", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




// app.use("/create_user",userController.createUser)
// app.use("/check_user", checkUser)
// app.put("/update_user", updateUser)
// app.delete("/deactivateUser", deactivateUser)
// app.delete("/deleteUser", permanentlyDeleteUser)


app.use('/', frontend_route);
app.use('/', backend_route);

app.listen(3000,()=>{
    console.log("Server running");
})