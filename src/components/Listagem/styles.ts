import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const Lista = styled.li`
  background-color: ${colors.white};
  border: 1px solid ${colors.letters};
  padding-bottom: 16px;
`
export const Imag = styled.img`
  width: 100%;
  height: 270px;
`
export const ImagStar = styled.img`
  margin-left: 8px;
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.letters};
  align-items: center;
  margin: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.letters};
  margin: 8px;
`
export const ContainerSecondary = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 80px;
  margin-top: 80px;
`

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Button = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  margin: 8px;
  color: ${colors.buttonLetters};
  padding: 4px 6px;
  background-color: ${colors.letters};
  border: none;
  text-decoration: none;
  cursor: pointer;
`
export const Destaque = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.buttonLetters};
  padding: 4px 6px;
  background-color: ${colors.letters};
  border: none;
  text-decoration: none;
  display: inline-block;
  margin: 8px;
`
export const DestaquePosition = styled.div`
  top: 8px;
  left: 220px;
  position: absolute;
`
export const DestaquePositionLeft = styled.div`
  top: 8px;
  left: 380px;
  position: absolute;
`
export const DestaqueContainer = styled.div`
  position: relative;
`
