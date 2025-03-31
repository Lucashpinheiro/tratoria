import { useDispatch, useSelector } from 'react-redux'

import lixeira from '../../assets/images/lixeira.png'
import {
  ButtonCan,
  ButtonContinue,
  CartContainer,
  List,
  Overlay,
  SideBar,
  Value
} from './styles'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ListagemProdutos'
import { open } from '../../store/reducers/checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentItem) => {
      return (accumulator += currentItem.preco)
    }, 0)
  }

  const removeItem = (index: number) => {
    dispatch(remove(index))
  }

  const openCheckout = () => {
    dispatch(open())
  }

  if (items.length === 0) {
    closeCart()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item, index) => (
            <List key={index}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{`R$ ${formataPreco(item.preco)}`}</p>
                <ButtonCan onClick={() => removeItem(index)} type="button">
                  <img src={lixeira} />
                </ButtonCan>
              </div>
            </List>
          ))}
        </ul>
        <Value>
          <p>Valor total</p>
          <p>{`R${formataPreco(getTotalPrice())}`}</p>
        </Value>
        <ButtonContinue
          onClick={() => {
            openCheckout()
          }}
        >
          Continuar com a entrega
        </ButtonContinue>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
