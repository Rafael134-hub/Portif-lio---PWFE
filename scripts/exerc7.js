button_state = document.getElementById("btn");
button_state.addEventListener("click", () => {
    
    const result_area = document.querySelector(".result_container");
    let result = ""

    const height = document.getElementById("height");
    const height_value = parseFloat(height.value.replace(",", "."));

    const weight = document.getElementById("weight");
    const weight_value = parseFloat(weight.value.replace(",", "."));

    imc = ((weight_value) / (height_value ** 2)).toFixed(2); 

    result += `<p>Seu IMC é = ${imc}</p>`;

    const peso_ideal_inicio = ((height_value ** 2) * (18.5)).toFixed(2);
    const peso_ideal_fim = ((height_value ** 2) * (24.9)).toFixed(2);

    result += `<h3>Seu peso ideal está entre ${peso_ideal_inicio}kg e ${peso_ideal_fim}kg.</h3>`;

    if(imc < 18.5){
        result += `<p>Você está abaixo do peso ideal.</p>`;

    } else if(imc <= 24.9){
        result += `<p>Você está dentro de seu peso ideal.</p>`;

    } else if(imc <= 29.9){
        result += `<p>Você está acima do peso ideal.</p>`;

    } else if(imc <= 34.9){
        result += `<p>Você está com obesidade grau 1.</p>`;

    }  else if(imc <= 39.9){
        result += `<p>Você está com obesidade grau 2.</p>`;

    } else {
        result += `<p>Você está com obesidade grau 3.</p>`;
    } 

    result_area.innerHTML = result;

});