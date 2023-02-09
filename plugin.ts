import { IApi } from 'umi';

export default (api: IApi) => {
  api.addHTMLMetas(() => [
    {
      name: 'description',
      property: 'og:description',
      content: `Established in Sydney, Australia, Wyvern Advisory is dedicated in providing customized family office solutions for high-net-worth individuals around the world. We provide one-stop consultation service in related to legal, tax and financial services areas. With the core principle of putting the client's interests first” we have formed our foundation with a network of leading domestic and international law firms, accounting firms, investment banks, private banks, and trust companies. We are committed to the long-term interests and growth for our clients and their family.`,
    },
    {
      name: 'keywords',
      content: 'Wyvern Advisory,fund,investment',
    },
  ]);
};
