const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://trusted.plus/id/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://github.com/DigtLab-QA/TestDocs/raw/main/content/img/Trusted%20white.png',
    logoLink: 'https://trusted.plus/id/',
    title:
      "",
    githubUrl: 'https://github.com/DigtLab-QA/TestDocs',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      // '/introduction', // add trailing slash if enabled above
      // '/codeblock',
    ],
    collapsedNav: [
      // '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Trusted.Plus', link: 'https://trusted.plus/id/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://trusted.plus/id/'>Trusted.Plus Docs</a>",
  },
  siteMetadata: {
    title: 'Trusted.Plus Docs',
    description: 'Trusted.Plus Docs',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Trusted.Plus Docs',
      short_name: 'Trusted.Plus.Docs',
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
