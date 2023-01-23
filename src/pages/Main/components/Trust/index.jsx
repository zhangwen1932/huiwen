import { Row, Col } from 'antd';
import { trustText } from '../../static';
import './styles.scss';

const Trust = () => (
  <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          { trustText.title}
        </div>
        <div className="divided" />
        <div className="section-desc width760">
          <p>
            {trustText.desc}
          </p>
        </div>
        <div className="trust-content">
          <Row>
            {trustText.content.map((item) => (
              <Col key={item.id} flex={1}>
                <div className="item-icon">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="item-desc">
                  {item.elcontent.map((ele, index) => (
                    <p key={index}>{ele}</p>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  </div>
)

export default Trust;