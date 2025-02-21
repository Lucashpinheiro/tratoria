import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import * as S from './styles'

const ResturantesHero = () => {
  return (
    <>
      <S.RestauranteCover>
        <S.ResturanteLetters>
          <p>Restaurantes</p>
        </S.ResturanteLetters>
        <S.EfoodLink>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </S.EfoodLink>
        <S.ResturanteLetters>
          <p>0 produto(s) no carrinho</p>
        </S.ResturanteLetters>
      </S.RestauranteCover>
    </>
  )
}

export default ResturantesHero
