import React from 'react';
import { Helmet } from "react-helmet";

const SeoTags = ({ seo }) => {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {/* <meta name="keywords" content={seo.keywords} /> */}
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
      <meta property="og:title" content={seo.og_title} />
      <meta property="og:url" content={seo.og_url} />
      <meta property="og:image" content={seo.og_image} />
      <meta property="fb:admins" content={seo.fb_admins}/>
      <meta property="og:site_name" content={seo.og_site_name} />
      <meta property="og:description" content={seo.og_description} />
      {/* <meta property="og:type" content={seo.og_type} /> */}

      <meta name="twitter:card" content={seo.twitter_card} />
      <meta name="twitter:title" content={seo.twitter_title} />
      <meta name="twitter:description" content={seo.twitter_description} />
      {/* <meta name="twitter:image:src" content={seo.twitter_image} /> */}
      {/* <meta name="twitter:site" content={seo.twitter_site} />
      <meta name="twitter:creator" content={seo.twitter_creator} /> */}

      {/* <meta itemprop="author" content={seo.google_author} />
      <meta itemprop="publisher" content={seo.google_publisher} />
      <meta itemprop="name" content={seo.google_name} />
      <meta itemprop="description" content={seo.google_description} />
      <meta itemprop="image" content={seo.google_image} /> */}
    </Helmet>
  );
};

export default SeoTags;
