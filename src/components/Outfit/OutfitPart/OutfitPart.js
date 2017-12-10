import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import classes from './OutfitPart.css';

class OutfitPart extends Component {
    render () {  
        let outfitPart = null;

        switch(this.props.type) {
            case ('Tee') :
                outfitPart = (                    
                     <div className={[classes.Tee, classes.Grey].join(' ')}>                                    
                        <div className={classes.TeeNeck}/>                        
                        <div className={[classes.TeeSleeve, classes.TeeSleeveLeft, classes.Grey].join(' ')}/>                     
                        <div className={[classes.TeeSleeve, classes.TeeSleeveRight, classes.Grey].join(' ')}/>                     
                     </div>
                );
                break;            
            case ('Jeans') :
                outfitPart = (
                    <div className={[classes.Jeans, classes.Green].join(' ')}>
                        <div className={classes.JeansZip}/>
                        <div className={classes.JeansLegLeft}/>
                        <div className={classes.JeansLegRight}>
                            <div className={classes.JeansStitch}/>
                        </div>
                    </div>
                )                
                break;
            case ('Belt'):
                outfitPart = (
                    <div className={[classes.Belt, classes.BlackLeather].join(' ')}>
                        <div className={classes.BeltBuckle}>
                            <div className={classes.BeltBuckleDetail}/>
                        </div>
                        <div className={classes.BeltHole}/>                        
                    </div>
                )      
                break;                         
            case ('ShoeTop') :
                outfitPart = (
                    <div className={classes.Shoes}>
                        <div className={[classes.ShoeTop, classes.Red].join(' ' )}>
                            <div className={classes.ShoeTopHole}/>
                            <div className={classes.ShoeTopDetail}/>
                        </div>                                    
                        <div className={[classes.ShoeTop, classes.Red, classes.ShoeTopRight].join(' ' )}>
                            <div className={classes.ShoeTopHole}/>
                            <div className={classes.ShoeTopDetail}/>
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