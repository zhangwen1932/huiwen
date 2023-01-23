import React, { useEffect, useState, useRef } from 'react';
import { Anchor, Col, Row } from "antd";
import Banner from './components/Banner';
import TeamChild from './components/Team';

const sectionObject = [{
  key: 'banner',
  href: '#banner',
  components: <Banner />,
  id: 'banner',
  title: '',
}, {
  key: 'team',
  href: '#team',
  components: <TeamChild />,
  id: 'team',
  title: '',
}]

const Team = () => {
  return(
    <div className="container">
    <Row>
      <Col span={24} >
        {sectionObject.map((item) => (
          <section className="section-ele" id={item.id} key={item.key}>
            {item.components}
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

export default Team;