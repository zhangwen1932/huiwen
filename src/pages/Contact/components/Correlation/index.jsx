import { Row, Col } from 'antd';
import { correlationText } from '../../static';
import './styles.scss';

const Correlation = () => (
  <div className="correlation-section">
    <div className="section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {correlationText.title}
        </div>
        <div className="divided" />
        <div className="correlation-list">
        </div>
      </div>
    </div>
    </div>
  </div>
)

export default Correlation;