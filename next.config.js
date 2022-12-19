/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag|ps)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    config.module.rules.push({
        test: /\.(glb|gltf|mp3|wav|)$/,
        type: 'asset/resource',
    });

    return config;
  },
}

module.exports = nextConfig
