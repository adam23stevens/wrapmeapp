import React from 'react';
import OutfitPartBuilder from './OutfitPartBuilder/OutfitPartBuilder';
import classes from './Outfit.css';

const outfit = (props) => 
    (
        <div className={classes.Outfit}>
            <OutfitPartBuilder type='Tee' colour='Red'/>                 
            <OutfitPartBuilder type='Belt' colour='Black'/>
            <OutfitPartBuilder type='Jeans' colour='Blue'/>   
            <OutfitPartBuilder type='TrainersTop' colour='Navy'/>                     
        </div>
    )


export default outfit;