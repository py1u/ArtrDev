import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Collaboration Fuels Innovation',
    Svg: require('@site/static/img/Group 126.svg').default,
    description: (
      <>
        Our dev team thrives on shared expertise, collective problem-solving, and the cross-pollination of ideas. 
        From pair programming sessions to collaborative code reviews, every interaction propels us closer to our goal of 
        building groundbreaking features and tools for the Artr platform. Together, we're not just writing code; 
        we're forging a path towards technical excellence, one collaborative breakthrough at a time.
      </>
    ),
  },
  {
    title: 'Empowering Developers to Engineer Inspiring Solutions',
    Svg: require('@site/static/img/Group 131.svg').default,
    description: (
      <> 
        Team members have access to cutting-edge technologies, comprehensive documentation, 
        and a supportive community of peers and mentors. Whether you're a seasoned veteran or just 
        starting your coding journey, ArtrDev equips you with the tools and resources you need to engineer 
        solutions that inspire and innovate. With every line of code, we're shaping the future of the Artr 
        platform and pushing the boundaries of what's possible in digital artistry.
      </>
    ),
  },
  {
    title: 'Building Bridges Between Technical Expertise and Artistic Vision',
    Svg: require('@site/static/img/Group 127.svg').default,
    description: (
      <> 
        As developers, we collaborate closely with designers to translate creative concepts into functional, 
        user-centric experiences. Through agile methodologies, iterative prototyping, and a deep understanding 
        of both the technical and aesthetic aspects of our work, we bridge the gap between code and creativity. 
        Together, we're not just building software; we're crafting immersive, seamless experiences 
        that elevate the Artr platform and inspire users around the world.
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
