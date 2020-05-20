import FacebookStrategy from 'passport-facebook';
import passport from 'passport';

import User from '../mongoose/AuthModel/User';

passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:8080/auth/facebook/callback"
    },
    async (
        accessToken, refreshToken, profile, cb) => {
        try {
            const user = JSON.stringify({name: profile.displayName});
            const searchResult = await User.find({name : profile.displayName});

            if (!searchResult.length) {
                const user = new User({name: profile.displayName});

                user.save((err, user) => {
                    return cb(err, user);
                })
            } else {
                return cb(null, user)
            }
        } catch (e) {
            return cb(e, null);
        }
    }
));
