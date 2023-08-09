import React from 'react';
import styled from 'styled-components';

const FigureContainer = styled.div`
`
const Figure = styled.figure`
width: 100%;
margin: 0;
margin-top: 27px;
position: relative;
display: flex;

@media (min-width: 768px) {
  text-align: center;
  justify-content: center;
  margin-bottom: 40px;
}
`;

const BannerImage = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 768px) {
    max-height: 111px;
  }

  @media (min-width: 768px) {
    max-height: 223px;
  }
`;

const BannerText = styled.figcaption`
  opacity: 1;
  color: #fff;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 500;
  width: 100%;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  padding-left: 16px;

  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 45px;
  }

  @media (min-width: 768px) {
    padding-top: 111px;
    padding-bottom: 82px;
    text-align: center;
  }
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  `

function Banner(props) {
  return (
    <FigureContainer>
      <Figure>
        <BannerImage src={props.image} alt="Paysage de fond" />
        <BannerText>{props.title}</BannerText>
      </Figure>
      <BannerOverlay />
    </FigureContainer>
  );
}

export default Banner;