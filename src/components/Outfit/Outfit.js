import React from 'react';
import OutfitPartBuilder from './OutfitPartBuilder/OutfitPartBuilder';
import classes from './Outfit.css';

const outfit = (props) => 
    (
        <div className={classes.Outfit}>
            <OutfitPartBuilder type='Tee' colour='Green'/>     
            <OutfitPartBuilder type='Belt' colour='Black'/>
            <OutfitPartBuilder type='Jeans' colour='Red'/>   
            <OutfitPartBuilder type='ShoeTop' colour='Red'/>                     
        </div>
    )


export default outfit;