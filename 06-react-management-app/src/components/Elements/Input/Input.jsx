import { forwardRef } from "react";

const BOTTOM_OUTLINE = 'bottom-outline';
const ROUND_OUTLINE = 'rounded-outline';

const Input = forwardRef(({containerClasses, label, id, type = 'text', stylesType}, ref) => {
    const labelStyles = 'text-sm font-bold uppercase text-stone-500 mb-1';
    const defaultInputStyles = 'w-full p-1 rounded-sm text-stone-600 bg-stone-200 outline-none';
    const typeBottomOutlineInputStyles = 'border-b-2 border-stone-300 focus:border-stone-900';
    const typeRoundOutlineInputStyles = 'outline outline-2 outline-slate-50 focus:outline-blue-500';
    let finalInputStyles = '';

    if (stylesType === BOTTOM_OUTLINE) {
        finalInputStyles = `${defaultInputStyles} ${typeBottomOutlineInputStyles}`;
    }

    if (stylesType === ROUND_OUTLINE) {
        finalInputStyles = `${defaultInputStyles} ${typeRoundOutlineInputStyles}`
    }

    return(
        <>
            <div className={containerClasses}>
                {label && <label htmlFor={id} className={labelStyles}>{label}</label>}

                {type === 'textarea' ? (
                    <textarea id={id} className={finalInputStyles} ref={ref}></textarea>
                ) : (
                    <input type={type} id={id} className={finalInputStyles} ref={ref} />
                )}
            </div>
        </>
    );
});

export default Input;