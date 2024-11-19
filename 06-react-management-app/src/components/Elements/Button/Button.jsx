export default function Button({btnTypeText, btnTypeOnDarkBg, children, onClick, ...props}) {
    const defaultStyles = 'px-4 py-2 rounded-md';
    const typeTextStyles = 'text-black outline-none hover:text-red-500 focus-visible:text-red-500 focus-visible:underline';

    const onDarkBg = 'text-stone-400 bg-stone-700 outline-2 outline-offset-2 outline-stone-100 hover:bg-stone-600 hover:text-stone-100 focus-visible:outline focus-visible:bg-stone-600 focus-visible:text-stone-100';
    const onLightBg = 'text-stone-50 bg-stone-900 hover:bg-stone-700 outline-2 outline-offset-2 outline-stone-900 focus-visible:bg-stone-700 focus-visible:outline';

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