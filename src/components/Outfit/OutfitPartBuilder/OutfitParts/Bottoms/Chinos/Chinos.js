import React from 'react';
import classes from './Chinos.css';
import {default as colours} from '../../../OutfitPartBuilder.css';

const Chinos = (props) => {
    const colourArr = Object.keys(colours).map(cKey => {
        return colours[cKey]
    })
    .find(c => c === 'OutfitPartBuilder__' + props.colour + '__-hase-base64-5-');
    
    return (           
    <div className={[classes.Chinos, colourArr].join(' ')}>
        <div className={classes.ChinosZip}/>
        <div className={classes.ChinosLeg}/>
        <div className={[classes.ChinosLeg, classes.ChinosLegRight].join(' ')}>
        </div>
    </div>
    )
}

export default Chinos;