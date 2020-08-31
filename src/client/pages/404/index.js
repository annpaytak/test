import React from 'react';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }  from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <div style={{height:"100%", display:"flex",flexDirection:"row", justifyContent:"space-around",alignItems:"center",flexWrap:"wrap",marginBottom:"50%"}}>
            <p style={{ color: "#00886C", fontSize: "1000%",margin:"0" }}>404</p>
            <div>
                <p style={{ color: "#00886C", fontSize: "600%" ,margin:"0"}}>Oops!</p>
                <p style={{ color: "#2D4954", fontSize: "200%"}}>Look like you got lost</p>
                <p style={{ color: "#2D4954", fontSize: "150%",marginTop:"0"}}>Sorry, we can`t find the page<br/> you were looking for.</p>
               <Button component={Link} to="/"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<ArrowForwardIcon />}
                    style={{ backgroundColor: "#00886C",margin:"0",color:"#DCEEE9",fontFamily: "'Quicksand', sans-serif"}}> 
                    Go Home
            </Button> 
            </div>
        </div>
    );
};

export default NotFoundPage;
