// Versão atualizada com Swiper para slides
import HeroImage from '../../../assets/images/novas-imagens/Hero/Banner-7.webp';
import SacolasTNTHero from '../../../assets/images/novas-imagens/Hero/Banner-8.webp';
import SacolasAlgodaoHero from '../../../assets/images/novas-imagens/Hero/Banner-6.webp';
import { socialLinks } from '../../../data/Links/index';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay';


import HeroSlide from '../../HeroSlides';

export default function Hero() {
    return (
        <section aria-labelledby="hero-subtitle" className="w-full flex justify-center items-center md:pt-8 pb-10 md:pb-14 lg:pb-18 !overflow-hidden">
            
            <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            speed={1000}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full max-w-full overflow-hidden"
            >

                {/* Primeiro Slide (Principal) */}
                <SwiperSlide className="!w-full box-border flex justify-center items-center md:px-12 xl:px-0 !overflow-hidden">
                    <HeroSlide
                        image={HeroImage}
                        imageAlt="Imagem com 3 produtos personalizados, uma mochila e duas sacolas diferentes"
                        title="LIMAK | Sacolas de TNT e Algodão"
                        subtitle={
                            <>
                                Transforme sua <span className='text-[var(--prickly-purple)]'>marca</span> em destaque, <span className='text-[var(--prickly-purple)]'>personalize!</span>
                            </>
                        }
                        paragraph={
                            <>
                                Sacolas personalizadas, mochilas personalizadas, ecobags, aventais e 
                                <br className='md:hidden'/>muito mais para seus brindes corporativos.
                            </>
                        }
                        button="Fale conosco"
                        buttonClassName={"mb-8 md:mb-0"}
                        buttonLink={socialLinks.whatsapp}
                        ariaLabel={'Abrir WhatsApp para contato'}
                    />
                </SwiperSlide>


                {/* Segundo Slide */}
               <SwiperSlide className="!w-full box-border flex justify-center items-center md:px-12 xl:px-0 !overflow-hidden bg-gradient-to-b from-white via-[#ba77db09] to-[#ba77db]">
                    <HeroSlide
                        image={SacolasTNTHero}
                        imageClassName={'max-w-xs lg:max-w-md'}
                        imageAlt="Imagem com 3 produtos personalizados, uma mochila e duas sacolas diferentes"
                        subtitle={
                            <>
                                Sacolas <span className='text-[var(--prickly-purple)]'>TNT</span> Personalizadas
                            </>
                        }
                        paragraph={
                            <>
                                Transforme seus eventos e ações promocionais!<br className='hidden md:block'/> Confira nossas sacolas de TNT personalizadas de alta qualidade, prontas para destacar sua marca com estilo e agilidade!
                            </>
                        }
                        paragraphClassName={'md:!text-justify px-4 md:px-0'}
                        button="Veja a categoria"
                        buttonClassName={"!w-32 md:!w-40 lg:!w-42 mb-8 md:mb-0"}
                        buttonLink={'/categorias/sacolas-tnt-personalizadas'}
                        ariaLabel={'Abrir link para categoria de sacolas TNT personalizadas'}
                    />
                </SwiperSlide>
                {/* Terceiro Slide */}
                <SwiperSlide
                    className="!w-full box-border flex justify-center items-center
                    md:px-12 xl:px-0
                    !overflow-hidden bg-white
                    bg-[radial-gradient(#ba77db_1px,transparent_1px)]
                    bg-[size:1rem_1rem] md:bg-[size:1.375rem_1.375rem]"
                    >

                    <HeroSlide
                        image={SacolasAlgodaoHero}
                        imageClassName={'max-w-xs lg:max-w-md'}
                        imageAlt="Imagem com 3 produtos personalizados, uma mochila e duas sacolas diferentes"
                        subtitle={
                            <>
                                Sacolas de <span className='text-[var(--prickly-purple)]'>Algodão</span> Personalizadas
                            </>
                        }
                        paragraph={
                            <>
                            Sustentabilidade que gera valor para sua marca!<br className='hidden md:block'/>
                            Nossas sacolas de algodão personalizadas unem resistência, elegância e reutilização, ideais para ações promocionais e marcas que querem ser lembradas.
                            </>
                        }
                        paragraphClassName={'md:!text-justify px-4 md:px-0'}
                        button="Veja a categoria"
                        buttonClassName={"!w-32 md:!w-40 lg:!w-42 mb-8 md:mb-0"}
                        buttonLink={'/categorias/sacolas-de-algodao-personalizadas'}
                        ariaLabel={'Abrir link para categoria de sacolas TNT personalizadas'}

                    />
                </SwiperSlide>

            </Swiper>

        </section>
    )
}
