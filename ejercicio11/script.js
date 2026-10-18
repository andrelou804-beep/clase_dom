console.log("conectado exitosamente");
const inputnombre=document.querySelector("#nombre");
const inputprofesion=document.querySelector("#profesion");
const btncrear=document.querySelector("#btnCrear");
const contenedor=document.querySelector("#contenedor");
console.log(inputnombre, btncrear);
btncrear.addEventListener("click", function(){
    console.log("me hicieron click");
    const nombre=inputnombre.value;
    const profesion=inputprofesion.value;
    const tarjeta=document.createElement("div");
    const nombretarjeta=document.createElement("p");
    const profesiontarjeta=document.createElement("p");
    nombretarjeta.textContent = "Nombre: " + nombre;
    profesiontarjeta.textContent = "Profesión: " + profesion;
    tarjeta.appendChild(nombretarjeta);
    tarjeta.appendChild(profesiontarjeta);
    contenedor.appendChild(tarjeta);
    inputnombre.value="";
    inputprofesion.value="";

});
