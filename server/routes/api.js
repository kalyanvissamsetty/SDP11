const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User =  require('../models/user');
const order10 =  require('../models/order');
const mobile = require('../models/mobiles');
const men =  require('../models/men');
const accessories = require('../models/accessories');
const laptops = require('../models/laptops');
const laptopbags = require('../models/laptopbags');
const mouses = require('../models/mouse');
const watches = require('../models/womenwatch');
const tops = require('../models/tops');
const sunglasses = require('../models/sunglasses');
const handbags = require('../models/handbags');
const jwt = require('jsonwebtoken');
const footwear = require('../models/footwear');
const bottomwear = require('../models/bottomwear');
const homeappliances = require('../models/homeappliances');
const furnitures = require('../models/furniture');
const sports = require('../models/sportsitems');
const telivi = require('../models/telivision');
const toys = require('../models/toys');
const teddy = require('../models/teddy');
const speaker = require('../models/speakers');
const headphones = require('../models/headphones');
const nodemailer = require('nodemailer');
const db = "mongodb+srv://kalyan:kalyan9b@cluster0.k66mq.mongodb.net/eventsdb?retryWrites=true&w=majority";
let email = String;

mongoose.set('useNewUrlParser', true);
mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true},err=>{
    if(err)
    {
        console.error('ERROR!'+ err)
    }
    else{
        console.log('Connected Succesfuly to MongoDB')
    }
})
router.get('/', (req,res) => {
    User.find({})
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {console.log(err)});
})

router.get('/order/:email',(req,res)=>{
  order10.find({email : req.params.email},(error , order)=>{
    if(error){
      console.log("error")
    }
    else{
      res.send(order);
    }
  })
  
 })

 router.delete('/deleteorder/:email/:name', (req,res,next) => {
  order10.findOneAndDelete({email:req.params.email, name:req.params.name})
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => next(err));
 })

 router.put('/orderCart/:id' , (req , res)=>{
  User.findByIdAndUpdate(req.params.id, {
    $push: { cart : req.body.cart}
  }, {new: true})
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => res.send(err));
});

router.put('/quantityset/:email/:name',(req,res) => {
  order10.findOneAndUpdate({email: req.params.email, name: req.params.name},{
    $set: {quantity : req.body.quantity}
  }, {new: true})
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => res.send(err));
});
router.put('/ordersplaced/:email',(req,res) => {
  User.findOneAndUpdate({email : req.params.email},{
    $set: {orders : req.body.orders}
  }, {new: true})
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => res.send(err));
});


 router.delete('/deleteallorders/:email', (req,res,next) => {
  order10.deleteMany({email:req.params.email})
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => next(err));
 })



 router.post('/order',(req,res)=>{
  let OrderData = req.body 
  let order = new order10(OrderData)

  order.save((error, obj ) => {
    if(error){
      console.log("error")
    }
    else{
      res.status(200).send(order)
    }
  })
  
}) 
router.post('/register' , (req , res)=>{
    let userData = req.body;
    email = userData.email;
   let user = new User(userData)
   user.save((error , registeredUser) =>{
       if(error)
           console.log("error")
       else{
        let payload = { subject: registeredUser._id }
        let token = jwt.sign(payload, 'secretkey')
         res.status(200).send({token, user})
       }
   });

});


router.put('/orderLaptop/:id' , (req , res)=>{
  User.findByIdAndUpdate(req.params.id, {
    $push: { laptopcart : req.body.laptopcart}
  }, {new: true})
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => res.send(err));
});

router.put('/ordermenfashion/:id' , (req , res)=>{
  User.findByIdAndUpdate(req.params.id, {
    $push: { menfashion : req.body.menfashion}
  }, {new: true})
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => res.send(err));
});

router.put('/removeall/:id', (req,res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body} ,{new: true})
  .then((resp) => {res.send(resp)})
  .catch((err) => {console.log(err)});
})


router.post('/login' , (req,res) => {
    let userData = req.body;
    email = userData.email;
    User.findOne({email : userData.email} , (error, user) =>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else
             if( user.password!= userData.password){
                 res.status(401).send('Invalid Password')
                 }
                 else{
                  let payload = { subject: user._id }
                  let token = jwt.sign(payload, 'secretkey')
                  res.status(200).send({token, user})
                 }
        }
    })
});

