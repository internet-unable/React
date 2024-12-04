import Modal from './components/Modal/Modal.jsx';
import Cart from "./components/Cart/Cart.jsx";
import Checkout from './components/Checkout/Checkout.jsx'
import Product from './components/Product/Product.jsx';

function App() {
    return (
        <>
            <Modal>
                <Cart />
                {/* <Checkout /> */}
            </Modal>

            <header id="main-header">
                <div id="title">
                    <img />
                    <h1>Reactfood</h1>
                </div>
                <button type="button" className="button">Cart (3)</button>
            </header>

            <ul id="meals">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </ul>
        </>
    );
}

export default App;
