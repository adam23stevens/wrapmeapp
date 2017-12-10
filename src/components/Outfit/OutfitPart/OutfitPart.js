import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './OutfitPart.css';

class OutfitPart extends Component {
    render () {  
        let outfitPart = null;

        switch(this.props.type) {
            case ('Tee') :
                outfitPart = (                    
                     <div className={[classes.Tee, classes.Red].join(' ')}>                                    
                        <div className={classes.TeeNeck}/>                        
                        <div className={[classes.TeeSleeve, classes.TeeSleeveLeft, classes.Green].join(' ')}/>                     
                        <div className={[classes.TeeSleeve, classes.TeeSleeveRight, classes.Green].join(' ')}/>                     
                     </div>
                );
                break;            
            case ('Jeans') :
                outfitPart = (
                    <div className={[classes.Jeans, classes.Blue].join(' ')}>
                        <div className={classes.JeansZip}/>
                        <div className={classes.JeansLegLeft}/>
                        <div className={classes.JeansLegRight}>
                            <div className={classes.JeansStitch}/>
                        </div>
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