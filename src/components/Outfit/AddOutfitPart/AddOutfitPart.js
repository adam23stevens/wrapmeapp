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
const allAvailableColours = [
    'Default',
    'Green',
    'Red',
    'Blue',
    'Navy',
    'Grey',
    'BlackLeather',
    'Tartan',
    'Weave',
    'DiagonalStripes',
    'BlueDenim',
    'BlackDenim'
]

class AddOutfitPart extends Component {

    state = {
        displayIndex: 0,
        colourIndex: 0
    }

    prevColour = (prevState) => {
        const prevIndex = (this.state.colourIndex -1 < 0) 
                        ? allAvailableColours.length -1
                        : this.state.colourIndex -1;

        this.setState({
            colourIndex: prevIndex
        });
    }

    nextColour = (prevState) => {
        const nextIndex = (this.state.colourIndex + 1 >= allAvailableColours.length)
                        ? 0
                        : this.state.colourIndex + 1;
                
        this.setState({
            colourIndex: nextIndex
        });
    }

    prevSelItem = (prevState) => {
        const prevIndex = (this.state.displayIndex - 1 < 0) 
                        ? allAvailableItems.length -1
                        : this.state.displayIndex - 1;

        this.setState({
            displayIndex: prevIndex
        });
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
        const selColour = allAvailableColours[this.state.colourIndex];

        return (
            <Wrap>
                <h3>Add new outfit part</h3>
                <p><i>{selOutfitPart}</i></p>
                <div className={classes.outfitPartPickerWrap}>
                    <button className={[classes.prev, classes.buttonLeft].join(' ')} onClick={this.prevSelItem}/>
                    <button className={[classes.prevColour, classes.buttonLeft].join(' ')} onClick={this.prevColour}/>
                    <div className={classes.outfitPartPicker}>
                    <OutfitPartBuilder 
                        colour={selColour} 
                        type={selOutfitPart} 
                        style={{zIndex: '100'}}
                        display='add'/>
                    </div>
                    <button className={[classes.next, classes.buttonRight].join(' ')} onClick={this.nextSelItem}/>
                    <button className={[classes.nextColour, classes.buttonRight].join(' ')} onClick={this.nextColour}/>
                </div>
                <Button clicked={this.props.cancelClicked} btnType='Danger'>Cancel</Button>
                <Button clicked={this.props.continueClicked} btnType='Success'>Ok</Button>
            </Wrap>
        )
    }
}

export default AddOutfitPart;