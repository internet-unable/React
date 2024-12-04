import { useState } from "react";

export function useInput(defaultValue, validationFn) {
    const [inputValue, setInputValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);
    const valueIsValid = validationFn(inputValue);

    function handleInputChange(event) {
        setInputValue(event.target.value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    return {
        value: inputValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    };
}