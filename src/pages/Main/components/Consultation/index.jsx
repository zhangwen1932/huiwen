import { Row, Col } from 'antd';
import { consultationText } from '../../static';
import './styles.scss';

const Consultation = () => (
  <div className="contact-section">
    <div className="section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {consultationText.title}
        </div>
        <div className="divided" />
        <div className="contact-list">
          列表
        </div>
      </div>
    </div>
    </div>
  </div>
)

export default Consultation;