import React from 'react';
import classes from './Shirt.css';
import {default as colours} from '../../../OutfitPartBuilder.css';

const Shirt = (props) => {
    const colourArr = Object.keys(colours).map(igKey => {
        return colours[igKey]
    })
    .find(c => c.indexOf(props.colour) > -1);
    
    return (
    <div className={[classes.Shirt, colourArr].join(' ')}>                                    
        <div className={classes.ShirtCollar}/> 
        <div className={classes.ShirtCollarLeft}/>
        <div className={classes.ShirtNeck}/>        
        <div className={classes.ShirtButtons}/>               
        <div className={[classes.ShirtSleeve, classes.ShirtSleeveLeft].join(' ')}/>                     
        <div className={[classes.ShirtSleeve, classes.ShirtSleeveRight].join(' ')}/>                     
    </div>
    )
}

export default Shirt;