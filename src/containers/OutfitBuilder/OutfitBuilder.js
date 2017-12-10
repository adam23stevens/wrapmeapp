import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Outfit from '../../components/Outfit/Outfit';

class OutfitBuilder extends Component {

    state = {
        outfitParts: {
            shirt: 'red',
            trouser: 'navy',
            shoes: 'black'
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