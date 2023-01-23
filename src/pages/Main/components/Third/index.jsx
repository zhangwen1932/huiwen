import { Row, Col } from 'antd';
import { thirdText } from '../../static';
import './styles.scss';

const Third = () => (
  <div className="contact-section">
    <div className="section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {thirdText.title}
        </div>
        <div className="divided" />
        <div className="section-desc width760">
          <p>
            {thirdText.desc}
          </p>
        </div>
        <div className="contact-list">
          列表
        </div>
      </div>
    </div>
    </div>
  </div>
)

export default Third;