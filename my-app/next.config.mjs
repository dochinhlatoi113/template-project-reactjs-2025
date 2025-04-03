/** @type {import('next').NextConfig} */
const nextConfig = {
async rewrites() {
        return [
            {
                source: "/:slug-danh-muc",
                destination: "/categories/:slug",
            },
        ];
    },
};

export default nextConfig;
