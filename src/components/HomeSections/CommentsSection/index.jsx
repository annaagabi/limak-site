// src/components/Sections/CommentsSection.jsx
import { commentsUsers } from "../../../data/Comments/commentsUsers.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CommentsSection() {
  const visibleComments = commentsUsers.filter((c) => c.exibir);

  const swiperButtonStyle = `
    .swiper-button-prev,
    .swiper-button-next {
        width: 28px;
        height: 28px;
        color: purple;
        transition: all 0.3s ease;
    }

    .swiper-button-prev {
        transform: translate(-25%, 30%);
    }

    .swiper-button-next {
        transform: translate(25%, 30%);
    }

    @media screen and (min-width: 768px) {
    .swiper-button-prev,
    .swiper-button-next {
        width: 32px;
        height: 32px;
    }

        .swiper-button-prev {
        transform: translate(-22%, 30%);
        }

        .swiper-button-next {
        transform: translate(-6%, 30%);
        }
    }

    @media screen and (min-width: 1024px) {
        .swiper-button-prev {
        transform: translate(-20%, 30%);
        }

        .swiper-button-next {
        transform: translate(15%, 30%);
        }
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 16px;
        font-weight: bold;
    }
    `;

  if (visibleComments.length === 0) return null;

  return (
    <section
      aria-labelledby="comments-title"
      className={`w-full flex justify-center items-center pt-10 pb-4 md:pt-14 lg:pt-20 bg-gradient-to-b from-white via-[#ba77db09] to-[#ba77db] rounded-2xl`}
    > 
      {/* Medidas antigas da Div container (logo após a Section) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl */}
      <div className="w-70 md:w-167 lg:w-255 xl:w-312 px-4 md:px-12">
        <h2
          id="comments-title"
          className="mb-6 md:mb-8 lg:mb-10 text-center text-2xl md:text-3xl lg:text-3xl font-semibold text-[var(--shani-purple)]"
        >
          O que{" "}
          <span className="text-[var(--prickly-purple)]">nossos clientes</span>{" "}
          dizem
        </h2>

        <style>{swiperButtonStyle}</style>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={700}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            768: { slidesPerView: 2, navigation: { enabled: false } },
            1024: { slidesPerView: 3, navigation: { enabled: true } },
          }}
          className="w-64 md:w-[40rem] lg:w-[57.5rem] xl:w-[75rem] min-h-[1.5rem] md:min-h-[23rem] lg:min-h-[21rem] xl:min-h-[20rem] overflow-hidden scroll-smooth"
        >
          {visibleComments.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-full h-72 md:h-[22rem] lg:h-80 xl:h-72 flex flex-col justify-start items-start p-4 md:py-4 xl:p-7 bg-white border border-gray-300 rounded-2xl shadow-md cursor-grab active:cursor-grabbing">
                <div className="flex-1">
                  <p className="text-sm md:text-base text-[var(--carbon-fiber)] leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>

                <div className="">
                  <p className="text-base md:text-lg font-semibold text-[var(--shani-purple)]">
                    — {item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
