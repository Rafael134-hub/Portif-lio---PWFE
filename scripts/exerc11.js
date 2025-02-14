const button_state = document.getElementById("btn");
button_state.addEventListener("click", () => {

    const result_area = document.getElementsByClassName("result_container")[0];

    let result_text = "";

    const bot_choices = ["pedra", "papel", "tesoura"];
    const bot_choice = bot_choices[Math.floor(Math.random() * bot_choices.length)];

    const user_choice = document.getElementById("choice").value.toLowerCase();

    result_text += `<p>Eu escolhi ${bot_choice} e você escolheu ${user_choice}.</p>`;

    if(bot_choice == "tesoura" && user_choice == "papel"){
        result_text += "<p>Eu ganhei!</p>"

    } else if(bot_choice == "tesoura" && user_choice == "pedra"){
        result_text += "<p>Você ganhou!</p>"

    } else if(bot_choice == "tesoura" && user_choice == "tesoura"){
        result_text += "<p>Empatamos!</p>"

    } else if(bot_choice == "papel" && user_choice == "pedra"){
        result_text += "<p>Eu ganhei!</p>"

    } else if(bot_choice == "papel" && user_choice == "tesoura"){
        result_text += "<p>Você ganhou!</p>"

    } else if(bot_choice == "papel" && user_choice == "papel"){
        result_text += "<p>Empatamos!</p>"

    } else if(bot_choice == "pedra" && user_choice == "pedra"){
        result_text += "<p>Empatamos!</p>"

    } else if(bot_choice == "pedra" && user_choice == "papel"){
        result_text += "<p>Você ganhou!</p>"

    } else if(bot_choice == "pedra" && user_choice == "tesoura"){
        result_text += "<p>Eu ganhei!</p>"

    }

    result_area.innerHTML = result_text;

});