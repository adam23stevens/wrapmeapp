import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
import Price from '../../UI/Price/Price';

const orderSummary = (props) => {

    const orderParts = Object.keys(props.orderParts).map(opKey => {
        return (
            <li key={opKey}>
                <span style={{textTransform: 'capitalize'}}>{opKey}</span>: {props.orderParts[opKey]}
            </li>
        )
    })

    return (
        <Aux>
            <p>Your order summary as follows: </p>
            <ul>
                {orderParts}
            </ul>            
            <p>Total Cost: <Price>{props.totalPrice}</Price></p>
            <p>Do you wish to continue to checkout?</p>
            <Button clicked={props.cancelClicked} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.continueClicked} btnType='Success'>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;