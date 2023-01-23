import { Row, Col } from 'antd';
import { teamText } from '../../static';
import './styles.scss';

const Team = () => (
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
                <div className='list-name'>
                  <div className='list-item'>
                    {item.name}
                  </div>
                  <div className='list-position'>
                    {item.position}
                  </div>
                  <div className='list-divided' />
                </div>
                <div className="list-intro hidden">
                  <div className="list-author">
                    <img src={item.author} alt=""/>
                  </div>
                  <div className="list-info">
                    <p>{item.name}</p>
                    <p>
                      <span>{item.position}</span>
                      <span>{item.positionSub}</span>
                    </p>
                    <p>{item.desc}</p>
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

export default Team;