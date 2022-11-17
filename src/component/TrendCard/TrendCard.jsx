import React from 'react'
import './TrendCard.css';
import { TrendsData } from '../../Data/TrendsData';

const TrendCard = () => {
    return (
        <div className='TrendCard'>
            <h3><i>Trends For You</i></h3>
            {TrendsData.map((trend, id) => {
                return (<div>

                    <div className='trend'>
                        <span>#{trend.name}
                        </span>
                        <span>{trend.shares}K</span>
                    </div>
                    <hr/>
                    </div>
                    )
            })}
        </div>
    )
}

export default TrendCard
