export default async function sitemap() {
  let routes = ['', '/about', '/blog'].map((route) => ({
    url: `https://jeffersonrj.com${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes]
}
