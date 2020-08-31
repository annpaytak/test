import React from 'react';


import WelcomePage from '../welcome';
import Transactions from '../../components/transactions';
import Wallet from '../../components/wallet';
import Spendings from '../../components/spendings';

const HomePage = () => {
    const authenticated = true;

    if (!authenticated) return <WelcomePage />;
    return (
        <div>
            <main className="homePage-main">
                <Transactions />
                <div className="homePage-walletWrapper">
                    <Wallet />
                    <Spendings />
                </div>
            </main>
        </div>
    );
};

export default HomePage;
