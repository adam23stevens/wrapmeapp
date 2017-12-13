import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        let outfitPart = null;
        
        switch(this.props.type) {
            case ('Shirt') :
                outfitPart = <Shirt colour={this.props.colour}/>
                break;
            case ('Tee') :
                outfitPart = <Tee colour={this.props.colour}/>                
                break;            
            case ('Jeans') :
                outfitPart = <Jeans colour={this.props.colour}/> 
                break;
            case ('Chinos') :
                outfitPart = <Chinos colour={this.props.colour}/>
                break;
            case ('Belt'):
                outfitPart = <LeatherBelt colour={this.props.colour}/>
                break;                         
            case ('Tophat') :
                outfitPart = <Tophat colour={this.props.colour}/>
                break;
            case ('TrainersTop') :
                outfitPart = <Trainers colour={this.props.colour}/>
                break;
            case ('Boots') :
                outfitPart = <Boots colour={this.props.colour}/>
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