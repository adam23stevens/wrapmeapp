import React from 'react';
import OutfitPartBuilder from './OutfitPartBuilder/OutfitPartBuilder';
import classes from './Outfit.css';

const outfit = (props) => 
    (
        <div className={classes.Outfit}>
            

            <OutfitPartBuilder type='Tophat' colour='BlackLeather'/>
            <OutfitPartBuilder type='Shirt' colour='Tartan'/>                 
            <OutfitPartBuilder type='Belt' colour='BlackLeather'/>
            <OutfitPartBuilder type='Chinos' colour='Blue'/>   
            <OutfitPartBuilder type='TrainersTop' colour='BlackDenim'/>                     
        </div>
    )


export default outfit;