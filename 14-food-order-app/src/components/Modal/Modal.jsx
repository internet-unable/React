import { forwardRef, useRef, useContext, useImperativeHandle } from 'react';
import { AppContext } from '../../store/cart-context.jsx';
import { createPortal } from 'react-dom';

const Modal = forwardRef(({ children, onCloseDialogClick, nextStepLable, onNextStepClick }, ref) => {
    const { cart } = useContext(AppContext);
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            }
        };
    });

    return createPortal(
        <dialog className="modal" ref={dialog}>
            {children}
            
            <div className="modal-actions">
                <button
                    type="button"
                    className="text-button"
                    onClick={onCloseDialogClick}
                >
                    Close
                </button>

                {cart.length > 0 && (
                    <button
                        type="button"
                        className="button"
                        onClick={onNextStepClick}
                    >
                        {nextStepLable}
                    </button>
                )}
            </div>
        </dialog>,
        document.getElementById('modal')
    );
});

export default Modal;