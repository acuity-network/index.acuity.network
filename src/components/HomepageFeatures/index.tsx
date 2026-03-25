import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Enables true dapps 🦄',
    description: (
      <>
        Fast, rich dapps can be built without any backend whatsoever, connecting to an index node provided by anyone.
      </>
    ),
  },
  {
    title: 'Provable query results 🤓',
    description: (
      <>
        Data returned from an index node can be mathematically verified using the light client of the chain.
      </>
    ),
  },
  {
    title: 'Free or revenue generating 🤑',
    description: (
      <>
        An index node can be free to query, or require payments in ACU or the native currency of the index.
      </>
    ),
  },
  {
    title: 'Multi-chain 🌏',
    description: (
      <>
        All Polkadot chains can join the index.
      </>
    ),
  },
  {
    title: 'Reduced transaction fees 🪶',
    description: (
      <>
        Minimise the quantity of data stored in state to make transactions as cheap as possible.
      </>
    ),
  },
  {
    title: 'Decentralized index discovery 🔍',
    description: (
      <>
        Index nodes can be registered on the Acuity blockchain or the native chain of the index.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
