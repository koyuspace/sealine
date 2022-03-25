window.setInterval(function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        var logo = document.getElementById("logo");
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = 'logo.svg';
        logo.src = 'logo.svg';
    }
}, 1000);