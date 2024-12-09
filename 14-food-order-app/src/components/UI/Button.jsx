export default function Button({ className, textOnly, children, ...props }) {
    const cssClass = textOnly ? 'text-button' : 'button';

    return (
        <button
            className={`${cssClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}