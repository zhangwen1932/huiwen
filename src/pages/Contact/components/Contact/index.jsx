import { Row, Col } from 'antd';
import { FormattedMessage } from 'umi';
import { contactText } from '../../static';
import './styles.scss';

const Contact = () => (
  <div className="section-item bg-gray">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          <FormattedMessage id={contactText.title} />
        </div>
        <div className="divided" />
        <div className="contact-content">
          <Row justify="center" align="middle" wrap={true}>
            <Col sm={12} xs={24}>
              <div className="list-item">
                <div className="list-img">
                  <img src={contactText.content.phone.imgUrl} alt="" />
                </div>
                <div className="list-info">
                  {contactText.content.phone.info}
                </div>
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="list-item">
                <div className="list-img">
                  <img src={contactText.content.email.imgUrl} alt="" />
                </div>
                <div className="list-info">
                  {contactText.content.email.info}
                </div>
              </div>
            </Col>
            <Col sm={12} xs={24}>
              <div className="list-item">
                <div className="list-img">
                  <img src={contactText.content.address.imgUrl} alt="" />
                </div>
                <div className="list-info">
                  {contactText.content.address.info}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
