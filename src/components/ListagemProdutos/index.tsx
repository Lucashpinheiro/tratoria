import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as P from './styles'
import Close from '../../assets/images/close.png'
import { MenuItemType } from '../Listagem'
import { useGetDisheQuery } from '../../services/api'

import { add, open } from '../../store/reducers/cart'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListagemProdutos = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetDisheQuery(id!)

  const [openModal, setOpenModal] = useState(false)
  const [selectedDish, setSelectedDish] = useState<MenuItemType>()

  const handleOpenModal = (dish: MenuItemType) => {
    setSelectedDish(dish)
    setOpenModal(true)
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    if (selectedDish) {
      dispatch(add(selectedDish))
      dispatch(open())
    }
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
          {restaurant?.cardapio.map((dish, index) => (
            <P.PizzaContainer
              key={dish.id}
              onClick={() => handleOpenModal(dish)}
            >
              <P.PizzaImage>
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
            <P.Button
              onClick={() => {
                addToCart()
                setOpenModal(false)
              }}
            >{`Adicionar ao carrinho - ${formataPreco(selectedDish?.preco)}`}</P.Button>
          </div>
          <P.SmartPhoneClose>
            <P.ModalClose src={Close} onClick={() => setOpenModal(false)} />
          </P.SmartPhoneClose>
        </P.ModalContent>
        <div className="overlay" onClick={() => setOpenModal(false)}></div>
      </P.ModalContainer>
    </>
  )
}

export default ListagemProdutos
