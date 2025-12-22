# Vercel Domain Configuration Guide

## Current Issue
Google Search Console shows multiple URL variations that aren't being indexed properly:
- `https://haireleganceutah.com/` (non-www)
- `http://haireleganceutah.com/` (non-www, http)
- `http://www.haireleganceutah.com/` (http only)
- WordPress query parameters (`?page_id=5`, etc.)
- Old `.html` URLs

## Solution Implemented

### 1. Code Changes
✅ Created `vercel.json` with edge redirects
✅ Updated `middleware.ts` to handle WordPress query params
✅ Added redirects in `next.config.ts` for `.html` URLs
✅ Updated `robots.ts` to block malicious paths
✅ Created custom 404 page

### 2. Vercel Dashboard Configuration

#### Step 1: Configure Domain Settings
1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to your project: **hair-elegance-new**
3. Click on **Settings** → **Domains**

#### Step 2: Set Up Domains
You should have BOTH domains added:
- ✅ `www.haireleganceutah.com` (PRIMARY)
- ✅ `haireleganceutah.com` (redirect to www)

**To configure:**
1. If not added, click **Add Domain**
2. Add `haireleganceutah.com` first
3. Add `www.haireleganceutah.com` 
4. Set `www.haireleganceutah.com` as your **primary domain**
5. Configure `haireleganceutah.com` to **Redirect to www.haireleganceutah.com**

#### Step 3: DNS Configuration
In your domain registrar (GoDaddy, Namecheap, etc.), ensure:

**A Records:**
```
@ (root)     → 76.76.21.21 (Vercel)
www          → 76.76.21.21 (Vercel)
```

**Or CNAME Records:**
```
www          → cname.vercel-dns.com
```

**And for root domain:**
```
@ (root)     → ALIAS/ANAME to www.haireleganceutah.com
```

Or use Vercel's nameservers for best results.

#### Step 4: SSL/HTTPS Configuration
1. In Vercel Dashboard → **Settings** → **Domains**
2. Ensure SSL certificates are active for both domains
3. Wait for certificates to be issued (can take a few minutes)

### 3. Google Search Console Actions

#### Verify Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Ensure you have BOTH properties verified:
   - `https://www.haireleganceutah.com` (primary)
   - `https://haireleganceutah.com` (secondary)

#### Set Preferred Domain
1. In the **www** property settings
2. Set `https://www.haireleganceutah.com` as the canonical domain

#### Handle Redirect Issues
1. Go to **Coverage** or **Pages** report
2. For "Page with redirect" issues:
   - Click **Validate Fix** after deploying
   - Google will recrawl and verify 301 redirects

#### Remove Old URLs
For URLs that should never have existed:
1. Go to **Removals** in left menu
2. Click **New Request**
3. Enter each old URL:
   - `http://www.haireleganceutah.com/?page_id=2`
   - `http://www.haireleganceutah.com/?page_id=5`
   - `http://www.haireleganceutah.com/?page_id=11`
   - `http://www.haireleganceutah.com/?page_id=14`
   - `http://www.haireleganceutah.com/?page_id=17`
   - Old `.html` URLs (careers.html, about.html, etc.)
4. Request **Temporary removal** (6 months)
5. The 301 redirects will handle permanent removal

#### Submit Sitemap
1. Go to **Sitemaps**
2. Remove any old sitemaps
3. Submit: `https://www.haireleganceutah.com/sitemap.xml`

### 4. Testing Redirects

After deployment, test these URLs (they should ALL redirect to www):

```bash
# Test non-www → www
curl -I https://haireleganceutah.com/
# Should return: 301, Location: https://www.haireleganceutah.com/

# Test http → https
curl -I http://www.haireleganceutah.com/
# Should return: 301, Location: https://www.haireleganceutah.com/

# Test old WordPress URLs
curl -I "https://www.haireleganceutah.com/?page_id=5"
# Should return: 301, Location: https://www.haireleganceutah.com/about

# Test .html URLs
curl -I https://www.haireleganceutah.com/careers.html
# Should return: 301, Location: https://www.haireleganceutah.com/careers
```

### 5. Expected Timeline

- **Immediate**: Redirects work after deployment
- **24-48 hours**: Google recrawls and verifies redirects
- **1-2 weeks**: Search Console clears "page with redirect" issues
- **2-4 weeks**: Old URLs fully removed from index

### 6. Monitoring

Check weekly for 4 weeks:
1. **Search Console** → Coverage/Pages report
2. **Search Console** → Sitemaps (ensure only canonical URLs)
3. Look for new issues or crawl errors

## Common Issues & Solutions

### Issue: "Page with redirect" still showing
**Solution**: Be patient. Google needs time to recrawl. Click "Validate Fix" in Search Console.

### Issue: Both www and non-www indexed
**Solution**: Ensure Vercel domain settings have www as PRIMARY and non-www set to REDIRECT.

### Issue: HTTP still accessible
**Solution**: 
1. Check Vercel SSL certificates are active
2. Ensure HSTS header is set (already in vercel.json)
3. Consider adding domain to HSTS preload list

### Issue: Old WordPress URLs still indexed
**Solution**: 
1. Verify middleware is handling query params correctly
2. Request removal in Search Console
3. Submit updated sitemap

## Files Modified

1. ✅ `vercel.json` - Domain redirects at edge
2. ✅ `middleware.ts` - WordPress param handling
3. ✅ `next.config.ts` - .html URL redirects
4. ✅ `app/robots.ts` - Block malicious paths
5. ✅ `app/not-found.tsx` - Custom 404 page
6. ✅ `app/sitemap.ts` - Already using canonical URLs

## Deployment Checklist

- [ ] Deploy to production
- [ ] Verify domain settings in Vercel dashboard
- [ ] Test all redirects with curl commands
- [ ] Check SSL certificates are active
- [ ] Submit sitemap to Google Search Console
- [ ] Mark issues as fixed in Search Console
- [ ] Wait 48 hours and recheck Search Console

