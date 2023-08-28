import { useEffect, useState } from "react";
import classnames from "classnames";
import { useInView } from "react-intersection-observer";

const Collage = () => {
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
    <section ref={ref} className="collage" id="collage">
      <div className="group">
        <div className={classnames('collage-container-1', { 'animate': inView || loaded })}>
          <div className="collage-1" />
          <div className={classnames("details", { 'animate anim-delay-200': inView || loaded })}>Home insurance</div>
        </div>
        <div className={classnames('collage-container-2', { 'animate anim-delay-400': inView || loaded })}>
          <div className="collage-2" />
        </div>
        <div className={classnames('collage-3', { 'animate anim-delay-600': inView || loaded })}>
          <div className={classnames('', { 'animate anim-delay-800': inView || loaded })}>
            <h2>Best Choice</h2>
            <p>Not all insurance are the same, That's why agency knows that your insurance should be customized to fit your situation</p>
          </div>
          <button className={classnames('', { 'animate anim-delay-900': inView || loaded })}>View all services</button>
        </div>
      </div>
      <div className="group">
        <div className={classnames('collage-container-4', { 'animate anim-delay-1100': inView || loaded })}>
          <div className="collage-4" />
          <div className={classnames("details", { 'animate anim-delay-1200': inView || loaded })}>Vehicle damage</div>
        </div>
        <div className={classnames('collage-container-5', { 'animate anim-delay-1300': inView || loaded })}>
          <div className="collage-5" />
          <div className={classnames("details", { 'animate anim-delay-1400': inView || loaded })}>Mortgage insurance</div>
        </div>
        <div className={classnames('collage-container-6', { 'animate anim-delay-1500': inView || loaded })}>
          <div className="collage-6" />
          <div className={classnames("details", { 'animate anim-delay-1700': inView || loaded })}>Medical expenses</div>
        </div>
      </div>
      
    </section>
  );
}

export default Collage;
