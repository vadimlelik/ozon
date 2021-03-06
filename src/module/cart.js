import renderCart from './renderCart'

const cart = () => {
  const cartBtn = document.getElementById('cart')
  const cartModal = document.querySelector('.cart')
  const cartCloseBtn = cartModal.querySelector('.cart-close')
  const cartTotal = cartModal.querySelector('.cart-total > span')
  const cartSendBtn = cartModal.querySelector('.cart-confirm')
  const goodsWrapper = document.querySelector('.goods')
  const cartWrapper = document.querySelector('.cart-wrapper')
  const counter = document.querySelector('.counter')

  const openCart = () => {
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : []
    cartModal.style.display = 'flex'
    renderCart(cart)
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price
    }, 0)
  }

  const closeCart = (e) => {
    if (e.target === cartModal || e.target === cartCloseBtn) {
      cartModal.style.display = ''
    }
  }

  cartBtn.addEventListener('click', openCart)
  cartCloseBtn.addEventListener('click', closeCart)
  cartModal.addEventListener('click', closeCart)

  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card')
      const key = card.dataset.key
      const goods = JSON.parse(localStorage.getItem('goods'))
      const cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []

      const goodItem = goods.find((item) => {
        return item.id === +key
      })

      cart.push(goodItem)

      localStorage.setItem('cart', JSON.stringify(cart))
    }
  })
  cartWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
      const card = event.target.closest('.card')
      const key = card.dataset.key

      const index = cart.findIndex((item) => {
        return item.id === +key
      })

      cart.splice(index, 1)

      localStorage.setItem('cart', JSON.stringify(cart))

      renderCart(cart)

      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price
      }, 0)
    }
  })
}
export default cart
