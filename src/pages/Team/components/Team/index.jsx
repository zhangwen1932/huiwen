import { Row, Col } from 'antd';
import Intro from './Intro';
import { teamText } from '../../static';

import './styles.scss';


const Team = () => {
  return(
    <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          {teamText.title}
        </div>
        <div className="divided" />
        <div className="team-content">
          <Row>
            {teamText.content.map((item) => (
              <Col span={12} key={item.id}>
                <Intro {...item}/>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  </div>
)}


export default Team;