const handleLocationChange = () => {
    const pageId = window.location.pathname.split('/').pop(); // Get the last part of the URL as pageId
    console.log(pageId);

    fetch(`http://rileyhoffman.tiiny.io/?pageId=${pageId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.title = data.title;

            updateMetaTag('description', data.description);
            updateMetaTag('og:title', data.title, 'property');
            updateMetaTag('og:url', data.url, 'property');
            
            updateLinkTag('canonical', data.url);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function updateMetaTag(name, content, attribute = 'name') {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
    if (metaTag) {
        metaTag.setAttribute("content", content);
    } else {
        metaTag = document.createElement("meta");
        metaTag[attribute] = name;
        metaTag.content = content;
        document.head.insertBefore(metaTag, document.head.firstChild);
    }
}

function updateLinkTag(rel, href) {
    let linkTag = document.querySelector(`link[rel="${rel}"]`);
    if (linkTag) {
        linkTag.setAttribute("href", href);
    } else {
        linkTag = document.createElement("link");
        linkTag.rel = rel;
        linkTag.href = href;
        document.head.insertBefore(linkTag, document.head.firstChild);
    }
}
handleLocationChange();
document.addEventListener("DOMContentLoaded", function () {

    const observeMainContent = () => {
        const mainElement = document.querySelector('main');
        const observer = new MutationObserver(() => {
            handleLocationChange();
        });

        observer.observe(mainElement, { childList: true, subtree: true });
    };
    observeMainContent();
});