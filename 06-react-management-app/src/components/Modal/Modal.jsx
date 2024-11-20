import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from '../Elements/Button/Button';

const Modal = forwardRef(({ children }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded shadow-md">
            {children}
            <form method="dialog" className="text-right">
                <Button type="submit">Close</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
});

export default Modal;