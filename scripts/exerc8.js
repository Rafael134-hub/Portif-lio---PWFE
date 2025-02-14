const button_state = document.getElementById("btn");
button_state.addEventListener("click", () => {

    const result_area = document.getElementsByClassName("result_container")[0];

    const ano = document.getElementById("ano");
    const ano_value = parseInt(ano.value.replace(",", "."));

    if ((ano_value % 4 == 0 && ano_value % 100 != 0) || (ano_value % 400 == 0)){
        result_area.innerHTML = `<p>O ano ${ano_value} é bisexto.</p>`;

    } else{
        result_area.innerHTML = `<p>O ano ${ano_value} não é bisexto.</p>`;
    }

});