router.get('/user/:id',(req,res) => {
  User.findById(req.params.id)
  .then((resp) => {
    res.send(resp);
  })
  .catch((err) => {console.log(err)});
})


router.get('/mobiles', (req,res)=> {
    let mobiledata = req.body;
     //  mobilesdata =[];
    mobile.find({}, function(err,mobiles)
    {
      if(err)
      {
        console.log(err)
      }
      else{
        res.send(mobiles);
       }
    })
})
router.get('/users',(req,res)=>{
  let users = req.body
  User.find({},function(err,us)
  {
    if(err)
      {
        console.log(err)
      }
      else{
        res.send(us);
       }
  })
})
router.get('/menfashion', (req,res)=> {
    let menfashion = req.body;
    men.find({}, function(err,mens)
    {
      if(err)
      {
        console.log(err)
      }
      else{
        res.send(mens);
       }
    })
})
router.get('/accessories', (req,res)=> {
    let access = req.body;
    accessories.find({}, function(err,accessorie)
    {
      if(err)
      {
        console.log(err)
      }
      else{
        res.send(accessorie);
       }
    })
})
router.get('/laptops', (req,res)=> {
    let laptop = req.body;
    laptops.find({}, function(err,laptops_12)
    {
      if(err)
      {
        console.log(err)
      }
      else{
        res.send(laptops_12);
       }
    })
})
router.get('/laptopbags', (req,res)=> {
    let laptopbags1 = req.body;
    laptopbags.find({}, function(err,laptops_1)
    {
      if(err)
      {
        console.log(err)
      }
      else{
        res.send(laptops_1);
       }
    })
})

router.get('/mouses', (req,res)=> {
  let mouse_1 = req.body;
  mouses.find({}, function(err,mouse)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(mouse);
     }
  })
})
router.get('/watches', (req,res)=> {
  let watches1 = req.body;
  watches.find({}, function(err,watch)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(watch);
     }
  })
})

router.get('/tops', (req,res)=> {
  let tops1 = req.body;
  tops.find({}, function(err,top)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(top);
     }
  })
})
router.get('/sunglasses', (req,res)=> {
  let glasses = req.body;
  sunglasses.find({}, function(err,sun)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(sun);
     }
  })
})
router.get('/handbags', (req,res)=> {
  let bags12 = req.body;
  handbags.find({}, function(err,handbag)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(handbag);
     }
  })
})

router.get('/footwear', (req,res)=> {
  let waer = req.body;
  footwear.find({}, function(err,wear)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(wear);
     }
  })
})

router.get('/bottomwear', (req,res)=> {
  let bottom = req.body;
  bottomwear.find({}, function(err,bowe)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(bowe);
     }
  })
})

router.get('/homeappliances', (req,res)=> {
  let homeappli = req.body;
  homeappliances.find({}, function(err,appli)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(appli);
     }
  })
})
router.get('/furniture', (req,res)=> {
  let furn = req.body;
  furnitures.find({}, function(err,furni)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(furni);
     }
  })
})

router.get('/sportsitems', (req,res)=> {
  let sp = req.body;
  sports.find({}, function(err,items)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(items);
     }
  })
})

router.get('/telivisions', (req,res)=> {
  let te = req.body;
  telivi.find({}, function(err,tel)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(tel);
     }
  })
})

router.get('/toys', (req,res)=> {
  let toy1 = req.body;
  toys.find({}, function(err,te)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(te);
     }
  })
})

router.get('/teddy', (req,res)=> {
  let ted = req.body;
  teddy.find({}, function(err,tel1)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(tel1);
     }
  })
})

router.get('/speakers', (req,res)=> {
  let te = req.body;
  speaker.find({}, function(err,tel5)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(tel5);
     }
  })
})
router.get('/headphones', (req,res)=> {
  let te8 = req.body;
  headphones.find({}, function(err,tell)
  {
    if(err)
    {
      console.log(err)
    }
    else{
      res.send(tell);
     }
  })
})





module.exports  = router


// removeall

// const object= {
//   id: this.auth.user._id,
//   cart: [],
//   laptopcart: []
// };
// this.auth.RovemeAll(object);