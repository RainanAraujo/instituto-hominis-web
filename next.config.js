/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ["blogger.googleusercontent.com"],
  },
};

module.exports = nextConfig;
