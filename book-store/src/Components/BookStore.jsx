import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css"

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const BookStore = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <div className="book-slide">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="book-cell">
              <div className="book-img">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg"
                  alt=""
                  className="book-photo"
                />
              </div>
              <div className="book-content">
                <div className="book-title">BIG MAGIC</div>
                <div className="book-author">by Elizabeth Gilbert</div>
                <div className="rate">
                  <fieldset className="rating">
                    <input type="checkbox" id="star5" name="rating" value="5" />
                    <label className="full" for="star5"></label>
                    <input type="checkbox" id="star4" name="rating" value="4" />
                    <label className="full" for="star4"></label>
                    <input type="checkbox" id="star3" name="rating" value="3" />
                    <label className="full" for="star3"></label>
                    <input type="checkbox" id="star2" name="rating" value="2" />
                    <label className="full" for="star2"></label>
                    <input type="checkbox" id="star1" name="rating" value="1" />
                    <label className="full" for="star1"></label>
                  </fieldset>
                  <span className="book-voters">1.987 voters</span>
                </div>
                <div className="book-sum">
                  Readers of all ages and walks of life have drawn inspiration
                  and empowerment from Elizabeth Gilbert’s books for years.
                </div>
                <div className="book-see">See The Book</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="book-cell">
              <div className="book-img">
                <img
                  src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg"
                  alt=""
                  className="book-photo"
                />
              </div>
              <div className="book-content">
                <div className="book-title">Ten Thousand Skies Above You</div>
                <div className="book-author">by Claudia Gray</div>
                <div className="rate">
                  <fieldset className="rating blue">
                    <input type="checkbox" id="star6" name="rating" value="5" />
                    <label className="full1" for="star6"></label>
                    <input type="checkbox" id="star7" name="rating" value="4" />
                    <label className="full1" for="star7"></label>
                    <input type="checkbox" id="star8" name="rating" value="3" />
                    <label className="full1" for="star8"></label>
                    <input type="checkbox" id="star9" name="rating" value="2" />
                    <label className="full1" for="star9"></label>
                    <input
                      type="checkbox"
                      id="star10"
                      name="rating"
                      value="1"
                    />
                    <label className="full1" for="star10"></label>
                  </fieldset>
                  <span className="book-voters">1.987 voters</span>
                </div>
                <div className="book-sum">
                  The hunt for each splinter of Paul's soul sends Marguerite
                  racing through a war-torn San Francisco.
                </div>
                <div className="book-see book-blue">See The Book</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="book-cell">
              <div className="book-img">
                <img
                  src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg"
                  alt=""
                  className="book-photo"
                />
              </div>
              <div className="book-content">
                <div className="book-title">A Tale For The Time Being</div>
                <div className="book-author">by Ruth Ozeki</div>
                <div className="rate">
                  <fieldset className="rating purple">
                    <input
                      type="checkbox"
                      id="star11"
                      name="rating"
                      value="5"
                    />
                    <label className="full" for="star11"></label>
                    <input
                      type="checkbox"
                      id="star12"
                      name="rating"
                      value="4"
                    />
                    <label className="full" for="star12"></label>
                    <input
                      type="checkbox"
                      id="star13"
                      name="rating"
                      value="3"
                    />
                    <label className="full" for="star13"></label>
                    <input
                      type="checkbox"
                      id="star14"
                      name="rating"
                      value="2"
                    />
                    <label className="full" for="star14"></label>
                    <input
                      type="checkbox"
                      id="star15"
                      name="rating"
                      value="1"
                    />
                    <label className="full" for="star15"></label>
                  </fieldset>
                  <span className="book-voters">1.987 voters</span>
                </div>
                <div className="book-sum">
                  In Tokyo, sixteen-year-old Nao has decided there’s only one
                  escape from her aching loneliness and her classmates’
                  bullying.
                </div>
                <div className="book-see book-pink">See The Book</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="book-cell">
              <div className="book-img">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
                  alt=""
                  className="book-photo"
                />
              </div>
              <div className="book-content">
                <div className="book-title">The Great Gatsby</div>
                <div className="book-author">by F.Scott Fitzgerald</div>
                <div className="rate">
                  <fieldset className="rating yellow">
                    <input
                      type="checkbox"
                      id="star16"
                      name="rating"
                      value="5"
                    />
                    <label className="full" for="star16"></label>
                    <input
                      type="checkbox"
                      id="star17"
                      name="rating"
                      value="4"
                    />
                    <label className="full" for="star17"></label>
                    <input
                      type="checkbox"
                      id="star18"
                      name="rating"
                      value="3"
                    />
                    <label className="full" for="star18"></label>
                    <input
                      type="checkbox"
                      id="star19"
                      name="rating"
                      value="2"
                    />
                    <label className="full" for="star19"></label>
                    <input
                      type="checkbox"
                      id="star20"
                      name="rating"
                      value="1"
                    />
                    <label className="full" for="star20"></label>
                  </fieldset>
                  <span className="book-voters">1.987 voters</span>
                </div>
                <div className="book-sum">
                  The Great Gatsby, F. Scott Fitzgerald’s third book, stands as
                  the supreme achievement of his career.
                </div>
                <div className="book-see book-yellow">See The Book</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="book-cell">
              <div className="book-img">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg"
                  alt=""
                  className="book-photo"
                />
              </div>
              <div className="book-content">
                <div className="book-title">After You</div>
                <div className="book-author">by Jojo Moyes</div>
                <div className="rate">
                  <fieldset className="rating dark-purp">
                    <input
                      type="checkbox"
                      id="star21"
                      name="rating"
                      value="5"
                    />
                    <label className="full" for="star21"></label>
                    <input
                      type="checkbox"
                      id="star22"
                      name="rating"
                      value="4"
                    />
                    <label className="full" for="star22"></label>
                    <input
                      type="checkbox"
                      id="star23"
                      name="rating"
                      value="3"
                    />
                    <label className="full" for="star23"></label>
                    <input
                      type="checkbox"
                      id="star24"
                      name="rating"
                      value="2"
                    />
                    <label className="full" for="star24"></label>
                    <input
                      type="checkbox"
                      id="star25"
                      name="rating"
                      value="1"
                    />
                    <label className="full" for="star25"></label>
                  </fieldset>
                  <span className="book-voters">1.987 voters</span>
                </div>
                <div className="book-sum">
                  Louisa Clark is no longer just an ordinary girl living an
                  ordinary life. After the transformative six months spent.
                </div>
                <div className="book-see book-purple">See The Book</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          className="book js-flickity"
          data-flickity-options='{ "wrapAround": true }'
        ></div>
      </div>
    </>
  );
};

export default BookStore;
