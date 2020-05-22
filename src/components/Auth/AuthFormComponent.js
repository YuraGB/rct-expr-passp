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
import { LinkedIn } from 'react-linkedin-login-oauth2';

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
                        appId={process.env.FACEBOOK_APP_ID}
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={()=>{}}
                        callback={responseHandler} />

                    <GoogleLogin
                        clientId={process.env.FACEBOOK_APP_ID}                 buttonText="Login"
                        onSuccess={responseHandler}
                        onFailure={responseHandler}
                        cookiePolicy={'single_host_origin'}
                    />

                    <GitHubLogin
                        clientId={process.env.GITHUB_APP_ID}
                        redirectUri=""
                        onSuccess={responseHandler}
                        onFailure={responseHandler}
                    />

                    <LinkedIn
                        clientId={process.env.LINKEDIN_APP_ID}
                        onFailure={responseHandler}
                        onSuccess={responseHandler}
                        response_type='code'
                        scope="r_liteprofile"
                        redirectUri="http://localhost:8080/"
                    />

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