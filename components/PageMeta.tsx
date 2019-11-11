import React from 'react';
import Head from 'next/head';

const PageMeta = ({  }: IPageMetaProps): any => {
  return (
    <Head>
      <title>Ricardo JRM</title>

      <meta name="description" content="Page Descrition" />
      <meta name="keywords" content="keywords" />
    </Head>
  );
};

export interface IPageMetaProps {}

export default PageMeta;
