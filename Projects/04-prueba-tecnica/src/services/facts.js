import { URL_CAT_FACTS } from './const.js'

// export const getRandomFact = () => {
//   return fetch(URL_CAT_FACTS)
//     .then(res => res.json())
//     .then(data => {
//       const { fact } = data

//       return fact
//     })
// }

export const getRandomFact = async () => {
  const res = await fetch(URL_CAT_FACTS)
  const data = await res.json()
  const { fact } = data

  return fact
}
