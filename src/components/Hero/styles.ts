import styled from 'styled-components'
import background from '../../assets/images/fundo.png'
import { colors } from '../../styles'

export const Cover = styled.div`
  background-image: url('${background}');
  background-size: cover;
  background-repeat: no-repeat;
`

export const Logo = styled.div`
  text-align: center;
  padding-top: 64px;
`
export const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.letters};
  margin-top: 138px;
  padding-bottom: 40px;
  text-align: center;
`
export const TitleContainer = styled.div`
  width: 540px;
  align-items: center;
  margin: 0 auto;
`
