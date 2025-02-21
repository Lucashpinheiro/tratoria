import styled from 'styled-components'
import background from '../../assets/images/fundo.png'
import { colors } from '../../styles'

export const RestauranteCover = styled.div`
  background-image: url('${background}');
  margin-top: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 82px 171px;
`
export const ResturanteLetters = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.letters};
`
export const EfoodLink = styled.div`
  padding-left: 90px;
`
