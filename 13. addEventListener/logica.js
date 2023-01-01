const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const pResult = document.querySelector("#pResult");
const btn = document.querySelector("#btnCalcular");
const form = document.querySelector("#form");


function sumarInputValues(){
    event.preventDefault();//Previene refresh automático del evento submit
    sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = `Resultado = ${sumaInputs}`;
}

form.addEventListener('submit', sumarInputValues/*la func. se llama sin paréntesis */) 
//Escucha el evento especificado ('click')


/*Otra forma de resolverlo sin preventDefault()*/


// function sumarInputValues(){
//     sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerText = `Resultado = ${sumaInputs}`;
// }//En el HTML, especificar manualmente el tipo 'button' a nuestro botón para que ya no sea por defecto de tipo 'submit' y así no recargue la página

// btn.addEventListener('click', sumarInputValues);

