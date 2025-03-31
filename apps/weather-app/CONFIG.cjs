/**
 * Application level configuration
 */
module.exports = {
  /**
   * Application base path
   * Ex: https://<domain>.com/${basePath}/route
   */
  basePath: '',

  /**
   *
   */
  apiHost: process.env['NEXT_PUBLIC_API_HOST'] ?? '',
};
