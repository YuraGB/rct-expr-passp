import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import passport from 'passport';

const port = process.env.PORT || 8080;
const redis = require('redis');
const session = require('express-session');

let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient();
const app = express();

const sessionMiddleware = session({
    store: new RedisStore({client: redisClient}),
    secret: config.redisStore.secret,
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 1000,
        httpOnly: false,
    },
});

app.use(cookieParser());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.initialize());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => console.log('is on'));