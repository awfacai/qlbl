addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 获取原始请求的 URL
  const url = new URL(request.url)
  
  // 构建目标 URL，保留路径和查询参数
  const targetURL = 'https://aw168-awql.hf.space' + url.pathname + url.search
  
  // 返回 301 永久重定向
  return Response.redirect(targetURL, 301)
}
