import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './OutfitPart.css';

class OutfitPart extends Component {
    render () {  
        let outfitPart = null;

        switch(this.props.type) {
            case ('Shirt') :
                outfitPart = (                    
                     <div className={[classes.Shirt, classes.Red].join(' ')}>                                                            
                        <div className={[classes.ShirtSleeve, classes.ShirtSleeveLeft, classes.Green].join(' ')}/>                     
                        <div className={[classes.ShirtSleeve, classes.ShirtSleeveRight, classes.Green].join(' ')}/>                     
                     </div>
                );
                break;            
            case ('Trousers') : 
                outfitPart = (
                    <div className={[classes.Trousers, classes.Blue].join(' ')}>
                        <div className={classes.TrouserLegLeft}></div>
                        <div className={classes.TrouserLegRight}></div>
                    </div>
                )                
                break;
            default:
                outfitPart = null;
                break;
        }        
        return outfitPart;
    }
}

OutfitPart.propTypes = {
    type: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired
};

export default OutfitPart;