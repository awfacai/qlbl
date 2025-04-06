addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 获取原始请求的 URL
  const url = new URL(request.url)
  
  // 创建重定向的响应
  return Response.redirect('https://aw168-awql.hf.space', 301)
}