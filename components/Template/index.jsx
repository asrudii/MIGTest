import {
  DesktopOutlined,
  TeamOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Avatar } from 'antd';
import { useState } from 'react';

export default function Template({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Content, Footer, Sider } = Layout;

  const menuSidebar = [
    getItem('Dashboard', '1', <HomeOutlined />),
    getItem('Customers', '2', <TeamOutlined />),
  ];

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  return (
    <Layout className="container">
      <Sider
        theme="light"
        className="sidebar"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu defaultSelectedKeys={['1']} mode="inline" items={menuSidebar} />
      </Sider>

      <Layout>
        <Header className="header">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="nav-topright">
            <div>
              <SearchOutlined className="icon-btn" />
              <BellOutlined className="icon-btn" />
            </div>
            <div className="nav-btn">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <span>Asep Rudi</span>
            </div>
          </div>
        </Header>

        <Content className="content">
          <span>Asep Rudi</span>
          <div>{children}</div>
        </Content>

        {/* Footer */}
        <Footer className="footer">MIG Test ©2022 Created by Asep</Footer>
      </Layout>
    </Layout>
  );
}
