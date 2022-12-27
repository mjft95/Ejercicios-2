function parImpar (numero) {
    if (numero%2==0){
        console.log ("El número es par");
    }
    else {
        console.log (" El número es impar");
    }
}
parImpar (10);

function parImparTernario (numero) {
    console.log (numero % 2 == 0 ? "par" : "impar");
}
parImparTernario(7);
