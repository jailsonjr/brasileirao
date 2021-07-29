module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: 'https://brasileirao-api.vercel.app/api/',
  },
  headers: [
    {
      key: 'Access-Control-Allow-Origin',
      value: 'https://brasileirao.vercel.app/'
    }
  ]
}
