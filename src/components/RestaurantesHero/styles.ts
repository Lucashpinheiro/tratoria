import styled from 'styled-components'
import background from '../../assets/images/fundo.png'
import { breakpoints, colors } from '../../styles'

export const RestauranteCover = styled.div`
  background-image: url('${background}');
  margin-top: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 82px 86px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 82px 86px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 82px;
  }
`
export const ResturanteLetters = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.letters};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`
export const EfoodLink = styled.div`
  padding-left: 90px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 10px;

    img {
      width: 80px;
      margin-right: 26px;
    }
  }
`
