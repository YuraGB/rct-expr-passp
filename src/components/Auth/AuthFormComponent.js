import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import authStyles from './Auth.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

const AuthFormComponent = (props) => {
    const classes = useStyles();

    return (
        <article>
            <section className={authStyles.Auth}>
                <Typography variant="h4" align='center' >
                    Login in
                </Typography>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="user-auth" label="User" autoFocus={true} placeholder={'email or nick name'}/>
                    <TextField id="password-auth" label="Password" placeholder={'password'} />
                    <div className="actions">
                        <Button
                            size="small"
                            variant="outlined"
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