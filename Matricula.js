//se declaran las constantes y se llaman scripts externos y los cursos----------
const opciones = {
  id: {
    demand : true,
    alias: 'i'
  },
  nombre: {
    demand : true,
    alias: 'n'
  },
  cedula: {
    demand : true,
    alias: 'c'
  }
}
const {cursos, imprimirCursos} = require ('./Cursos');
const argv = require('yargs')
            .command('inscribir', 'Inscripcion de cursos', opciones)
            .argv
const express = require('express')
const app = express()
//Funcion que crea el archivo de texto con la inscripción-----------------------
let crearArchivo = curso => {
  texto = 'El estudiante ' + argv.n + ', identificado con CC: ' + argv.c + '\n' +
          'se ha matriculado al curso \n' + curso.nombre + ' con id: '+ curso.id +
          ' el cual tiene un costo de '+ curso.valor + ' pesos y una intensidad horaria de ' + curso.duracion + ' horas.';
  app.get('/', function (req, res) {
    res.send(texto)
  })
}

//Validacion de matricula-------------------------------------------------------
if (argv.i == undefined) {
  imprimirCursos(cursos);
}
else {
  let curso = cursos.find( cu => cu.id == argv.i)
  if (curso == undefined) {
    app.get('/', function (req, res) {
      res.send("el id ingresado no coincide con el de ningun curso")
    })
    imprimirCursos(cursos);
  }
  else{
    crearArchivo(curso);
  }
}

app.listen(3000)
