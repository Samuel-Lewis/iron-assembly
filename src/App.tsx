import "./App.less";
import {
  Layout,
  Menu
} from "antd";
import React from "react";
import {
  Link,
  Outlet
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header>
        <Link to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/forge_cutout.png`}
            alt=""
          />
        </Link>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/members">
            <Link to="/members">Members</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Outlet />
      </Content>

      <Footer className="footer">Iron Assembly 2021</Footer>
    </Layout>
  );
}

export default App;
