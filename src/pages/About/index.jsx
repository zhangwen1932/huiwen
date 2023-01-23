import React, { useEffect, useState, useRef } from 'react';
import { Anchor, Col, Row } from "antd";
import About from './components/About';
import Banner from './components/Banner';
import CoreCompetence from './components/CoreCompetence';
import CooperativePartner from './components/CooperativePartner';

const sectionObject = [{
  key: 'banner',
  href: '#banner',
  components: <Banner />,
  id: 'banner',
  title: ''
}, {
  key: 'about',
  components: <About />,
  href: '#about',
  id: 'about',
  title: ''
},  {
  key: 'coreCompetence',
  components: <CoreCompetence />,
  href: '#coreCompetence',
  id: 'coreCompetence',
  title: ''
},  {
  key: 'cooperativePartner',
  components: <CooperativePartner />,
  href: '#cooperativePartner',
  id: 'cooperativePartner',
  title: ''
}]

const Home = () => {
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

export default Home;