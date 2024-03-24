import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const containerStyle = {
  background: "#bbdbf3",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const buttonStyle = {
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
  backgroundColor: '#ffc107',
  color: 'black',
  width: '120px',
  height: '40px',
  fontSize: '15px'
}

const allowButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#2e8555',
  color: 'white',
  marginRight: '30px'
}

const linkStyle = {
  color: 'blue',
  textDecoration: 'underline'
}

const denyButtonStyle = {
  ...buttonStyle,
}

const localeTexts = {
  ja: {
    consentText: (
      <span>
        このサイトは、利便性を向上させるためにCookieを使用し、Google Analytics (GA4)を活用しています。
        (<a href="https://7rikazhexde.github.io/test-website-docusaurus/ja/docs/about" style={linkStyle}>詳細</a>)<br />
        Cookieの使用について、同意するか拒否するかを選択してください。
      </span>
    ),
    buttonText: '同意する',
    declineButtonText: '拒否する'
  },
  en: {
    consentText: (
      <span>
        This site uses cookies and utilizes Google Analytics (GA4) to enhance convenience. 
        (<a href="https://7rikazhexde.github.io/test-website-docusaurus/docs/about" style={linkStyle}>detail</a>)<br />
        Please select whether you agree or decline the use of cookies.
      </span>
    ),
    buttonText: 'Agree',
    declineButtonText: 'Decline', 
  }
}

export default function Root({ children }) {
  const {i18n}  = useDocusaurusContext();
  const locale = i18n.currentLocale
  const texts = localeTexts[locale] || localeTexts['en'];

  return (
    <div>
      <CookieConsent
        //debug={true}
        location="bottom"
        buttonText={texts.buttonText}
        declineButtonText={texts.declineButtonText}
        enableDeclineButton
        style={containerStyle}
        declineButtonStyle={denyButtonStyle}
        buttonStyle={allowButtonStyle}
        onAccept={() => {
          //console.log('onAccept handler called');
          //console.log('allowGtag cookie before:', Cookies.get('allowGtag'));
          Cookies.set('allowGtag', 'true', { expires: 365 });
          //console.log('allowGtag cookie after:', Cookies.get('allowGtag'));
          window.location.reload();
        }}
        onDecline={() => {
          //console.log('onDecline handler called');
          //console.log('allowGtag cookie before:', Cookies.get('allowGtag'));
          Cookies.set('allowGtag', 'false', { expires: 365 });
          //console.log('allowGtag cookie after:', Cookies.get('allowGtag'));
          window.location.reload();
        }}
      >
        {texts.consentText}
      </CookieConsent>
      {children}
    </div>
  );
}
