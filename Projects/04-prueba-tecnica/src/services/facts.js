const URL_CAT_FACTS = 'https://catfact.ninja/fact'

// export const getRandomFact = () => {
//   return fetch(URL_CAT_FACTS)
//     .then(res => res.json())
//     .then(data => {
//       const { fact } = data

//       return fact
//     })
// }

export const getRandomFact = async () => {
  console.log('getRandomFact')

  const res = await fetch(URL_CAT_FACTS)
  const data = await res.json()
  const { fact } = data

  return fact
}
