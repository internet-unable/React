export default function TextArea({label}) {
    return(
        <>
            {label && <label>{label}</label>}
            <textarea></textarea>
        </>
    );
}