import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerListagem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 52px;
  margin-bottom: 120px;
`
export const PizzaTittle = styled.h3`
  color: ${colors.buttonLetters};
  font-size: 16px;
  margin: 8px;
`
export const PizzaContainer = styled.li`
  background-color: ${colors.letters};
  padding: 8px 8px;
`
export const PizzaImage = styled.div`
  text-align: center;
`
export const Pizzatext = styled.p`
  color: ${colors.buttonLetters};
  font-size: 14px;
  line-height: 22px;
  margin-left: 8px;
  margin-right: 8px;
`
export const Button = styled.button`
  background-color: ${colors.buttonLetters};
  color: ${colors.letters};
  font-size: 14px;
  font-weight: bold;
  border: none;
  margin: 8px;
  padding: 4px 0;
  width: 304px;
`
