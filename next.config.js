const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/hw_telegram_contests' : '',
  env: {
    REACT_URL_API: 'http://localhost:5000/'
  },
  async rewrites() {
    return [
      {
        source: '/hw_telegram_contests/:path*',
        destination: '/',
      },
    ];
  },
}