import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import UserContext from '../../context';



const Signin = () => {
    const userService = useContext(UserContext);

    let redirectTimeout;
    // const [redirect, setRedirect] = useState(false);

    const [username, setUsername] = useState('');//anna
    const [password, setPassword] = useState('');//12345678
    // const [loggedinSuccessfully, setloggedinSuccessfully] = useState(false);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        const user = userService.getCurrentUser();
        console.log(user)
        if(!user) {
            return loginBlock();
        }

        if(user && !userData)
            setUserData(user);
        // userService.userChange.subscribe(async userData => {
        //     if (!userData) return (
        //         <div className="signin-wrapper">
        //             <div className="signin-square">
        //                 <h1 className="signin-headerText">Please, Sign In</h1>
        //                 <form className="signin-form">
        //                     <TextField error id="outlined-error" label="Name" variant="outlined" value={username} onChange={handleUsername} />
        //                     <TextField error id="outlined-error-helper-text" helperText="Incorrect entry." label="Password" type="password" autoComplete="current-password" variant="outlined" value={password} onChange={handlePassword} />
        //                     <Button
        //                         variant="contained"
        //                         color="primary"
        //                         type="button" onClick={loginUser}
        //                         style={{ backgroundColor: "#2d4954", margin: "5px", color: "#DCEEE9", borderRadius: "20px", minWidth: "165px", fontFamily: "'Quicksand', sans-serif" }}>
        //                         Sign In
        //             </Button>
        //                 </form>
        //             </div>
        //         </div>
        //     );
        //     console.log('in subscr')
        //     setUserData(userData);
        // });
        // if (!user) return loginBlock();
    }, [userData]);//

    const loginBlock = () => {
        return (<div className="signin-wrapper">
            <div className="signin-square">
                <h1 className="signin-headerText">Please, Sign In</h1>
                <form className="signin-form">
                    <TextField error id="outlined-error" label="Name" variant="outlined" value={username} onChange={handleUsername} />
                    <TextField error id="outlined-error-helper-text" helperText="Incorrect entry." label="Password" type="password" autoComplete="current-password" variant="outlined" value={password} onChange={handlePassword} />
                    <Button
                        variant="contained"
                        color="primary"
                        type="button" onClick={loginUser}
                        style={{ backgroundColor: "#2d4954", margin: "5px", color: "#DCEEE9", borderRadius: "20px", minWidth: "165px", fontFamily: "'Quicksand', sans-serif" }}>
                        Sign In
                    </Button>
                </form>
            </div>
        </div>)
    }

    const handleUsername = e => { setUsername(e.target.value) };
    const handlePassword = e => { setPassword(e.target.value) };
    useEffect(() => () => { clearTimeout(redirectTimeout) });


    // const loginUser = async () => {
    //     const userData = {
    //         username: username,
    //         password: password,
    //     }
    //
    //     const response = await userService.signin(userData);
    //     if (response.status !== 200) {
    //         setError(true);
    //         return;
    //     }
    //     setUserData(response.data);
    // }


    const loginUser = async () => {
        // if (!username || !password) {
        //     console.log('email or password undefined');
        //     return;
        // }

        const userData = {
            username: username,
            password: password,
        }

        console.log(username,password);
        const response = await userService.signin(userData);
        console.log(response.status);
        if (response.status === 401) {
        //     console.log('error')
            setError(true);
            return;
        }
        //
        const user = response.data;
        setUserData(user);

        // redirectTimeout = setTimeout(() => setRedirect(true), 5000);
        // setloggedinSuccessfully(true);
    }

    // if (redirect) return <Redirect to="/" />;

    if (userData)
        return (
            <div className="signin-welcomeWrapper">
                <h1 className="signin-welcomeText">Welcome to banking ,{userData.username} &#128075;.</h1>
                <Button component={Link} to="/"
                    variant="contained"
                    color="primary"
                    type="button"
                    style={{ backgroundColor: "#2d4954", margin: "5px", color: "#DCEEE9", borderRadius: "20px", minWidth: "165px", width: "200px", fontFamily: "'Quicksand', sans-serif" }}>
                    Home
                </Button>
            </div>
        )
    if (error) return (
        <div className="signin-wrapper">
            <div className="signin-square">
                <h1 className="signin-headerText">Please, Sign In</h1>
                <form className="signin-form">
                    <TextField error id="outlined-error" label="Name" variant="outlined" value={username} onChange={handleUsername} />
                    <TextField error id="outlined-error-helper-text" helperText="Incorrect entry." label="Password" type="password" autoComplete="current-password" variant="outlined" value={password} onChange={handlePassword} />
                    <Button
                        variant="contained"
                        color="primary"
                        type="button" onClick={loginUser}
                        style={{ backgroundColor: "#2d4954", margin: "5px", color: "#DCEEE9", borderRadius: "20px", minWidth: "165px", fontFamily: "'Quicksand', sans-serif" }}>
                        Sign In
                </Button>
                </form>
            </div>
        </div>
    )
    return (
        <div className="signin-wrapper">
            <div className="signin-square">
                <h1 className="signin-headerText">Please, Sign In</h1>
                <form className="signin-form">
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={username} onChange={handleUsername} />
                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" value={password} onChange={handlePassword} />
                    <Button
                        variant="contained"
                        color="primary"
                        type="button" onClick={loginUser}
                        style={{ backgroundColor: "#2d4954", margin: "5px", color: "#DCEEE9", borderRadius: "20px", minWidth: "165px", fontFamily: "'Quicksand', sans-serif" }}>
                        Sign In
                </Button>
                </form>
            </div>
        </div>
    );

};

export default Signin;

