import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from "react";
import classnames from "classnames";
import { useInView } from "react-intersection-observer";
import '@splidejs/react-splide/css';

const options = {
  arrows: false,
  perPage: 1
};

const Carousel = () => {
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
    <section ref={ref} className="carousel">
      <div className="carousel-container">
        <Splide options={options}>
          <SplideSlide>
            <div className={classnames('slide', { 'animate__backInRight': inView || loaded })}>
              <div className={classnames('author', { 'animate__fadeInUp': inView || loaded })} />
              <div className="details">
                <h4 className={classnames('', { 'animate__fadeInRight': inView || loaded })}>Georgia Darcy</h4>
                <p className={classnames('title', { 'animate__fadeInRight': inView || loaded })}>The agency founder</p>
                <p className={classnames('sentence', { 'animate__fadeInRight': inView || loaded })}>With over twenty years of induxstry exprience, Darcy's insurance products has learned a lot. The one thing we know fopr sure is that we are all about you. If you find searching for insurance frustrating, we are here to help</p>
                <button className={classnames('', { 'animate__fadeInRight': inView || loaded })}>Get a counsultation</button>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={classnames('slide', { 'animate__backInRight': inView || loaded })}>
              <div className={classnames('author', { 'animate__fadeInUp': inView || loaded })} />
              <div className="details">
                <h4 className={classnames('', { 'animate__fadeInRight': inView || loaded })}>Georgia Darcy</h4>
                <p className={classnames('title', { 'animate__fadeInRight': inView || loaded })}>The agency founder</p>
                <p className={classnames('sentence', { 'animate__fadeInRight': inView || loaded })}>With over twenty years of induxstry exprience, Darcy's insurance products has learned a lot. The one thing we know fopr sure is that we are all about you. If you find searching for insurance frustrating, we are here to help</p>
                <button className={classnames('', { 'animate__fadeInRight': inView || loaded })}>Get a counsultation</button>
              </div>
            </div>
          </SplideSlide>
        </Splide>
        <div className="desc">
          <img src="/img/hint.png" alt="loader" className={classnames('', { 'animate anim-delay-1000': inView || loaded })} />
          <h2>
            <span className={classnames('', { 'animate__fadeInRight anim-delay-1200': inView || loaded })}>Our </span>
            <span className={classnames('', { 'animate__fadeInRight anim-delay-1400': inView || loaded })}>experts </span>
            <span className={classnames('', { 'animate__fadeInRight anim-delay-1600': inView || loaded })}>say</span>  
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
