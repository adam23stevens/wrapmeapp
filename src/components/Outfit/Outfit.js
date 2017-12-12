import React from 'react';
import OutfitPartBuilder from './OutfitPartBuilder/OutfitPartBuilder';
import classes from './Outfit.css';

const outfit = (props) => 
    (
        <div className={classes.Outfit}>
            


            <OutfitPartBuilder type='Tee' colour='DiagonalStripes'/>                 
            <OutfitPartBuilder type='Belt' colour='BlackLeather'/>
            <OutfitPartBuilder type='Jeans' colour='BlueDenim'/>   
            <OutfitPartBuilder type='TrainersTop' colour='BlackDenim'/>                     
        </div>
    )


export default outfit;