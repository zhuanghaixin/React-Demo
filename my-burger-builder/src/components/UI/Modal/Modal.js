import React,{Component} from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show!==this.props.show){
            return true
        }else{
            return false
        }
    }
    componentWillUpdate(){
        console.log('[Modal] WillUpdate')
    }
    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                ></Backdrop>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         oyipacity: this.props.show ? "1" : "0"
                     }}

                >
                    {this.props.children}
                </div>
            </Aux>
        )


    }
}

export default Modal
