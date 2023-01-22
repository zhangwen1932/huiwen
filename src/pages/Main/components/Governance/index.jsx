import { Row, Col } from 'antd';
import { governanceText } from '../../static';
import './styles.scss';

const Governance = () => (
  <div className="contact-section">
    <div className="section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {governanceText.title}
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

export default Governance;