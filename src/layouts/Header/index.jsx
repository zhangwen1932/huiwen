import React from 'react';
import { useIntl, NavLink, getLocale, setLocale } from 'umi';

// import { styles } from './styles.less';


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
      test: '/',
      key: 'home',
    },
    {
      navTitle: intl.formatMessage({ id: 'nav.main' }),
      test: '/main',
      key: 'main',
    },
    {
      navTitle: intl.formatMessage({ id: 'nav.team' }),
      test: 'team',
      key: 'team',
    },
    {
      navTitle: intl.formatMessage({ id: 'nav.contact' }),
      test: 'contact',
      key: 'contact',
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
            <button
              className="locale-btn"
              type="button"
              onClick={() => handleToggleLocale()}
            >
              {currentLocale.title}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
