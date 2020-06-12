const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/key');
const bodyParser = require('body-parser');

const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
require('./models/user');
require('./services/passport');

// middleware
app.use(bodyParser.json());

// passing the cookie session
app.use(cookieSession({
    maxAge:30 * 24 * 60 * 60 * 1000,
    keys:[key.COOKIE_KEY]
})
);

app.use(passport.initialize());
app.use(passport.session());

// routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


mongoose.connect(key.MONGO_URL);

const PORT = process.env.PORT ||  5000;


app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
})

if(process.env.NODE_ENV === 'production') {
    // express will serve production asset 
    app.use(express.static('client/build'));

    // express will server index.html if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });


}

module.exports = app;   