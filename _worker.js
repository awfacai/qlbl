addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const targetURL = 'https://aw168-awql.hf.space' + url.pathname + url.search
  return Response.redirect(targetURL, 301)
}
