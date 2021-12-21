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
export const priceFilters = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min === '' && max === '') {
      return goodsItem
    } else if (min !== '' && max !== '') {
      return goodsItem.price > +min && goodsItem.price < +max
    } else if (min !== '' && max === '') {
      return goodsItem.price > +min
    } else if (min === '' && max !== '') {
      return goodsItem.price < +max
    }
  })
}

export const hotSaleFilters = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true
    } else {
      return goodsItem
    }
  })
}
