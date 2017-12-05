import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Outfit from '../../components/Outfit/Outfit';
import BuildControls from '../../components/Outfit/BuildControls/BuildControls';

const OUTFIT_PRICES = {
    salad: 0.4,
    bacon: 0.9,
    meat: 1.2,
    cheese: 0.9
}

class OutfitBuilder extends Component {
    state = {
        outfitParts: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0,
        },
        totalPrice: 4,
        purchasable: false
    }
    
    updatePurchasable(outfitParts){        
        const sum = Object.keys(outfitParts).map(igKey => {
            return outfitParts[igKey]
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0);

        this.setState({
            purchasable: sum > 0
        })
    }
    
    addRemoveOutfitPart = (type, isAdding) => {        
        const currTypeCnt = this.state.outfitParts[type];
        if(!isAdding && currTypeCnt <= 0) {
            return;
        }
        const newTypeCnt = isAdding ? currTypeCnt + 1
                                    : currTypeCnt - 1;
        const newTotalPrice = isAdding ? this.state.totalPrice + OUTFIT_PRICES[type] 
                                       : this.state.totalPrice - OUTFIT_PRICES[type];
        const newTypes = {...this.state.outfitParts};

        newTypes[type] = newTypeCnt;
        this.setState({
            outfitParts: newTypes,
            totalPrice: newTotalPrice
        });        
        this.updatePurchasable(newTypes);
    }

    addOutfitPartHandler = (type) => {
        this.addRemoveOutfitPart(type, true);        
    }

    removeOutfitPartHandler = (type) => {
        this.addRemoveOutfitPart(type, false);
    }


    render(){
        const disabledCntrl = {
            ...this.state.outfitParts
        };
        for (let key in disabledCntrl) {
            disabledCntrl[key] = disabledCntrl[key] <= 0;
        }

        return (
            <Aux>
                <Outfit outfitParts = {this.state.outfitParts}/>
                <BuildControls 
                    addType={this.addOutfitPartHandler}
                    removeType={this.removeOutfitPartHandler}
                    disabled={disabledCntrl}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}/>                            
            </Aux>
        );
    }
}

export default OutfitBuilder;