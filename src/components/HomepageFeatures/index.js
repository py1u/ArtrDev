import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quality',
    Svg: require('@site/static/img/Group 129.svg').default,
    description: (
      <>
        We insure the highest quality of patrons, and the selection of artists we prequlified, puts in
        there highest quality of of work for their patrons in return.
      </>
    ),
  },
  {
    title: 'Discovery',
    Svg: require('@site/static/img/Group 141.svg').default,
    description: (
      <>
        Allow talents to be discovered, and for patrons to discover art they
        didn't know they were interested in, expanding horizons.
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/Group 130.svg').default,
    description: (
      <>
        A place to estabilish a connection between artists and patrons beyond the level of business
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
