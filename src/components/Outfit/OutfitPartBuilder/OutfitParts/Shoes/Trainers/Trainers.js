import React from 'react';
import classes from './Trainers.css';
import { default as colours} from '../../../OutfitPartBuilder.css';

const Trainers = (props) => {
    const colourArr = Object.keys(colours).map(cKey => {
        return colours[cKey]
    })
    .find(c => c === 'OutfitPartBuilder__' + props.colour + '__-hase-base64-5-');
    
    return (
    <div className={classes.Trainers}>
        <div className={[classes.TrainersTop, colourArr].join(' ')}>
            <div className={classes.TrainersTopHole}/>
            <div className={classes.TrainersTopDetail}/>
            <div className={[classes.TrainersTopDetail, classes.TrainersTopDetailBottom].join(' ')}/>
            <div className={[classes.TrainersTopDetail, classes.TrainersTopDetailMiddle].join(' ')}/>
        </div>                                    
        <div className={[classes.TrainersTop, classes.TrainersTopRight, colourArr].join(' ')}>
            <div className={classes.TrainersTopHole}/>
            <div className={classes.TrainersTopDetail}/>
            <div className={[classes.TrainersTopDetail, classes.TrainersTopDetailBottom].join(' ')}/>
            <div className={[classes.TrainersTopDetail, classes.TrainersTopDetailMiddle].join(' ')}/>
        </div>                
    </div>
)}

export default Trainers;