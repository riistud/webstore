export function middleware(req, ev) {
  const url = req.nextUrl;
  if (url.pathname.includes('/index.html')) {
    url.pathname = url.pathname.replace('/index.html', '');
    return Response.redirect(url);
  }
}
