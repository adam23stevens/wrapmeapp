import React from 'react';
import classes from './Tophat.css';
import {default as colours} from '../../../../OutfitPartBuilder.css';

const Tophat = (props) => {
    const colourArr = Object.keys(colours).map(cKey => {
        return colours[cKey]
    })
    .find(c => c === 'OutfitPartBuilder__' + props.colour + '__-hase-base64-5-');


    return (
        <div className={classes.topHatWrap}>
             <div className={[classes.topHatRim, colourArr].join(' ')}/>
             <div className={[classes.topHat, colourArr].join(' ')}/>
        </div> 
    )
}

export default Tophat;