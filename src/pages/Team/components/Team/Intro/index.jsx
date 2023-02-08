import { memo } from 'react';
import { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { FormattedMessage } from 'umi';
import { Collapse, Space } from 'antd';

const Intro = memo((props) => {
  const [toggleIntro, setToggleIntro] = useState(true);
  const { name, position, author, positionSub, desc } = props;
  const hanldeToggle = () => {
    setToggleIntro(!toggleIntro);
  };
  return (
    <Collapse
      className="intro-box"
      style={{ textAlign: 'center' }}
      ghost
      onChange={hanldeToggle}
    >
      <Collapse.Panel
        showArrow={false}
        header={
          <div className="list-item">
            <div className="list-name">
              <FormattedMessage id={name} />
            </div>
            <div className="list-position">
              <FormattedMessage id={position} />
            </div>
            <div className={classnames('list-arrow', !toggleIntro && 'open')}>
              <RightOutlined />
            </div>
            <div className="list-divided" />
          </div>
        }
        key={name}
      >
        <div className="list-intro">
          <div className="list-author">
            <img src={author} alt="" />
          </div>
          <div className="list-info">
            <p className="name">
              <FormattedMessage id={name} />
            </p>
            <p className="position">
              <span>
                <FormattedMessage id={position} />
              </span>
              <span>
                <FormattedMessage id={positionSub} />
              </span>
            </p>
            <p className="desc">
              <FormattedMessage id={desc} />
            </p>
          </div>
        </div>
      </Collapse.Panel>
    </Collapse>
  );
});

export default Intro;
