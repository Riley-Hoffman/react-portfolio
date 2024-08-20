document.addEventListener("DOMContentLoaded", function () {
    const pageId = window.location.pathname.split('/').pop(); // Get the last part of the URL as pageId
    console.log(pageId)
    // Fetch meta data from the PHP endpoint
    fetch(`http://rileyhoffman.tiiny.io/?pageId=${pageId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Update the meta tags
            document.title = data.title;

            let descriptionMetaTag = document.querySelector('meta[name="description"]');
            if (descriptionMetaTag) {
                descriptionMetaTag.setAttribute("content", data.description);
            } else {
                descriptionMetaTag = document.createElement("meta");
                descriptionMetaTag.name = "description";
                descriptionMetaTag.content = data.description;
                document.head.insertBefore(descriptionMetaTag, document.head.firstChild);
            }

            let titleMetaTag = document.querySelector('meta[name="og:title"]');
            if (titleMetaTag) {
                titleMetaTag.setAttribute("content", data.title);
            } else {
                titleMetaTag = document.createElement("meta");
                titleMetaTag.setAttribute("property", "og:title");
                titleMetaTag.content = data.title;
                document.head.insertBefore(titleMetaTag, document.head.firstChild);
            }

            // Optionally set other meta tags, like keywords or URL
            let urlMetaTag = document.querySelector('meta[name="og:url"]');
            if (urlMetaTag) {
                urlMetaTag.setAttribute("content", data.url);
            } else {
                urlMetaTag = document.createElement("meta");
                urlMetaTag.setAttribute("property", "og:url");
                urlMetaTag.content = data.url;
                document.head.insertBefore(urlMetaTag, document.head.firstChild);
            }

            // Optionally set other meta tags, like keywords or URL
            let canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) {
                canonical.setAttribute("href", data.url);
            } else {
                canonical = document.createElement("link");
                canonical.rel = "canonical";
                canonical.href = data.url;
                document.head.insertBefore(canonical, document.head.firstChild);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});