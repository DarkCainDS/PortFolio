import React from 'react'
import CountUp from 'react-countup';
import { CircleSvg } from '../components/CircleSvg';

export const Circle = ({porcent}) => {
    return (
        <div>
            <div className='skill'>
                <CircleSvg />
                <div className='outer'>
                    <div className='inner'>
                        <div className='number'  >
                            <CountUp start={0} end={porcent} suffix='%'  > </CountUp>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
