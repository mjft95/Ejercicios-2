//Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
function mayoresDeEdad(personas) {
  const mayores = [];
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad >= 18) {
      mayores.push(personas[i]);
    }
  }
  console.log(mayores);
}

const grupo = [
  { nombre: "Juan", edad: 18 },
  { nombre: "María", edad: 16 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Pablo", edad: 15 },
  { nombre: "Laura", edad: 19 },
];  
mayoresDeEdad(grupo);

//Dime cual es la persona más mayor del array.
function masMayor (personas){
  let masMayor = personas [0];
  for (i=1; i<personas.length; i++) {
    if (personas[i].edad>masMayor.edad) {
      masMayor = personas[i];
    }
  }
console.log (masMayor);
}
masMayor(grupo);

//Dime cual es la persona más joven del array
function masJoven (personas) {
  let masJoven = personas [0];
  for (i=1; i<personas.length; i++) {
    if (personas[i].edad<masJoven.edad) {
      masJoven = personas[i];
    }
  }
  console.log (masJoven);
}
masJoven(grupo);


