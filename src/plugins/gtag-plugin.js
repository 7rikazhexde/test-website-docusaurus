const { Cookies } = require('react-cookie-consent');
const fs = require('fs');
const path = require('path');

// 本関数はビルド時(GitHub Actions)にindex.htmlにGoogle Analyticsのスクリプトを挿入する。
// ページのリクエスト時に、ページが読み込まれるたびにブラウザがクッキーをチェックし、allowGtagがtrueに設定されている場合にのみGoogle Analyticsを有効にする。
module.exports = function(context, options) {
  return {
    name: 'custom-gtag-plugin',
    postBuild(props) {
      const { outDir } = props;
      const htmlFilePath = path.join(outDir, 'index.html');
      let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

      // gtag.jsの読み込みスクリプト
      const gtagScript = `<script async src="https://www.googletagmanager.com/gtag/js?id=${options.trackingID}"></script>`;

      // gtag関数の実行スクリプト
      const gtmScript = `
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // クッキーの値に基づいてGAの設定を行う
          const isGtagEnabled = document.cookie.includes('allowGtag=true');
          if (isGtagEnabled) {
            gtag('config', '${options.trackingID}', { anonymize_ip: ${options.anonymizeIP} });
          }
        </script>
      `;

      htmlContent = htmlContent.replace('</head>', `${gtagScript}\n${gtmScript}</head>`);
      fs.writeFileSync(htmlFilePath, htmlContent);
    },
  };
};
