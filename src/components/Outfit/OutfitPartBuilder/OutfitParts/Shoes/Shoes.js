import React from 'react';
import classes from './Shoes.css';

const Shoes = (props) => (
    <div className={classes.Shoes}>
        <div className={classes.ShoeTop} style={{background: props.colour}}>
            <div className={classes.ShoeTopHole}/>
            <div className={classes.ShoeTopDetail}/>
        </div>                                    
        <div className={classes.ShoeTop} style={{background: props.colour}}>
            <div className={classes.ShoeTopHole}/>
            <div className={classes.ShoeTopDetail}/>
        </div>                
    </div>
)

export default Shoes;