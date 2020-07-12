var express = require('express');
var router = express.Router();

router.post('/create',(req,res,next) => {
   res.status(200).json({msg : 'Post request is working' });
})

router.get('/read',(req,res,next) => {
   res.status(200).json({msg : 'Get request is working' });
})

router.put('/update',(req,res,next) => {
   res.status(200).json({msg : 'Put request is working' });
})

router.delete('/delete/:id',(req,res,next) => {
   res.status(200).json({msg : 'Delete request is working' });
})

module.exports = router;