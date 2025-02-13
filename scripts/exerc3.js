function is_multiple(){
    const result_area = document.getElementsByClassName("result_container")[0];

    const number_1 = document.getElementById("number_1");
    let number_1_value = parseFloat(number_1.value.replace(",", "."));

    const number_2 = document.getElementById("number_2")
    let number_2_value =parseFloat(number_2.value.replace(",", "."));

    if((number_1_value % number_2_value == 0) || (number_2_value % number_1_value == 0)){
        console.log('É primee');
        result_area.innerHTML = `<p>Os números ${number_1_value} e ${number_2_value} são múltiplos.</p>`
    } else {
        console.log('Não é primee');
        result_area.innerHTML = `<p>Os números ${number_1_value} e ${number_2_value} não são múltiplos.</p>`
    }
} 

button_state = document.getElementById("btn");
button_state.addEventListener("click", is_multiple)