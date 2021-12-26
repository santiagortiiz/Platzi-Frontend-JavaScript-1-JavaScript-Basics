const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes() {                    // funcion asíncrona
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    var personajes = await Promise.all(promesas)        // La funcion se detiene aca hasta
    console.log(personajes)                             // que las promesas se resuelvan
  } catch (id) {                                        // pero el código sigue ejecutando 
    onError(id)                                         // otras cosas
  }
}

obtenerPersonajes()
