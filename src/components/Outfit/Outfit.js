import React from 'react';
import OutfitPart from './OutfitPart/OutfitPart';
import classes from './Outfit.css';

const outfit = (props) => {
    const outfitPartsArr = Object.keys(props.outfitParts).map(
        igKey => {
            return [...Array(props.outfitParts[igKey])].map((_, i) =>
                <OutfitPart key={igKey + i} type={igKey}/>
            )
        }
    )

    return (
        <div className={classes.Outfit}>
            <OutfitPart type='bread-top'/>
                {outfitPartsArr}
            <OutfitPart type='bread-bottom'/>
        </div>
    )
}

export default outfit;