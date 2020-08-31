import React from 'react';
import Grid from '@material-ui/core/Grid';


const Card = () => {

    return (
        <div className="cardWrapper">
            <div className="card"> 
                <div>
                    <h3 className="card-number">5363542010093277</h3>
                </div>
                <div className="card-footer-wrapp">
                    <div>
                        <h3 className="card-number">10/24</h3>
                    </div>
                    <div>
                        <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1199px-Mastercard_2019_logo.svg.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card; 