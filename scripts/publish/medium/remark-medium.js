const url = require('url')

const createFeatureImage = (siteUrl, featuredUrl) => {
  if (!featuredUrl) return null
  return {
    type: `image`,
    title: null,
    alt: 'Featured Image',
    url: url.resolve(siteUrl, featuredUrl),
  }
}

const createTitle = title => ({
  type: 'heading',
  depth: 1,
  children: [
    {
      type: `text`,
      value: title,
    },
  ],
})

const createHorizontalRule = () => ({
  type: `thematicBreak`,
})

const createReferenceToOriginalPost = slug => ({
  type: `paragraph`,
  children: [
    {
      type: `text`,
      value: `Originally published at `,
    },
    {
      type: 'link',
      url: `https://bearguy.io${slug}`,
      children: [
        {
          type: 'text',
          value: 'bearguy.io',
        },
      ],
    },
  ],
})

const createMediumFooter = siteUrl => ({
  type: `image`,
  title: null,
  alt: 'Medium Clap',
  url: url.resolve(siteUrl, '/images/medium_clap.gif'),
})

function attacher(options) {
  console.log(options)
  const { siteUrl, frontmatter: { title, slug, featured } } = options
  return transformer

  function transformer(tree) {
    console.log(JSON.stringify(tree, null, 2))
    tree.children = [
      createFeatureImage(siteUrl, featured),
      createTitle(title),
      ...tree.children,
      createHorizontalRule(),
      createReferenceToOriginalPost(slug),
      createMediumFooter(siteUrl),
    ].filter(node => !!node)
  }
}

module.exports = attacher