import { useEffect, useState } from "react";
import classnames from "classnames";
import { useInView } from "react-intersection-observer";

const Support = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1
  });

  useEffect(() => {
    if(inView) {
      setLoaded(true);
    }
  }, [inView])

  return (
    <section ref={ref} className="support">
      <h2>
        <span className={classnames('slide', { 'animate__fadeInLeft': inView || loaded })}>Support </span>
        <span className={classnames('slide', { 'animate__fadeInLeft': inView || loaded })}>at every </span>
        <span className={classnames('slide', { 'animate__fadeInLeft': inView || loaded })}>Step</span>
      </h2>
      <div className="desc">
        <div className="point">
          <img src="/img/hint.png" alt="Hint" className={classnames('slide', { 'animate__fadeInUp anim-delay-600': inView || loaded })} />
          <p className={classnames('slide', { 'animate__fadeInUp anim-delay-700': inView || loaded })}>Participate in the <a href="#">loyalty program</a> Pay for the service online to get bonuses for our other services. We have a lot of bonuses.</p>
        </div>
        <div className="point">
          <img src="/img/hint.png" alt="Hint" className={classnames('slide', { 'animate__fadeInUp anim-delay-900': inView || loaded })} />
          <p className={classnames('slide', { 'animate__fadeInUp anim-delay-1000': inView || loaded })}>You can help other people; choose a donation fund and share the link with your friends!</p>
        </div>
        <button className={classnames('', { 'animate__fadeInUp': inView || loaded })}>Choose a fund</button>
      </div>
      <div className={classnames('balloon-img', { 'animate__fadeInUp': inView || loaded })} />
    </section>
  );
}

export default Support;
