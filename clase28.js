/* DE AQUI EN ADELANTE CAMBIAR SWAPI.IO POR SWAPI.DEV */
const API_URL = 'https://swapi.dev/api/' 
const PEOPLE_URL = 'people/:id'
    
/* metodo get de jquery: get(url, "domain", callback) */
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true } // Indicador de que se hará un request a una pagina diferente a la actual

const onPeopleResponse = function (persona) {
  console.log(arguments) // Imprime los parametros que recibe el metodo get
  console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)
