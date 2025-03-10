import { useDispatch, useSelector } from 'react-redux'

import pizza from '../../assets/images/pizza1.png'
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

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentPrice) => {
      return (accumulator += currentPrice.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <List key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{`R$ ${formataPreco(item.preco)}`}</p>
                <ButtonCan onClick={() => removeItem(item.id)} type="button">
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
        <ButtonContinue type="button">Continuar com a entrega</ButtonContinue>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
