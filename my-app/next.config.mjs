import withFlowbiteReact from "flowbite-react/plugin/nextjs";

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

export default withFlowbiteReact(nextConfig);