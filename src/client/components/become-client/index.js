import React, { useContext, useState } from 'react';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import UserContext from '../../context';

// templates
import Signin from '../signin';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const BecomeClient = (props) => {
    const classes = useStyles();
    const userService = useContext(UserContext);
    // console.log(userService)

    const [username, setUsername] = useState('');//anna
    const [email, setEmail] = useState('');//anna@gmail.com
    const [password, setPassword] = useState('');//12345678
    const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
    const role = 'user';

    const handleUsername = e => {
        setUsername(e.target.value);
    };

    const handleEmail = e => {
        setEmail(e.target.value)
    };

    const handlePassword = e => {
        setPassword(e.target.value)
    };

    const createUser = async () => {
        if (!username || !password || !password) {
            console.log('email or password undefined');
            return;
        }

        const userData = {
            username: username,
            email: email,
            password: password,
            roles: [role]
        };

        const response = await userService.signup(userData);
        console.log(response);

        setSubmittedSuccessfully(true);
    };

    if (submittedSuccessfully) return (
        <div className="submittedSuccessfully-wrapper">
            <h1 className="submittedSuccessfully-headerText">You were successfully submitted to banking &#127881;</h1>
            <Signin />
        </div>
    );

    return (
        <div className="becomeClient-wrapper">
        <div className="becomeClient-square">
            <h2 className="becomeClient-headerText">Become a client</h2>
            <form className="becomeClient-form">
                <label htmlFor="" className="becomeClient-formName">
                    What to call you:
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={username} onChange={handleUsername}/>
                   
                </label>
                <label htmlFor="" className="becomeClient-formEmail">
                    Enter your email:
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={handleEmail}/>
                    
                </label>
                <label htmlFor="" className="becomeClient-formPassword">
                    Create password:
                    <TextField id="outlined-password-input" label="Password" type={password} autoComplete="current-password" variant="outlined" value={password} onChange={handlePassword}/>
                    
                </label>
                <Button 
                variant="contained"
                color="primary"
                className={classes.button}
                type="button" onClick={createUser}
                style={{ backgroundColor: "#00886C",margin:"5px",color:"#DCEEE9",borderRadius:"20px",minWidth:"165px",fontFamily: "'Quicksand', sans-serif"}}> 
                Next
        </Button> 
                
            </form>
        </div>
        </div>
    );
};

export default BecomeClient;