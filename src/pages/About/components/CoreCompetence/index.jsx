import { Row, Col } from 'antd';
import { coreCompetenceText } from '../../static';
import './styles.scss';

const CoreCompetence = () => (
  <div className="section-item">
    <div className="section-content">
      <div className="middle-value">
        <div className="title">
          {coreCompetenceText.title}
        </div>
        <div className="divided" />
        <div className="core-content">
          <Row>
            {coreCompetenceText.content.map((item) => (
              <Col span={6} key={item.id}>
                <div className="list-item">
                  <div className="list-icon">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className="list-title">
                    {item.title}
                  </div>
                  <div className="list-desc">
                    {item.desc}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  </div>
)

export default CoreCompetence;