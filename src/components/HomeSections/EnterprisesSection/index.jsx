import { enterprisesList } from '../../../data/Enterprises/enterprises.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Versão atualizada com valores rem e padrões da Tailwind
export default function Enterprises({
    classNameSection = '',
    classNameContainer = '',
}) {
    const baseStyleSection = 'w-full h-16 md:h-20 lg:h-[7.5rem] flex flex-col justify-center items-center bg-gradient-to-br from-white via-[#ba77db11] to-[var(--enterprises)] rounded-2xl overflow-hidden';
    const baseStyleContainer = 'flex my-1 md:my-2 lg:my-4 gap-6 lg:gap-11';

    return (
        <section aria-labelledby="enterprises-title" className={`${baseStyleSection} ${classNameSection}`}>
            <h2 id="enterprises-title" className='text-lg md:text-2xl lg:text-2xl font-semibold text-[var(--shani-purple)] my-1 md:my-2'>
                Clientes que já atendemos
            </h2>

            <div className="w-full flex justify-center items-center overflow-hidden">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={'auto'}
                    spaceBetween={16}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    cssMode={false}
                    className={`${baseStyleContainer} ${classNameContainer}`}
                >
                    {[...enterprisesList, ...enterprisesList].map((enterprise, index) => (
                        <SwiperSlide key={index} className="!w-auto flex justify-center items-center">
                            <img
                                src={enterprise.src}
                                alt={enterprise.alt}
                                className="w-20 md:w-[5.5rem] lg:w-40 flex-shrink-0"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx>{`

                .swiper-wrapper {
                    display: flex;
                    align-items: center;
                    transition-timing-function: linear !important;
                }
                .swiper-slide {
                    flex-shrink: 0;
                }
            `}</style>
        </section>
    );
}