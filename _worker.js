export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetURL = 'https://aw168-awql.hf.space' + url.pathname + url.search;
  return Response.redirect(targetURL, 301); // 301 为永久重定向
}
