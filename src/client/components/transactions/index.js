import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Transactions = () => {
    const classes = useStyles();

    const transactions = [
        {
            id: 1987656788,
            expenseAmount: 330,
            cashbackPercentage: 3,
            balanceAfter: 9700,
            name: "Epic Cheeseburger Cafe",
            category: "Restaurants",
            date: "10/08/20",
            img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/b0/7d/bb/epic-cheeseburger.jpg"
        },
        {
            id: 1987656789,
            expenseAmount: 79,
            cashbackPercentage: 3,
            balanceAfter: 9700,
            name: "Alternativna Kava",
            category: "Restaurants",
            date: "10/08/20",
            img: "https://lviv-online.com/ua/wp-content/uploads/2018/12/%D0%BB%D0%BE%D0%B3%D0%BE.jpg"
        },
        {
            id: 1987656789,
            expenseAmount: 18,
            cashbackPercentage: 3,
            balanceAfter: 9700,
            name: "Humana vintage",
            category: "Clothes",
            date: "11/08/20",
            img: "https://work-info.org/images/logo/otzyvua/15524.jpg"
        },
        {
            id: 1987656789,
            expenseAmount: 786,
            cashbackPercentage: 3,
            balanceAfter: 9700,
            name: "Silpo",
            category: "Grocery",
            date: "15/08/20",
            img: "https://jv-kontakt.com/upload/iblock/f48/f48f6c545a76a5c72de42dcc5f3fa477.jpg"
        }
    ]


    return (
        <div className="transactions-wrapper">
            {transactions.map(transaction => (
                <Accordion style={{ width: "90%" ,borderRadius:"15px" }} key={transaction.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <span className="transactionMode-summaryWrapper">
                            <span className="transactionMode-price">-${transaction.expenseAmount}&nbsp;</span>
                            <span className="transactionMode-name">{transaction.name}</span>
                            <Avatar alt="Remy Sharp" src={transaction.img} />
                        </span>
                    </AccordionSummary>
                    <AccordionDetails className="transactionMode-detailsWrapper">
                        <span className="detailsWrapper-category">Category: {transaction.category} </span>
                        <span className="detailsWrapper-date"><EventRoundedIcon color="disabled" /> {transaction.date}</span>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>

    );
};

export default Transactions;
