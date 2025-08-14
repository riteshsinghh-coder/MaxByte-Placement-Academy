/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'blogs.microsoft.com',
      'www.acko.com',
      'www.svgrepo.com',
      'successinsightsindia.com',
      'static.ambitionbox.com',
      'miro.medium.com',
      'mms.businesswire.com',
      'encrypted-tbn0.gstatic.com',
      'www.browserstack.com',
      'upload.wikimedia.org',
      'assets-global.website-files.com',
      'images.yourstory.com',
      'www.eklavvya.com',
      'cdn.iconscout.com',
      'media.licdn.com',
      'images.livemint.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows all https domains (alternative to listing all)
      },
    ],
  },
}

module.exports = nextConfig