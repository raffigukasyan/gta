export default function checkUrl(e, setValue) {
    const inputValue = e.target.value;
		
    if (
        inputValue === '' || // Разрешаем пустую строку
        (inputValue.length === 1 && inputValue === 'h') ||
        (inputValue.length === 2 && inputValue === 'ht') ||
        (inputValue.length === 3 && inputValue === 'htt') ||
        (inputValue.length === 4 && inputValue === 'http') ||
        (inputValue.length > 4 && inputValue.startsWith('http'))
        ) {

        setValue(e.target.value)
    }
}