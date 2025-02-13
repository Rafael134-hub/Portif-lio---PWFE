button_state = document.getElementById("btn")
button_state.addEventListener("click", () => {
    const width = document.getElementById("width");
    const width_value = parseFloat(width.value.replace(",", "."))

    const height = document.getElementById("height");
    const height_value = parseFloat(height.value.replace(",", "."))

    area = (height_value * width_value).toFixed(2);

    const result_area = document.querySelector('.result_container p')
    result_area.textContent = `A área de ${width_value} e ${height_value} é = ${area}.`;
    
});