const { Cookies } = require('react-cookie-consent');

module.exports = function (context, options) {
  const isGtagEnabled = Cookies.get('allowGtag') === 'true';
  //console.log('isGtagEnabled',isGtagEnabled)

  return {
    name: 'custom-gtag-plugin',
    injectHtmlTags() {
      if (isGtagEnabled) {
        return {
          headTags: [
            {
              tagName: 'script',
              attributes: {
                async: true,
                src: `https://www.googletagmanager.com/gtag/js?id=${options.trackingID}`,
              },
            },
            {
              tagName: 'script',
              innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${options.trackingID}', {
                  anonymize_ip: ${options.anonymizeIP}
                });
              `,
            },
          ],
        };
      } else {
        return {};
      }
    },
  };
};