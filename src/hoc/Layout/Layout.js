import React, {Component} from 'react';
import Wrap from '../wrap/wrap'
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    hideSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    showSideDrawerHandler = (prevState) => {
        this.setState({showSideDrawer: !prevState.showSideDrawer});
    }

    render(){
        return (
        <Wrap>
            <Toolbar mobileNavClicked={this.showSideDrawerHandler}/>
            <SideDrawer 
                isOpen={this.state.showSideDrawer} 
                close={this.hideSideDrawerHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Wrap>
        )
    }
}

export default Layout;