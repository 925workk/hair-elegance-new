# URL Redirect Fixes - Summary

## Problem
Google Search Console showed multiple issues:
1. **Soft 404s** - Pages returning 200 but no content
2. **Hard 404s** - Pages that never existed
3. **Page with redirect** - Multiple URL variations not properly redirected

## URLs Affected
- Old `.html` URLs (careers.html, about.html, etc.)
- WordPress query parameters (?page_id=2, ?page_id=5, etc.)
- Non-www domain (haireleganceutah.com)
- HTTP URLs (not HTTPS)
- Malicious/hacking attempts (cgi-bin, PHP files, ntc paths)

## Solution Implemented

### 1. **vercel.json** (NEW)
Edge-level redirects for domain canonicalization:
- `haireleganceutah.com` → `www.haireleganceutah.com`
- `http://` → `https://`
- Added HSTS security header

### 2. **middleware.ts** (UPDATED)
Application-level redirects:
- **ALL WordPress query parameters** → clean URLs
  - `?page_id=2` → `/`
  - `?page_id=5` → `/about`
  - `?page_id=17` → `/careers`
  - `?page_id=11` → `/contact`
  - `?page_id=14` → `/` (unmapped)
  - `?p=*`, `?cat=*`, `?author=*`, etc. → `/` (catch-all)
- Block malicious paths (returns 404):
  - PHP files
  - WordPress admin paths
  - CGI-BIN
  - Environment files

### 3. **next.config.ts** (UPDATED)
Next.js redirects for old URLs:
- `/index.html` → `/`
- `/about.html` → `/about`
- `/careers.html` → `/careers`
- `/services.html` → `/services`
- `/gallery.html` → `/gallery`
- `/contact.html` → `/contact`
- `/stylists.html` → `/stylists`
- `/cgi-bin/*` → `/`
- `/:path*.html` → `/:path*` (catch-all)

Added cache headers for fonts and static assets.

### 4. **app/robots.ts** (UPDATED)
Blocked from crawling:
- `/*.html` files
- `/*.php` files
- `/cgi-bin/`
- `/ntc/`
- WordPress paths
- `/_next/` (already blocked)

### 5. **app/not-found.tsx** (NEW)
Custom 404 page:
- Returns proper 404 status code
- Beautiful branded design
- Quick navigation links
- Contact information
- Prevents soft 404s

### 6. **scripts/test-redirects.sh** (NEW)
Testing script to verify all redirects work:
- Domain canonicalization
- WordPress parameters
- HTML extensions
- Malicious paths (should 404)

## Testing

Run the test script after deployment:
```bash
./scripts/test-redirects.sh
```

Or test manually:
```bash
# Test non-www redirect
curl -I https://haireleganceutah.com/

# Test WordPress parameter
curl -I "https://www.haireleganceutah.com/?page_id=5"

# Test HTML redirect
curl -I https://www.haireleganceutah.com/careers.html

# Test malicious path (should 404)
curl -I https://www.haireleganceutah.com/cgi-bin/test
```

## Deployment Steps

1. ✅ **Code changes committed** (all files updated)
2. ⏳ **Deploy to Vercel** (push to main or deploy manually)
3. ⏳ **Configure Vercel domains** (see VERCEL_DOMAIN_SETUP.md)
4. ⏳ **Test redirects** (run test-redirects.sh)
5. ⏳ **Update Google Search Console**
   - Mark issues as fixed
   - Request removal of old URLs
   - Submit sitemap
6. ⏳ **Wait 48-72 hours** for Google to recrawl

## Files Changed

| File | Status | Purpose |
|------|--------|---------|
| `vercel.json` | NEW | Domain redirects at edge |
| `middleware.ts` | UPDATED | WordPress params + security |
| `next.config.ts` | UPDATED | .html redirects + cache headers |
| `app/robots.ts` | UPDATED | Block unwanted crawling |
| `app/not-found.tsx` | NEW | Custom 404 page |
| `scripts/test-redirects.sh` | NEW | Testing script |
| `VERCEL_DOMAIN_SETUP.md` | NEW | Configuration guide |

## Expected Results

### Immediate (after deployment)
- ✅ All `.html` URLs redirect to clean URLs
- ✅ WordPress query params redirect correctly
- ✅ Non-www redirects to www
- ✅ HTTP redirects to HTTPS
- ✅ Malicious paths return 404

### Within 48 hours
- ✅ Google recrawls and verifies redirects
- ✅ "Page with redirect" issues start clearing

### Within 1-2 weeks
- ✅ All soft 404s resolved
- ✅ Only canonical URLs (www, https) in index
- ✅ Old URLs removed from search results

### Within 2-4 weeks
- ✅ Search Console shows clean indexing
- ✅ No more redirect or 404 errors
- ✅ Improved SEO with canonical URLs

## Monitoring

Check weekly in Google Search Console:
- **Pages** → Coverage report
- **Sitemaps** → Ensure sitemap.xml is processed
- **Removals** → Track removal requests
- **Performance** → Monitor impressions/clicks

## Canonical URLs

All pages should use this format:
```
https://www.haireleganceutah.com/[path]
```

Examples:
- ✅ https://www.haireleganceutah.com/
- ✅ https://www.haireleganceutah.com/about
- ✅ https://www.haireleganceutah.com/careers
- ❌ http://haireleganceutah.com/
- ❌ https://www.haireleganceutah.com/careers.html
- ❌ https://www.haireleganceutah.com/?page_id=17

## Security Improvements

As a bonus, these changes also improve security:
- HSTS header forces HTTPS
- Blocked malicious paths (PHP, cgi-bin, etc.)
- Proper 404s instead of revealing site structure
- Content-Security-Policy for SVG files

## Next Steps

1. **Deploy to production**
2. **Follow VERCEL_DOMAIN_SETUP.md**
3. **Run test script**
4. **Monitor Google Search Console**

For detailed Vercel configuration, see: `VERCEL_DOMAIN_SETUP.md`

