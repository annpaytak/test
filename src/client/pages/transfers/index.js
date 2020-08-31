import React from 'react';


import IconButton from '@material-ui/core/IconButton';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

const TransfersPage = () => {
    return (
        <div className="transfersWrapper">
            <div className="transfers-squareToCard">
                <IconButton component={Link} to="/to-card" style={{ color: "#8dcfb3", width: "35%", height: "55%" }} aria-label="add to shopping cart">
                    <ArrowForwardIcon style={{ width: "70%", height: "70%" }} />
                </IconButton>
                <h2 className="transfers-labelTextToCard">Transfers to card</h2>
            </div>
            <div className="transfers-squareTopUpCard">
                <IconButton component={Link} to="/top-up-card" style={{ color: "#2d4954", width: "35%", height: "55%" }} aria-label="add to shopping cart">
                    <CreditCardIcon style={{ width: "70%", height: "70%" }} />  
                </IconButton>
                <h2 className="transfers-labelTextTopUpCard">Top up card</h2>
            </div>
        </div>
    );
};

export default TransfersPage;
