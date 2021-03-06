const BASE_URL = 'https://pets.dev-apis.com/'
/**
 * Object → Promise
 * returns request promise with arr of pets
 */

export function getPetsForAdoption(data) {
  const {location, breed, type} = data
  const endpoint =
    BASE_URL + `animals?location=${location}&breed=${breed}&type=${type}`

  return fetchFrom(endpoint)
}
/**
 * String → Promise
 * returns promise of array animal breeds
 */

export function getAnimalBreeads(breed) {
  const BREED_URL = BASE_URL + `/types/${breed}/breeds`
  return fetchFrom(BREED_URL)
}

/**
 * String → Promise
 * asyncronously get data from api
 */

function fetchFrom(endpoint) {
  return fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject(handleFailResponse(response))
    }
  })
}

/**
 * Response → Error
 * return error msg based on status
 */

function handleFailResponse(res) {
  switch (res.status) {
    case 404: {
      return new Error(`Can't find what you looking for`)
    }
    default: {
      return new Error('Something went wrong!')
    }
  }
}
