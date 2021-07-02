import Image from 'next/image';
import computerDesk from '@images/man-on-computer.png';
import coffeeDrinker from '@images/man-drinking-coffee.png';
import styles from '../styles/Home.module.css';
import { useAppContext } from '@context/AppContext';
import { useContext } from 'react';

export default function Home() {
  const { toggleMobileMenu } = useAppContext()
  return (
    <>
      <div className={styles.leadspace}>
        <h1 className={styles.headline}><span className="gold">Good</span> from the ground up</h1>
        <h3 className={styles.signup}>Upgrade your day with Kaffeine Minds.</h3>

        <div>
          <input type="text"/>
          <button>subscribe</button>
        </div>
      </div>

      <div>
        <div className={styles.wrapper}>
          <h2>Coffee Developed For Developers by developers</h2>
          <p>Smooth and Rich in Taste Deep, Dark Aromatic Experience Pure Blended Awesomeness</p>
        </div>
      </div>


      <div className={styles.tbd}>
        <h1>TBD</h1>
      </div>

      <div>
        <h2>Headline line continued here</h2>
        <p>Tortor orci consequat lectus facilisis est lorem et risus accumsan volutpat lorem.</p>
        <Image src={computerDesk} alt="person working on laptop at desk" />
      </div>

      <div>
        <div className={styles.signup}>
          <h2>When to <span className="gold">snag your swag</span></h2>
          <p>Sign up to find out when the swag is available for order.</p>
          <div>
            <input type="text"/>
            <button>subscribe</button>
          </div>
        </div>
      </div>

      <div>
        <h2>Who we are <span className="gold">+ Why we are doing this</span></h2>
        <Image src={coffeeDrinker} alt="person drinking coffee looking out of a window" />
        <p>Vivamus suscipit odio turpis, vitae consequat augue finibus eu. Mauris id nisl vitae nulla ullamcorper ornare. Aenean convallis, velit sed mollis sagittis, tortor orci consequat lectus, in facilisis est lorem et risus. Praesent accumsan volutpat lorem at sodales. Suspendisse potenti. Duis at fermentum neque.</p>
        <p>Pellentesque gravida commodo nibh vitae placerat. Fusce sed nunc lacinia, maximus justo consequat, molestie purus. Vivamus blandit consequat est non lacinia.</p>
        <p>Praesent sagittis aliquet augue, in imperdiet ipsum congue pharetra. Donec in ultricies nisl, in mollis sem. Sed hendrerit mauris nisl, et euismod quam malesuada sit amet. Ut vulputate, ante eget posuere mollis, justo nisi imperdiet elit, ut fermentum massa leo nec lacus. Donec vel dignissim ligula.</p>
        <p className="bold">Quisque a luctus neque, a egestas libero. Aenean a auctor tellus, at rhoncus ligula.</p>
      </div>

      <div>
        <p>Kaffeine Minds is coming Spring 2021, stay up to date.</p>
        <div>
          <input type="text"/>
          <button>subscribe</button>
        </div>
      </div>
    </>
  )
}
