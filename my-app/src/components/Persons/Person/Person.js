import React,{Component,Fragment} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css'
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'

class Person extends Component{
    render(){
        console.log('[Person.js] rendering')
        return (
            <React.Fragment >
                <p

                    key="i1"
                    onClick={this.props.click}
                >I'm {this.props.name}, I'm {this.props.age} years old</p>
                <p
                    key="i2"
                >{this.props.children}</p>
                <input
                    key="i3"
                     type="text"
                    onChange={this.props.changed}
                    defaultValue={this.props.name}/>
            </React.Fragment>
    )
    }

}
Person.propTypes = {
    click:PropTypes.func,
    name:PropTypes.string,

}
export default withClass(Person,classes.Person)
