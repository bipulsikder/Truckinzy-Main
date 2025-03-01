import fs from 'fs';
import path from 'path';

// Define your website URL
const SITE_URL = 'https://truckinzy.com';

// Define the pages of your site
const pages = [
  '',
  'about',
  'services',
  'recruitment-process',
  'for-employers',
  'for-candidates',
  'logistics-recruitment',
  'supply-chain-recruitment',
  'transportation-recruitment',
  'warehouse-recruitment',
  'fleet-management-recruitment',
  'contact',
  'careers',
  'blog',
  'terms',
  'privacy'
];

// Generate sitemap XML content
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add each page to the sitemap
  pages.forEach(page => {
    const url = page ? `${SITE_URL}/${page}` : SITE_URL;
    sitemap += '  <url>\n';
    sitemap += `    <loc>${url}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += '    <changefreq>weekly</changefreq>\n';
    
    // Set priority based on page importance
    let priority = '0.7'; // Default priority
    
    if (page === '') {
      priority = '1.0'; // Homepage gets highest priority
    } else if (['about', 'services', 'contact'].includes(page)) {
      priority = '0.8'; // Main sections get high priority
    } else if (page.includes('recruitment')) {
      priority = '0.9'; // Recruitment pages are important for business
    }
    
    sitemap += `    <priority>${priority}</priority>\n`;
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  return sitemap;
};

// Write sitemap to public directory
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const outputPath = path.join('public', 'sitemap.xml');
  
  // Create public directory if it doesn't exist
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at ${outputPath}`);
};

writeSitemap();