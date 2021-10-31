const Model = require('../models/userModel');
const router = require('express').Router();

router.post('/add', (req, res) => {

    const data = req.body;
    console.log(data);

    new Model(data).save()
        .then(() => {
            console.log('data saved');
            res.status(200).json({ message: 'success' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);

        })
})
router.post('/login', (req, res) => {

    const data = req.body;
    console.log(data);
  
     Model.findOne({email:data.email})
        .then((db_data) => {
            if(db_data)
            {
                if(data.password == db_data.password)
                {
                    console.log('Login Success');
                    res.status(200).json(db_data);
                    return
                }
                else{
                    console.log('User Not Found');
                    res.status(300).json({ message: 'error' });
                }
            }
            else{
                console.log('User Not Found');
                res.status(300).json({ message: 'error' });
            }
          
        }
        )
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
  
        })
  })
module.exports = router;