import React from 'react';
import { useIntl, NavLink, getLocale, setLocale } from 'umi';
import { Button } from 'antd';


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
      navTitle: intl.formatMessage({ id: 'home.nav.explore' }),
      test: '/',
      key: 'home',
    },
    {
      navTitle: intl.formatMessage({ id: 'home.nav.order' }),
      test: '/order',
      key: 'order',
    },
    {
      navTitle: intl.formatMessage({ id: 'home.nav.create' }),
      test: 'create',
      key: 'create',
    },
  ];

  const handleToggleLocale = () => {
    const toggleLocale = intls.find((item) => item.name !== getLocale());
    setLocale(toggleLocale.name, false);
  };
  const currentLocale =
    intls.find((item) => item.name.startsWith(getLocale())) || 'en-US';

  return (
    <>
      <div className="header-wrapper flex-box">
        <div className="logo-box">汇文</div>
        <div className="header-left flex-box">
          <div className="nav-wrapper left-ele">
            <div className="nav-box">
              {navArray.map((item) => (
                <NavLink to={item.test} key={item.key}>
                  {item.navTitle}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="locale-box left-ele">
            <Button
              className="locale-btn"
              type="button"
              onClick={() => handleToggleLocale()}
            >
              {currentLocale.title}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
