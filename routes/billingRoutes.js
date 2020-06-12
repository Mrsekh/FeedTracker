
const key = require('../config/key');

// const User = require('../models/user');
const stripe = require('stripe')(key.STRIPE_SECRETE_KEY);

const requestLogin = require('../middlewares/requestLogin');
module.exports =  app => {

   
  app.post('/api/stripe',requestLogin, async (req,res) => {
    
   const payment = await  stripe.charges.create({
        amount:500,
        currency:'inr',
        description: '$5 for 5 credits',
        source:req.body.id
     })
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
  })    
} 