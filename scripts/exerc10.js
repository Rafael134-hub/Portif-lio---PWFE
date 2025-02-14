const button_state = document.getElementById("btn");
button_state.addEventListener("click", () => {

    const result_area = document.getElementsByClassName("result_container")[0];

    const number = document.getElementById("number")
    const number_value = parseFloat(number.value.replace(",", "."))

    let result_text = "";

    for (let i = 1; i <= 10; i++){
        result_text += `<p>${number_value} x ${i} = ${number_value * i}</p>`;
    }

    result_area.innerHTML = result_text;

});