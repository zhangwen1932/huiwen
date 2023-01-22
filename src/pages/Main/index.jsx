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
  title: 'Banner'
}, {
  key: 'trust',
  components: <Trust />,
  href: '#trust',
  id: 'trust',
  title: '信托类'
},  {
  key: 'assets',
  components: <AssetsComponents />,
  href: '#assets',
  id: 'assets',
  title: '资产管理类'
},  {
  key: 'governance',
  components: <Governance />,
  href: '#governance',
  id: 'governance',
  title: '企业治理'
}, {
  key: 'consultation',
  components: <Consultation />,
  href: '#consultation',
  id: 'consultation',
  title: '资询类'
}, {
  key: 'third',
  components: <Third />,
  href: '#third',
  id: 'third',
  title: '第三方业务'
}]

const Main = () => {
  const topRef = useRef(null);
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  })
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
        targetOffset={targetOffset}
        affix={false}
        showInkInFixed={true}
        bounds={5}
        items={sectionObject}
      />
    </div>
  </div>
  )
}

export default Main;