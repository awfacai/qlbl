export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = 'iawooo-ql.hf.space'; 
    return fetch(new Request(url, request))
  }
}
