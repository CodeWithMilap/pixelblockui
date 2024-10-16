/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: true,
    output: 'export',
    images: {
      formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
