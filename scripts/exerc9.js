const button_state = document.getElementById("btn");
button_state.addEventListener("click", () => {

    const result_area = document.getElementsByClassName("result_container")[0];

    const cambio = document.getElementById("cambio");
    const cambio_value = parseFloat(cambio.value.replace(",", "."));

    const valor_desejado = document.getElementById("valor_desejado");
    const valor_desejado_value = parseFloat(valor_desejado.value.replace(",", "."));

    const valor_convertido = cambio_value * valor_desejado_value;

    result_area.innerHTML = `<p>O valor convertido é = ${valor_convertido}.</p>`;

});