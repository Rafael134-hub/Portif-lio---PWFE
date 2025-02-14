const button_state = document.getElementById("btn");
button_state.addEventListener("click", () => {

    const result_area = document.getElementsByClassName("result_container")[0];
    let result_text = "";
    let conta_text = "";
    let fatorial = 1;

    const number = document.getElementById("number");
    number_value = parseInt(number.value.replace(",", "."));

    for (let i = number_value; i >= 1; i--){
        if (i == 1){
            conta_text += `${i} = `

        } else {
            conta_text += `${i} x `
        }
        
        fatorial *= i;
    }

    result_text += `<p>${conta_text}${fatorial}</p>`

    result_area.innerHTML = result_text;

});