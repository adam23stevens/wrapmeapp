import React from 'react';
import OutfitPart from './OutfitPart/OutfitPart';
import classes from './Outfit.css';

const outfit = (props) => {
<<<<<<< HEAD
    let outfitPartsArr = Object.keys(props.outfitParts).map(
        igKey => {
            return [...Array(props.outfitParts[igKey])].map((_, i) =>
                <OutfitPart key={igKey + i} type={igKey}/>
            )
        }
    ).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (outfitPartsArr.length === 0) {
        outfitPartsArr = <p>Please start adding ingredients</p>
    }
=======
    // const outfitPartsArr = Object.keys(props.outfitParts).map(
    //     igKey => {
    //         return [...Array(props.outfitParts[igKey])].map((_, i) =>
    //             <OutfitPart key={igKey + i} type={igKey}/>
    //         )
    //     }
    // )
>>>>>>> wrapmeapp

    return (
        <div className={classes.Outfit}>
            <OutfitPart type='Tee' colour='Red'/>     
            <OutfitPart type='Jeans' colour='Blue'/>                       
        </div>
    )
}

export default outfit;