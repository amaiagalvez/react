export function cleanStorage () {
  window.localStorage.removeItem('searchs')
}

export function saveSearchToStorage (filter) {
  let searchs = window.localStorage.getItem('searchs')

  if (filter !== '') {
    if (searchs === null) {
      searchs = filter
    } else {
      searchs = searchs + ',' + filter
    }
  }

  window.localStorage.setItem('searchs', searchs)

  return searchs.split(',')
}

export function getSearchStorage () {
  const searchs = window.localStorage.getItem('searchs')

  /*
  Eliminar duplicados
  const dataArr = new Set()
  const result = [...dataArr]
  */

  // Contar resultados
  const result = searchs.split(',').reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

  return Object.entries(result)
}
