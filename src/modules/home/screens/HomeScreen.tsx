import Input from "../../../shared/inputs";
import { ContainerHome, LimitedContainer, LogoImage, PlaceholderImage } from "../styles/homeScreen.styles.ts";

const onChangeInput = (event: any) => {
  console.log(event.target.value);
};
const HomeScreen = () => {
  return (
    <div>
      <PlaceholderImage></PlaceholderImage>
      <ContainerHome>
        <LimitedContainer>
          <LogoImage src="../logo.png" />

          <Input
            placeholder="Digite seu usuário"
            label="Usuário"
            onChange={onChangeInput}
          ></Input>
          <Input
            placeholder="Digite sua senha"
            label="Senha"
            onChange={onChangeInput}
          ></Input>
        </LimitedContainer>
      </ContainerHome>
    </div>
  );
};
export default HomeScreen;
