const button_state = document.getElementById("btn")
button_state.addEventListener("click", () =>{

    const result_container = document.querySelector(".result_container p");
    let result_text = "";

    const nota_1 = document.getElementById("nota_1");
    const nota_1_value = parseFloat(nota_1.value.replace(",", "."));

    const nota_2 = document.getElementById("nota_2");
    const nota_2_value = parseFloat(nota_2.value.replace(",", "."));
    
    const media = ((nota_1_value + nota_2_value) / (2)).toFixed(2);

    if (media >= 6){
        console.log("Aluna(o) aprovada(o).");
        result_text += `<p>Com as notas ${nota_1_value} e ${nota_2_value}, sua média foi = ${media} e você foi: APROVADA(O)</p>`;
    } else{
        console.log("Aluna(o) não aprovada(o).");
        result_text += `<p>Com as notas ${nota_1_value} e ${nota_2_value}, sua média foi = ${media} e você foi: REPROVADA(O)</p>`;
    }

    if((nota_1_value % 2 == 0) || (nota_1_value == 0)){
        console.log("A primeira nota é par.");
        result_text += `<p>A primeira nota informada: ${nota_1_value} é par.</p>`;

    } else if (nota_1_value % 2 == 1){
        console.log("A primeira nota é ímpar.");
        result_text += `<p>A primeira nota informada: ${nota_1_value} é ímpar.</p>`;

    } else{
        console.log("A primeira nota não é par e nem ímpar.");
        result_text += `<p>A primeira nota informada: ${nota_1_value} não é ímpar e nem par.</p>`;
    }


    if((nota_2_value % 2 == 0) || (nota_2_value == 0)){
        console.log("A segunda nota é par.");
        result_text += `<p>A segunda nota informada: ${nota_2_value} é par.</p>`;

    } else if (nota_2_value % 2 == 1){
        console.log("A segunda nota é ímpar.");
        result_text += `<p>A segunda nota informada: ${nota_2_value} é ímpar.</p>`;

    } else{
        console.log("A segunda nota não é par e nem ímpar.");
        result_text += `<p>A segunda nota informada: ${nota_2_value} não é ímpar e nem par.</p>`;
    }

    result_container.innerHTML = result_text;

});