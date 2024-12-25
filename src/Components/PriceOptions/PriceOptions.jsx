import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": "M1",
            "name": "Basic Membership",
            "features": ["Access to gym equipment",
                "locker usage",
                "24/7 gym access",
                "Personal training sessions",
                "Access to sauna and spa",
                "Towel Services"],
            "price": "$25"
        },
        {
            "id": "M2",
            "name": "Premium Membership",
            "features": ["Access to gym equipment",
                "locker usage",
                "2 personal training session",
                "24/7 gym access",
                "Access to sauna and spa",
                "Towel Services"
            ],
            "price": "$50"
        },
        {
            "id": "M3",
            "name": "Platinum Membership",
            "features": ["Access to gym equipment",
                "locker usage", 
                "unlimited group classes",
                "unlimited personal training",
                "and spa access.",
                "Towel Sevices"],
            "price": "$80"
        }
    ]

    return (
        <div className='m-12'>
            <h2 className='text-5xl'>Best Prices in the Town</h2>
            <div className='grid grid-cols-3 gap-6'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;