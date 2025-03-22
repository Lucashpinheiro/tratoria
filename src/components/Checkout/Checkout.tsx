import { useDispatch, useSelector } from 'react-redux'
import * as C from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/checkout'
import { useState } from 'react'
import { formataPreco } from '../ListagemProdutos'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const [openCheckout, setOpenCheckout] = useState(false)

  const backToCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentPrice) => {
      return (accumulator += currentPrice.preco)
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      receber: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      cartao: '',
      cvv: '',
      mes: '',
      ano: ''
    },
    validationSchema: Yup.object({
      receber: Yup.string().min(3, 'O nome precisa ter no mínimo 3 caracteres'),
      endereco: Yup.string()
        .min(5, 'O endereço precisa ser preenchido')
        .required('Este campo é obrigatório'),
      cidade: Yup.string()
        .min(5, 'O endereço precisa ser preenchido')
        .required('Este campo é obrigatório'),
      cep: Yup.string()
        .min(5, 'O endereço precisa ser preenchido')
        .required('Este campo é obrigatório'),
      numero: Yup.number()
        .min(1, 'O endereço precisa ser preenchido')
        .required('Este campo é obrigatório'),
      complemento: Yup.string().min(
        1,
        'O nome precisa ter no mínimo 1 caracteres'
      ),
      nomeCartao: Yup.string()
        .min(5, 'O nome precisa ter no mínimo 3 caracteres')
        .required('Este campo é obrigatório'),
      cartao: Yup.number()
        .min(5, 'O numero do cartão precisa ser preenchido')
        .required('Este campo é obrigatório'),
      cvv: Yup.number()
        .min(2, 'O numero do cvv precisa ser preenchido')
        .required('Este campo é obrigatório'),
      mes: Yup.number()
        .min(2, 'O mês precisa ser preenchido')
        .required('Este campo é obrigatório'),
      ano: Yup.number()
        .min(4, 'O ano precisa ser preenchido')
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const getErrorMessage = (fildName: string, message?: string) => {
    const estaAlterado = fildName in form.touched
    const estaInvalido = fildName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <>
      <C.DeliverContainer
        onSubmit={form.handleSubmit}
        className={isOpen ? 'is-open' : ''}
      >
        <div>
          {openCheckout ? (
            <div>
              <C.CheckoutSideBar>
                <C.CheckoutTittle>
                  Pagamento - Valor a pagar {`${formataPreco(getTotalPrice())}`}
                </C.CheckoutTittle>
                <C.CheckoutForm>
                  <label htmlFor="nomeCartao">Nome no cartão</label>
                  <input
                    type="text"
                    id="nomeCartao"
                    name="nomeCartao"
                    value={form.values.nomeCartao}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('nomeCartao', form.errors.nomeCartao)}
                  </small>
                  <C.CheckoutCartao>
                    <C.CheckoutInputCartaoLeft>
                      <label htmlFor="cartao">Número do cartão</label>
                      <input
                        type="text"
                        id="cartao"
                        name="cartao"
                        value={form.values.cartao}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cartao', form.errors.cartao)}
                      </small>
                    </C.CheckoutInputCartaoLeft>
                    <C.CheckoutInputCartaoRight>
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                    </C.CheckoutInputCartaoRight>
                  </C.CheckoutCartao>
                  <C.CheckoutInputVenc>
                    <div>
                      <label htmlFor="mes">Mês de vencimento</label>
                      <input
                        type="text"
                        id="mes"
                        name="mes"
                        value={form.values.mes}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('mes', form.errors.mes)}</small>
                    </div>
                    <div>
                      <label htmlFor="ano">Ano de vencimento</label>
                      <input
                        type="text"
                        id="ano"
                        name="ano"
                        value={form.values.ano}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('ano', form.errors.ano)}</small>
                    </div>
                  </C.CheckoutInputVenc>
                  <C.CheckoutButton type="submit">
                    Finalizar pagamento
                  </C.CheckoutButton>
                  <C.CheckoutButtonVoltar
                    onClick={() => setOpenCheckout(false)}
                  >
                    Voltar para a edição de endereço
                  </C.CheckoutButtonVoltar>
                </C.CheckoutForm>
              </C.CheckoutSideBar>
            </div>
          ) : (
            <div>
              <C.DeliverSideBar>
                <C.DeliverTittle>Entrega</C.DeliverTittle>
                <C.DeliverForm>
                  <label htmlFor="receber">Quem irá receber</label>
                  <input
                    type="text"
                    id="receber"
                    name="receber"
                    value={form.values.receber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('receber', form.errors.receber)}
                  </small>
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    value={form.values.endereco}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('endereco', form.errors.endereco)}
                  </small>
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    value={form.values.cidade}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('cidade', form.errors.cidade)}</small>
                  <C.DeliverCep>
                    <div>
                      <label htmlFor="cep">CEP</label>
                      <input
                        type="text"
                        id="cep"
                        name="cep"
                        value={form.values.cep}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>{getErrorMessage('cep', form.errors.cep)}</small>
                    </div>
                    <div>
                      <label htmlFor="numero">Número</label>
                      <input
                        type="text"
                        id="numero"
                        name="numero"
                        value={form.values.numero}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('numero', form.errors.numero)}
                      </small>
                    </div>
                  </C.DeliverCep>
                  <label htmlFor="complemento">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complemento"
                    value={form.values.complemento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                </C.DeliverForm>
                <C.DeliverButton onClick={() => setOpenCheckout(true)}>
                  Continuar com o pagamento
                </C.DeliverButton>
                <C.DeliverButton onClick={() => backToCart()}>
                  Voltar para o carrinho
                </C.DeliverButton>
              </C.DeliverSideBar>
            </div>
          )}
        </div>
      </C.DeliverContainer>
    </>
  )
}

export default Checkout
