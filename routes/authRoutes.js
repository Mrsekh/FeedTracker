// const app = require('../app');
const passport = require('passport');

module.exports = app => {
     
    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {


        // Added temp solution for redirection issue
        if(process.env.NODE_ENV === 'production') {
            res.redirect('/surveys');
        }else {
            res.redirect('http://localhost:3000/surveys');
        }
      
    });
    app.get('/api/current-user', (req,res) => {
        res.send(req.user);
    });

    app.get('/api/logout',(req,res) => {
        req.logout();
        res.redirect('/');
    });


}
