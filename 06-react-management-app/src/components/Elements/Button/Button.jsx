export default function Button({btnTypeText, btnTypeOnDarkBg, children, onClick, ...props}) {
    const defaultStyles = 'px-5 py-2.5 rounded-md';
    const typeTextStyles = `${defaultStyles} + text-black hover:text-red-500 focus:text-red-500`;

    const onDarkBg = 'text-neutral-400 bg-stone-800 hover:bg-stone-700 focus:bg-stone-700';
    const onLightBg = 'text-stone-50 bg-stone-900 hover:bg-stone-700 focus:bg-stone-700';

    let finalStyles = `${defaultStyles} ${onLightBg}`;

    if (btnTypeText) {
        finalStyles = typeTextStyles;
    }

    if (btnTypeOnDarkBg) {
        finalStyles = `${defaultStyles} ${onDarkBg}`;
    }

    return(
        <div {...props}>
            <button
                type="button"
                className={finalStyles}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}