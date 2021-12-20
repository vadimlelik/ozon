const getData = () => {
  return fetch(
    `https://ozon-d7d2d-default-rtdb.firebaseio.com/goods.json?`
  ).then((response) => {
    return response.json()
  })
}
export default getData
