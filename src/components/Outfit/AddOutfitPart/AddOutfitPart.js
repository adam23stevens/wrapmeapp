import React, { Component } from 'react';
import Wrap from '../../../hoc/wrap/wrap';
import Button from '../../UI/Button/Button';
import OutfitPartBuilder from '../OutfitPartBuilder/OutfitPartBuilder';
import classes from './AddOutfitPart.css';

const allAvailableItems = [
    'Tophat',
    'Tee',
    'Shirt',
    'LeatherBelt',
    'Jeans',
    'Chinos',
    'Trainers',
    'Boots'
]

class AddOutfitPart extends Component {

    state = {
        displayIndex: 0
    }

    nextSelItem = (prevState) => {
        //TODO Why is prevState.displayIndex undefined?
        const nextIndex = (this.state.displayIndex + 1 >= allAvailableItems.length)
                        ? 0
                        : this.state.displayIndex + 1; 

        this.setState({
            displayIndex: nextIndex
        });
    }

    render(){
        const selOutfitPart = allAvailableItems[this.state.displayIndex];

        return (
            <Wrap>
                <p>part = {selOutfitPart}</p>
                <p>Add new outfit part</p>
                <div class={classes.outfitPartPicker}>
                    <OutfitPartBuilder 
                    colour='Default' 
                    type={selOutfitPart} 
                    style={{zIndex: '100'}}
                    displayMode='Add'/>
                </div>
                <Button clicked={this.nextSelItem} btnType="Success">Next</Button>
                <Button clicked={this.props.cancelClicked} btnType='Danger'>Cancel</Button>
                <Button clicked={this.props.continueClicked} btnType='Success'>Ok</Button>
            </Wrap>
        )
    }
}

export default AddOutfitPart;