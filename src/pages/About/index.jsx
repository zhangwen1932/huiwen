import React, { useEffect, useState, useRef } from 'react';
import { Anchor, Row, Col } from "antd";

import './styles.scss';

const sectionObject = [{}]

const Home = () => {
  const topRef = useRef(null);
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  })
  return(
    <div>
      <Row>
        <Col span={24}>
          <div
            id="part-1"
            style={{ height: '100vh', background: 'rgba(255,0,0,0.02)', }}
          >
            Part 1
          </div>
          <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }}>
            Part 2
          </div>
          <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }}>
            Part 3
          </div>
        </Col>
      </Row>
      <div className='anchor-box'>
        <Anchor
          targetOffset={targetOffset}
          affix={false}
          showInkInFixed={true}
          bounds={5}
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: `<div className="dotted" />`,
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: `<div className="dotted" />`,
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: `<div className="dotted" />`,
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Home;