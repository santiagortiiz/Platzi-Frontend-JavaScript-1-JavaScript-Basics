var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27,
  obj: sacha
}

let a = [sacha, dario]
console.log(a.forEach(i=>console.log(i)))

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: 'Gomez' })
