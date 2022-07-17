const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    // res.send("Hello there cyber welcome to node express")
    res.render('indexx')
})
module.exports = router