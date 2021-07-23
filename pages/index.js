import coffee from '@images/coffee.png';
import coffeeDrinker from '@images/man-drinking-coffee.png';
import computerDesk from '@images/man-on-computer.png';
import Image from 'next/image';
import MadeInUSA from '@images/usa-product.svg';
import TitleSVG from '@images/coffee-for-coders.svg';
import shirt from '@images/shirt.png';
import styles from '../styles/Home.module.css';
import { useAppContext } from '@context/AppContext';

export default function Home() {
  const { viewportWidth } = useAppContext();
  const breakpoint = 1080;

  return (
    <>
      <div className={styles.leadspace}>
        { (viewportWidth >= breakpoint) && (
          <video autoPlay muted loop className={styles.video}>         
            <source src="/videos/bg-video.mp4" type="video/mp4"/>       
          </video>
        )}
        <h1 className={styles.headline}><span className="gold">Good</span> from <br/>the ground up</h1>
        <div className={styles.leadspaceSubscribe}>
          <h3>Upgrade your day with Kaffeine Minds.</h3>
          <div className={styles.form}>
            <input type="text"/>
            <button>subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>Coffee Developed For <br /><span className="gold">Developers by developers</span></h2>
          <p>Smooth and Rich in Taste Deep, Dark Aromatic Experience Pure Blended Awesomeness</p>
        </div>
      </div>


      <div className={styles.forCoders}>
        <div className={styles.forCodersWrapper}>
          <div className={styles.forCodersImage}>
            <div className={styles.svgTitleMobile}>
              <TitleSVG />
            </div>
            <Image
              src={coffee}
              alt="Kaffeine Minds coffee products on display"
            />
          </div>
          <div className={styles.forCodersContent}>
            <div className={styles.svgTitle}>
              <TitleSVG />
            </div>
            <div className={styles.forCodersCopy}>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas quis facilisis urna, vehicula auctor dolor. Mauris eleifend pharetra justo, eu auctor tortor vestibulum ac.</p>
              <p>Pellentesque quis eleifend sem. Phasellus eu suscipit elit. Fusce mauris velit, dignissim in ipsum ut, porta faucibus odio.</p>
            </div>
            <div className={styles.svgUSA}>
              <MadeInUSA />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.secondary}>
        <div className={styles.secondaryContent}>
          <h2>Headline line <br /><span className="gold">continued here</span></h2>
          <p>Tortor orci consequat lectus facilisis est lorem et risus accumsan volutpat lorem.</p>
        </div>
        <Image
          src={computerDesk}
          alt="person working on laptop at desk"
        />
      </div>

      <div className={styles.swag}>
        <div className={styles.subscribe}>
          <h2>When to <br /><span className="gold">snag your swag</span></h2>
          <p>Sign up to find out when the swag is available for order.</p>
          <div className={styles.form}>
            <input type="text"/>
            <button>subscribe</button>
          </div>
          <Image
            src={shirt}
            alt="kaffeine minds t-shirt"
          />
        </div>
      </div>

      <div className={styles.why}>
        <div className={styles.whyWrapper}>
          <div className={styles.whyHeader}>
            <h2>Who we are <br /><span className="gold">+ Why we are doing this</span></h2>
            <div className={styles.whyImage}>
              <Image
                src={coffeeDrinker}
                alt="person drinking coffee looking out of a window"
              />
            </div>
          </div>
          <div className={styles.whyContent}>
            <p>Vivamus suscipit odio turpis, vitae consequat augue finibus eu. Mauris id nisl vitae nulla ullamcorper ornare. Aenean convallis, velit sed mollis sagittis, tortor orci consequat lectus, in facilisis est lorem et risus. Praesent accumsan volutpat lorem at sodales. Suspendisse potenti. Duis at fermentum neque.</p>
            <p>Pellentesque gravida commodo nibh vitae placerat. Fusce sed nunc lacinia, maximus justo consequat, molestie purus. Vivamus blandit consequat est non lacinia.</p>
            <p>Praesent sagittis aliquet augue, in imperdiet ipsum congue pharetra. Donec in ultricies nisl, in mollis sem. Sed hendrerit mauris nisl, et euismod quam malesuada sit amet. Ut vulputate, ante eget posuere mollis, justo nisi imperdiet elit, ut fermentum massa leo nec lacus. Donec vel dignissim ligula.</p>
            <p className="bold">Quisque a luctus neque, a egestas libero. Aenean a auctor tellus, at rhoncus ligula.</p>
          </div>
        </div>
      </div>

      <div className={styles.upcoming}>
        <p>Kaffeine Minds is coming Spring 2021, stay up to date.</p>
        <div className={styles.form}>
          <input type="text"/>
          <button>subscribe</button>
        </div>
      </div>
    </>
  )
}
