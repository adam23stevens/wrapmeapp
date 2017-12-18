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
        outfitPartsData: {
            hats: {
                outfitParts: [
                    { type: 'Tophat', relChance: '100', colour: 'BlackLeather' },
                ],
                chance: '25',
                type: 'hat'
            },
            tops: {
                outfitParts: [
                    { type: 'Tee', relChance: '10', colour: 'Red' },
                    { type: 'Tee', relChance: '15', colour: 'Weave'},
                    { type: 'Tee', relChance: '40', colour: 'Tartan' },
                    { type: 'Shirt', relChance: '60', colour: 'DiagonalStripes' },
                    { type: 'Shirt', relChance: '100', colour: 'BlackLeather' }
                ],
                chance: '100',
                type: 'top'
            },
            bottoms: {
                outfitParts: [
                    { type: 'Chinos', relChance: '10', colour: 'Red' },
                    { type: 'Jeans', relChance: '30', colour: 'BlueDenim' },
                    { type: 'Jeans', relChance: '50', colour: 'BlackLeather' },
                    { type: 'Jeans', relChance: '90', colour: 'BlackDenim'},
                    { type: 'Chinos', relChance: '100', colour: 'BlueDenim' }
                ],
                chance: '100',
                type: 'bottom'
            },
            shoes: {
                outfitParts: [
                    { type: 'Trainers', relChance: '10', colour: 'Red'},
                    { type: 'Trainers', relChance: '50', colour: 'BlackLeather' },
                    { type: 'Boots', relChance: '100', colour: 'BlackLeather' }
                ],
                chance: '100',
                type: 'shoes'
            },
            belts: {
                outfitParts: [
                    { type: 'LeatherBelt', relChance: '100', colour: 'BlackLeather' }
                ],
                chance: '40',
                type: 'belt'
            }
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
        const currTypeCnt = this.state.outfitPartsData[type];
        if (!isAdding && currTypeCnt <= 0) {
            return;
        }
        const newTypeCnt = isAdding ? currTypeCnt + 1
            : currTypeCnt - 1;
        const newTotalPrice = isAdding ? this.state.totalPrice + OUTFIT_PRICES[type]
            : this.state.totalPrice - OUTFIT_PRICES[type];
        const newTypes = { ...this.state.outfitPartsData };

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

    continueAdding = (outfitPart) => {
        this.setState({ loading: true });

        const newState = this.state.outfitPartsData;
        const newOutfitPart = {
            type: outfitPart.outfitPart,
            relChance: '100',
            colour: outfitPart.colour
        };
        switch(newOutfitPart.type) {
            case 'hat':
                const stateHats = this.state.outfitPartsData.hats;
                stateHats.outfitParts.push(newOutfitPart);
                newState.hats.outfitParts = stateHats;
                break;
            case 'top':
                const stateTops = this.state.outfitPartsData.tops;
                stateTops.outfitParts.push(newOutfitPart);
                newState.tops.outfitParts = stateTops;
                break;
            case 'belt':
                const stateBelts = this.state.outfitPartsData.belts;
                stateBelts.outfitParts.push(newOutfitPart);
                newState.belts.outfitParts = stateBelts;
                break;
            case 'bottom':
                const stateBottoms = this.state.outfitPartsData.bottoms;
                stateBottoms.outfitParts.push(newOutfitPart);
                newState.bottoms.outfitParts = stateBottoms;
                break;
            case 'shoes':
                const stateShoes = this.state.outfitPartsData.shoes;
                stateShoes.outfitParts.push(newOutfitPart);
                newState.shoes.outfitParts = stateShoes;
                break;
                default:
                break;
            }    
        this.setState({ outfitPartsData: newState});


        this.setState({
            loading: false,
            adding: false
        });

        alert('New outfit part added: ' + newOutfitPart.colour + ' ' +  newOutfitPart.type);

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
            ...this.state.outfitPartsData
        };
        for (let key in disabledCntrl) {
            disabledCntrl[key] = disabledCntrl[key] <= 0;
        }

        let outfit = this.state.error ? <p>Data can't be loaded</p> : <Spinner />
        let newOutfitPart = null;

        if (this.state.outfitPartsData) {
            outfit = (
                <Wrap>
                    <Outfit outfitPartsData={this.state.outfitPartsData} />
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
                        continueClicked={(newOutfitPart) => this.continueAdding(newOutfitPart)}/>                  
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