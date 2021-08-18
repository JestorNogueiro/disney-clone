import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus
        showIndicators
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="slider 1" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="slider 2" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="slider 3" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="slider 4" />
        </div>
      </Carousel>
    </section>
  );
}

export default Slider;
