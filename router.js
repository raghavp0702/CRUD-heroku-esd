const express = require("express");
const User = require("./model");
const router = express.Router();

router.get('/',async (req,res)=>{

    let data = await User.find();
    res.send(data);
});

router.get('/:id', async (req,res)=>{
    let id = req.params.id;
    let data = await User.findById({"_id":id});

    res.send(data);
})

router.post('/', async (req,res)=>{

    const user = req.body;
    let data = await User({
        name: user.name,
        age :user.age,
        city: user.city
    })
    data.save();
    res.send(data);
})

router.put('/',async (req,res)=>{
    const user = req.body;

    const data = await User.updateOne({_id: user._id}  , {$set:{
        name: user.name,
        city: user.city,
        age: user.age
    }});

    res.send(data);

});

router.delete("/user",async(req,res)=>{
    let user = req.body;

    const data = await User.findByIdAndDelete({
        _id: user_id,
    });

    res.send(data);
})


module.exports = router;