import { Input as InputAntd, InputProps as InputPropsAntd } from "antd";
import { BoxInput, LabelInput } from "./input-styles";

interface InputProps extends InputPropsAntd {
  label?: string;
}
const Input = ({ label, ...props }: InputProps) => {
  return (
    <BoxInput>
      {label && <LabelInput>{label}</LabelInput>}
      <InputAntd {...props}></InputAntd>
    </BoxInput>
  );
};

export default Input;
