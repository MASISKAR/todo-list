export default async function () {
  function sum(a, b) {
    const p = new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject('Argumnets muts be numbers!')
      } else {
        resolve(a + b)
      }
    })
    return p
  }

  let s = sum(2, 4)

  s.then((result) => {
    console.log('result', result)
  }).catch((err) => {
    console.log('err', err)
  })

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log('res', res)
      return res.json()
    })
    .then((posts) => {
      console.log('posts', posts)
    })

  // async/ await
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    console.log('posts', posts)
  } catch (err) {
    console.log(err)
  }
}
