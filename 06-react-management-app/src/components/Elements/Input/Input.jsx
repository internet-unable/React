export default function Input({label, type = 'text'}) {
    return(
        <>
            {label && <label>{label}</label>}
            <input type={type} />
        </>
    );
}