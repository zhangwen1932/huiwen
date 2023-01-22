import { Row, Col, Carousel } from 'antd';
import { assetsText } from '../../static';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
import './styles.scss';

const Assets = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return(
    <div className="section-item bg-gray">
      <div className="section-content">
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
                <Col span={1}>
                  <div className="left-arrow">
                    <LeftOutlined />
                  </div>
                </Col>
                <Col span={22}>
                  <div style={{ width: '100%'}}>
                    <Carousel
                      afterChange={onChange}
                    >
                      {assetsText.banner.map((item) => (
                        <div className="list-banner" key={item.id}>
                          <img src={item.imgUrl} alt="" />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </Col>
                <Col span={1}>
                  <div className="right-arrow">
                    <RightOutlined />
                  </div>
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