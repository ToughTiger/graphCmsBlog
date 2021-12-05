const graphqlAPI = process.env.NEXT_PUBLIC_NORTHMIRROR_ENDPOINT;

module.exports = {
  async rewrite() {
    return [
      {
        source: "/api/:path*",
        destination: `${graphqlAPI}/api/:path*`,
      },
    ];
  },
};
