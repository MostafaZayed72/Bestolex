async function verify() {
  const slugs = [
    'high-security-shallow-road-blocker-pas68',
    'road-blocker',
    'surface-mount-hydraulic-road-blocker',
    'road-bollard',
    'turnstiles'
  ]

  for (const slug of slugs) {
    const r = await fetch(`http://localhost:3000/products/${slug}`)
    const t = await r.text()
    const ogImg = t.match(/<meta property="og:image" content="([^"]+)"/i)
    const ogTitle = t.match(/<meta property="og:title" content="([^"]+)"/i)
    console.log(slug, '->', ogTitle ? ogTitle[1] : 'NO TITLE')
    console.log('   og:image:', ogImg ? ogImg[1] : 'NO IMAGE')
  }
}
verify()
