import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${colors.letters};
  z-index: 1;
  max-width: 360px;
  width: 100%;
`
export const List = styled.li`
  background-color: ${colors.buttonLetters};
  display: flex;
  max-width: 344px;
  height: 100px;
  margin: 32px 8px 16px 8px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.letters};
    padding-bottom: 16px;
    margin-top: 8px;
  }

  p {
    font-size: 14px;
    color: ${colors.letters};
    line-height: 22px;
  }

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }
`
export const ButtonCan = styled.button`
  background-color: transparent;
  border: none;
  padding-left: 216px;
`
export const Value = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 16px;

  p {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.buttonLetters};
  }
`
export const ButtonContinue = styled.button`
  color: ${colors.letters};
  background-color: ${colors.buttonLetters};
  font-size: 14px;
  font-weight: bold;
  width: 344px;
  height: 24px;
  margin: 16px 8px;
  padding: 4px;
  text-align: center;
  border: none;
`
