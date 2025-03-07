import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as P from './styles'
import Close from '../../assets/images/close.png'
import { RestaurantType } from '../Listagem'

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListagemProdutos = () => {
  const { id } = useParams()

  const [openModal, setOpenModal] = useState(false)
  const [restaurant, setRestaurant] = useState<RestaurantType>()
  const [selectedDish, setSelectedDish] = useState<{
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  const handleOpenModal = (dish: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }) => {
    setSelectedDish(dish)
    setOpenModal(true)
  }

  return (
    <>
      <P.Fundo>
        <P.MassaImag src={restaurant?.capa} />
      </P.Fundo>
      <P.Italiana>{restaurant?.tipo}</P.Italiana>
      <P.Titulo>{restaurant?.titulo}</P.Titulo>
      <div className="container">
        <P.ContainerListagem>
          {restaurant?.cardapio.map((dish) => (
            <P.PizzaContainer onClick={() => handleOpenModal(dish)}>
              <P.PizzaImage key={dish.id}>
                <img src={dish.foto} alt={`imagem ${dish.nome} de prato`} />
              </P.PizzaImage>
              <P.PizzaTittle>{dish.nome}</P.PizzaTittle>
              <P.Pizzatext>{dish.descricao}</P.Pizzatext>
              <P.Button>Mais detalhes</P.Button>
            </P.PizzaContainer>
          ))}
        </P.ContainerListagem>
      </div>
      <P.ModalContainer className={openModal ? 'visible' : ''}>
        <P.ModalContent className="container">
          <div>{selectedDish && <P.ModalDishes src={selectedDish.foto} />}</div>
          <div>
            <P.ModalTittle>{selectedDish?.nome}</P.ModalTittle>
            <P.ModalText>{selectedDish?.descricao}</P.ModalText>
            <P.ModalText>Serve: {selectedDish?.porcao}</P.ModalText>
            <P.Button>{`Adicionar ao carrinho - ${formataPreco(selectedDish?.preco)}`}</P.Button>
          </div>
          <div>
            <P.ModalClose src={Close} onClick={() => setOpenModal(false)} />
          </div>
        </P.ModalContent>
        <div className="overlay" onClick={() => setOpenModal(false)}></div>
      </P.ModalContainer>
    </>
  )
}

export default ListagemProdutos
