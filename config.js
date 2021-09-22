const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://trusted.plus',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/DigtLab-QA/TestDocs/main/src/images/TrustedID_white.png',
    logoLink: 'https://trusted.plus',
    title: '',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'Trusted',
      algoliaAppId: "YSUPZ6O4QF",
      algoliaSearchKey: "a9c5865fedb6fa111eba7be1fffb6ac8",
      algoliaAdminKey: "856f676628f9f739513bb0757591b2cc",
    },
  },
  sidebar: {
    forcedNavOrder: ['01-v1.2.026','02-v1.2.042','03-v1.3'],
    collapsedNav: [],
    links: [{ text: 'Trusted.Plus', link: 'https://trusted.plus' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://trusted.plus'>Trusted.Plus </a>",
  },
  siteMetadata: {
    title: 'GitDocs Trusted.Plus',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'GitDocs Trusted.Plus',
      short_name: 'GitDocs Trusted.Plus',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
