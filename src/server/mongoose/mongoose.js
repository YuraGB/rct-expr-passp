/**
 * The mongoose configurations
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import mongoose from 'mongoose';
import bluebird from 'bluebird';

/**
 * Db connection
 * use mongoose
 */
export default () => {
    mongoose.Promise = bluebird;

    const options =  {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true
    };

    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-r3zwb.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
        options
    );

    return mongoose.connection;
};
