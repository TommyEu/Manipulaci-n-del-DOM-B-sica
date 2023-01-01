const h1 = document.querySelector('h1');
const parrafito =  document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');//para llamar clases anteponer
const p = document.querySelectorAll('p');//Mostrará el contenido de cada etiqueta p, sin importar si lleva clase o id
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});


document.querySelector("p").innerHTML += " modificado desde <b>JavaScript</b>";

pid.innerHTML += " también modificado desde JS";

//asignar un atributo a un elemento
//h1.setAttribute('class', 'rojo');//buscar nuevo atributo en consola
h1.classList.add("rojo");
h1.classList.remove("rojo");
h1.classList.toggle('verde');
h1.classList.contains("verde");

input.value = '293912'; 

const img = document.
createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/736x/df/13/3d/df133da72c4bc4795798b7fda59e3b84.jpg');
pid.innerHTML = "";//Desaparece todo el contenido de el elemento #pid
pid.appendChild(img);//vuelve a aparecer la img con appendChild (pid.append() no es suficiente para esto)
