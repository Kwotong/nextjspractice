/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['wallpapercave.com']
    }
}

module.exports = nextConfig;

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'wallpapercave.com',
//           port: '',
//           pathname: '',
//         },
//       ],
//     },
//   }
