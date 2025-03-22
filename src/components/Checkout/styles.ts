import styled from 'styled-components'
import { colors } from '../../styles'

export const DeliverTittle = styled.h3`
  color: ${colors.buttonLetters};
  font-size: 16px;
  font-weight: bold;
  margin: 32px 0 8px 0;
`

export const DeliverContainer = styled.form`
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

export const DeliverSideBar = styled.aside`
  background-color: ${colors.letters};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
`

export const DeliverForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.buttonLetters};
    margin-bottom: 8px;
    margin-top: 8px;
  }

  input {
    font-weight: bold;
    font-size: 14px;
    padding: 16px 0 16px 8px;
    color: ${colors.inputColor};
    background-color: ${colors.buttonLetters};
    border: none;
    width: 344px;
    height: 32px;
  }

  input:last-child {
    margin-bottom: 24px;
  }
`

export const DeliverCep = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  input {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.inputColor};
    background-color: ${colors.buttonLetters};
    padding: 16px 0 16px 8px;
    border: none;
    width: 155px;
    height: 32px;
    margin-right: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

export const DeliverButton = styled.button`
  width: 344px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.letters};
  background-color: ${colors.buttonLetters};
  border: none;
  margin-bottom: 8px;
  padding: 4px 0;
  cursor: pointer;
`
export const CheckoutSideBar = styled.aside`
  background-color: ${colors.letters};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
`
export const CheckoutTittle = styled.h3`
  color: ${colors.buttonLetters};
  font-size: 16px;
  font-weight: bold;
  margin: 32px 0 8px 0;
`
export const CheckoutForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.buttonLetters};
    margin-bottom: 8px;
    margin-top: 8px;
  }

  input {
    font-weight: bold;
    font-size: 14px;
    padding: 16px 0 16px 8px;
    color: ${colors.inputColor};
    background-color: ${colors.buttonLetters};
    border: none;
    width: 344px;
    height: 32px;
  }
`
export const CheckoutCartao = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  input {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.inputColor};
    background-color: ${colors.buttonLetters};
    padding: 16px 0 16px 8px;
    border: none;
    width: 228px;
    height: 32px;
    margin-right: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

export const CheckoutInputCartaoLeft = styled.div`
  input {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.inputColor};
    background-color: ${colors.buttonLetters};
    padding: 16px 0 16px 8px;
    border: none;
    width: 228px;
    height: 32px;
    margin-right: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`
export const CheckoutInputCartaoRight = styled.div`
  input {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.inputColor};
    background-color: ${colors.buttonLetters};
    padding: 16px 0 16px 8px;
    border: none;
    width: 87px;
    height: 32px;
    margin-right: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`
export const CheckoutInputVenc = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 24px;

  input {
    font-weight: bold;
    font-size: 14px;
    color: ${colors.inputColor};
    background-color: ${colors.buttonLetters};
    padding: 16px 0 16px 8px;
    border: none;
    width: 155px;
    height: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  div:first-of-type input {
    margin-right: 36px;
  }
`

export const CheckoutButton = styled.button`
  width: 344px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.letters};
  background-color: ${colors.buttonLetters};
  border: none;
  margin-bottom: 8px;
  padding: 4px 0;
  cursor: pointer;
`
export const CheckoutButtonVoltar = styled.a`
  width: 344px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${colors.letters};
  background-color: ${colors.buttonLetters};
  border: none;
  margin-bottom: 8px;
  padding: 4px 0;
  cursor: pointer;
`
