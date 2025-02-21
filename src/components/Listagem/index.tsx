import sushi from '../../assets/images/sushi.png'
import star from '../../assets/images/estrela.png'
import massa from '../../assets/images/massa.png'

import * as S from './styles'

const Listagem = () => {
  return (
    <div className="container">
      <S.ContainerSecondary>
        <S.Lista>
          <S.DestaqueContainer>
            <S.Imag src={sushi} alt="sushi" />
            <S.DestaquePosition>
              <S.Destaque>Destaque da semana</S.Destaque>
              <S.Destaque>Japonesa</S.Destaque>
            </S.DestaquePosition>
          </S.DestaqueContainer>
          <div>
            <S.HeaderTitle>
              <S.Title>Hioki Sushi</S.Title>
              <div>
                <S.Title>
                  4.9
                  <S.ImagStar src={star} alt="estrela" />
                </S.Title>
              </div>
            </S.HeaderTitle>
          </div>
          <S.Description>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </S.Description>
          <S.Button to="/restaurantes">Saiba mais</S.Button>
        </S.Lista>
        <S.Lista>
          <S.DestaqueContainer>
            <S.Imag src={massa} alt="massa" />
            <S.DestaquePositionLeft>
              <S.Destaque>Italiana</S.Destaque>
            </S.DestaquePositionLeft>
          </S.DestaqueContainer>
          <div>
            <S.HeaderTitle>
              <S.Title>La Dolce Vita Trattoria</S.Title>
              <div>
                <S.Title>
                  4.6
                  <S.ImagStar src={star} alt="estrela" />
                </S.Title>
              </div>
            </S.HeaderTitle>
          </div>
          <S.Description>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </S.Description>
          <S.Button to="/restaurantes">Saiba mais</S.Button>
        </S.Lista>
        <S.Lista>
          <S.DestaqueContainer>
            <S.Imag src={massa} alt="massa" />
            <S.DestaquePositionLeft>
              <S.Destaque>Italiana</S.Destaque>
            </S.DestaquePositionLeft>
          </S.DestaqueContainer>
          <div>
            <S.HeaderTitle>
              <S.Title>La Dolce Vita Trattoria</S.Title>
              <div>
                <S.Title>
                  4.6
                  <S.ImagStar src={star} alt="estrela" />
                </S.Title>
              </div>
            </S.HeaderTitle>
          </div>
          <S.Description>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </S.Description>
          <S.Button to="/restaurantes">Saiba mais</S.Button>
        </S.Lista>
        <S.Lista>
          <S.DestaqueContainer>
            <S.Imag src={massa} alt="massa" />
            <S.DestaquePositionLeft>
              <S.Destaque>Italiana</S.Destaque>
            </S.DestaquePositionLeft>
          </S.DestaqueContainer>
          <div>
            <S.HeaderTitle>
              <S.Title>La Dolce Vita Trattoria</S.Title>
              <div>
                <S.Title>
                  4.6
                  <S.ImagStar src={star} alt="estrela" />
                </S.Title>
              </div>
            </S.HeaderTitle>
          </div>
          <S.Description>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </S.Description>
          <S.Button to="/restaurantes">Saiba mais</S.Button>
        </S.Lista>
        <S.Lista>
          <S.DestaqueContainer>
            <S.Imag src={massa} alt="massa" />
            <S.DestaquePositionLeft>
              <S.Destaque>Italiana</S.Destaque>
            </S.DestaquePositionLeft>
          </S.DestaqueContainer>
          <div>
            <S.HeaderTitle>
              <S.Title>La Dolce Vita Trattoria</S.Title>
              <div>
                <S.Title>
                  4.6
                  <S.ImagStar src={star} alt="estrela" />
                </S.Title>
              </div>
            </S.HeaderTitle>
          </div>
          <S.Description>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </S.Description>
          <S.Button to="/restaurantes">Saiba mais</S.Button>
        </S.Lista>
        <S.Lista>
          <S.DestaqueContainer>
            <S.Imag src={massa} alt="massa" />
            <S.DestaquePositionLeft>
              <S.Destaque>Italiana</S.Destaque>
            </S.DestaquePositionLeft>
          </S.DestaqueContainer>
          <div>
            <S.HeaderTitle>
              <S.Title>La Dolce Vita Trattoria</S.Title>
              <div>
                <S.Title>
                  4.6
                  <S.ImagStar src={star} alt="estrela" />
                </S.Title>
              </div>
            </S.HeaderTitle>
          </div>
          <S.Description>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </S.Description>
          <S.Button to="/restaurantes">Saiba mais</S.Button>
        </S.Lista>
      </S.ContainerSecondary>
    </div>
  )
}

export default Listagem
