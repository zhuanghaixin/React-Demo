import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
        <div className={classes.Logo}><Logo></Logo></div>
        <nav className={classes.DeskopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
)
export default toolbar
