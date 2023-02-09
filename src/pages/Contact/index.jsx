import React from 'react';
import { Anchor, Col, Row } from 'antd';
import Banner from './components/Banner';
import ContactChild from './components/Contact';
import Correlation from './components/Correlation';

const sectionObject = [
  {
    key: 'banner',
    href: '#banner',
    components: <Banner />,
    id: 'banner',
    title: '',
  },
  {
    key: 'contact',
    href: '#contact',
    components: <ContactChild />,
    id: 'contact',
    title: '',
  },
  {
    key: 'correlation',
    href: '#correlation',
    components: <Correlation />,
    id: 'correlation',
    title: '',
  },
];

const Contact = () => {
  return (
    <div className="container">
      <Row>
        <Col span={24}>
          {sectionObject.map((item) => (
            <section className="section-ele" id={item.id} key={item.key}>
              {item.components}
            </section>
          ))}
        </Col>
      </Row>
      <div className="anchor-box">
        <Anchor items={sectionObject} offsetTop={58} />
      </div>
    </div>
  );
};

export default Contact;
