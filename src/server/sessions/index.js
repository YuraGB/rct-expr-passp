/**
 * The Session configurations
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import config from "../config";
import redis from 'redis';
import session from 'express-session';

const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();

redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
});

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

export default (app) => {
    app.use(sessionMiddleware)
};
