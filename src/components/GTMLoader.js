import { useEffect } from 'react';

const GTMLoader = ({ gtmId }) => {
  useEffect(() => {
    if (!gtmId) return;

    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    script.async = true;

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    const initScript = document.createElement('script');
    initScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtmId}', {cookie_flags: 'SameSite=None;Secure'});
    `;

    document.head.insertBefore(initScript, document.head.firstChild);
    document.head.insertBefore(script, document.head.firstChild);
    document.body.insertBefore(noscript, document.body.firstChild);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(initScript);
      document.body.removeChild(noscript);
    };
  }, [gtmId]);

  return null;
};

export default GTMLoader;
