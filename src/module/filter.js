import { hotSaleFilters, priceFilters } from './filters'
import getData from './getData'
import renderGoods from './renderGoods'

const fillter = () => {
  const minInput = document.getElementById('min')
  const maxInput = document.getElementById('max')
  const checkboxInput = document.getElementById('discount-checkbox')
  const filterCheckCheckmark = document.querySelector('.filter-check_checkmark')

  minInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(
        priceFilters(
          hotSaleFilters(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      )
    })
  })
  maxInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(
        priceFilters(
          hotSaleFilters(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      )
    })
  })

  checkboxInput.addEventListener('change', () => {
    if (checkboxInput.checked) {
      filterCheckCheckmark.classList.add('checked')
    } else {
      filterCheckCheckmark.classList.remove('checked')
    }
    getData().then((data) => {
      renderGoods(
        priceFilters(
          hotSaleFilters(data, checkboxInput.checked),
          minInput.value,
          maxInput.value
        )
      )
    })
  })
}
export default fillter
