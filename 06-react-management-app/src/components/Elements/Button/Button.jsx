export default function Button({btnType = 'button', children, onClick}) {
    const typeButtonStyles = 'px-4 py-2 bg-black text-white rounded';
    const typeTextStyles = 'text-black';
    let finalStyles = typeButtonStyles;

    if (btnType === 'text') {
        finalStyles = typeTextStyles;
    }

    return(
        <button
            type="button"
            className={finalStyles}
            onClick={onClick}
        >
            {children}
        </button>
    );
}