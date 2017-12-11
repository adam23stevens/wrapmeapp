import React from 'react';
import classes from './Shoes.css';
import { default as colours} from '../../OutfitPartBuilder.css';

const Shoes = (props) => {
    const colourArr = Object.keys(colours).map(cKey => {
        return colours[cKey]
    })
    .find(c => c.indexOf(props.colour) > -1);
    
    return (
    <div className={classes.Shoes}>
        <div className={[classes.ShoeTop, colourArr].join(' ')}>
            <div className={classes.ShoeTopHole}/>
            <div className={classes.ShoeTopDetail}/>
        </div>                                    
        <div className={[classes.ShoeTopRight, colourArr].join(' ')}>
            <div className={classes.ShoeTopHole}/>
            <div className={classes.ShoeTopDetail}/>
        </div>                
    </div>
)}

export default Shoes;