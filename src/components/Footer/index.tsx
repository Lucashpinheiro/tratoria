import Logo from '../../assets/images/logo.png'
import Instagram from '../../assets/images/instagram.svg'
import Facebook from '../../assets/images/facebook.svg'
import Twitter from '../../assets/images/twitter.svg'
import { Description, Face, Foot, LogoFooter } from './styles'

const Footer = () => {
  return (
    <Foot>
      <LogoFooter>
        <img src={Logo} alt="efood" />
      </LogoFooter>
      <img src={Instagram} alt="instagram" />
      <Face src={Facebook} alt="facebook" />
      <img src={Twitter} alt="twitter" />
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Description>
    </Foot>
  )
}

export default Footer
