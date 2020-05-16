/**
 * The Server
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import startSessions from './sessions';
import connectDb from "./mongoose/mongoose";
import authRouter from "./routes";

const port = process.env.PORT || 8080;

const app = express();

startSessions(app);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../../build')));

app.use('/', authRouter);

// error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const startServer = () => {
    app.listen(port);
    console.log(`App started on port ${port}`)
};

// connect to DB
// re-connect if there was disconnect
// start the server
connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);