const express = require('express')
const router = express.Router()

const auth=function(req,res,next){
    console.log('this is a authontication vala middleware');
    req.user={userid:1,role:"student"}

    if(req.user){
        next();
    }else{
        res.json({
            success:false,
            message:'this is a auth middleware'
        })
    }
}

const isStudent=function(req,res,next){
    console.log("this is a student vala middleware");
    if(req.user.role === "student"){
        next();
    }else{
        res.json({
            success:false,
            message:"this is only student middleware"
        })
    }
}

const isAdmin=function(req,res,next){
    console.log("this is a admin vala middleware");
    if(req.user.role === "admin"){
        next();
    }else{
        res.json({
            success:false,
            message:"this is only admin middleware"
        })
    }
}


router.get('/student',auth,isStudent,(req,res)=>{
    console.log("this is student router");
    res.send('student spicific router')
})
router.get('/admin',auth,isAdmin,(req,res)=>{
    console.log("this is admin router");
    res.send('student admin router')
})
module.exports = router
