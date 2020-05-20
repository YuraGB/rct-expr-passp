/**
 * The Auth component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useForm } from "react-hook-form";

import authStyles from './Auth.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

/**
 * AuthFormComponent
 *
 * @param {object} props
 * @return {*} JSXComponent
 */
const AuthFormComponent = (props) => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        axios.get('http://localhost:8080/register', data)
    };

    const responseFacebook = (response) => {
        console.log(response);
    };

    return (
        <article>
            <section className={authStyles.Auth}>
                <Typography variant="h4" align='center' >
                    Login in
                </Typography>
                <form
                    className={classes.root}
                    autoComplete="off"
                    action='http://localhost:8080/register'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        id="user-auth"
                        name='name'
                        inputRef={register({required: true})}
                        label="User"
                        autoFocus={true}
                        placeholder={'email or nick name'}
                    />
                    {errors.name && 'The name is required.'}
                    <TextField
                        id="password-auth"
                        name='pass'
                        inputRef={register({required: true})}
                        label="Password"
                        placeholder={'password'}
                    />
                    {errors.pass && 'The name is required.'}
                  <div className="actions">
                        <Button
                            size="small"
                            variant="outlined"
                            type='submit'
                            color={'primary'}>
                            Submit
                        </Button>
                    </div>
                </form>
                <a href="/google">google</a>
                <a href="/facebook">facebook</a>
            </section>
        </article>
    )
};

export default AuthFormComponent;