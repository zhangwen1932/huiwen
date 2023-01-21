import { Row, Col } from 'antd';
import { contactText } from '../../static';
import './styles.scss';

const Contact = () => (
  <div className="contact-section section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {contactText.title}
        </div>
        <div className="divided" />
        <div className="contact-list">
          联系列表
        </div>
      </div>
    </div>
  </div>
)

export default Contact;