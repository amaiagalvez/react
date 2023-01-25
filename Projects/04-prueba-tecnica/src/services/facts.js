import { CAT_ENDPOINT_RANDOM_FACT } from './const.js'

// export const getRandomFact = () => {
//   return fetch(URL_CAT_FACTS)
//     .then(res => res.json())
//     .then(data => {
//       const { fact } = data

//       return fact
//     })
// }

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
