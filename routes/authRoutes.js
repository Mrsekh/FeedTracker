// const app = require('../app');
const passport = require('passport');

module.exports = app => {
     
    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
        // res.redirect('/surveys');
       res.redirect('http://localhost:3000/surveys');
    });
    app.get('/api/current-user', (req,res) => {
        res.send(req.user);
    });

    app.get('/api/logout',(req,res) => {
        req.logout();
        res.redirect('/surveys/new');
    });


}
