import clsx from 'clsx';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: {
      en: 'Easy to Use',
      ja: '使いやすさ',
    },
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: {
      en: (
        <>
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </>
      ),
      ja: (
        <>
          Docusaurus は、ウェブサイトを簡単にインストールして立ち上げるために、ゼロから設計されました。
        </>
      ),
    },
  },
  {
    title: {
      en: 'Focus on What Matters',
      ja: '重要なことに集中',
    },
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: {
      en: (
        <>
          Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
          ahead and move your docs into the <code>docs</code> directory.
        </>
      ),
      ja: (
        <>
          Docusaurus は、あなたのドキュメントに焦点を当てることを可能にし、私たちが作業を行います。ドキュメントを <code>docs</code> ディレクトリに移動してください。
        </>
      ),
    },
  },
  {
    title: {
      en: 'Powered by React',
      ja: 'Reactで動作',
    },
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: {
      en: (
        <>
          Extend or customize your website layout by reusing React. Docusaurus can
          be extended while reusing the same header and footer.
        </>
      ),
      ja: (
        <>
          React を再利用してウェブサイトのレイアウトを拡張またはカスタマイズします。Docusaurus は、同じヘッダーとフッターを再利用しながら拡張することができます。
        </>
      ),
    },
  },
];

function Feature({Svg, title, description}) {
  const { i18n: {currentLocale} } = useDocusaurusContext();
  const localizedTitle = title[currentLocale] || title;
  const localizedDescription = description[currentLocale] || description;

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{localizedTitle}</Heading>
        <p>{localizedDescription}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}