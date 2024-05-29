import { Divider, Flex } from "antd";
import Sider from "antd/es/layout/Sider";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Plant, { PlantType } from "../plant/plant.component";
import { useEffect, useState } from "react";
import axios from "axios";

import { contentStyle, footerStyle, headerStyle, layoutStyle, siderStyle } from "./app.styles";

function App() {
  const [plants, setPlants] = useState<PlantType[]>([]);
  let cards = <></>;

  useEffect(() => {
    axios.get("src/apis/plants.json").then((response) => {
      if (response && response.data) {
        setPlants(response.data);
      }
    });
  }, []);

  if (plants && plants.length > 0) {
    console.log(plants);

    cards = plants.map((plant, index) => (
      <Plant
        key={index}
        name={plant.name}
        id={plant.id}
        sunlight={plant.sunlight}
        description={plant.description}
      ></Plant>
    ));
  }

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Title>Guia de plantas</Title>
        <Divider></Divider>
      </Header>

      <Layout style={layoutStyle}>
        <Sider
          width="25%"
          style={siderStyle}
        >
          <Title level={2}>Filtros</Title>
        </Sider>
        <Content style={contentStyle}>
          <Title level={2}>Resultados</Title>

          <Flex
            wrap
            gap="middle"
          >
            {cards}
          </Flex>
        </Content>
      </Layout>

      <Footer style={footerStyle}>
        <Title level={2}>Footer</Title>
      </Footer>
    </Layout>
  );
}

export default App;
