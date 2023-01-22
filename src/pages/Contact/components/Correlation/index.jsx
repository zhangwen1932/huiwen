import { Row, Col } from 'antd';
import { correlationText } from '../../static';
import './styles.scss';

const Correlation = () => (
  <div className="section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {correlationText.title}
        </div>
        <div className="divided" />
        <div className="correlation-content">
          {correlationText.content.map((item) => (
            <div className="list-item" key={item.id}>
              <div className="list-img">
                <img src={item.imgUrl} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Correlation;