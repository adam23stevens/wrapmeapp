import React from 'react';
import classes from './Jeans.css';

const Jeans = (props) => (
    <div className={classes.Jeans} style={{background: props.colour}}>
    <div className={classes.JeansZip}/>
    <div className={classes.JeansLegLeft}/>
    <div className={classes.JeansLegRight}>
        <div className={classes.JeansStitch}/>
    </div>
</div>
)

export default Jeans;