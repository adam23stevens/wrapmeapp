import React from 'react';
import Wrap from '../../../hoc/wrap/wrap';
import Button from '../../UI/Button/Button';
import Price from '../../UI/Price/Price';

const AddOutfitPart = (props) => {

    // const orderParts = Object.keys(props.orderParts).map(opKey => {
    //     return (
    //         <li key={opKey}>
    //             <span style={{textTransform: 'capitalize'}}>{opKey}</span>: {props.orderParts[opKey]}
    //         </li>
    //     )
    // })

    return (
        <Wrap>
            <p>Add new outfit part</p>
            <Button clicked={props.cancelClicked} btnType='Danger'>Cancel</Button>
            <Button clicked={props.continueClicked} btnType='Success'>Ok</Button>
        </Wrap>
    )
}

export default addOutfitPart;