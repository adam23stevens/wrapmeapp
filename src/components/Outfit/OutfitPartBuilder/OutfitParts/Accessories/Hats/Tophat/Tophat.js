import React from 'react';
import classes from './Tophat.css';
import {default as colours} from '../../../../OutfitPartBuilder.css';

const Tophat = (props) => (
        <div className={classes.topHatWrap}>
             <div className={[classes.topHatRim, props.colour].join(' ')}/>
             <div className={[classes.topHat, props.colour].join(' ')}/>
        </div> 
    )

export default Tophat;