/**
 * The Auth component
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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
    const ref = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        axios.post('http://localhost:8080/register')
    };

    return (
        <article>
            <section className={authStyles.Auth}>
                <Typography variant="h4" align='center' >
                    Login in
                </Typography>
                <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
                    <TextField id="user-auth" label="User" autoFocus={true} placeholder={'email or nick name'}/>
                    <TextField id="password-auth" label="Password" placeholder={'password'} />
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