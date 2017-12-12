import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import wrap from '../../../hoc/wrap/wrap';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.isOpen) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <wrap>
            <Backdrop show={props.isOpen} modalClose={props.close}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </wrap>
    )
}

export default SideDrawer;