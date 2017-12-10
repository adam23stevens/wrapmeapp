import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () =>  (
    <div className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </div>
)

export default navigationItems;