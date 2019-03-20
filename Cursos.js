
//Arreglo con los cursos ofrecidos----------------------------------------------
let cursos = [{
  nombre: 'Ingles',
  id: 10001,
  duracion: 64,
  valor: 410000
},
{
  nombre: 'Interpretacion',
  id: 10002,
  duracion: 48,
  valor: 295000
},
{
  nombre: 'Iniciacion deportiva',
  id: 10003,
  duracion: 48,
  valor: 135000
},
{
  nombre: 'Curso Node.js',
  id: 10004,
  duracion: 120,
  valor: 0
}
]

//Funcion que imprime los cursos ofrecidos--------------------------------------
let imprimirCursos = lista_cursos=> {
  for (var i = 0; i < lista_cursos.length; i++) {
    let curso = lista_cursos[i]
    setTimeout(function(){
      console.log("El curso de "+ curso.nombre+ " con id "+ curso.id + " tiene una duracion de "+ curso.duracion+ " horas y un valor de " + curso.valor + " pesos.");
    },(i+1)*2000)
  }
}

//------------------------------------------------------------------------------
module.exports = {
  cursos,
  imprimirCursos
};
