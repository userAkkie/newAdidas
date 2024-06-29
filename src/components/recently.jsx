import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Recently = () => {
  return (
    <div className="max-w-[1300px] m-auto">
      <h1 className="font-bold text-3xl py-4">RECENTLY VIEWED ITEMS</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border-solid border-[1px] border-white hover:border-black">
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f3bd64e11f8d4d78b37c84972927902b_9366/Gazelle_Bold_Shoes_Kids_Turquoise_JI3383_01_standard.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="p-3">
              <p>Gazelle Bold Shoes Kids</p>
              <span className="text-gray-500">Originals</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-solid border-[1px] border-white hover:border-black">
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c1654041618148f1a70a61344b32e615_9366/Tiro_Cut_3-Stripes_Crop_Jersey_Yellow_IZ2082_21_model.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="p-3">
              <p>Tiro Cut 3-Stripes Crop Jersey</p>
              <span className="text-gray-500">Sportswear</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-solid border-[1px] border-white hover:border-black">
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/a49adef4829148bba75c3ba4ec525b16_9366/Terrex_Multi_Full-Zip_Fleece_Jacket_Black_IZ3294_21_model.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="p-3">
              <p>Terrex Multi Full-Zip Fleece Jacket</p>
              <span className="text-gray-500">TERREX</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-solid border-[1px] border-white hover:border-black">
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/fda8b4082773454eb8b8a89e016952d4_9366/Athletic_Cushioned_No-Show_Socks_6_Pairs_Black_Q10332_03_standard.jpg"
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="p-3">
              <p>Athletic Cushioned No-Show Socks 6 Pairs</p>
              <span className="text-gray-500">Performance</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Recently;
