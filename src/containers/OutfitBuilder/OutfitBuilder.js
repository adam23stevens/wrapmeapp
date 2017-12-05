import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Outfit from '../../components/Outfit/Outfit';

class OutfitBuilder extends Component {

    state = {
        outfitParts: {
            salad: 1,
            bacon: 2,
            meat: 1,
            cheese: 2,
        }
    }
    
    render(){
        return (
            <Aux>
                <Outfit outfitParts = {this.state.outfitParts}/>
                <div>Build controls</div>
            </Aux>
        );
    }
}

export default OutfitBuilder;