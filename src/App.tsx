import { Card, Col, Flex, Menu, Row, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Plant from "./components/plant.component";
import Search from "./components/search.component";

const headerStyle: React.CSSProperties = {
  height: "auto",
  backgroundColor: "#f4f4f4",
};

const contentStyle: React.CSSProperties = {
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "#f4f4f4",
};

const siderStyle: React.CSSProperties = {
  lineHeight: "120px",
  backgroundColor: "#f4f4f4",
  padding: "0 50px",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  backgroundColor: "#f4f4f4",
};

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};

function App() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Title>Guia de plantas</Title>
        <Search></Search>
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

          <Flex wrap gap="middle">
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
              <Plant></Plant>
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
