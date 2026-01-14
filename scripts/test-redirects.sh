#!/bin/bash

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Testing URL Redirects for Hair Elegance Utah"
echo "================================================"
echo ""

BASE_URL="https://www.haireleganceutah.com"

# Function to test redirect
test_redirect() {
    local url=$1
    local expected_location=$2
    local description=$3
    
    echo -e "${YELLOW}Testing:${NC} $description"
    echo "URL: $url"
    
    response=$(curl -s -o /dev/null -w "%{http_code}|%{redirect_url}" -L "$url")
    status_code=$(echo $response | cut -d'|' -f1)
    redirect_url=$(echo $response | cut -d'|' -f2)
    
    if [ "$status_code" = "301" ] || [ "$status_code" = "308" ]; then
        if [[ "$redirect_url" == *"$expected_location"* ]]; then
            echo -e "${GREEN}✓ PASS${NC} - Redirects to: $redirect_url"
        else
            echo -e "${RED}✗ FAIL${NC} - Expected: $expected_location, Got: $redirect_url"
        fi
    else
        echo -e "${RED}✗ FAIL${NC} - Status: $status_code (expected 301)"
    fi
    echo ""
}

echo "=== Domain Canonicalization Tests ==="
echo ""

test_redirect "http://haireleganceutah.com/" \
    "https://www.haireleganceutah.com/" \
    "Non-www HTTP → WWW HTTPS"

test_redirect "https://haireleganceutah.com/" \
    "https://www.haireleganceutah.com/" \
    "Non-www HTTPS → WWW HTTPS"

test_redirect "http://www.haireleganceutah.com/" \
    "https://www.haireleganceutah.com/" \
    "WWW HTTP → WWW HTTPS"

echo "=== WordPress Query Parameter Tests ==="
echo ""

test_redirect "${BASE_URL}/?page_id=2" \
    "${BASE_URL}/" \
    "WordPress Home (page_id=2)"

test_redirect "${BASE_URL}/?page_id=5" \
    "${BASE_URL}/about" \
    "WordPress About (page_id=5)"

test_redirect "${BASE_URL}/?page_id=17" \
    "${BASE_URL}/careers" \
    "WordPress Careers (page_id=17)"

test_redirect "${BASE_URL}/?page_id=11" \
    "${BASE_URL}/contact" \
    "WordPress Contact (page_id=11)"

test_redirect "${BASE_URL}/?page_id=14" \
    "${BASE_URL}/" \
    "WordPress Unknown Page (page_id=14)"

echo "=== HTML Extension Tests ==="
echo ""

test_redirect "${BASE_URL}/index.html" \
    "${BASE_URL}/" \
    "index.html → /"

test_redirect "${BASE_URL}/about.html" \
    "${BASE_URL}/about" \
    "about.html → /about"

test_redirect "${BASE_URL}/careers.html" \
    "${BASE_URL}/careers" \
    "careers.html → /careers"

test_redirect "${BASE_URL}/services.html" \
    "${BASE_URL}/services" \
    "services.html → /services"

test_redirect "${BASE_URL}/gallery.html" \
    "${BASE_URL}/gallery" \
    "gallery.html → /gallery"

test_redirect "${BASE_URL}/stylists.html" \
    "${BASE_URL}/stylists" \
    "stylists.html → /stylists"

echo "=== Malicious Path Tests (should 404) ==="
echo ""

# Test that malicious paths return 404
test_404() {
    local url=$1
    local description=$2
    
    echo -e "${YELLOW}Testing:${NC} $description"
    echo "URL: $url"
    
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status_code" = "404" ]; then
        echo -e "${GREEN}✓ PASS${NC} - Returns 404"
    else
        echo -e "${RED}✗ FAIL${NC} - Status: $status_code (expected 404)"
    fi
    echo ""
}

test_404 "${BASE_URL}/cgi-bin/test.cgi" "CGI-BIN path"
test_404 "${BASE_URL}/wp-admin/" "WordPress admin"
test_404 "${BASE_URL}/ntc/natwest3/mobile/login.php" "Malicious PHP"

echo "================================================"
echo "✅ Redirect tests complete!"
echo ""
echo "Note: Some tests may fail if not yet deployed to production."
echo "Run this script again after deployment to verify."


