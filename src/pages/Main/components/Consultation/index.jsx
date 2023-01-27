/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { consultationText } from '../../static';
import CircleType from "circletype";
import './styles.scss';

const Consultation = () => {
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(250);
  }, []);
  return (<div className="section-item bg-gray">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          {consultationText.title}
        </div>
        <div className="divided" />
        <div className="section-desc">
          <p>
            {consultationText.desc}
          </p>
        </div>
        <div className="consultation-content">
          <div className="consultation-circle">
            <div className="circle-text">
              <div className="img-box">
                <img src={consultationText.imgUrl} alt=""/>
                <p>{consultationText.subTitle}</p>
              </div>
            </div>
            <div className="circle-front">
              <div className='circle'></div>
            </div>
            <div className="circle-middle">
              <div className='circle'></div>
            </div>
            <div className="circle-end">
              <div className='circle'></div>
            </div>
            <div className="circle-desc">
              <div className='circle' ref={circleInstance}>
                {consultationText.content.map((item, index)=> 
                  <p key={index}>
                    {item}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                )}
              </div>
            </div>
            <div className="circle-dotted">
              <div className="dotted dotted-1"/>
              <div className="dotted dotted-2" />
              <div className="dotted dotted-3" />
            </div>
          </div>
          <div className="consultation-circle-mobile">
            <div className="circle-desc">
              {consultationText.content.map((item, index)=> 
                <p key={index}>
                  {item}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default Consultation;