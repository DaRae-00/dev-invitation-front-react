/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: process.env.NODE_ENV === 'development',
  reactStrictMode: process.env.NODE_ENV === 'development',

  webpack(config) {
    config.resolve.modules.push(__dirname) // 추가
    return config
  },
}
