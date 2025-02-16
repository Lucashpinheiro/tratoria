import logo from '../../assets/images/logo.png'
import { Cover, Logo, Title, TitleContainer } from './styles'
const Hero = () => {
  return (
    <Cover>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      <TitleContainer>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </TitleContainer>
    </Cover>
  )
}
export default Hero
