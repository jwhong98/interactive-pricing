import React from 'react'
import Switch from '@mui/material/Switch';
import img from '../images/icon-check.svg'
import Slider from '@mui/material/Slider';

const PriceCard = () => {
    return (
        <div className="price-container">
            <div className="top-wrap">
                <h3 id="price-header">100k pageviews</h3>
                <div className="slider-wrap">
                    <Slider  
                        defaultValue={50}
                        
                    />
                </div>
                <div className="price-wrap">
                    <h1 className="price">$16.00</h1>
                    <p className="label">/ month</p>
                </div>
                <div className="button-wrap">
                    <p className="label">Monthly Billing</p>
                    <Switch />
                    <p className="label">Yearly Billing</p>
                    <span className="discount">-25%</span>
                </div>
            </div>
            <div className="bottom-wrap">
                <ul className="features">
                    <li className="feature-item"><img className="icon" alt="checkmark" src={img}/>Unlimited websites</li>
                    <li className="feature-item"><img className="icon" alt="checkmark" src={img} />100% data ownership</li>
                    <li className="feature-item"><img className="icon" alt="checkmark" src={img} />Email reports</li>
                </ul>
                <button className="trial" type="button">Start my trial</button>
            </div>
        </div>
    )
}

export default PriceCard;
