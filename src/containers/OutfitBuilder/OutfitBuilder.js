import React, { Component } from 'react';
import Wrap from '../../hoc/wrap/wrap';
import Outfit from '../../components/Outfit/Outfit';
//import BuildControls from '../../components/Outfit/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import AddOutfitPart from '../../components/Outfit/AddOutfitPart/AddOutfitPart';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './OutfitBuilder.css';

const OUTFIT_PRICES = {
    salad: 0.4,
    bacon: 0.9,
    meat: 1.2,
    cheese: 0.9
}

class OutfitBuilder extends Component {
    state = {
        outfitParts: {
            shirt: 'red',
            trouser: 'navy',
            shoes: 'black'
        }
    }

    updatePurchasable(outfitParts) {
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
        if (!isAdding && currTypeCnt <= 0) {
            return;
        }
        const newTypeCnt = isAdding ? currTypeCnt + 1
            : currTypeCnt - 1;
        const newTotalPrice = isAdding ? this.state.totalPrice + OUTFIT_PRICES[type]
            : this.state.totalPrice - OUTFIT_PRICES[type];
        const newTypes = { ...this.state.outfitParts };

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

    doAdding = () => {
        this.setState({
            adding: true
        });
    }

    cancelAdding = () => {
        this.setState({
            adding: false
        });
    }

    continueAdding = () => {
        this.setState({ loading: true });
        setTimeout(() => this.setState({loading: false}), 3000);
        //do an axios put here


        // const data = {
        //     totalParts: this.state.outfitParts,
        //     totalPrice: this.state.totalPrice,
        //     customer: {
        //         name: 'Adam Stevens',
        //         address: {
        //             street: '18 Liskeard Lodge',
        //             town: 'Caterham',
        //             postcode: 'CR3 6DN'
        //         },
        //         email: 'adam23stevens@gmail.com'
        //     },
        //     deliveryMethod: 'fastest'
        // };

        // axios.post('/orders.json', data)
        //     .then(response => this.setState({ loading: false, adding: false }))
        //     .catch(error => {
        //         this.setState({ loading: false, adding: false });
        //         console.log(error);
        //     });
    }

    render() {
        const disabledCntrl = {
            ...this.state.outfitParts
        };
        for (let key in disabledCntrl) {
            disabledCntrl[key] = disabledCntrl[key] <= 0;
        }

        let outfit = this.state.error ? <p>Data can't be loaded</p> : <Spinner />
        let newOutfitPart = null;

        if (this.state.outfitParts) {
            outfit = (
                <Wrap>
                    <Outfit outfitParts={this.state.outfitParts} />
                    {/* <BuildControls 
                        addType={this.addOutfitPartHandler}
                        removeType={this.removeOutfitPartHandler}
                        disabled={disabledCntrl}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        adding={this.updatePurchasing}/> */}

                </Wrap>
            );
            newOutfitPart =
                // <OrderSummary 
                //     orderParts={this.state.outfitParts}
                //     cancelClicked={this.cancelPurchasing}
                //     continueClicked={this.continuePurchase}
                //     totalPrice={this.state.totalPrice}/>;  
                <AddOutfitPart
                        cancelClicked={this.cancelAdding}
                        continueClicked={this.continueAdding}/>                  
        }

        if (this.state.loading) {
            newOutfitPart = <Spinner />
        }

        return (
            <Wrap>
                <button className={classes.AddOutfitBtn} onClick={this.doAdding}>Add more clothes</button>
                <Modal show={this.state.adding} modalClose={this.cancelAdding}>
                    {newOutfitPart}
                </Modal>
                {outfit}
            </Wrap>
        );
    }
}

export default withErrorHandler(OutfitBuilder, axios);