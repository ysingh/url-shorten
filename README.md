# Shorten Url's using Base32 charset [a-z0-9]

- Start out with a short url size of 1, increase as charset is consumed.
- Store how many times each shorten request is made, so high hitcount items can be cached
- No guarantees of uniqueness, two url's may get the same short url (**TODO** FIX this)
- If the same url is requested again return the same short Url
- If given a short url created by running server instance redirect to original url

**TODOS**
- Add external db
- Add caching to high hitcount url's
- No two url's should get same short url
- if the requested url is already shorter than what I would generate, return original url


