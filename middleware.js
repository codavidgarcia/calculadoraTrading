// middleware.js
export default function middleware(req, res) {
    res.setHeader('referrer-policy', 'origin-when-cross-origin');
    res.setHeader('strict-transport-security', 'max-age=31536000; includeSubDomains; preload');
    res.setHeader('x-content-type-options', 'nosniff');
    res.setHeader('x-dns-prefetch-control', 'on');
    res.setHeader('x-frame-options', 'DENY');
    res.next();
  }
  