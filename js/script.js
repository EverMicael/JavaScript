var vNumeroUno = 0;
var vNumeroDos = 0;

function sumar() {

    var suma = 0;

    vNumeroUno = document.getElementById("numUno").value;
    vNumeroDos = document.getElementById("numDos").value;

    if (vNumeroUno.length > 0 && vNumeroDos.length > 0) {

        suma = parseFloat(vNumeroUno) + parseFloat(vNumeroDos);

        document.getElementById("idResultado").innerHTML = "resultado: " + suma;


        // alert("La suma es " + suma);
    } else {
        alert("debe ingresar 2 números")
    }

}

function restar() {
    var resta = 0;

    vNumeroUno = document.getElementById("numUno").value;
    vNumeroDos = document.getElementById("numDos").value;

    if (vNumeroUno.length > 0 && vNumeroDos.length > 0) {
        resta = parseFloat(vNumeroUno) - parseFloat(vNumeroDos);

        document.getElementById("idResultado").innerHTML = "resultado: " + resta;

        // alert("La resta es " + resta);
    } else {
        alert("debe ingresar 2 números")
    }



}

function dividir() {

    var divisor = 0;

    vNumeroUno = document.getElementById("numUno").value;
    vNumeroDos = document.getElementById("numDos").value;

    if (vNumeroUno.length > 0 && vNumeroDos.length > 0) {
        vNumeroUno = parseFloat(vNumeroUno);
        vNumeroDos = parseFloat(vNumeroDos);

        if (vNumeroDos > 0) {
            divisor = vNumeroUno / vNumeroDos;

            document.getElementById("idResultado").innerHTML = "resultado: " + divisor;

            //alert("la división es: " + divisor)

        } else {
            alert("la división entre cero no existe");
        }
    } else {
        alert("debe ingresar 2 números")
    }


}