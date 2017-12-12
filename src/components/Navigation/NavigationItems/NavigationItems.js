import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = () =>  (
    <div className={classes.NavigationItems}>
        <NavigationItem link='/' active>Outfit</NavigationItem>
        <NavigationItem link='/'>Stats</NavigationItem>
    </div>
)

export default navigationItems;