const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Market = require("../models/market");
const wrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

router.get("/" ,wrapAsync( async(req , res)=>{
    let listings = await User.find({role : "market"});
    res.render("market/listing.ejs" , {listings});
}));

router.get("/:id" ,wrapAsync( async(req , res)=>{
    let {id} = req.params;
    let user = await User.findById(id);
    if(!user.market){
        res.render("market/market.ejs");
    }else{
        res.redirect(`/farmer/market/${id}/marketprices`);
    }
}));

router.post("/:id" ,wrapAsync( async(req , res)=>{
    let {id} = req.params;
    let prices = new Market(req.body.market);
    let user = await User.findById(id);

    user.market = prices._id;
    prices.owner = id;

    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    today = today.toLocaleDateString();

    await user.save();
    await prices.save();
    
    res.render("market/table.ejs" , {prices ,user , today});
}))

router.get("/:id/marketprices" , wrapAsync(async(req , res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    const prices = await Market.findById(user.market);
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    today = today.toLocaleDateString();
    if(prices){
        res.render("market/table.ejs" , {prices , user , today});
    }else{
        req.flash("error" , "Prices are not uploaded yet!");
        res.redirect("/farmer/market");
    }
}))


router.get("/:id/updatelisting" , wrapAsync( async(req , res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    const price = await Market.findById(user.market);
    res.render("market/edit.ejs" , {price , user});
}));

router.put("/:id/updatelisting" , wrapAsync( async(req , res)=>{
    let {id} = req.params;
    const user = await User.findById(id);
    let listing = await Market.findByIdAndUpdate(user.market ,{...req.body.market});

    req.flash("success" , "Successfuly update price");
    res.redirect(`/farmer/market/${id}/marketprices`);
}));

module.exports = router;