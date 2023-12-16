/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'user-images.githubusercontent.com'],
  },
  experimental: {
    appDir: false,
  },
};
