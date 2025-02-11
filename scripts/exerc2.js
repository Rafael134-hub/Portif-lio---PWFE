function teste() {
    const number = document.getElementById("number_test");
    let e_impar_ou_par = document.getElementsByClassName("result_container")[0]; 

    number.addEventListener("keyup", () => {
        const number_value = parseInt(number.value); 

        if (number_value % 2 == 0) {
            e_impar_ou_par.innerHTML = `<p>É par!</p>`;
            console.log('É par');

        } else if (number_value % 2 == 1){
            e_impar_ou_par.innerHTML = `<p>É ímpar!</p>`;
            console.log('É ímpar');
        } else {
            e_impar_ou_par.innerHTML = `<p>Valor inválido!</p>`;
            console.log('Valor inválido.');
        }
    });
}

teste();
