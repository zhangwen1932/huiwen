import React, { useEffect, useState, useRef } from 'react';
import { Anchor, Col, Row } from "antd";
import Banner from './components/Banner';

const sectionObject = [{
  key: 'banner',
  href: '#banner',
  components: <Banner />,
  id: 'banner',
  title: 'Banner'
}]

const Contact = () => {
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

export default Contact;