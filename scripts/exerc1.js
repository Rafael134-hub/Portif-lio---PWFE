function diferenca(){
    const number_1 = document.getElementById("number_1");
    let number_1_value = parseFloat(number_1.value.replace(",", "."));

    const number_2 = document.getElementById("number_2");
    let number_2_value = parseFloat(number_2.value.replace(",", "."));

    let diferenca_numeros = number_1_value - number_2_value;

    let text_area = document.getElementsByClassName("result_container")[0];
    text_area.innerHTML = `A diferença entre ${number_1_value} e ${number_2_value} é = ${diferenca_numeros}`;
}

const button_state = document.getElementById("btn");
button_state.addEventListener("click", diferenca);