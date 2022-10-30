import {
  sitemapBuilder as buildSitemap,
  paramsApplier as applyParams,
} from 'react-router-sitemap';
import path from 'path'; // Add path which will be needed for file write
import fs from 'fs'; // Import file system object

import routes from '../routes/routes';

// use your website root address here. Optimally you can
// include dev and production environments with variables
const hostname = 'https://www.fergene.com';

// define our destination folder and sitemap file name
const dest = path.resolve('./public', 'sitemap.xml');

// Replace :section with section titles
const config = {
	'/:section': [
    { section: ['about', 'leadership', 'news', 'careers', 'media' ] },
  ],
};

// Merge our route paths with config pattern
const paths = applyParams(routes, config);

const sitemap = buildSitemap(hostname, paths);

// write sitemap.xml file in /public folder
// Access the sitemap content by converting it with .toString() method
fs.writeFileSync(dest, sitemap.toString())
