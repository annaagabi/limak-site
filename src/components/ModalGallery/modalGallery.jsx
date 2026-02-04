// src/components/ModalGallery.jsx
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';
import ChevronLeft from '../../assets/images/icons/chevron-left.svg?react'
import ChevronRight from '../../assets/images/icons/chevron-right.svg?react'
import IconAddCross from '../../assets/images/icons/icon-add-cross.svg?react';

export default function ModalGallery({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) {
  if (!images || images.length === 0) return null;

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Fundo escurecido */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        {/* Conteúdo */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative max-w-3xl w-full">
              <Dialog.Title className="sr-only">
                {images[currentIndex].name || "Imagem da galeria"}
              </Dialog.Title>
              
              {/* Botão fechar */}
              <button
                aria-label="Fechar galeria"
                onClick={onClose}
                className="absolute top-1 right-1"
              >
                <IconAddCross aria-hidden="true" className="w-8 md:w-11 h-8 md:h-11 rotate-45 text-[var(--shani-purple)] hover:text-[var(--greti-violaceo)] transition-all duration-300 cursor-pointer" />
              </button>

              {/* Imagem */}
              <img
                src={images[currentIndex].image}
                alt={images[currentIndex].name || "Imagem"}
                className="w-full rounded-xl object-contain max-h-[90vh] bg-white"
              />

              {/* Navegação */}
              {images.length > 1 && (
                <div>
                  <button
                    aria-label="Imagem anterior"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    <ChevronLeft aria-hidden="true" className="w-7 md:w-10 h-7 md:h-10 text-[var(--shani-purple)] hover:text-fuchsia-700 transition-all duration-300 cursor-pointer" />
                  </button>

                  <button
                    aria-label="Proxima imagem"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <ChevronRight aria-hidden="true" className="w-7 md:w-10 h-7 md:h-10 text-[var(--shani-purple)] hover:text-fuchsia-700 transition-all duration-300 cursor-pointer" />
                  </button>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

ModalGallery.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};
