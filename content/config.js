const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://zkh.kloud.one/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/DigtLab-QA/KloudOne/master/src/images/kloudone.png',
    logoLink: 'https://zkh.kloud.one/',
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
      indexName: 'Kloud',
      algoliaAppId: "ALEC0WYN85",
      algoliaSearchKey: "5b3e9e822ca6424f23ac7eabae6576e9",
      algoliaAdminKey: "3a662f2a97971b3daa07d1509dc3cf44",
    },
  },
  sidebar: {
    forcedNavOrder['01-v1.2.026','02-v1.2.042','03-v1.3'],
    collapsedNav: [],
    links: [{ text: 'KLOUD.ONE', link: 'https://zkh.kloud.one/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://zkh.kloud.one/'>KLOUD.ONE </a>",
  },
  siteMetadata: {
    title: 'GitDocs KLOUD.ONE',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: '',
    favicon: 'https://raw.githubusercontent.com/DigtLab-QA/KloudOne/master/src/images/favicon-new.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'GitDocs KLOUD.ONE',
      short_name: 'GitDocs KLOUD.ONE',
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
