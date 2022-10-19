import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/learn.svg').default,
    description: (
      <>
        Learn how to "Think in React" and build applications inspired by several
        plays(source code & demos). Get to the source code of it, find related
        article, or even a YouTube video. Learn from the expert code reviews.
      </>
    ),
  },
  {
    title: 'Create',
    Svg: require('@site/static/img/create.svg').default,
    description: (
      <>
        Create your own plays and own them by following a few simple steps.
        Learned something new? Perfect to present as a play. You can also
        contribute to the existing plays. Your play will be reviewed by the
        experts before being made public.
      </>
    ),
  },
  {
    title: 'Socialize',
    Svg: require('@site/static/img/social.svg').default,
    description: (
      <>
        Share your plays with the community. The best way of building in public
        is by sharing the learning. You can share your plays on social media
        platforms like Facebook, Twitter, LinkedIn, to name a few, just with a
        single click.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
