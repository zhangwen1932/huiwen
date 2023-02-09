import React, { useEffect } from 'react';
import { Outlet, useIntl, useLocation } from 'umi';
import { Layout } from 'antd';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

import 'animate.css';
import './styles.scss';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => {
  const { pathname } = useLocation();
  const intl = useIntl();

  useEffect(() => {
    document.title = intl.formatMessage({ id: 'site.title' });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 1,
          width: '100%',
          height: '50px',
          backgroundColor: '#fff',
        }}
      >
        <HeaderComponent />
      </Header>
      <Content className="content">
        <Outlet />
      </Content>
      <Footer>
        <FooterComponent />
      </Footer>
    </>
  );
};

export default LayoutComponent;
