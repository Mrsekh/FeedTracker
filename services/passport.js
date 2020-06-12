const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const proxy = require('express-http-proxy');
const keys = require('../config/key');
const mongoose = require('mongoose');
const User = mongoose.model('users');

// serialize the user
passport.serializeUser((user, done) => {
	// user id from DB
	done(null, user.id);
});

// deserializeUser
passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.GOOGLE_CLIENT_ID,
			clientSecret: keys.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			
			const existingUser = await User.findOne({ 
				googleId: profile.id,
				name:profile.displayName
			});
			if (existingUser) {
			 return	done(null, existingUser);
			} 
			const user = await new User({ 
				googleId: profile.id,
				name:profile.displayName
			 }).save();
			
			done(null, user);
		}
	)
);
