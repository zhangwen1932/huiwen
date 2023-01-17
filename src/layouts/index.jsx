import React from 'react';
import { Outlet } from 'umi';
import { Layout } from 'antd';
import HeaderComponent from './Header';
import FooterComponent from './Footer'
 
import './styles.less';


const LayoutComponent = () => (
  <Layout>
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
  </Layout>
);

export default LayoutComponent;