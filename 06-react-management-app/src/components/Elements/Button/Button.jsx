export default function Button({type = "button", isTypeText, isOnDarkBg, children, onClick, ...props}) {
    const defaultStyles = 'px-6 py-2 rounded-md outline-2 outline-offset-2 focus-visible:outline';
    const typeTextStyles = 'text-stone-800 outline-none hover:text-red-500 focus-visible:text-red-500 focus-visible:underline';

    const onDarkBg = 'bg-stone-700 text-stone-400 outline-stone-100 hover:bg-stone-600 hover:text-stone-100 focus-visible:bg-stone-600 focus-visible:text-stone-100';
    const onLightBg = 'bg-stone-800 text-stone-50 outline-stone-800 hover:bg-stone-950 focus-visible:bg-stone-950';

    let finalStyles = `${defaultStyles} ${onLightBg}`;

    if (isTypeText) {
        finalStyles = typeTextStyles;
    }

    if (isOnDarkBg) {
        finalStyles = `${defaultStyles} ${onDarkBg}`;
    }

    return(
        <div {...props}>
            <button
                type={type}
                className={finalStyles}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}