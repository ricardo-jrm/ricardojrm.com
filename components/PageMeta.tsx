import React from 'react';
import Head from 'next/head';

const PageMeta = ({  }: IPageMetaProps): any => {
  return (
    <Head>
      <title>RicardoJRM</title>

      <meta name="description" content="React Developer looking for a challenging project" />
      <meta
        name="keywords"
        content="react, reactjs, developer, javascript, next, nextjs, materialui, material-ui, lisbon, portugal, for hire"
      />
      <meta name="title" content="RicardoJRM" />
      <meta name="url" content="https://www.ricardojrm.com" />

      {/* Open Graph */}

      <meta property="og:description" content="React Developer looking for a challenging project" />
      {/* <meta
        property="og:image:secure_url"
        content="https://www.kfitnessstudio.com/static/openg/kfitness-openg.png"
      />
      <meta
        property="og:image"
        content="https://www.kfitnessstudio.com/static/openg/kfitness-openg.png"
      /> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="RicardoJRM" />
      <meta property="og:title" content="RicardoJRM" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ricardojrm.com" />

      {/* Microsoft */}

      <meta name="msapplication-TileColor" content="#c0c0c0" />
      <meta name="msapplication-TileImage" content="/static/img/ricardojrm-icon-144.png" />
      {/* <meta
        name="msapplication-square70x70logo"
        content="/static/img/ricardojrm-icon-070.png"
      />
      <meta
        name="msapplication-square150x150logo"
        content="/static/img/ricardojrm-icon-150.png"
      />
      <meta
        name="msapplication-square310x310logo"
        content="/static/img/ricardojrm-icon-310.png"
      /> */}

      {/* Apple */}

      <meta name="apple-mobile-web-app-title" content="RicardoJRM" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <link rel="apple-touch-icon" sizes="57x57" href="/static/img/ricardojrm-icon-057.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/static/img/ricardojrm-icon-060.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/static/img/ricardojrm-icon-072.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/static/img/ricardojrm-icon-076.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/static/img/ricardojrm-icon-114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/static/img/ricardojrm-icon-120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/static/img/ricardojrm-icon-144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/img/ricardojrm-icon-152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/img/ricardojrm-icon-180.png" />

      {/* Web */}

      <link rel="icon" type="image/png" sizes="16x16" href="/static/img/ricardojrm-icon-016.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/img/ricardojrm-icon-032.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/static/img/ricardojrm-icon-096.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="160x160"
        href="/static/img/ricardojrm-icon-160.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/static/img/ricardojrm-icon-192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href="/static/img/ricardojrm-icon-196.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="400x400"
        href="/static/img/ricardojrm-icon-400.png"
      />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="RicardoJRM" />
      <meta
        name="twitter:description"
        content="React Developer looking for a challenging project."
      />
      <meta name="twitter:site" content="@ricardojrm7" />
      {/* <meta
        name="twitter:image"
        content="https://www.glaiveware.com/static/meta/openg/en/glaiveware-openg-websites.png"
      /> */}
      <meta name="twitter:creator" content="@ricardojrm7" />
    </Head>
  );
};

export interface IPageMetaProps {}

export default PageMeta;
