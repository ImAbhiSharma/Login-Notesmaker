const express = require("express");
const router = express.Router();
const host = 'http://localhost:3000';



// router.get('/index', function (req, res) {
//     res.render('index', {
//       title: 'Home',
//     });
//   });

router.get('/', function (req, res) {
    res.render('login', {
        title: 'Login',
    });
});

router.get('/signup', function (req, res) {
        res.render('signup', {
            title: 'Signup',
        });
}
)



module.exports = router;