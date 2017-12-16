import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './OutfitPartBuilder.css';
import Tee from './OutfitParts/Tops/Tee/Tee';
import Jeans from './OutfitParts/Bottoms/Jeans/Jeans';
import Chinos from './OutfitParts/Bottoms/Chinos/Chinos';
import LeatherBelt from './OutfitParts/Accessories/Belts/LeatherBelt/LeatherBelt';
import Trainers from './OutfitParts/Shoes/Trainers/Trainers';
import Boots from './OutfitParts/Shoes/Boots/Boots';
import Shirt from './OutfitParts/Tops/Shirt/Shirt';
import Tophat from './OutfitParts/Accessories/Hats/Tophat/Tophat';

class OutfitPartBuilder extends Component {
    render () {      
        const colourArr = Object.keys(classes).map(cKey => {
            return classes[cKey]
        })
        .find(c => c === 'OutfitPartBuilder__' + this.props.colour + '__-hase-base64-5-');
        
        let outfitPart = null;
        
        switch(this.props.type) {
            case ('Shirt') :
                outfitPart = <Shirt 
                    colour={colourArr}
                    style={{height: '100%'}}
                    displayMode={this.props.displayMode}/>
                break;
            case ('Tee') :
                outfitPart = <Tee 
                    colour={colourArr}
                    displayMode={this.props.displayMode}/>                
                break;            
            case ('Jeans') :
                outfitPart = <Jeans 
                    colour={colourArr}
                    displayMode={this.props.displayMode}/> 
                break;
            case ('Chinos') :
                outfitPart = <Chinos 
                    colour={colourArr}
                    displayMode={this.props.displayMode}/>
                break;
            case ('LeatherBelt'):
                outfitPart = <LeatherBelt 
                    colour={colourArr}
                    displayMode={this.props.displayMode}/>
                break;                         
            case ('Tophat') :
                outfitPart = <Tophat 
                    colour={colourArr}
                    displayMode={this.props.displayMode}/>
                break;
            case ('Trainers') :
                outfitPart = <Trainers 
                    colour={colourArr}
                    displayMode={this.props.displayMode}/>
                break;
            case ('Boots') :
                outfitPart = <Boots 
                    colour={colourArr}
                    displayMode={this.props.displayMode}/>
                break;
            default:
                outfitPart = null;
                break;
        }        

        return outfitPart;
    }
}

OutfitPartBuilder.propTypes = {
    type: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired
};

export default OutfitPartBuilder;