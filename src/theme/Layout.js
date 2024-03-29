import React, { useEffect } from "react";
import OriginalLayout from "@theme-original/Layout";
import CookieConsent, { Cookies } from "react-cookie-consent";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const containerStyle = {
  background: "#bbdbf3",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const buttonStyle = {
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
  backgroundColor: "#ffc107",
  color: "black",
  width: "120px",
  height: "40px",
  fontSize: "15px",
};

const allowButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#2e8555",
  color: "white",
  marginRight: "30px",
};

const linkStyle = {
  color: "blue",
  textDecoration: "underline",
};

const denyButtonStyle = {
  ...buttonStyle,
};

export default function Layout(props) {
  const location = useLocation();
  const { i18n, siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const isNetlifyProduction = customFields.deploy;
  const currentLocale = i18n.currentLocale;

  const localeTexts = {
    ja: {
      consentText: (
        <span>
          このサイトは、利便性を向上させるためにCookieを使用し、Google Analytics
          (GA4)を活用しています。
          <br />
          Cookieの使用について、同意するか拒否するかを選択してください。
          詳細については、
          <a
            href={
              isNetlifyProduction
                ? "https://candid-wisp-54b5a8.netlify.app/ja/docs/about/"
                : "https://7rikazhexde.github.io/test-website-docusaurus/ja/docs/about"
            }
            style={linkStyle}
          >
            こちら
          </a>
          をご覧ください。
        </span>
      ),
      buttonText: "同意する",
      declineButtonText: "拒否する",
    },
    en: {
      consentText: (
        <span>
          This site uses cookies and utilizes Google Analytics (GA4) to enhance
          convenience.
          <br />
          Please select whether you agree or decline the use of cookies. For
          more details, please see{" "}
          <a
            href={
              isNetlifyProduction
                ? "https://candid-wisp-54b5a8.netlify.app/docs/about"
                : "https://7rikazhexde.github.io/test-website-docusaurus/docs/about"
            }
            style={linkStyle}
          >
            here
          </a>
          .
        </span>
      ),
      buttonText: "Agree",
      declineButtonText: "Decline",
    },
  };

  const texts = localeTexts[currentLocale] || localeTexts["en"];

  const handleAcceptCookie = () => {
    if (ExecutionEnvironment.canUseDOM) {
      Cookies.set("docusaurus-gdpr-google-analytics", "true", { expires: 150 });
      window.location.reload();
    }
  };

  const handleDeclineCookie = () => {
    if (ExecutionEnvironment.canUseDOM) {
      Cookies.set("docusaurus-gdpr-google-analytics", "false", {
        expires: 150,
      });
      window.location.reload();
    }
  };

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const cookieValue = Cookies.get("docusaurus-gdpr-google-analytics");
      if (cookieValue === "true") {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-QH99K0ZNM4`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-QH99K0ZNM4", { anonymize_ip: true });
        gtag("set", "page_path", location.pathname);
        gtag("event", "page_view");
      }
    }
  }, [location.pathname]);

  return (
    <>
      <OriginalLayout {...props} />
      <CookieConsent
        //debug={true}
        location="bottom"
        buttonText={texts.buttonText}
        declineButtonText={texts.declineButtonText}
        enableDeclineButton
        style={containerStyle}
        declineButtonStyle={denyButtonStyle}
        buttonStyle={allowButtonStyle}
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        {texts.consentText}
      </CookieConsent>
    </>
  );
}
