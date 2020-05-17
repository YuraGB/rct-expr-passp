/**
 * The passport behavior
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

import User from '../mongoose/AuthModel/User';

// used to serialize the user for the session
passport.serializeUser(function(user, done) {

    done(null, user.id);
    // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {

});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/google/callback"
    }, function(accessToken, refreshToken, profile, cb) {
       const user = new User({name: profile.name.givenName});
        user.save((err, user) => {
            return  cb(err, user);
        })
    }));