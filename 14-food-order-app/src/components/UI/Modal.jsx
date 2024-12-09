import { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(({ children, className = '', /*open*/ }, ref) => {
    const dialog = useRef();

    // useEffect(() => {
    //     if (open) {
    //         dialog.current.showModal();
    //     }
    // }, []);

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
        <dialog className={`modal ${className}`} ref={dialog}>
            {children}
        </dialog>,
        document.getElementById('modal')
    );
});

export default Modal;