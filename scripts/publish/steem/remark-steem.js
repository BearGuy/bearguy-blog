const url = require('url')
const visit = require('unist-util-visit')

const createFeatureImage = (imageUrl) => {
  if (!imageUrl) return null
  return {
    type: `image`,
    title: null,
    alt: 'Featured Image',
    url: imageUrl,
  }
}

const createHorizontalRule = () => ({
  type: `thematicBreak`,
})

const createReferenceToOriginalPost = ({ postUrl, siteUrl }) => ({
  type: `paragraph`,
  children: [
    {
      type: `text`,
      value: `Originally published at `,
    },
    {
      type: 'link',
      url: postUrl,
      children: [
        {
          type: 'text',
          value: siteUrl,
        },
      ],
    },
  ],
})

const collectUrlsFactory = () => {
  const urls = []
  const urlCollectorVisitor = node => {
    urls.push(node.url)
  }
  urlCollectorVisitor.urls = urls
  return urlCollectorVisitor
}

function attacher(options) {
  const { siteUrl, postUrl, frontmatter: { image } } = options
  return transformer

  function transformer(tree, vfile) {
    const imageUrlsVisitor = collectUrlsFactory()
    visit(tree, 'image', imageUrlsVisitor)
    const linkUrlsVisitor = collectUrlsFactory()
    visit(tree, 'link', linkUrlsVisitor)

    // console.log(featured)
    // featureImage = createFeatureImage(siteUrl, image);
    // console.log("FEATURE IMAGE: ", featureImage)

    tree.children = [
      createFeatureImage(image),
      ...tree.children,
      createHorizontalRule(),
      createReferenceToOriginalPost({ postUrl, siteUrl }),
    ]
    // additional data will be passed to the publish method along with
    // stringified markdown
    vfile.data.images = imageUrlsVisitor.urls
    vfile.data.links = linkUrlsVisitor.urls
  }
}

module.exports = attacher