import React, { useEffect, useState, useRef } from 'react';
import { Anchor, Col, Row } from "antd";
import Banner from './components/Banner';
import ContactChild from './components/Contact';
import Correlation from './components/Correlation';

const sectionObject = [{
  key: 'banner',
  href: '#banner',
  components: <Banner />,
  id: 'banner',
  title: ''
}, {
  key: 'contact',
  href: '#contact',
  components: <ContactChild />,
  id: 'contact',
  title: '',
}, {
  key: 'correlation',
  href: '#correlation',
  components: <Correlation />,
  id: 'correlation',
  title: ''
}]

const Contact = () => {
  const [ currentAnchor, setCurrentAnchor ] = useState('#banner');
  const handleClick = (e, link) => {
    setCurrentAnchor(link.href);
  };
  const getCurrentAnchor = () => currentAnchor;
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
        getCurrentAnchor={getCurrentAnchor}
        onClick={handleClick}
        items={sectionObject}
      />
    </div>
  </div>
  )
}

export default Contact;