import { Row, Col } from 'antd';
import CountUp from 'react-countup';
import LazyLoad from 'react-lazyload';
import { FormattedMessage, getLocale } from 'umi';
import { aboutText } from '../../static';
import './styles.scss';

const About = () => (
  <div className="section-item">
    <div className="section-content section-padding">
      <div className="middle-value">
        <div className="title">
          <FormattedMessage id={aboutText.title} />
        </div>
        <div className="divided" />
        <div className="section-desc">
          <FormattedMessage id={aboutText.desc} />
        </div>
        <div className="about-content">
          <Row>
            {aboutText.content.map((item) => (
              <Col span={8} key={item.id}>
                <LazyLoad once>
                <div className='list-item'>
                  <span className="list-number">
                    <CountUp
                      start={0}
                      end={getLocale() ==='zh-CN' ? item.number : item.numberEn}
                      duration={1}
                      separator=","
                    />
                  </span>
                  <span className="list-unit">
                    <FormattedMessage id={item.unit} />
                  </span>
                  <span>
                    +
                  </span>
                </div>
                <div className="list-desc">
                  {item.desc.map((ele, index) => (
                    <p key={index}>
                      <FormattedMessage id={ele} />
                    </p>
                  ))}
                </div>
                </LazyLoad>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  </div>
)

export default About;