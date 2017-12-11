import React from 'react';
import OutfitPartBuilder from './OutfitPartBuilder/OutfitPartBuilder';
import classes from './Outfit.css';

const outfit = (props) => 
    (
        <div className={classes.Outfit}>
            <OutfitPartBuilder type='Shirt' colour='Black'/>                 
            <OutfitPartBuilder type='Belt' colour='Black'/>
            <OutfitPartBuilder type='Jeans' colour='Red'/>   
            <OutfitPartBuilder type='ShoeTop' colour='Navy'/>                     
        </div>
    )


export default outfit;