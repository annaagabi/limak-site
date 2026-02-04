// Versão atualizada com valores rem e padrões da Tailwind
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Card from '../Card'
// import '../../index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import ChevronLeft from '../../assets/images/icons/chevron-left.svg?react'
import ChevronRight from '../../assets/images/icons/chevron-right.svg?react'

export default function Carousel({
    className = '',
    products = [],
    showProductName = true,
    autoScroll = true,
    autoScrollInterval = 3000,
    enableLinks = true
}) {
    const [isPaused, setIsPaused] = useState(false);
    const swiperRef = useRef(null);
    const autoplayResumeTimeout = useRef(null);
    const [enableSwiper, setEnableSwiper] = useState(false);

    useEffect(() => {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setEnableSwiper(true));
    } else {
        setTimeout(() => setEnableSwiper(true), 300);
    }
    }, []);


    useEffect(() => {
        return () => clearTimeout(autoplayResumeTimeout.current);
    }, []);

    const baseStyle = 'relative w-full flex justify-center items-center';

    return (
        <div
            className={`${baseStyle} ${className}`}
            onMouseEnter={() => {
                setIsPaused(true);
                clearTimeout(autoplayResumeTimeout.current);
                swiperRef.current?.swiper?.autoplay?.stop();
            }}
            onMouseLeave={() => {
                setIsPaused(false);
                clearTimeout(autoplayResumeTimeout.current);
                autoplayResumeTimeout.current = setTimeout(() => {
                    swiperRef.current?.swiper?.autoplay?.start();
                }, 2000);
            }}
        >
            <button
                aria-label='Slide anterior'
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
                className="z-10"
            >
                <ChevronLeft aria-hidden="true" alt="Botão seta para a esquerda" className='w-4 md:w-6 xl:w-12 lg:w-10 h-4 md:h-6 xl:h-12 lg:h-10 text-[var(--shani-purple)] hover:text-fuchsia-700 transition-all duration-300 lg:cursor-pointer'/>
            </button>

            <div className="flex justify-center overflow-hidden scroll-smooth">
                {enableSwiper ? (
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={autoScroll && !isPaused ? { delay: autoScrollInterval, disableOnInteraction: false } : false}
                    speed={700}

                    centerInsufficientSlides={true}
                    
                    className="w-full flex justify-center overflow-hidden scroll-smooth p-1 translate-x-1 lg:p-2 lg:translate-x-2 xl:pl-5 xl:pr-2.5 xl:translate-x-2.5"
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 5 },
                        768: { slidesPerView: 4, spaceBetween: 8 }, 
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                        1280: { slidesPerView: 4, spaceBetween: 58 }
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex-shrink-0 w-21 md:w-[9.88rem] lg:md:w-[18.88rem]">
                                {enableLinks ? (
                                    // <Link aria-label={`Ver detalhes do produto ${product.productName}`} to={`/${product.category}/${product.id}`}>
                                    <Link aria-label={`Ver detalhes do produto ${product.productName}`} to={`categorias/${product.category}`}>
                                        <Card
                                            imgProduct={product.imgProduct}
                                            productName={showProductName ? product.productName : ''}
                                            altImg={product.altImg}
                                            classCardContainer="w-28 md:w-[8.75rem] lg:w-[10.75rem] xl:w-56 aspect-square"
                                            classCardImgContainer="w-full h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full"
                                        />
                                    </Link>
                                ) : (
                                    <Card
                                        imgProduct={product.imgProduct}
                                        productName={showProductName ? product.productName : ''}
                                        altImg={product.altImg}
                                        classCardContainer="w-28 md:w-[8.75rem] lg:w-[10.75rem] xl:w-56 aspect-square"
                                        classCardImgContainer="w-full h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full"
                                    />
                                )}
                            </div>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
               ): null}
            </div>
             

            <button
                aria-label='Próximo slide'
                onClick={() => swiperRef.current?.swiper?.slideNext()}
                className="z-10"
            >
                <ChevronRight aria-hidden="true" alt="Botão seta para a direita" className='w-4 md:w-6 xl:w-12 lg:w-10 h-4 md:h-6 xl:h-12 lg:h-10 text-[var(--shani-purple)] hover:text-fuchsia-700 transition-all duration-300 lg:cursor-pointer'/>
            </button>
        </div>
    );
}