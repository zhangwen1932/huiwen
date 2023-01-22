import { Row, Col } from 'antd';
import { assetsText } from '../../static';
import './styles.scss';

const Assets = () => (
  <div className="contact-section">
    <div className="section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {assetsText.title}
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

export default Assets;