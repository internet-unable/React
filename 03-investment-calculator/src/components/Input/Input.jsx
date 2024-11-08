export default function Input({ label, inputType = 'number' }) {
    return (
        <div>
            <label>{label}</label>
            <input type={inputType} />
        </div>
    );
}