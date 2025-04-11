/** @type {import('next').NextConfig} */
const nextConfig = {
async rewrites() {
        return [
            {
                source: "/:slug-danh-muc",
                destination: "/categories/:slug",
            },
            {
                source: "/:slug",
                destination: "/products/:slug",
            },
        ];
    },
};

export default nextConfig;
