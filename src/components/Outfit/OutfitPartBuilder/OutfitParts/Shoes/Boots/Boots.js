import React from 'react';
import classes from './Boots.css';
import {default as colours} from '../../../OutfitPartBuilder.css';

const Boots = (props) => {

    const colourArr = Object.keys(colours).map (igKey => {
        return colours[igKey]
    }).find(c => c === 'OutfitPartBuilder__' + props.colour + '__-hase-base64-5-');

    return (
        <div className={classes.Boots}>
        <div className={[classes.BootsTop, colourArr].join(' ')}>
            <div className={classes.BootsTopHole}/>
            <div className={classes.BootsTopDetail}/>
            <div className={[classes.BootsTopDetail, classes.BootsTopDetailBottom].join(' ')}/>
        </div>                                    
        <div className={[classes.BootsTop, classes.BootsTopRight, colourArr].join(' ')}>
            <div className={classes.BootsTopHole}/>
            <div className={classes.BootsTopDetail}/>
            <div className={[classes.BootsTopDetail, classes.BootsTopDetailBottom].join(' ')}/>
        </div>                
    </div>
    )
}

export default Boots;