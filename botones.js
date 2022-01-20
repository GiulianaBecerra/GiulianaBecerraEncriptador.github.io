//Botones
var buttonEncrypt = document.querySelector("#btn-encrypt");
var buttonDecrypt = document.querySelector("#btn-decrypt");
var buttonCopy = document.querySelector("#btn-copy");

//Boton Encriptar
buttonEncrypt.addEventListener("click", function (event) {
    event.preventDefault();
    var input = captureInput();

    //Validar y mensaje "error"
    var error = validateString(input);
    if (error) {
        errorMsg();
        return;
    }
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";

    //Llamado a la funcion encriptar
    var encryptedString = encrypt(input);

    //salida Cifrada
    output(encryptedString);

});

//Boton Desencriptar
buttonDecrypt.addEventListener("click", function (event) {
    event.preventDefault();
    var input = captureInput();

    //Validar y mensaje "error"
    var error = validateString(input);
    if (error) {
        errorMsg();
        return;
    }
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";

    //Llamado a la funcion Desencriptar
    var decryptedString = decrypt(input);

    //Salida Descifrada
    output(decryptedString);

});

//Boton Copiar
buttonCopy.addEventListener("click", function (event) {
    event.preventDefault();

    //Llamado a la funcion Copiar
    copy();
});