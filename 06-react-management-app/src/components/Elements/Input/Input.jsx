import { forwardRef } from "react";

const BOTTOM_OUTLINE = 'bottom-outline';
const ROUND_OUTLINE = 'rounded-outline';

const Input = forwardRef(({label, id, type = 'text', stylesType, isInputValid = true}, ref) => {
    const labelStyles = 'text-neutral-500 font-semibold uppercase mb-1';
    const defaultInputStyles = 'bg-stone-300 px-2 py-2 rounded';
    const typeBottomOutlineInputStyles = 'border-b-2';
    const typeRoundOutlineInputStyles = 'focus:outline focus:outline-2 focus:outline-blue-600';
    let finalInputStyles = '';

    if (stylesType === BOTTOM_OUTLINE) {
        finalInputStyles = `${defaultInputStyles} ${typeBottomOutlineInputStyles}`;

        if (isInputValid) {
            finalInputStyles += ' border-stone-400 focus:border-black';
        } else {
            finalInputStyles += ' border-red-500';
        }
    }

    if (stylesType === ROUND_OUTLINE) {
        finalInputStyles = `${defaultInputStyles} ${typeRoundOutlineInputStyles}`
    }

    return(
        <>
            <div className="flex flex-col mb-4">
                {label && <label className={labelStyles} htmlFor={id}>{label}</label>}
                {type === 'textarea' ? (
                    <textarea ref={ref} className={finalInputStyles} id={id}></textarea>
                ) : (
                    <input ref={ref} className={finalInputStyles} type={type} id={id} />
                )}
            </div>
        </>
    );
});

export default Input;