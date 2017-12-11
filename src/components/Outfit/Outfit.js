import React from 'react';
import OutfitPartBuilder from './OutfitPartBuilder/OutfitPartBuilder';
import classes from './Outfit.css';

const outfit = (props) => {
    // const OutfitPartBuildersArr = Object.keys(props.OutfitPartBuilders).map(
    //     igKey => {
    //         return [...Array(props.OutfitPartBuilders[igKey])].map((_, i) =>
    //             <OutfitPartBuilder key={igKey + i} type={igKey}/>
    //         )
    //     }
    // )

    return (
        <div className={classes.Outfit}>
            <OutfitPartBuilder type='Tee' colour='Red'/>     
            <OutfitPartBuilder type='Belt' colour='Black'/>
            <OutfitPartBuilder type='Jeans' colour='Blue'/>   
            <OutfitPartBuilder type='ShoeTop' colour='Red'/>                     
        </div>
    )
}

export default outfit;