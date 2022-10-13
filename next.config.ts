module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Acess-Control-Allow-Credentials', value: 'true' },
          { key: 'Acess-Control-Allow-Origin', value: '*' },
          {
            key: 'Acess-Control-Allow-Methods',
            value: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
          },
          {
            key: 'Acess-Control-Allow-Headers',
            value:
              'Accept, X-CSRF-Token, X-Requested-With, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization',
          },
        ],
      },
    ];
  },
};
