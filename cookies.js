document.addEventListener('DOMContentLoaded', () => {
    const cookie = localStorage.getItem('iscookiesAccepted');
    //COOKIE
    if (!cookie || Date.now() > parseInt(cookie)) {
        localStorage.removeItem('iscookiesAccepted');
        const cookieBanner = document.getElementById('cookie-banner');
        cookieBanner.classList.add('show');
    }
    else {
        loadScripts();
    }
});

function setCookie() {
    const time = Date.now() + 31536000000; // 1 év
    localStorage.setItem('iscookiesAccepted', time.toString());
    loadScripts();
    const cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.classList.remove('show');
}

function loadScripts() {
    // Google Analytics
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
    });


    // Microsoft Clarity
    (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "wgd7svre6w");
}