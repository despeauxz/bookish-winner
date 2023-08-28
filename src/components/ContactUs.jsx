import { useEffect, useState } from "react";
import classnames from "classnames";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1
  });

  useEffect(() => {
    if(inView) {
      setLoaded(true);
    }
  }, [inView]);

  return (
    <section ref={ref} className="footer">
      <div className="contact-us">
        <div className="col-1">
          <h3 className={classnames('', { 'animate__fadeIn': inView || loaded })}>Need number?</h3>
          <div className="flex">
            <div className={classnames('pill active', { 'animate__fadeIn': inView || loaded })}>Travel</div>
            <div className={classnames('pill', { 'animate__fadeIn': inView || loaded })}>Health</div>
            <div className={classnames('pill', { 'animate__fadeIn': inView || loaded })}>CASCO</div>
            <div className={classnames('pill', { 'animate__fadeIn': inView || loaded })}>Mortgage</div>
            <div className={classnames('pill', { 'animate__fadeIn': inView || loaded })}>Fire</div>
          </div>
          <form>
            <div className="flex">
              <div className="form-group">
                <label className={classnames('', { 'animate__fadeIn anim-delay-800': inView || loaded })}>Enter the country</label>
                <input type="text" placeholder="Australia" className={classnames('', { 'animate__fadeIn anim-delay-900': inView || loaded })} />
              </div>
              <div className="form-group">
                <label className={classnames('', { 'animate__fadeIn anim-delay-900': inView || loaded })}>Choose travel dates</label>
                <input type="date" placeholder="11 Apr - 20 Apr" className={classnames('', { 'animate__fadeIn anim-delay-1000': inView || loaded })} />
              </div>
            </div>
            <button className={classnames('', { 'animate__fadeIn anim-delay-1200': inView || loaded })}>Calculate</button>
          </form>
        </div>
        <div className="col-2">
          <div className="row">
            <h4 className={classnames('', { 'animate__fadeIn': inView || loaded })}>Insurance services</h4>
            <div className="listing">
              <span className={classnames('', { 'animate__fadeIn anim-delay-800': inView || loaded })}>Medical expenses</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-800': inView || loaded })}>Family health insurance</span>
            </div>
            <div className="listing">
              <span className={classnames('', { 'animate__fadeIn anim-delay-900': inView || loaded })}>Vehicle damage</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-900': inView || loaded })}>Property loss</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-900': inView || loaded })}>Fire</span>
            </div>
          </div>
          <div className="row">
            <h4 className={classnames('', { 'animate__fadeIn anim-delay-1000': inView || loaded })}>Company</h4>
            <div className="listing">
              <span className={classnames('', { 'animate__fadeIn anim-delay-1100': inView || loaded })}>About Us</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-1100': inView || loaded })}>Career</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-1200': inView || loaded })}>Help</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-1200': inView || loaded })}>FAQ</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-1300': inView || loaded })}>Blog</span>
            </div>
          </div>
          <div className="row">
            <h4 className={classnames('', { 'animate__fadeIn anim-delay-1400': inView || loaded })}>Bonus</h4>
            <div className="listing">
              <span className={classnames('', { 'animate__fadeIn anim-delay-1500': inView || loaded })}>Gift certificate</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-1600': inView || loaded })}>Affilate Program</span>
              <span className={classnames('', { 'animate__fadeIn anim-delay-1700': inView || loaded })}>Trainings</span>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="logo">
            <img className={classnames('', { 'animate__fadeIn': inView || loaded })} src="/img/logo.png" alt="Logo" />
            <span className={classnames('', { 'animate__fadeIn': inView || loaded })}>Darcy's insurance products</span>
          </div>
          <a href="#" className={classnames('', { 'animate__fadeIn': inView || loaded })}>Privacy Policy</a>
        </div>
      </footer>
    </section>
  );
}

export default ContactUs;
