// Versão atualizada com valores rem e padrões da Tailwind
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropTypes from "prop-types";
import Button from "../Button";
import IconAddSquare from "../../assets/images/icons/icon-add-square.svg?react";
import IconMinusSquare from "../../assets/images/icons/icon-minus-square.svg?react";
import IconArrowLeftNoCircle from "../../assets/images/icons/arrow-left-icon-no-circle.svg?react";

export default function PageProductContent({ product }) {
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [activeVideo, setActiveVideo] = useState(null);
  const [enableSwiper, setEnableSwiper] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setEnableSwiper(true));
    } else {
      setTimeout(() => setEnableSwiper(true), 200);
    }
  }, []);

  const swiperButtonStyle = `
  .swiper-button-prev,
  .swiper-button-next {
    width: 1.75rem;
    height: 1.75rem;
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
    width: 2rem;
    height: 2rem;
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

  return (
    <section
      aria-labelledby="product-title"
      className="w-full flex justify-center items-center px-4 md:px-12"
    >
      {/* Medidas antigas da Div container (logo após a Section) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl */}
      <div className=" w-full max-w-7xl flex flex-col md:flex-row justify-center items-center md:items-start my-5 md:my-7 lg:my-12 gap-5 md:gap-12 lg:gap-28">

        {/* Imagens */}
        <div className="flex flex-col justify-center items-center gap-5">
          
          {/* Imagem principal */}
          <div
            aria-live="polite"
            className="relative w-[17.5rem] md:w-[20.75rem] lg:w-[26.75rem] h-[17rem] md:h-[20.5rem] lg:h-[26.75rem] flex flex-col justify-center items-center border border-[var(--shani-purple)] rounded-2xl shadow-[2px_2px_15px_rgba(0,0,0,0.25)] object-contain"
          >
            <div className="w-full hidden md:flex justify-start items-center">
              <Link
                aria-label={`Voltar para a categoria ${category}`}
                to={`/categorias/${category}`}
                className="absolute top-3 left-3 hidden md:flex z-10"
              >
                <Button className="md:w-28 md:h-8 flex justify-center items-center text-sm md:text-base hover:bg-[var(--greti-violaceo)] rounded-xl group group-hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
                  <IconArrowLeftNoCircle className="w-6 h-6 mr-1 transition-transform duration-500 group-hover:-translate-x-1" />
                  Voltar
                </Button>
              </Link>
            </div>

            {/* <img src={selectedImage} className="w-full h-full p-2 rounded-3xl object-fill" alt={product.altMainImage} /> */}
            {activeVideo !== null && product.videos ? (
              <iframe
                className="w-full h-full p-2 rounded-3xl"
                src={`https://www.youtube.com/embed/${product.videos[activeVideo].id}?autoplay=1&mute=1&loop=1&playlist=${product.videos[activeVideo].id}&playsinline=1`}
                loading="lazy"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              ) : (
              <button
                onClick={() => setActiveVideo(null)}
                className="w-full h-full relative"
              >
                <img
                  src={selectedImage}
                  alt={product.altMainImage}
                  width="280"
                  height="272"
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-full p-2 rounded-3xl object-fill"
                />
              </button>
            )}
          </div>

          <style>{swiperButtonStyle}</style>

          {/* Carrossel de miniaturas */}
          <div className="w-full max-w-[17.5rem] md:max-w-[21.25rem] lg:max-w-[26.25rem] xl:max-w-[26.75rem]">
            {enableSwiper && (
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                loop={true}
                navigation
                className="w-full"
                breakpoints={{
                  320: { slidesPerView: 3, spaceBetween: 8 },
                  768: { slidesPerView: 3, spaceBetween: 12 },
                  1024: { slidesPerView: 3, spaceBetween: 16 },
                }}
              >
                {[
              ...product.thumbnailImages.map(img => ({ ...img, type: 'image' })),
              ...(product.videos
                ? product.videos.map((video, index) => ({
                    ...video,
                    type: 'video',
                    index,
                  }))
                : []),
            ]
            .map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => {
                        if (item.type === "video") {
                        setActiveVideo(item.index);
                      } else {
                        setActiveVideo(null);
                        setSelectedImage(item.src);
                      }

                      }}
                      className={`w-20 md:w-24 lg:w-32 xl:w-[8.25rem] aspect-square
                    flex justify-center items-center border-2 rounded-2xl cursor-pointer
                    transition-all duration-300
                    ${
                      item.type === "video" && activeVideo === item.index
                        ? "border-[var(--shani-purple)]"
                        : item.type === "image" && activeVideo === null && selectedImage === item.src
                        ? "border-[var(--shani-purple)]"
                        : "border-transparent hover:border-[var(--shani-purple)]"
                    }
                    `}
                    
                    >
                      {item.type === "video" ? (
                      <div className="relative w-full h-full">
                        <img
                          src={item.thumbnail}
                          loading="lazy"
                          alt={`Vídeo do produto ${product.name}`}
                          className="w-full h-full p-1 rounded-2xl object-cover"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-black/60 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center">
                            ▶
                          </span>
                        </span>
                      </div>
                    ) : (

                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full p-1 rounded-2xl"
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col justify-center items-center gap-5 md:gap-6 lg:gap-10">
          {/* Textos e Cores */}
          <div className="flex flex-col md:flex-col-reverse justify-center md:items-start items-center gap-5 md:gap-6 lg:gap-10">
            {/* Cores */}
            <div className="flex flex-col justify-center items-center md:items-start gap-2 lg:gap-3">
              <p className="lg:text-xl font-semibold text-[var(--shani-purple)]">
                Cores Disponíveis
              </p>

              <div className="flex flex-wrap justify-center items-center gap-3">
                {product.colors.map((color, index) => (
                  <div
                    role="img"
                    aria-label={`Cor disponível: ${color.name}`}
                    key={index}
                    className={`w-11 md:w-10 lg:w-12 h-11 md:h-10 lg:h-12 ${color.value} border border-[var(--shani-purple)] rounded-full`}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>

            {/* Textos do Produto */}
            <div className="flex flex-col">
              <h2
                id="product-title"
                className="md:text-2xl lg:text-4xl font-semibold text-[var(--shani-purple)] mb-1 lg:mb-2"
              >
                {product.name}
              </h2>

              {/* <span className="text-xs md:text-base lg:text-xl font-semibold text-purple-800 opacity-65 mb-4 md:mb-6 lg:mb-7">
                {product.category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              </span> */}

              <span className="text-xs md:text-base lg:text-xl font-semibold text-purple-800 opacity-65 mb-4 md:mb-6 lg:mb-7">
                {product.category
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())
                  .replace(/\balgodao\b/i, "Algodão")
                  .replace(/\btnt\b/i, "TNT")}
              </span>

              <p className="text-sm md:text-base lg:text-2xl text-justify">
                {product.description}
              </p>
            </div>
          </div>

          {/* Accordion - Atributos */}
          <div className="w-full rounded-2xl">
            <Disclosure>
              {({ open }) => (
                <div>
                  <Disclosure.Button
                    aria-expanded={open}
                    aria-controls="atributos-panel"
                    className={`w-full flex justify-between items-center p-3 text-sm md:text-base lg:text-xl font-semibold text-left text-[var(--shani-purple)] bg-purple-100 hover:bg-purple-200 transition-all duration-300 focus:outline-none cursor-pointer ${
                      open
                        ? "bg-purple-200 rounded-t-lg rounded-b-none"
                        : "rounded-lg"
                    }`}
                  >
                    Atributos
                    <div className="relative w-7 lg:w-9 h-7 lg:h-9">
                      <IconAddSquare
                        aria-hidden="true"
                        className={`absolute w-7 lg:w-9 h-7 lg:h-9 inset-0 text-purple-500 transition-all duration-300 ${
                          open ? "opacity-0 scale-75" : "opacity-100 scale-100"
                        }`}
                      />
                      <IconMinusSquare
                        aria-hidden="true"
                        className={`absolute w-7 lg:w-9 h-7 lg:h-9 inset-0 text-purple-500 transition-all duration-300 ${
                          open ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                      />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    id="atributos-panel"
                    className="px-4 py-2 text-sm text-[var(--carbon-fiber)] bg-purple-100 rounded-b-lg"
                  >
                    <ul className="list-disc list-inside marker:text-purple-600 space-y-1">
                      {product.attributes.map((attribute, index) => (
                        <li key={index}>{attribute}</li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </section>
  );
}

PageProductContent.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mainImage: PropTypes.any.isRequired,
    altMainImage: PropTypes.string.isRequired,
    thumbnailImages: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.any.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
    videos: PropTypes.arrayOf(
    PropTypes.shape({
      provider: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      thumbnail: PropTypes.any.isRequired,
    })
  ),
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
    attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
