import imageApropos from '../../assets/imageabout.png'  
import Styled from 'styled-components'
import Collapse from '../../components/Collapse'

const AboutContainer = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 27px;
`

const ImgAbout = Styled.img`
  width: 100%;
  height: 223px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 27px;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`
function About() {

  return (
      <AboutContainer>
          <ImgAbout src={imageApropos} alt="Paysage de fond" />
          <Collapse />
      </AboutContainer>
  )
}

export default About