import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/">
            <img
              src={logo}
              style={{ width: '150px' }}
              className="App-logo"
              alt="logo"
            />
          </Link>
          <Link to="/create">Create pokémon</Link>
        </nav>
      </Header>
      <Content style={{ height: '100%' }} className="container--page">
        {children}
      </Content>
    </Layout>
  );
};
