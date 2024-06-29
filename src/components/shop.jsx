import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Shop = () => {
  return (
    <div className="max-w-[1200px] m-auto py-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
          <div className="w-full flex flex-col">
            <div className="h-[400px] overflow-hidden">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/originals_fw24_t_toe_samba_tcc_d_2cde7c3926.jpg"
                alt="Gazelle"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-[700] py-2">GAZELLE</h1>
            <p className="text-xs py-1">A true classic with a long legacy.</p>
            <button className="mt-12 self-start text-black font-[650] tracking-[0.11em] text-sm underline hover:bg-black hover:text-white transition-all ">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col">
            <div className="relative h-[400px] overflow-hidden">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                type="video/mp4"
                src="https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_400,w_400/Training_FW_24_Dropset3_global_Launch_HP_Teaser_Card_d_060f253a60.mp4"
              ></video>
            </div>
            <h1 className="font-[700] py-2">
              SUPERNOVA RISE: SPRING INTO THE SEASON
            </h1>
            <p className="text-xs py-1">
              Fresh start, fresh colorways. Check out Supernova <br /> Rise in
              various colors now.
            </p>
            <button className="mt-4 self-start text-black font-[650] tracking-[0.11em] text-sm underline hover:bg-black hover:text-white transition-all">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col">
            <div className="relative h-[400px] overflow-hidden">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                type="video/mp4"
                src="https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_400,w_400/football_ss24_eurocopa_Euro_Copa_Combined_onsite_tcc_27ff6d7316.mp4"
              ></video>
            </div>
            <h1 className="font-[700] py-2">adidas F50</h1>
            <p className="text-xs py-1">
              Engineered for speed, the F50 is here to free the fast.
            </p>
            <button className="mt-12 self-start text-black font-[650] tracking-[0.11em] text-sm underline hover:bg-black hover:text-white transition-all">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col">
            <div className="h-[400px] overflow-hidden">
              <img
                src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/glbl_80s_summer_digital_ss24_launch_hp_collection_card_carousel_d_1fe7f09db5.jpg"
                alt="Forum"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-[700] py-2">FORUM</h1>
            <p className="text-xs py-1">Bold design and unrivalled classics.</p>
            <button className="mt-12 self-start text-black font-[650] tracking-[0.11em] text-sm underline hover:bg-black hover:text-white transition-all">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Shop;
