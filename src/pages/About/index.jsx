import React from 'react';
import { Anchor, Col, Row } from 'antd';
import About from './components/About';
import Banner from './components/Banner';
import CoreCompetence from './components/CoreCompetence';
import CooperativePartner from './components/CooperativePartner';

const sectionObject = [
  {
    key: 'banner',
    href: '#banner',
    components: <Banner />,
    id: 'banner',
    title: '',
  },
  {
    key: 'about',
    components: <About />,
    href: '#about',
    id: 'about',
    title: '',
  },
  {
    key: 'coreCompetence',
    components: <CoreCompetence />,
    href: '#coreCompetence',
    id: 'coreCompetence',
    title: '',
  },
  {
    key: 'cooperativePartner',
    components: <CooperativePartner />,
    href: '#cooperativePartner',
    id: 'cooperativePartner',
    title: '',
  },
];

const Home = () => {
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

export default Home;
