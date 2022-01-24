/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      'tailwindui.com',
      'www.algorand.com',
      'res.cloudinary.com',
      'cdn.coinranking.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}
