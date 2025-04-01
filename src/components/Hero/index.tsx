import logo from '../../assets/images/logo.png'
import { Cover, Logo, Title, TitleContainer } from './styles'
const Hero = () => {
  return (
    <Cover>
      <Logo>
        <h1>
          <img src={logo} alt="logo" />
        </h1>
      </Logo>
      <TitleContainer>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </TitleContainer>
    </Cover>
  )
}
export default Hero
