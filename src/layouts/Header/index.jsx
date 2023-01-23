import React from 'react';
import { useIntl, NavLink, getLocale, setLocale } from 'umi';

import './styles.scss';


const intls = [
  {
    name: 'zh-CN',
    title: '中文',
  },
  {
    name: 'en-US',
    title: 'English',
  },
];

function Header() {
  const intl = useIntl();
  const navArray = [
    {
      navTitle: intl.formatMessage({ id: 'nav.about' }),
      test: '/about',
      key: 'home',
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
    setLocale(toggleLocale.name);
  };
  const currentLocale = intls.find((item) => item.name.startsWith(getLocale())) || 'en-US';
  return (
    <section className="nav-container">
      <div className="header-wrapper section-padding">
        <div className="logo-box">汇文</div>
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
              <li key="locale" className="nav-li">
                <a
                  className="locale-btn"
                  type="button"
                  onClick={handleToggleLocale}
                >
                  {currentLocale.title}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
