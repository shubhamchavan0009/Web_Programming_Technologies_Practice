var express = require('express');
var router = express.Router();
const User = require('../models/user')


/* http://localhost:3000/user/submit */
router.post('/submit', (req, res) => {
    // let obj={username:'shubham',email:'abc@gmail.com',mobile:123456}
    console.log(req.body);
    let obj = { username: req.body.Name, email: req.body.Email, mobile: req.body.Mobile }
    const u1 = new User(obj)

    u1.save((err) => {
        if (err) res.sendStatus(400) // ===res.status(400).send('Bad Request)
        res.send("Data inserted successfully")
        // res.status(200).send('data inserted successfully')
        // res.sendStatus(200)  // ===res.status(200).send('ok)
    })
});

/* http://localhost:3000/user */
router.get('/', (req, res) => {
    User.find((err, data) => {
        if (err) throw err
        res.send(data)
    })
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err) res.send("Error")
        res.send(data)
    })
});

router.put('/update/:id', (req, res, next) => {
    console.log(req.body);
    User.findByIdAndUpdate(req.params.id, { $set: { username: req.body.Name, email: req.body.Email, mobile: req.body.Mobile } }, (err, data) => {
        if (err) return res.send('not updated')
        else {
            res.send("Data updated Successfully")
        }

    })
});


router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err) => {
        if (err) res.send('not deleted')
        else
            res.send("data deleted")
    })
});

module.exports = router;
