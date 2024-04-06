if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const path = require("path");
const ejsMate = require("ejs-mate");
const passport = require("passport");
const localstratergy = require("passport-local");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError.js");

const users = require("./routes/user.js");
const listing = require("./routes/listing.js");
const market = require("./routes/market.js");

const User = require("./models/user");


// connection with mongodb
const MONGO_URL = process.env.MONGO_URL;
const dbUrl = process.env.ATLASDB_URL;

main().then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const store = MongoStore.create({
    mongoUrl : MONGO_URL,
    crypto : {
        secret : process.env.SECRETE,
    },
    touchAfter : 24 * 3600,
});

store.on("error" , ()=>{
    console.log("ERROR in MONGO session store" , err);
})


const sessionOptions = {
    store,
    secret : process.env.SECRETE,
    resave : false ,
    saveUninitialized : true ,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true ,
    }
};


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req , res , next )=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})


app.use("/" , users);
app.use("/farmer" , listing);
app.use("/farmer/market" , market);

app.get("/" , (req , res)=>{
    res.render("Pages/home.ejs");
})

// app.get("/demouser" , async(req , res)=>{
//         let fakeUser = new User({
//             email : "yashkumarpatil@gmail.com",
//             username : "yashpatil",
//             name : "Yashkumar Patil",
//             role: "admin",
//             state : "Maharastra",
//             dist : "dhule",
//             phone : 7219820174,
//         });
    
//         let registerUser = await User.register(fakeUser , "yash2004");
//         res.send(registerUser);
// })

app.all("*" ,(req ,res , next)=>{
    next(new ExpressError(404 , "page not found"));
});

app.use((err, req, res, next) =>{
    let {statusCode = 500, message = "something went wrong"} = err;
    res.render("error.ejs" ,{message});
})



app.listen(8080 , ()=>{
    console.log("app listen on port 800");
})