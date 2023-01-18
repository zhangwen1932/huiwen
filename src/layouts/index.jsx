import React from 'react';
import { Outlet } from 'umi';
import Header from './Header';
import Footer from './Footer'
 
import './styles.scss';


const LayoutComponent = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default LayoutComponent;