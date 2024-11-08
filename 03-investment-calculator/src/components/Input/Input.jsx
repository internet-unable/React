export default function Input({ label, inputType = 'number', inputValue, onChange }) {
    return (
        <p>
            {label && <label>{label}</label>}
            <input
                type={inputType}
                value={inputValue}
                onChange={onChange}
                min={inputType === 'number' && '1'}
            />
        </p>
    );
}