import { useRef } from 'react';
import { Row, Col, Carousel } from 'antd';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
import { FormattedMessage, getLocale } from 'umi';
import { assetsText } from '../../static';

import './styles.scss';

const Assets = () => {
  const carouselRef = useRef();
  const handlePrev = () => {
    if(carouselRef.current){
      carouselRef.current.prev();
    }
  }
  const handleNext = () => {
    if(carouselRef.current){
      carouselRef.current.next();
    }
  }
  const { banner, bannerEn } = assetsText;
  const carouselImg = getLocale() === 'zh-CN' ?  banner : bannerEn;
  return(
    <div className="section-item bg-gray">
      <div className="section-content section-padding">
        <div className="middle-value">
          <div className="title">
            <FormattedMessage id={assetsText.title} />
          </div>
          <div className="divided" />
          <div className="section-desc">
            <p>
              <FormattedMessage id={assetsText.desc} />
            </p>
          </div>
          <div className="assets-content">
            <div className="assets-license">
              {
                assetsText.license.map((item, index) => (
                  <p key={index}>
                    <FormattedMessage id={item} />
                  </p>
                ))
              }
            </div>
            <div className="assets-list">
              <Row>
                <Col span={2}>
                  <button type="button" className="left-arrow" onClick={handlePrev}>
                    <LeftOutlined />
                  </button>
                </Col>
                <Col span={20}>
                    <Carousel
                      autoplay={true}
                      ref={carouselRef}
                    >
                      {carouselImg.map((item) => (
                        <div className="list-banner" key={item.id}>
                          <img src={item.imgUrl} alt="" />
                        </div>
                      ))}
                    </Carousel>
                </Col>
                <Col span={2}>
                  <button type="button" className="right-arrow" onClick={handleNext}>
                    <RightOutlined />
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assets;