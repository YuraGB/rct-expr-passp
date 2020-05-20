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
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";
import GitHubLogin from 'react-github-login';

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

    const responseHandler = (response) => {
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

                    <FacebookLogin
                        appId="931658597293519"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={()=>{}}
                        callback={responseHandler} />

                    <GoogleLogin
                        clientId="285223978491-v75v6224672gk10bl5tdvq6h2aiqa1o7.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseHandler}
                        onFailure={responseHandler}
                        cookiePolicy={'single_host_origin'}
                    />
                    <GitHubLogin clientId="1a7ea99130e78c239d68"
                                 onSuccess={responseHandler}
                                 onFailure={responseHandler}/>

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
            </section>
        </article>
    )
};

export default AuthFormComponent;