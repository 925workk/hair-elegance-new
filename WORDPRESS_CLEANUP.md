# WordPress URL Cleanup

## Problem

The site was previously on WordPress, and Google has indexed old WordPress URLs with query parameters. These URLs shouldn't exist on the new Next.js site.

## WordPress URLs Found in Google Search Console

### Query Parameter URLs
- `?page_id=2` (Home page)
- `?page_id=5` (About page)
- `?page_id=11` (Contact page - last crawled Jul 7, 2020)
- `?page_id=14` (Unknown page - last crawled May 1, 2023)
- `?page_id=17` (Careers page)

### Other WordPress Patterns
- `?p=*` (Post IDs)
- `?cat=*` (Category archives)
- `?m=*` (Month archives)
- `?author=*` (Author archives)
- `?year=*`, `?monthnum=*`, `?day=*` (Date archives)
- `?feed=*` (RSS feeds)
- `?paged=*` (Pagination)

## Solution Implemented

### Middleware Redirects

All WordPress query parameters are now caught and redirected:

```typescript
// Known page IDs → Specific pages
?page_id=2  → /
?page_id=5  → /about
?page_id=17 → /careers
?page_id=11 → /contact
?page_id=14 → / (unmapped)

// All other WordPress params → Home
?p=123 → /
?cat=5 → /
?author=1 → /
```

### Why This Works

1. **301 Permanent Redirects**: Tells Google these URLs have permanently moved
2. **Catch-all Logic**: Any WordPress parameter redirects (not just known ones)
3. **Clean URLs**: All traffic ends up on clean, modern URLs

## Testing

Test any WordPress URL pattern:

```bash
# Known page IDs
curl -I "https://www.haireleganceutah.com/?page_id=5"
# Should redirect to: /about

curl -I "https://www.haireleganceutah.com/?page_id=11"
# Should redirect to: /contact

curl -I "https://www.haireleganceutah.com/?page_id=14"
# Should redirect to: /

# Unknown page IDs
curl -I "https://www.haireleganceutah.com/?page_id=999"
# Should redirect to: /

# Other WordPress params
curl -I "https://www.haireleganceutah.com/?p=123"
# Should redirect to: /

curl -I "https://www.haireleganceutah.com/?cat=5"
# Should redirect to: /
```

## Google Search Console Cleanup

### Step 1: Validate Redirects
1. Deploy the changes
2. Go to **Coverage** or **Pages** report
3. Find "Page with redirect" issues
4. Click **Validate Fix**
5. Google will recrawl and verify 301 redirects

### Step 2: Request Removal (Optional but Recommended)

For very old URLs (like page_id=11 from 2020, page_id=14 from 2023):

1. Go to **Removals** tool
2. Click **New Request**
3. Enter each old URL
4. Select **Temporary removal** (6 months)
5. The 301 redirects will handle permanent removal

### Step 3: Monitor

Check weekly:
- **Pages** → See which URLs are indexed
- **Sitemaps** → Ensure only clean URLs submitted
- **Performance** → Check for any remaining old URL traffic

## Expected Timeline

| Timeframe | Expected Result |
|-----------|----------------|
| Immediately | Redirects work after deployment |
| 24-48 hours | Google verifies redirects work |
| 1 week | "Page with redirect" issues start clearing |
| 2-4 weeks | Old URLs removed from index |
| 1-2 months | Very old URLs (2020, 2023) fully cleared |

## Why Old URLs Take Time

- **page_id=11** (Jul 7, 2020): 5+ years old
- **page_id=14** (May 1, 2023): 1.5+ years old

Very old URLs take longer to clear because:
1. Google recrawls less frequently
2. May be cached in multiple places
3. Might have backlinks from other sites

The 301 redirects + removal requests will speed this up.

## Preventing Future Issues

The middleware now blocks ALL WordPress patterns:

```typescript
// Comprehensive WordPress param detection
const hasWordPressParams = 
  url.searchParams.has('page_id') || 
  url.searchParams.has('p') || 
  url.searchParams.has('cat') || 
  url.searchParams.has('m') ||
  url.searchParams.has('author') ||
  url.searchParams.has('year') ||
  url.searchParams.has('monthnum') ||
  url.searchParams.has('day') ||
  url.searchParams.has('feed') ||
  url.searchParams.has('paged');
```

This ensures:
- ✅ No new WordPress URLs can appear
- ✅ Any missed patterns are caught
- ✅ Proper 301 redirects for all cases

## Files Modified

- `middleware.ts` - Comprehensive WordPress redirect handling
- `scripts/test-redirects.sh` - Added tests for page_id=11 and page_id=14
- `VERCEL_DOMAIN_SETUP.md` - Updated removal URL list
- `URL_REDIRECT_FIXES.md` - Updated documentation

## Common Questions

### Q: Why redirect to home instead of 404?
**A:** 301 redirects are better for SEO than 404s. They:
- Pass any remaining link equity
- Provide better user experience
- Signal to Google the content moved, not disappeared

### Q: Should I map page_id=11 and page_id=14?
**A:** 
- **page_id=11** is mapped to `/contact` (if that was your contact page)
- **page_id=14** goes to home (unknown page)
- Check your old WordPress site if you need exact mappings

### Q: Will this affect my current pages?
**A:** No! Only affects URLs with WordPress query parameters. All your clean URLs (/, /about, /careers, etc.) work normally.

### Q: What if Google finds more WordPress URLs?
**A:** The catch-all logic handles ANY WordPress parameter, so new ones will automatically redirect.

## Success Metrics

Track these in Google Search Console:

1. **Indexed Pages**: Should only show clean URLs
   - ✅ `https://www.haireleganceutah.com/about`
   - ❌ `https://www.haireleganceutah.com/?page_id=5`

2. **Coverage Issues**: Should decrease over time
   - "Page with redirect" → 0
   - "Soft 404" → 0

3. **Sitemaps**: Should show 100% indexed
   - Only clean URLs in sitemap
   - All submitted URLs indexed

## Next Steps

1. ✅ **Deploy changes** to production
2. ⏳ **Run test script** to verify redirects
3. ⏳ **Google Search Console**:
   - Validate fixes
   - Request removals for old URLs
   - Monitor weekly
4. ⏳ **Wait 2-4 weeks** for full cleanup

For deployment instructions, see: `URL_REDIRECT_FIXES.md`  
For Vercel setup, see: `VERCEL_DOMAIN_SETUP.md`


