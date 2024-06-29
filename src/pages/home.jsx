import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";
import Shop from "../components/shop";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <h1 className="font-bold text-4xl py-10 pl-5">Still Interested?</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper max-w-full h-[500px]"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a046d462fb564973bd850f5108fc033e_9366/Pride_Gazelle_Bold_Pabllo_Vittar_Shoes_Black_IH8063_01_standard.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$125</b>
            </div>
            <div className="p-2">
              <p className="text-sm">Pride Gazelle Bold Pabllo Vittar Shoes</p>
              <span className="text-gray-500 text-sm">Originals</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/d9497e8abd004d20a2f9e189831ab873_9366/Ultimate_HEAT.RDY_Engineered_Running_Tee_Grey_IY0719_HM1.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$55</b>
            </div>
            <div className="p-2">
              <p className="text-sm">
                Ultimate HEAT.RDY Engineered Running Tee
              </p>
              <span className="text-gray-500 text-sm">Performance</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f62163655de54e8ab759ad2400b36817_9366/Primegreen_Essentials_Warm-Up_Slim_3-Stripes_Track_Jacket_Black_H48443_21_model.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$55</b>
            </div>
            <div className="p-2">
              <p className="text-sm">
                Primegreen Essentials Warm-Up Slim 3-Stripes Track Jacket
              </p>
              <span className="text-gray-500 text-sm">Sportswear</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/aa2ea332027e480083a2afce01229951_9366/Adicolor_Classics_SST_Track_Jacket_Black_IK4034_21_model.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$80</b>
            </div>
            <div className="p-2">
              <p className="text-sm">Adicolor Classics SST Track Jacket</p>
              <span className="text-gray-500 text-sm">Originals</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b9a0bc9b654047428d97dae839c52c09_9366/Adicolor_Classics_SST_Track_Jacket_Pink_IY2170_21_model.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$80</b>
            </div>
            <div className="p-2">
              <p className="text-sm">Adicolor Classics SST Track Jacket</p>
              <span className="text-gray-500 text-sm">Originals</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/e8410bf96b1643f3922e0bda1ba42d4a_9366/Trefoil_Essentials_Shorts_Blue_IR7817_21_model.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$40</b>
            </div>
            <div className="p-2">
              <p className="text-sm">Trefoil Essentials Shorts</p>
              <span className="text-gray-500 text-sm">Originals</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/ac4db04b3d784cae9b8fac8e015d9e49_9366/Superlite_Hat_White_EX7049_01_standard.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$26</b>
            </div>
            <div className="p-2">
              <p className="text-sm">Superlite Hat</p>
              <span className="text-gray-500 text-sm">Performance</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f3bd64e11f8d4d78b37c84972927902b_9366/Gazelle_Bold_Shoes_Kids_Turquoise_JI3383_01_standard.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$100</b>
            </div>
            <div className="p-2">
              <p className="text-sm">Gazelle Bold Shoes Kids</p>
              <span className="text-gray-500 text-sm">Originals</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-1 border-solid border-[1px] border-white hover:border-black">
            <div className="relative">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/b9c79a2d994e45fe9595199695025648_9366/Campus_00s_Shoes_Red_IG1230_01_standard.jpg"
                alt=""
              />
              <b className="absolute bottom-0 left-2 bg-white p-1">$90</b>
            </div>
            <div className="p-2">
              <p className="text-sm">Campus 00c Shoes</p>
              <span className="text-gray-500 text-sm">Originals</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Shop />
      <div className="max-w-[1180px] m-auto px-10">
        <h1 className="font-semibold text-3xl py-10 lg:4xl">Popular right now</h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <a
            className="text-4xl font-semibold border-b-2 hover:border-black"
            href=""
          >
            samba
          </a>
          <a
            className="text-4xl font-semibold border-b-2 hover:border-black"
            href=""
          >
            campus
          </a>
          <a
            className="text-4xl font-semibold border-b-2 hover:border-black"
            href=""
          >
            gazelle
          </a>
          <a
            className="text-4xl font-semibold border-b-2 hover:border-black"
            href=""
          >
            messi
          </a>
          <a
            className="text-4xl font-semibold border-b-2 hover:border-black"
            href=""
          >
            ultraboost
          </a>
          <a
            className="text-4xl font-semibold border-b-2 hover:border-black"
            href=""
          >
            nmd
          </a>
        </div>
      </div>
      <br />

      {/* about ============================= */}
      <div className="grid grid-cols-1 justify-center bg-[#f5f5e5] px-3 py-8 mt-20 gap-8 lg:grid-cols-2 lg:gap-20 lg:px-28">
        <div>
          <h1 className="text-2xl font-bold">
            Stories, style, and sporting goods at adidas, since 1949
          </h1>
          <br />
          <span>
            Through sports, we have the power to change lives. Sports keep us
            fit. They keep us mindful. They bring us together. Athletes inspire
            us. They help us to get up and get moving. And sporting goods
            featuring the latest technologies help us beat our personal best.
            adidas is home to the runner, the basketball player, the soccer kid,
            the fitness enthusiast, the yogi. And even the weekend hiker looking
            to escape the city. The 3-Stripes are everywhere and anywhere. In
            sports. In music. On life is stages. Before the whistle blows,
            during the race, and at the finish line. We are here to support
            creators. To improve their game. To live their lives. And to change
            the world.
            <br /> <br />
            adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sporting goods, style and clothing that match the athletic
            needs, while keeping sustainability in mind. We are here to support
            creators. Improve their game. Create change. And we think about the
            impact we have on our world.
          </span>
        </div>
        <div className=" pt-10 lg:pt-0">
          <h1 className="text-2xl font-bold">Workout clothes, for any sport</h1>
          <br />
          <span>
            adidas designs for athletes of all kinds. Creators who love to
            change the game. People who challenge conventions, break the rules,
            and define new ones. Then break them all over again. We design
            sports apparel that gets you moving, winning, and living life to the
            fullest. We create bras and tights for female athletes who play just
            as hard as the men. From low to high support. Maximum comfort. We
            design, innovate and iterate. We test new technologies in action. On
            the field, the track, the court, and in the pool. We are inspired by
            retro workout clothes, creating new streetwear essentials. From NMD
            and Ozweego to our Firebird tracksuits. From Stan Smith to
            Superstar. Classic sports models are brought back to life on the
            streets and the stages around the world.
            <br /> <br /> Through our collections we blur the borders between
            high fashion and high performance. Like our adidas by Stella
            McCartney athletic clothing collection – designed to look the part
            inside and outside of the gym. Or some of our adidas Originals
            lifestyle pieces, that can be worn as sports apparel too. Our lives
            are constantly changing. Becoming more and more versatile. And
            adidas designs with that in mind.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
