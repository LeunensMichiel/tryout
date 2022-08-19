import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { FC, ReactNode } from 'react';
import logo from '../../assets/logo.png';

import './page.scss';
interface Props {
  children: ReactNode;
}

export const Page: FC<Props> = ({ children }) => {
  return (
    <Layout className="layout">
      <Header className="header">
        <nav className="navigation">
          <img
            src={logo}
            style={{ width: '150px' }}
            className="App-logo"
            alt="logo"
          />
        </nav>
      </Header>
      <Content style={{ height: '100%' }} className="container--page">
        {children}
      </Content>
    </Layout>
  );
};
