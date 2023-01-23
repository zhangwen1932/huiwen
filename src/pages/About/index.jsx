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
              {item.components}
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

export default Home;