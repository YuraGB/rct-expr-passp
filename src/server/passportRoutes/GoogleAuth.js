/**
 * The passport behavior
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

import User from '../mongoose/AuthModel/User';

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/google/callback"
    }, async (accessToken, refreshToken, profile, cb) => {
        try {
            const user = JSON.stringify({name: profile.name.givenName});
            const searchResult = await User.find({name  : profile.name.givenName});

            if (!searchResult.length) {
                const user = new User({name: profile.name.givenName});

                user.save((err, user) => {
                    return cb(err, user);
                })
            } else {
                return cb(null, user)
            }
        } catch (e) {
           return cb(e, null);
        }
    }));
