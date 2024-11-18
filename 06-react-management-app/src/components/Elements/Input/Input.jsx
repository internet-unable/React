import { forwardRef } from "react";

const BOTTOM_OUTLINE = 'bottom-outline';
const ROUND_OUTLINE = 'rounded-outline';

const Input = forwardRef(({containerClasses, label, id, type = 'text', stylesType, isInputValid = true}, ref) => {
    const labelStyles = 'text-neutral-500 font-semibold uppercase mb-1';
    const defaultInputStyles = 'w-full bg-stone-300 px-2 py-2 rounded';
    const typeBottomOutlineInputStyles = 'border-b-2';
    const typeRoundOutlineInputStyles = 'outline outline-2';
    let finalInputStyles = '';

    if (stylesType === BOTTOM_OUTLINE) {
        finalInputStyles = `${defaultInputStyles} ${typeBottomOutlineInputStyles}`;

        if (isInputValid) {
            finalInputStyles += ' border-stone-400 focus:border-black';
        } else {
            finalInputStyles += ' border-red-500 focus:border-black';
        }
    }

    if (stylesType === ROUND_OUTLINE) {
        finalInputStyles = `${defaultInputStyles} ${typeRoundOutlineInputStyles}`

        if (isInputValid) {
            finalInputStyles += ' outline-slate-50 focus:outline-blue-500';
        } else {
            finalInputStyles += ' outline-red-500 focus:outline-blue-500';
        }
    }

    return(
        <>
            <div className={containerClasses}>
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