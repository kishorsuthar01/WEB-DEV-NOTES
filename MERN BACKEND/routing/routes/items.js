const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.send('this is a GET item');
});

router.post('/about',(req,res)=>{
    res.send('this is a POST item');
});

router.put('/about/:id',(req,res)=>{
    res.json({x:3,y:3});
});

router.delete('/about/:id',(req,res)=>{
    res.send('this is a DELETE item');
});

module.exports = router
