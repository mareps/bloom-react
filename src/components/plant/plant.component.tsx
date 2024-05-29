import { Card, Divider, Flex, Image, Layout } from "antd";
import { cardStyle, imgStyle } from "./plant.styles";
import Title from "antd/es/typography/Title";
import Sunlight from "../Sunlight";

export type PlantType = {
  id: number;
  name: string;
  description: string;
  irrigation: string;
  sunlight: string;
  toxic: boolean;
};

const plantTitleStyle = {
  marginTop: 0,
  marginRight: 24,
  marginBottom: 0,
};

function Plant({ name, id, description, sunlight }) {
  return (
    <>
      <Card
        key={id}
        style={cardStyle}
        size="default"
      >
        <Flex>
          <Title
            style={plantTitleStyle}
            level={4}
          >
            {name}
          </Title>
          <Sunlight sunlight={sunlight}></Sunlight>
        </Flex>
        <Divider></Divider>

        <div style={imgStyle}>
          <Image
            src="src/assets/placeholder.png"
            fallback="src/assets/fallback.png"
          ></Image>
        </div>

        <Divider></Divider>

        <Title level={4}>Descrição</Title>
        <p>{description}</p>
      </Card>
    </>
  );
}

//

export default Plant;
