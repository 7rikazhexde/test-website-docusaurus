/*
const { Cookies } = require('react-cookie-consent');

module.exports = function (context, options) {
  const isGtagEnabled = Cookies.get('allowGtag') === 'true';
  //console.log('isGtagEnabled',isGtagEnabled)
  //console.log('trackingID',options.trackingID)

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
*/

const { Cookies } = require('react-cookie-consent');

module.exports = function(context, options) {
  const isGtagEnabled = Cookies.get('allowGtag') === 'true';

  return {
    name: 'custom-gtag-plugin',
    injectHtmlTags() {
      const gtmScript = isGtagEnabled
        ? {
            tagName: 'script',
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.onload = function() {
                gtag('js', new Date());
                gtag('config', '${options.trackingID}', { anonymize_ip: ${options.anonymizeIP} });
              }
            `,
          }
        : null;

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
            gtmScript,
          ],
        };
      } else {
        return {};
      }
    },
  };
};