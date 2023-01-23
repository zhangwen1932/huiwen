import { useRef } from 'react';
import { Row, Col, Carousel } from 'antd';
import { assetsText } from '../../static';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
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
  return(
    <div className="section-item bg-gray">
      <div className="section-content section-padding">
        <div className="middle-value">
          <div className="title">
            {assetsText.title}
          </div>
          <div className="divided" />
          <div className="section-desc width760">
            <p>
              {assetsText.desc}
            </p>
          </div>
          <div className="assets-content">
            <div className="assets-license">
              <p>{assetsText.license}</p>
            </div>
            <div className="assets-list">
              <Row>
                <Col span={2}>
                  <button type="button" className="left-arrow" onClick={handleNext}>
                    <LeftOutlined />
                  </button>
                </Col>
                <Col span={20}>
                    <Carousel
                      arrows={true}
                      ref={carouselRef}
                    >
                      {assetsText.banner.map((item) => (
                        <div className="list-banner" key={item.id}>
                          <img src={item.imgUrl} alt="" />
                        </div>
                      ))}
                    </Carousel>
                </Col>
                <Col span={2}>
                  <button type="button" className="right-arrow" onClick={handlePrev}>
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