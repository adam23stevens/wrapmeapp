import React, { Component } from 'react';
import OutfitPartBuilder from './OutfitPartBuilder/OutfitPartBuilder';
import classes from './Outfit.css';

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
                    { type: 'Tee', relChance: '40', colour: 'Tartan' },
                    { type: 'Shirt', relChance: '60', colour: 'Blue' },
                    { type: 'Shirt', relChance: '100', colour: 'BlackLeather' }
                ],
                chance: '100',
                type: 'top'
            },
            bottoms: {
                outfitParts: [
                    { type: 'Chinos', relChance: '10', colour: 'Red' },
                    { type: 'Jeans', relChance: '30', colour: 'Blue' },
                    { type: 'Jeans', relChance: '50', colour: 'BlackLeather' },
                    { type: 'Chinos', relChance: '100', colour: 'Green' }
                ],
                chance: '100',
                type: 'bottom'
            },
            shoes: {
                outfitParts: [
                    { type: 'Trainers', relChance: '75', colour: 'BlackLeather' },
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
        //*currently once for parent chance and once for child chance*

        //tops
        const parentChance = Math.random() * 100;
        const childChance = Math.random() * 100;

        if (parentChance <= this.state.outfitPartsData.hats.chance) {
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
            <div className={classes.Outfit}>
                <p style={{fontSize: '14px'}}> Parent Number: {parentChance.toFixed(2)}</p>
                <p style={{fontSize: '14px'}}>Child Number: {childChance.toFixed(2)}</p>
                {outfitParts.map(part => <OutfitPartBuilder key={part.type} type={part.type} colour={part.colour} />)}
                {/* <OutfitPartBuilder type='Tophat' colour='BlackLeather'/>
            <OutfitPartBuilder type='Shirt' colour='Tartan'/>                 
            <OutfitPartBuilder type='Belt' colour='BlackLeather'/>
            <OutfitPartBuilder type='Chinos' colour='Blue'/>   
            <OutfitPartBuilder type='Boots' colour='BlackDenim'/>                      */}
            </div>
        )
    }
}


export default Outfit;