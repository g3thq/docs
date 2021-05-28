module.exports = {
  title: 'Ghost Docs',
  tagline: 'Ghost docs.',
  url: 'https://about.g3t.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'g3thq',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'Ghost',
      logo: {
        alt: 'Ghost Logo',
        src: 'img/ghost_logo.png',
        target: '/docs/home',
      },
      items: [
        {
          to: 'docs/home',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://g3t.dev/redoc',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/g3thq/docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://twitter.com/g3thq',
          label: 'Twitter',
          position: 'right',
        }
      ],
    },
    algolia: {
      apiKey: '4b3aaec0466a855ce8ec420d3baedde3',
      indexName: 'deta',
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/g3thq',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/g3thq/',
            },
          ],
        },
      ],
      copyright: `-`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/g3thq/docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Karla&display=swap',
  ],
};
