const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

/* Para ejecutar en orden los personajes deben llamarse
mediante callbacks, aunque se pierde el paralelismo del
get

El parámetro del Callback no puede ser una función 
invocada, debe ser la referencia o la declaración de una
función
*/