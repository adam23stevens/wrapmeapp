import React from 'react';
import classes from './Tee.css';

const Tee = (props) =>  (
    <div className={classes.Tee}>                                    
        <div className={classes.TeeNeck}/>                        
        <div className={[classes.TeeSleeve, classes.TeeSleeveLeft].join(' ')}/>                     
        <div className={[classes.TeeSleeve, classes.TeeSleeveRight].join(' ')}/>                     
    </div>
)


export default Tee;