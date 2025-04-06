export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = 'aw168-awql.hf.space'; 
    return fetch(new Request(url, request))
  }
}
