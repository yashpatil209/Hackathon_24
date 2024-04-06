const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const Listing = require("../models/listing");
const nodemailer = require('nodemailer');
const wrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");


router.get("/about" , (req , res)=>{
    res.render("Pages/about.ejs");
})

router.get("/contactUs" , (req , res)=>{
    res.render("Pages/contact.ejs");
})

router.get("/dash/:id" , async(req , res)=>{
    let {id} = req.params;
    const user = await User.findById(id).populate('products');
    
    res.render("Pages/farmer.ejs" , {user});
})

router.delete("/dash/:id/deleteitem/:proId" , async(req , res)=>{
    let {id , proId} = req.params;
    await User.findByIdAndUpdate(id , {$pull : {products : proId}});
    await Listing.findByIdAndDelete(proId);
    req.flash("success" , "Item deleted!");
    
    res.redirect(`/dash/${id}`);
})


router.get("/signup"  , (req , res)=>{
    res.render("user/signup.ejs")
})

router.post("/signup" , async(req , res)=>{
    let {username , email , name ,role , phone ,password , state , dist} = req.body;
    dist = dist.toLowerCase();
    const newUser = new User({email ,username ,name  , phone , role , state , dist});
    const user = await User.register(newUser , password);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yashkumarpatil2004@gmail.com',
          pass: 'ifbi emmj dcrg sjco'
        }
    });
      
    var mailOptions = {
        from: 'yashkumarpatil2004@gmail.com',
        to:email,
        subject: 'registration',
        text: `You are successfully registered to NewLife Hospital! Your username : ${username} and password : ${password} by using this you access your dashboard.`,
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        }
    });
    req.flash("success" , "You are successfully registered!");
    res.redirect("/signup");
})


router.get("/login" , (req , res)=>{
    res.render("user/login.ejs");
})

router.post("/login" , passport.authenticate("local" ,{failureRedirect : '/login', failureFlash:true}), (req , res)=>{
    req.flash("success" , "You are successfully Login!");
    res.redirect("/");
});

router.get("/logout" , (req , res)=>{
    req.logout((err) =>{
        if(err) {
            return next(err);
        }
        req.flash("success" , "you are logout");
        res.redirect("/");
    })
});


module.exports = router;