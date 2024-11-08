export default function Input({ label, inputType = 'number', inputValue, onChange }) {
    return (
        <div>
            <label>{label}</label>
            <input
                type={inputType}
                value={inputValue}
                onChange={onChange}
                min="1"
            />
        </div>
    );
}