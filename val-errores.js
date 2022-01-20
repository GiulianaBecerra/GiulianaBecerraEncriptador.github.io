
function validateString(input){
    array = input.split('');
    var error = false;
    for(var i = 0; i < array.length; i++){
        if (array[i].codePointAt(0) != 32 && (array[i].codePointAt(0) < 97 || array[i].codePointAt(0) > 122)){
            error = true;
            break;
        }
    }
    return error;
}

//Mensaje error
function errorMsg() {
    var error = document.querySelector("#error");
    error.textContent = "ERROR: ha ingresado un caracter inválido.";
}