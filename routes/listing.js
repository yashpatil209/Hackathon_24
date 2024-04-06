const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Item = require("../models/listing");
const multer = require("multer");
const {storage} = require("../cloudConfig");
const Market = require("../models/market");
const upload = multer({storage});
const wrapAsync = require("../utils/WrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");


router.get("/:id/postItem"  , (req , res)=>{
    let {id} = req.params;
    res.render("listing/postItem.ejs" , {id});
})

router.post("/:id/postItem"  , upload.single("list[image]") ,async (req , res)=>{
    let {id} = req.params;
    let listing = new Item(req.body.list);
    let user = await User.findById(id);
    let url = req.file.path;
    listing.image = url;
    listing.owner = id;
    user.products.push(listing._id);
    
    await listing.save();
    await user.save();

    res.redirect(`/dash/${id}`);
})

router.get("/items" , async(req , res)=>{
    const  listings = await Item.find({});
    res.render("listing/items.ejs" , {listings});
})

router.get("/hotels" , async(req , res)=>{
    const  listings = await User.find({role : "hotel"});
    res.render("Pages/hotels.ejs" , {listings});
})

router.get("/brokers" , async(req , res)=>{
    const  listings = await User.find({role : "broker"});
    res.render("Pages/broker.ejs" , {listings});
})


router.get("/:id/information" , async(req , res)=>{
    let {id} = req.params;
    let user = await User.findById(id);
    res.render("listing/info.ejs" , {user});
})

module.exports = router;