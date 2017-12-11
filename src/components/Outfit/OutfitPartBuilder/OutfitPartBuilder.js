import React, { Component } from 'react';
import classes from './OutfitPartBuilder.css';
import PropTypes from 'prop-types';
import Tee from './OutfitParts/Tops/Tee/Tee';
import Jeans from './OutfitParts/Bottoms/Jeans/Jeans';
import LeatherBelt from './OutfitParts/Accessories/Belts/LeatherBelt/LeatherBelt';
import Shoes from './OutfitParts/Shoes/Shoes';

class OutfitPartBuilder extends Component {
    render () {          
        let outfitPart = null;
        let colour = null;
        
        switch(this.props.colour) {
            case ('Red') :
                colour = classes.Red;                
            break;
            case ('Blue') :
                colour = classes.Blue;
            break;
            case ('Navy') :
                colour = classes.Navy;
            break;
            case ('Green'):
                colour = classes.Green;
            break;
            case ('Grey'):
                colour = classes.Grey;
            break;
            case ('BlackLeather'):
                colour = classes.BlackLeather;
            break;
            default:
                colour = null;
            break;
        }


        switch(this.props.type) {
            case ('Tee') :
                outfitPart = <Tee className='Red'/>                
                break;            
            case ('Jeans') :
                outfitPart = <Jeans className={colour}/> 
                break;
            case ('Belt'):
                outfitPart = <LeatherBelt className={colour}/>
                break;                         
            case ('ShoeTop') :
                outfitPart = <Shoes className={colour}/>
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