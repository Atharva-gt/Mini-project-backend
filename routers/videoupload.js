const router = require('express').Router();
const Model = require('../models/videomodel');


router.post('/add', (req, res) => {

    new Model(req.body).save()
        .then(() => {
            console.log('user data added');
            res.status(200).json({ message: 'success' })
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })

})
module.exports = router;