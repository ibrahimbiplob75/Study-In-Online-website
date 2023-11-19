import slide1 from '../../assets/1.jpg';
import slide2 from '../../assets/2.jpg';
import slide3 from '../../assets/3.jpg';
import slide4 from "../../assets/4.jpg";

const Curosel = () => {
    return (
      <div className="w-4/5 mx-auto">
        <div className="carousel  h-[650px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={slide1} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 m-auto w-1/2">
                <h2 className="text-6xl font-bold">Collaborative Learning</h2>

                <div>
                  <button className="btn btn-primary mr-5">Learn More</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={slide2} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 m-auto w-1/2">
                <h2 className="text-6xl font-bold">
                  Motivation and Accountability
                </h2>

                <div>
                  <button className="btn btn-primary mr-5">Learn More</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
              <a href="#slide1" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={slide3} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 m-auto w-1/2">
                <h2 className="text-6xl font-bold">
                  Enhanced Communication Skills
                </h2>

                <div>
                  <button className="btn btn-primary mr-5">Learn More</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle  text-white mr-5">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={slide4} className="w-full rounded-xl" />
            <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <div className="text-white space-y-7 m-auto w-1/2">
                <h2 className="text-6xl font-bold">
                  Social Connection and Networking
                </h2>

                <div>
                  <button className="btn btn-primary mr-5">Learn More</button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle mr-5">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Curosel;