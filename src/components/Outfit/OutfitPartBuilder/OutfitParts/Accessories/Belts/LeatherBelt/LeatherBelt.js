import React from 'react';
import classes from './LeatherBelt.css';
import {default as colours} from '../../../../OutfitPartBuilder.css';

const LeatherBelt = (props) => {

    const colourArr = Object.keys(colours).map(cKey => {
        return colours[cKey]
    })
    .find(c => c === 'OutfitPartBuilder__' + props.colour + '__-hase-base64-5-');

    return (
    <div className={[classes.Belt, colourArr].join(' ')}>
        <div className={classes.BeltBuckle}>
            <div className={classes.BeltBuckleDetail}/>
        </div>
        <div className={classes.BeltHole}/>                        
    </div>
)}

export default LeatherBelt;