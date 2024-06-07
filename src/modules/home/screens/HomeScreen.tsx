import { ContainerHome, LimitedContainer, LogoImage, PlaceholderImage } from "../styles/homeScreen.styles.ts";

const HomeScreen = () => {
  return (
    <div>
      <PlaceholderImage></PlaceholderImage>
      <ContainerHome>
        <LimitedContainer>
          <LogoImage src="../logo.png" />
        </LimitedContainer>
      </ContainerHome>
    </div>
  );
};
export default HomeScreen;
