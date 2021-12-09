import React from 'react'

const PriceCard = () => {
    return (
        <div className="price-container">
            <div className="top-wrap">
                <h3 className="subtitle">100k pageviews</h3>
                <div className="slider"></div>
                <div className="price-wrap">
                    <h1 className="price">$16.00</h1>
                    <p className="label">/ month</p>
                </div>
                <div className="button-wrap">
                    <p className="subtitle">Monthly Billing</p>
                    <button type="button"></button>
                    <p className="subtitle">Yearly Billing</p>
                    <p className="discount"></p>
                </div>
            </div>
            <div className="bottom-wrap">
                <ul className="features">
                    <li className="feature-item">Unlimited websites</li>
                    <li className="feature-item">100% data ownership</li>
                    <li className="feature-item">Email reports</li>
                </ul>
                <button className="trial" type="button">Start my trial</button>
            </div>
        </div>
    )
}

export default PriceCard;
