import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Logo from '../../assets/images/logo.png'
import * as S from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const ResturantesHero = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <S.RestauranteCover>
        <S.ResturanteLetters>
          <p>Restaurantes</p>
        </S.ResturanteLetters>
        <S.EfoodLink>
          <Link to="/">
            <h1>
              <img src={Logo} alt="logo" />
            </h1>
          </Link>
        </S.EfoodLink>
        <S.ResturanteLetters onClick={openCart}>
          <span>
            <p>{items.length} produto(s) no carrinho</p>
          </span>
        </S.ResturanteLetters>
      </S.RestauranteCover>
    </>
  )
}

export default ResturantesHero
