interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://hugh-zhan9.github.io/running_page',
  logo: 'https://cdn.v2ex.com/avatar/1872/c12d/546693_xlarge.png?m=1730771302',
  description: 'Personal site and blog',
  navLinks: [
    // {
    //   name: 'Summary',
    //   url: '/summary',
    // },
    {
      name: 'Blog',
      url: 'https://hugh-zhan9.github.io',
    },
    // {
    //   name: 'About',
    //   url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    // },
  ],
};

export default data;
