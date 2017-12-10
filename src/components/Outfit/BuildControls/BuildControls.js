import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import Price from '../../UI/Price/Price';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <Price>{props.price}</Price></p>
            {controls.map(ctrl => (
              <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                addType={() => props.addType(ctrl.type)}
                removeType={() => props.removeType(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
            ))}
            <button disabled={!props.purchasable} 
                    className={classes.OrderButton}
                    onClick={props.purchasing}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;