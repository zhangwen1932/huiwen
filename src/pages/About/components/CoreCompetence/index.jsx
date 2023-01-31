import { FormattedMessage } from 'umi';
import { Row, Col } from 'antd';
import { coreCompetenceText } from '../../static';
import './styles.scss';

const CoreCompetence = () => (
  <div className="section-item bg-gray">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          <FormattedMessage id={coreCompetenceText.title} />
        </div>
        <div className="divided" />
        <div className="core-content">
          <Row wrap={true}>
            {coreCompetenceText.content.map((item) => (
              <Col xl={6} md={12} sm={12} xs={24} key={item.id}>
                <div className="list-item">
                  <div className="list-icon">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className="list-title">
                    <FormattedMessage id={item.title} />
                  </div>
                  <div className="list-desc">
                    <FormattedMessage id={item.desc} />
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