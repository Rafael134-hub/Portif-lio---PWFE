let celsius = document.getElementById("celsius");
let celsius_value = 0.0

let fahrenheits = document.getElementById("fahrenheits");
let fahrenheits_value = 0.0

function converter(type){
    celsius_value = parseFloat(celsius.value.replace(",", "."));
    fahrenheits_value = parseFloat(fahrenheits.value.replace(",", "."));

    if (type == 'celsius'){
        fahrenheits.value = ((celsius_value * 9/5) + (32)).toFixed(2);

    } else if(type == 'fahrenheits'){
        celsius.value = ((fahrenheits_value -32) * (5/9)).toFixed(2);
    }
}

celsius.addEventListener("keyup", function() {converter('celsius')})
fahrenheits.addEventListener("keyup", function() {converter('fahrenheits')})
