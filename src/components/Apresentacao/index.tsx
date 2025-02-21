import ApresentacaoFundo from '../../assets/images/imgfundo.png'
import { Fundo, Italiana, MassaImag, Titulo } from './styles'

const Apresentacao = () => {
  return (
    <>
      <Fundo>
        <MassaImag src={ApresentacaoFundo} alt="fundo massa" />
      </Fundo>
      <Italiana>Italiana</Italiana>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </>
  )
}

export default Apresentacao
