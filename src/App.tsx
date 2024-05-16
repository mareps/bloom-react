import { Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  backgroundColor: "#f4f4f4",
};

const headerStyle = {
  height: "auto",
  display: "flex",
  alignItems: "center",
  
};

function App() {
  return (
    <div className="app">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Title>Bloom</Title>

          <Menu
            items={items}
            mode="horizontal"
          />
        </Header>

        <Layout style={layoutStyle}>
          <Sider
            style={layoutStyle}
            width="25%"
          >
            Sider
          </Sider>
          <Content>Content</Content>
        </Layout>

        <Footer style={layoutStyle}>footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
