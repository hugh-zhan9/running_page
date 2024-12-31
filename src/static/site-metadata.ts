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
  siteUrl: 'https://running-page-one-psi.vercel.app/',
  logo: 'https://cdn.v2ex.com/avatar/1872/c12d/546693_xlarge.png?m=1730771302',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'http://ipv4.zhangyk.space:2283',
    },
    // {
    //   name: 'About',
    //   url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    // },
  ],
};

export default data;
