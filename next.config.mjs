/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /**
   * The site was repositioned from a hardware/OEM catalogue to a solutions and
   * systems-integration structure. These keep the previous URLs alive rather
   * than leaving them to 404.
   */
  async redirects() {
    return [
      // Retired /products/* catalogue -> technology layers
      { source: "/products/rack-servers", destination: "/technology/compute-infrastructure", permanent: true },
      { source: "/products/server-accessories", destination: "/technology/compute-infrastructure", permanent: true },
      { source: "/products/network-switches", destination: "/technology/network-infrastructure", permanent: true },
      { source: "/products/network-accessories", destination: "/technology/network-infrastructure", permanent: true },
      { source: "/products/firewalls", destination: "/technology/cybersecurity-architecture", permanent: true },
      { source: "/products/storage", destination: "/technology/data-storage-platforms", permanent: true },
      { source: "/products/:slug*", destination: "/#technology", permanent: true },

      // Previous solution slugs -> current solution areas
      { source: "/solutions/compute-infrastructure", destination: "/technology/compute-infrastructure", permanent: true },
      { source: "/solutions/network-infrastructure", destination: "/solutions/enterprise-networking", permanent: true },
      { source: "/solutions/network-security", destination: "/solutions/cybersecurity", permanent: true },
      { source: "/solutions/storage-solutions", destination: "/solutions/data-storage", permanent: true },
      { source: "/solutions/data-center-infrastructure", destination: "/solutions/cloud-infrastructure", permanent: true },
      { source: "/solutions/virtualization", destination: "/technology/virtualization-cloud", permanent: true },

      // Previous service slugs -> current lifecycle stages
      { source: "/services/it-infrastructure", destination: "/services/consulting", permanent: true },
      { source: "/services/server-deployment", destination: "/services/implementation", permanent: true },
      { source: "/services/network-deployment", destination: "/services/implementation", permanent: true },
      { source: "/services/data-center-services", destination: "/services/implementation", permanent: true },
      { source: "/services/migration", destination: "/services/implementation", permanent: true },
      { source: "/services/firewall-deployment", destination: "/services/security", permanent: true },
      { source: "/services/amc-support", destination: "/services/support", permanent: true },

      // Retired industry
      { source: "/industries/data-centers", destination: "/industries/energy-utilities", permanent: true },
    ];
  },
};

export default nextConfig;
