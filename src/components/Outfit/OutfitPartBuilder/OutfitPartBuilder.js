import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tee from './OutfitParts/Tops/Tee/Tee';
import Jeans from './OutfitParts/Bottoms/Jeans/Jeans';
import LeatherBelt from './OutfitParts/Accessories/Belts/LeatherBelt/LeatherBelt';
import Shoes from './OutfitParts/Shoes/Shoes';

class OutfitPartBuilder extends Component {
    render () {          
        let outfitPart = null;
        
        switch(this.props.type) {
            case ('Tee') :
                outfitPart = <Tee colour={this.props.colour}/>                
                break;            
            case ('Jeans') :
                outfitPart = <Jeans colour={this.props.colour}/> 
                break;
            case ('Belt'):
                outfitPart = <LeatherBelt colour={this.props.colour}/>
                break;                         
            case ('ShoeTop') :
                outfitPart = <Shoes colour={this.props.colour}/>
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