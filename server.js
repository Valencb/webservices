const fs = require ('fs');
//const express = require ('express');

/*fs.appendFile('ejemplo.txt','Soy un documento',
function(error){
  if(error) console.log("no puedo guardar nada");
  console.log("Me he creado con éxito");
})*/
console.log("voy a leer el archivo")
//let lecture =fs.readFileSync('ejemplo.txt.', 'utf8');
fs.readFile('ejemplo.txt', 'utf8', function(err, data){
  if (err) console.log("ERROR AL LEER");
  console.log(data);
})
//console.log(lectura);
console.log("he terminado de leer el archivo");
