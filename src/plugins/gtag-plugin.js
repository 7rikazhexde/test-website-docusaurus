const { Cookies } = require('react-cookie-consent');
const fs = require('fs');
const path = require('path');

module.exports = function(context, options) {
  const isGtagEnabled = Cookies.get('allowGtag') === 'true';

  return {
    name: 'custom-gtag-plugin',
    postBuild(props) {
      const { outDir } = props;
      const htmlFilePath = path.join(outDir, 'index.html');
      let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

      // gtag.jsの読み込みスクリプト
      const gtagScript = `<script async src="https://www.googletagmanager.com/gtag/js?id=${options.trackingID}"></script>`;

      // gtag関数の実行スクリプト
      const gtmScript = isGtagEnabled ? `
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${options.trackingID}', { anonymize_ip: ${options.anonymizeIP} });
        </script>
      ` : '';

      htmlContent = htmlContent.replace('</head>', `${gtagScript}\n${gtmScript}</head>`);
      fs.writeFileSync(htmlFilePath, htmlContent);
    },
  };
};