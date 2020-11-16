function importAll(r) {
  return r
    .keys()
    .map((fileName) => ({
      slug: fileName
        .substr(1)
        .replace(/\/index\.mdx$/, '')
        .replace(/\.mdx$/, ''),
      module: r(fileName),
    }))
    .filter(({ slug }) => Boolean(slug))
}

export type Post = {
  slug: string
  module: {
    metadata: {
      title: string
      description: string
      keywords: string[]
      published: string
    }
  }
}

export const posts: Post[] = importAll(
  require.context('../../pages/posts/', true, /\.mdx$/),
)
