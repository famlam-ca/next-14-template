/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.famlam.ca",
      },
    ],
  },
}

export default nextConfig
