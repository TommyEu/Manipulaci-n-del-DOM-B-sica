const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const pResult = document.querySelector("#pResult");
function btnOnClick(){
    sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = `Resultado = ${sumaInputs}`;
}
