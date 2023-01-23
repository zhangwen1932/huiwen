import { Row, Col } from 'antd';
import { contactText } from '../../static';
import './styles.scss';

const Contact = () => (
  <div className="section-item bg-gray">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          {contactText.title}
        </div>
        <div className="divided" />
        <div className="contact-content">
          <Row>
            <Col span={6} offset={6}>
              <div className="list-item">
                <div className="list-img">
                  <img src={contactText.content.phone.imgUrl} alt="" />
                </div>
                <div className="list-info">{contactText.content.phone.info}</div>
              </div>
            </Col>
            <Col span={6}>
              <div className="list-item">
                <div className="list-img">
                  <img src={contactText.content.email.imgUrl} alt="" />
                </div>
                <div className="list-info">{contactText.content.email.info}</div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <div className="list-item" style={{ marginTop: '33px'}}>
                <div className="list-img">
                  <img src={contactText.content.address.imgUrl} alt="" />
                </div>
                <div className="list-info">{contactText.content.address.info}</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
)

export default Contact;