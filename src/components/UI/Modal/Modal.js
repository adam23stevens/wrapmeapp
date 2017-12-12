import React, {Component} from 'react';
import classes from './Modal.css';
import wrap from '../../../hoc/wrap/wrap';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show ||
               nextProps.children !== this.props.children;
    }

    render() {
        return (
            <wrap>
                <Backdrop show={this.props.show} modalClose={this.props.modalClose}/>
                    <div className={classes.Modal}
                         style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'}}>
                                {this.props.children}
                    </div>      
            </wrap>
        )
    }
}

export default Modal;