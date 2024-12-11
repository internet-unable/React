import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatcher = useDispatch();

    const handleIncrementCounter = () => {
        dispatcher({
            type: 'increment'
        });
    }

    const handleDecrementCounter = () => {
        dispatcher({
            type: 'decrement'
        });
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={handleDecrementCounter}>Decrement</button>
                <button onClick={handleIncrementCounter}>Increment</button>
            </div>
        </main>
    );
};

export default Counter;


// import { Component } from 'react';
// import { connect } from 'react-redux';

// class Counter extends Component {
//     handleDecrementCounter() {
//         this.props.increment();
//     }

//     handleIncrementCounter() {
//         this.props.decrement();
//     }

//     render() {
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//                 <button onClick={this.handleDecrementCounter.bind(this)}>Decrement</button>
//                 <button onClick={this.handleIncrementCounter.bind(this)}>Increment</button>
//             </div>
//         </main>
//     }
// }

// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({ type: 'increment' }),
//         decrement: () => dispatch({ type: 'decrement' })
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);