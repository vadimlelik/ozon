export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value)
  })
}

export const categoryFilters = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category.includes(value)
  })
}
