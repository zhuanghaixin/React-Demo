import React, {Component} from 'react'
import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state={
        showSideDrawer:false
    }
    sideDrawerCloseHandler=(props)=>{
        this.setState({showSideDrawer:false})
    }

    //不建议这么写
    // sideDrawerToggleHandler=(props)=>{
    //     this.setState({showSideDrawer:!this.state.showSideDrawer})
    // }
    sideDrawerToggleHandler=(props)=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout
