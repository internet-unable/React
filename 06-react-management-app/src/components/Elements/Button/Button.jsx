export default function Button({btnTypeText, btnTypeOnDarkBg, children, onClick, ...props}) {
    const onDarkBg = 'text-neutral-400 bg-stone-800 hover:text-neutral-300 hover:bg-stone-600';
    const onLightBg = 'text-stone-50 bg-stone-900 hover:bg-stone-600';
    const typeButtonStyles = 'px-5 py-2.5 rounded-md';
    const typeTextStyles = 'text-black';
    let finalStyles = `${typeButtonStyles} ${onLightBg}`;

    if (btnTypeText) {
        finalStyles = typeTextStyles;
    }

    if (btnTypeOnDarkBg) {
        finalStyles = `${typeButtonStyles} ${onDarkBg}`;
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