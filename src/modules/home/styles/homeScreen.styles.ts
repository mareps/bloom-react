import styled from "styled-components";

export const BackgroundImage = styled.img`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export const PlaceholderImage = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #40b3a2;
  z-index: 1;
`;

export const ContainerHome = styled.div`
  right: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  max-width: 1400px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LimitedContainer = styled.div`
  max-width: 1200px;
  max-height: calc(100vh - 200px);
  padding: 24px;
`;

export const LogoImage = styled.img`
    max-width: 200px;
`; 
