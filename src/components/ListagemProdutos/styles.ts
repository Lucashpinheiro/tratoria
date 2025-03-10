import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerListagem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 52px;
  margin-top: 90px;
`
export const PizzaTittle = styled.h3`
  color: ${colors.buttonLetters};
  font-size: 16px;
  margin: 8px;
`
export const PizzaContainer = styled.li`
  background-color: ${colors.letters};
  // height: 410px;
  padding: 8px 8px;
  cursor: pointer;
`
export const PizzaImage = styled.div`
  text-align: center;

  img {
    width: 304px;
    height: 167px;
  }
`
export const Pizzatext = styled.p`
  color: ${colors.buttonLetters};
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
  margin-right: 8px;
  height: 120px;
`
export const Button = styled.button`
  background-color: ${colors.buttonLetters};
  color: ${colors.letters};
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 4px 0;
  width: 304px;
  margin-top: 72px;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalText = styled.p`
  font-size: 14px;
  color: ${colors.white};
  line-height: 22px;
  margin-top: 16px;
`
export const ModalTittle = styled.h3`
  color: ${colors.buttonLetters};
  font-size: 18px;
  font-weight: bold;
  padding-top: 32px;
`
export const ModalDishes = styled.img`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 24px;
  width: 280px;
  height: 280px;
  object-fit: cover;
`
export const ModalClose = styled.img`
  margin-right: 8px;
  margin-top: 8px;
`
export const ModalContent = styled.div`
  display: flex;
  background-color: ${colors.letters};
  padding-bottom: 32px;
  position: relative;
  z-index: 1;
`
export const Italiana = styled.p`
  font-size: 32px;
  color: ${colors.white};
  opacity: 0.5;
  font-weight: 100;
  position: absolute;
  top: 250px;
  left: 150px;
`
export const Titulo = styled.p`
  font-size: 32px;
  color: ${colors.white};
  font-weight: bold;
  position: absolute;
  top: 450px;
  left: 150px;
`
export const Fundo = styled.div`
  position: relative;
`
export const MassaImag = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`
