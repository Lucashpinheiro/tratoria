import star from '../../assets/images/estrela.png'

import * as S from './styles'

import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../Loader'

export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: MenuItemType[]
}
export type MenuItemType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Listagem = () => {
  const { data, isLoading } = useGetRestaurantQuery()
  const restaurants: RestaurantType[] = Array.isArray(data)
    ? data
    : data
      ? [data]
      : []

  if (isLoading) {
    return <Loader />
  }

  if (!restaurants || restaurants.length === 0) {
    return <p>Nenhum restaurante encontrado.</p>
  }

  return (
    <div className="container">
      <S.ContainerSecondary>
        {restaurants.map((restaurant, id) => (
          <S.Lista>
            <S.DestaqueContainer>
              <S.Imag
                key={restaurant.id}
                src={restaurant.capa}
                alt={restaurant.tipo}
              />
              {restaurant.destacado ? (
                <>
                  <S.DestaquePosition>
                    <S.Destaque>Destaque da semana</S.Destaque>
                    <S.Destaque>{restaurant.tipo}</S.Destaque>
                  </S.DestaquePosition>
                </>
              ) : (
                <>
                  <S.DestaquePositionLeft>
                    <S.Destaque>{restaurant.tipo}</S.Destaque>
                  </S.DestaquePositionLeft>
                </>
              )}
            </S.DestaqueContainer>
            <div>
              <S.HeaderTitle>
                <S.Title>{restaurant.titulo}</S.Title>
                <div>
                  <S.Title>
                    {restaurant.avaliacao}
                    <S.ImagStar src={star} alt="estrela" />
                  </S.Title>
                </div>
              </S.HeaderTitle>
            </div>
            <S.Description>{restaurant.descricao}</S.Description>
            <S.Button to={`/restaurantes/${id + 1}`}>Saiba mais</S.Button>
          </S.Lista>
        ))}
      </S.ContainerSecondary>
    </div>
  )
}

export default Listagem
