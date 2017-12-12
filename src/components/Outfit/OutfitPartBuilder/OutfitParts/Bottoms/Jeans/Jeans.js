import React from 'react';
import classes from './Jeans.css';
import {default as colours} from '../../../OutfitPartBuilder.css';

const Jeans = (props) => {

    const colourArr = Object.keys(colours).map(cKey => {
        return colours[cKey]
    })
    .find(c => c === 'OutfitPartBuilder__' + props.colour + '__-hase-base64-5-');
    
    return (           
    <div className={[classes.Jeans, colourArr].join(' ')}>
        <div className={classes.JeansZip}/>
        <div className={classes.JeansLeg}/>
        <div className={[classes.JeansLeg, classes.JeansLegRight].join(' ')}>
            <div className={classes.JeansStitch}/>
        </div>
    </div>
)}

export default Jeans;