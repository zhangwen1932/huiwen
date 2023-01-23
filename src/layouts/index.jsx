import React from 'react';
import { Outlet } from 'umi';
import { Layout } from 'antd';
import HeaderComponent from './Header';
import FooterComponent from './Footer'
 
import 'animate.css';
import './styles.scss';

const { Header, Content, Footer } = Layout;

const LayoutComponent = () => (
  <>
    <Header style={{ position: 'fixed', top: 0, zIndex: 1, width: '100%', height: '50px', backgroundColor: '#fff' }}>
      <HeaderComponent />
    </Header>
    <Content className='content'>
      <Outlet />
    </Content>
    <Footer >
      <FooterComponent />
    </Footer>
  </>
);

export default LayoutComponent;