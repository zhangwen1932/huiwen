import React, { useState } from 'react';
import { useIntl, NavLink, getLocale, setLocale } from 'umi';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import classnames from 'classnames';

import './styles.scss';


const intls = [
  {
    name: 'zh-CN',
    title: 'English',
  },
  {
    name: 'en-US',
    title: '中文',
  },
];

function Header() {
  const intl = useIntl();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navArray = [
    {
      navTitle: intl.formatMessage({ id: 'nav.about' }),
      test: '/about',
      key: 'about',
    },
    {
      navTitle: intl.formatMessage({ id: 'nav.main' }),
      test: '/main',
      key: 'main',
    },
    {
      navTitle: intl.formatMessage({ id: 'nav.team' }),
      test: '/team',
      key: 'team',
    },
    {
      navTitle: intl.formatMessage({ id: 'nav.contact' }),
      test: '/contact',
      key: 'contact',
    },
  ];
  

  const handleToggleLocale = () => {
    const toggleLocale = intls.find((item) => item.name !== getLocale());
    // 后面的false代表的意思是切换时不刷新页面
    setLocale(toggleLocale.name, false);
  };
  const currentLocale = intls.find((item) => item.name.startsWith(getLocale())) || 'en-US';

  const handleShowMobileMenu = (e) => {
    setShowMobileMenu(!showMobileMenu);
    if (!showMobileMenu) {
      e.stopPropagation();
      document.addEventListener('click', () => setShowMobileMenu(false), false);
      document.addEventListener('tap', () => setShowMobileMenu(false), false);
      document.addEventListener(
        'mousewheel',
        () => setShowMobileMenu(false),
        false,
      );
    }
  };

  return (
    <section className="nav-container">
      <div className="header-wrapper section-padding">
        <div className="logo-box">
          <img src="./images/logo/blackLogo.svg" alt="logo"/>
        </div>
        <div className="header-right">
          <div className="nav-box">
            <ul className="nav-ul">
              {navArray.map((item) => (
                <li key={item.key} className="nav-li">
                  <NavLink className="nav-ele" to={item.test}>
                    {item.navTitle}
                  </NavLink>
                </li>
              ))}
              {/* <li key="locale" className="nav-li">
                <a
                  className="locale-btn"
                  type="button"
                  onClick={handleToggleLocale}
                >
                  {currentLocale.title}
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className={classnames('mobile-list', !showMobileMenu && "hidden")}>
          <div className="nav-box">
            <ul className="nav-ul">
              {navArray.map((item) => (
                <li key={item.key} className="nav-li">
                  <NavLink className="nav-ele" to={item.test}>
                    {item.navTitle}
                  </NavLink>
                </li>
              ))}
                {/* <li key="locale" className="nav-li">
                  <a
                    className="locale-btn"
                    type="button"
                    onClick={handleToggleLocale}
                  >
                    {currentLocale.title}
                  </a>
                </li> */}
            </ul>
          </div>
        </div>
        <div className="mobile-icon" onClick={(e) => handleShowMobileMenu(e)}>
          {!showMobileMenu ? (
            <MenuOutlined />
          ) : (
            <CloseOutlined />
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
