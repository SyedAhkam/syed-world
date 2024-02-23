/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://syed.world',
  generateRobotsTxt: true,
  generateIndexSitemap: false
}
