import React from 'react';
import classes from './Tee.css';
import { default as colours} from '../../../OutfitPartBuilder.css';

const Tee = (props) =>  {
    const colourArr = Object.keys(colours).map(igKey => {
        return colours[igKey]
    })
    .find(c => c === 'OutfitPartBuilder__' + props.colour + '__-hase-base64-5-');
    
    return (
    <div className={[classes.Tee, colourArr].join(' ')}>                                    
        <div className={classes.TeeNeck}/>                        
        <div className={[classes.TeeSleeve, classes.TeeSleeveLeft].join(' ')}/>                     
        <div className={[classes.TeeSleeve, classes.TeeSleeveRight].join(' ')}/>                     
    </div>
)}


export default Tee;