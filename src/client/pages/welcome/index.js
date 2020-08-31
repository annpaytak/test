import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }  from 'react-router-dom';
  import Button from '@material-ui/core/Button';
  import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));


const WelcomePage = () => {

    const classes = useStyles();

    return (
        <div className="welcomePage-container">
            <h1 className="welcomeText">Welcome to banking!</h1>

            <div className="tagline-container">
            
            <p className="welcomeLogo">CityBank</p>
           
            <p className="tagline">- more than bank.</p>
            </div>

            <div className="button-container">
             <Button component={Link} to="/becomeclient"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{ backgroundColor: "#00886C",margin:"5px",color:"#DCEEE9",borderRadius:"20px",minWidth:"165px",fontFamily: "'Quicksand', sans-serif"}}> 
                    Become a Client
            </Button> 
            <Button component={Link} to="/signin"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    style={{ backgroundColor: "#2D4954",margin:"5px",color:"#DCEEE9",borderRadius:"20px",minWidth:"87px",fontFamily: "'Quicksand', sans-serif"}}> 
                    Sign In
            </Button> 
            </div>

        </div>
    );
};

export default WelcomePage;
