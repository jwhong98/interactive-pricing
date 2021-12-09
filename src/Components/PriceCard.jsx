import React, {useState} from 'react'
import Switch from '@mui/material/Switch';
import img from '../images/icon-check.svg'
import Slider from '@mui/material/Slider';

const PriceCard = () => {

    const [viewLabel, setViewLabel] = useState("100k");
    const [price, setPrice] = useState(16);
    const [monthly, setMonthly] = useState(true);

    const pageViewMarks = [
        {
            value: 0,
            scaledValue: 10000,
            shortLabel: "10K",
            price: 8
        },
        {
            value: 25,
            scaledValue: 50000,
            shortLabel: "50K",
            price: 12
        },
        {
            value: 50,
            scaledValue: 100000,
            shortLabel: "100K",
            price: 16
        },
        {
            value: 75,
            scaledValue: 500000,
            shortLabel: "500K",
            price: 24
        },
        {
            value: 100,
            scaledValue: 1000000,
            shortLabel: "1M",
            price: 36
        }
    ]

    const setViewLabels = (value) => {
        setViewLabel(value);
    }

    const setPrices = (value) => {
        setPrice(value);
    }

    const handleToggle = () => {
        setMonthly(!monthly);
    }

    const handleChange = (event, newValue) => {
        let temp, tempPrice;
        if(newValue === 0) {
            temp = "10k";
            tempPrice = 8;
        } else if (newValue === 25) {
            temp="50k";
            tempPrice = 12;
        }else if (newValue === 50) {
            temp="100k";
            tempPrice = 16;
        }else if (newValue === 75) {
            temp="500k";
            tempPrice = 24;
        }else if (newValue === 100) {
            temp="1m";
            tempPrice = 36;
        }
        setViewLabels(temp);
        setPrices(tempPrice);
    }

    return (
        <div className="price-container">
            <div className="top-wrap">
                <div id="price-header">
                    <h3>{viewLabel} pageviews</h3>
                </div>
                <div className="slider-wrap">
                    <Slider  
                        defaultValue={50}
                        min={0} 
                        max={100} 
                        marks={pageViewMarks} 
                        valueLabelDisplay={'off'}
                        step={null}
                        onChange={handleChange}
                    />
                </div>
                <div className="price-wrap">
                    <h1 className="price">${price}.00</h1>
                    <p className="label">/ month</p>
                </div>
                <div className="button-wrap">
                    <p className="label">Monthly Billing</p>
                    <Switch onChange={handleToggle}/>
                    <p className="label">Yearly Billing</p>
                    <span className="discount">-25% <span className="discount-label">discount</span></span>
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
