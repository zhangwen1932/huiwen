import { Row, Col } from 'antd';
import { aboutText } from '../../static';
import './styles.scss';

const About = () => (
  <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          {aboutText.title}
        </div>
        <div className="divided" />
        <div className="section-desc width760">
          <p>
            {aboutText.desc}
          </p>
        </div>
        <div className="about-content width760">
          <Row>
            {aboutText.content.map((item) => (
              <Col span={8} key={item.id}>
                <div className='list-item'>
                  <span className="list-number">
                    {item.number}
                  </span>
                  <span className="list-unit">
                    {item.unit}
                  </span>
                  <span>
                    +
                  </span>
                </div>
                <div className="list-desc">
                  {item.desc}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  </div>
)

export default About;