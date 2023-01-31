import { Row, Col } from 'antd';
import { FormattedMessage, getLocale } from 'umi';
import classnames from 'classnames';
import { thirdText } from '../../static';
import './styles.scss';

const Third = () => (
  <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          <FormattedMessage id={thirdText.title} />
        </div>
        <div className="divided" />
        <div className="section-desc">
          <p>
            <FormattedMessage id={thirdText.desc} />
          </p>
        </div>
        <div className="third-content">
          <div className="third-list">
            <Row justify="center" align="middle" wrap={true}>
              {thirdText.content.map((item) => (
              <Col className="third-list" md={6} sm={12} xs={12} key={item.id}>
                <div className="third-item">
                  <div className="item-box">
                    <div className={classnames(getLocale()==='zh-CN' ? "item-icon":"item-icon-en")}>
                      <img src={item.imgUrl} alt="" />
                    </div>
                    <p>
                      <FormattedMessage id={item.title} />
                    </p>
                  </div>
                </div>
              </Col>
            ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Third;