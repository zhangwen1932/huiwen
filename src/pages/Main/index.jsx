import React, { useEffect, useState, useRef } from 'react';
import { Anchor, Col, Row } from "antd";
import Banner from './components/Banner';
import Trust from './components/Trust';
import Third from './components/Third';
import Consultation from './components/Consultation';
import Governance from './components/Governance';
import AssetsComponents from './components/AssetsComponents';

const sectionObject = [{
  key: 'banner',
  href: '#banner',
  components: <Banner />,
  id: 'banner',
  title: ''
}, {
  key: 'trust',
  components: <Trust />,
  href: '#trust',
  id: 'trust',
  title: ''
},  {
  key: 'assets',
  components: <AssetsComponents />,
  href: '#assets',
  id: 'assets',
  title: ''
},  {
  key: 'governance',
  components: <Governance />,
  href: '#governance',
  id: 'governance',
  title: ''
}, {
  key: 'consultation',
  components: <Consultation />,
  href: '#consultation',
  id: 'consultation',
  title: ''
}, {
  key: 'third',
  components: <Third />,
  href: '#third',
  id: 'third',
  title: ''
}]

const Main = () => {
  return(
    <div className="container">
    <Row>
      <Col span={24} >
        {sectionObject.map((item) => (
          <section className="section-ele" id={item.id} key={item.key}>
            <div className="section-box">
              {item.components}
            </div>
          </section>
        ))}
      </Col>
    </Row>
    <div className='anchor-box'>
      <Anchor
        items={sectionObject}
        offsetTop={58}
      />
    </div>
  </div>
  )
}

export default Main;