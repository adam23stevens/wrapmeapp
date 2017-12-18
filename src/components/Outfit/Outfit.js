import React, { Component } from 'react';
import OutfitPartBuilder from './OutfitPartBuilder/OutfitPartBuilder';
import classes from './Outfit.css';
import Button from '../UI/Button/Button';
import Wrap from '../../hoc/wrap/wrap';

class Outfit extends Component {

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

    onOutfitAccept = (outfitParts) => {
        alert('accepted parts: ');
        outfitParts.map(o => {
            alert(o.type + ' ' + o.colour);
        })
    }

    onOutfitReject = () => {
        alert('rejected');
    }

    render() {

        let outfitParts = [];
        //loop through each outfit section
        //calculate chance to render based on parent chance passing Math.Random()
        //if passes
        //loop through all child objects
        //calculate chance to render based on relChance individually passing Math.Random()
        //(this makes it less relative but whatever...)
        //if passes, that's the outfitPart to pass down to outfitPartBuilder
        //continue to loop over and over until one of them passes the chance test

        //how many times to call Math.random() ? 

        //tops
        const parentChance = Math.random() * 100;

        if (parentChance <= this.state.outfitPartsData.hats.chance) {
            const childChance = Math.random() * 100;
            const topsArray = Object.keys(this.state.outfitPartsData.hats.outfitParts).map(igKey => {
                return this.state.outfitPartsData.hats.outfitParts[igKey]
            });
            for (let cnt = 0; cnt < topsArray.length; cnt++) {
                if (childChance <= topsArray[cnt].relChance) {
                    outfitParts.push(topsArray[cnt]);
                    break;
                }
            }
        }
        if (parentChance <= this.state.outfitPartsData.tops.chance) {
            const childChance = Math.random() * 100;
            const topsArray = Object.keys(this.state.outfitPartsData.tops.outfitParts).map(igKey => {
                return this.state.outfitPartsData.tops.outfitParts[igKey]
            });
            for (let cnt = 0; cnt < topsArray.length; cnt++) {
                if (childChance <= topsArray[cnt].relChance) {
                    outfitParts.push(topsArray[cnt]);
                    break;
                }
            }
        }
        if (parentChance <= this.state.outfitPartsData.belts.chance) {
            const childChance = Math.random() * 100;
            const topsArray = Object.keys(this.state.outfitPartsData.belts.outfitParts).map(igKey => {
                return this.state.outfitPartsData.belts.outfitParts[igKey]
            });
            for (let cnt = 0; cnt < topsArray.length; cnt++) {
                if (childChance <= topsArray[cnt].relChance) {
                    outfitParts.push(topsArray[cnt]);
                    break;
                }
            }
        }
        if (parentChance <= this.state.outfitPartsData.bottoms.chance) {
            const childChance = Math.random() * 100;
            const topsArray = Object.keys(this.state.outfitPartsData.bottoms.outfitParts).map(igKey => {
                return this.state.outfitPartsData.bottoms.outfitParts[igKey]
            })
            for (let cnt = 0; cnt < topsArray.length; cnt++) {
                if (childChance <= topsArray[cnt].relChance) {
                    outfitParts.push(topsArray[cnt]);
                    break;
                }
            }
        }
        if (parentChance <= this.state.outfitPartsData.shoes.chance) {
            const childChance = Math.random() * 100;
            const topsArray = Object.keys(this.state.outfitPartsData.shoes.outfitParts).map(igKey => {
                return this.state.outfitPartsData.shoes.outfitParts[igKey]
            })
            for (let cnt = 0; cnt < topsArray.length; cnt++) {
                if (childChance <= topsArray[cnt].relChance) {
                    outfitParts.push(topsArray[cnt]);
                    break;
                }
            }
        }

        return (
            <Wrap>
                <div className={classes.Outfit}>
                    {outfitParts.map(part => <OutfitPartBuilder key={part.type} type={part.type} colour={part.colour} />)}
                </div>
                <div class={classes.acceptRejectButtons}>
                <button className={classes.outfitAcceptBtn} onClick={() => this.onOutfitAccept(outfitParts)}>ACCEPT</button>
                <button className={classes.outfitRejectBtn} onClick={this.onOutfitReject}>reject</button>
                </div>
            </Wrap>
        )
    }
}


export default Outfit;