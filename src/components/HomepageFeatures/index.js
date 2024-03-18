import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate'; // 追加
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'homepage.features.easy.title',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: 'homepage.features.easy.description',
  },
  {
    title: 'homepage.features.focus.title',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: 'homepage.features.focus.description',
  },
  {
    title: 'homepage.features.react.title',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: 'homepage.features.react.description',
  },
];

function Feature({ Svg, title, description }) {
  const translatedTitle = <Translate id={title} />;
  const translatedDescription = (
    <Translate
      id={description}
      values={{
        docusaurus: <strong>Docusaurus</strong>,
        docDir: <code>docs</code>,
      }}
    />
  );

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{translatedTitle}</Heading>
        <p>{translatedDescription}</p>
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
