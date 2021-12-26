const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)         // resolve solo se ejecuta luego de que
      })                      // el get sea exitoso
      .fail(() => reject(id)) // El reject se ejecuta solo si 
  })                          // se genera un error en el get
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)               // Retorna una promesa
  .then(function (personaje) {    // Si la promesa se resuelve ejecuta el then
                                  // pasando como argumento el valor de la promesa
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)                 // Si la promesa se rechaza ejecuta el .catch
                                  // pasando como argumento a "onError" el argumento
                                  // del reject (el resultado de la promesa)