import aboutImg from "../images/about.jpeg";
const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At Backroads, we believe travel should be an adventure that immerses
            you in the heart of a destination, not just a sightseeing checklist.
            We go beyond the tourist trails to connect you with stunning
            landscapes, local cultures, and hidden gems you'd never find on your
            own.
          </p>
          <p>
            Our expert local guides, small group sizes, and carefully crafted
            itineraries ensure you don't just see a place – you experience it.
            We handle the logistics, so you can focus on the joy of discovery
            and create memories that last a lifetime.
          </p>
          <a href="#tours" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
