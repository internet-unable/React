import { Component } from "react";
import classes from "./User.module.css";

class User extends Component { // extends Component, makes posible to use this.props
    // render() is a method that React expects for class component to have
    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}

// const User = (props) => {
//     return <li className={classes.user}>{props.name}</li>;
// };

export default User;
