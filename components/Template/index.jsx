import {
  TeamOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Avatar } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Template({ children, defaultSelectedKeys }) {
  const [collapsed, setCollapsed] = useState(true);
  const [path, setPath] = useState([]);
  const { Header, Content, Footer, Sider } = Layout;
  const router = useRouter();

  const menuSidebar = [
    getItem(<Link href="/">Dashboard</Link>, '1', <HomeOutlined />),
    getItem(<Link href="/customers">Customers</Link>, '2', <TeamOutlined />),
  ];

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  useEffect(() => {
    let url = router.route.split('/');
    setPath(url);
  }, []);

  return (
    <Layout className="container">
      {/* Navbar Left */}
      <Sider
        theme="light"
        className="sidebar"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <Link href="/">
            <Image src="/img/logo.png" width={50} height={50} alt="logo" />
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={[defaultSelectedKeys]}
          mode="inline"
          items={menuSidebar}
        />
      </Sider>

      <Layout>
        {/* Navbar Top */}
        <Header className="header">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            {path.map((item, idx) => {
              let url;
              for (let i = 1; i <= idx; i++) {
                if (url) {
                  url += `/${path[i]}`;
                } else {
                  url = `/${path[i]}`;
                }
              }
              return (
                <Breadcrumb.Item href={url} key={idx}>
                  {item}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          <div className="nav-topright">
            <div>
              <SearchOutlined className="icon-btn" />
              <BellOutlined className="icon-btn" />
            </div>
            <div className="nav-btn">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <span>John Doe</span>
            </div>
          </div>
        </Header>

        <Content className="content">{children}</Content>

        {/* Footer */}
        <Footer className="footer">MIG Test ©2022 Created by Asep</Footer>
      </Layout>
    </Layout>
  );
}
