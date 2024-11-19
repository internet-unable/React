export default function Button({btnTypeText, btnTypeOnDarkBg, children, onClick, ...props}) {
    const defaultStyles = 'px-4 py-2 rounded-md text-stone-400 outline-2 outline-offset-2 hover:text-stone-100 focus-visible:outline focus-visible:text-stone-100';
    const typeTextStyles = 'text-stone-900 outline-none hover:text-red-500 focus-visible:text-red-500 focus-visible:underline';

    const onDarkBg = 'bg-stone-700 outline-stone-100 hover:bg-stone-600 focus-visible:bg-stone-600';
    const onLightBg = 'bg-stone-900 outline-stone-900 hover:bg-stone-700 focus-visible:bg-stone-700';

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