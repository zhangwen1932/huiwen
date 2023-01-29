import { memo } from 'react';
import { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { FormattedMessage } from 'umi';

const Intro = memo((props) => {
  const [toggleIntro, setToggleIntro] = useState(true);
  const { name, position, author, positionSub, desc }=props;
  const hanldeToggle = () => {
    setToggleIntro(!toggleIntro);
  };
  return (
    <div className="intro-box" style={{ textAlign: 'center'}}>
      <button type="button" className='list-item' onClick={hanldeToggle}>
        <div className='list-name'>
          <FormattedMessage id={name} />
        </div>
        <div className='list-position'>
          <FormattedMessage id={position}/>
        </div>
        <div className="list-arrow">
          <RightOutlined />
        </div>
        <div className='list-divided' />
      </button>
      <div className={classnames('list-intro',  toggleIntro && 'hidden')}>
        <div className="list-author">
          <img src={author} alt=""/>
        </div>
      <div className="list-info">
        <p className="name"><FormattedMessage id={name} /></p>
        <p className="position">
          <span><FormattedMessage id={position}/></span>
          <span><FormattedMessage id={positionSub}/></span>
        </p>
        <p className="desc"><FormattedMessage id={desc}/></p>
      </div>
    </div>
  </div>
)});

export default Intro;