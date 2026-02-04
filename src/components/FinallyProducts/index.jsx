// Versão atualizada com valores rem e padrões da Tailwind
import { useState } from "react";
import Card from "../Card";
import { finallyProductsData } from "../../data/FinallyProducts/finallyProductsData";
import ModalGallery from "../ModalGallery/modalGallery.jsx";

export default function FinallyProductsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section aria-labelledby="finally-products-title" className="w-full flex flex-col justify-center items-center px-4 md:px-12 py-5 md:py-7 lg:py-12">

      {/* // Medidas antigas da Div container (logo após a Section) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl */}
      <div className='w-70 md:w-167 lg:w-255 xl:w-312 flex flex-col justify-center items-center gap-5 md:gap-7 lg:gap-12'>

        {/* Título e texto */}
        <div className="w-full flex flex-col justify-center gap-5 md:gap-4 lg:gap-7">
          <h2 id="finally-products-title" className="xl:w-[78rem] text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-[var(--shani-purple)]">
            Produtos Personalizados Finalizados
          </h2>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-justify text-[var(--carbon-fiber)]">
            Explore nossa galeria de produtos finalizados e conheça de perto a <span className='text-[var(--greti-violaceo)]'>qualidade</span> dos nossos <span className='text-[var(--greti-violaceo)]'>brindes corporativos personalizados</span>. Cada item foi desenvolvido <span className='text-[var(--greti-violaceo)]'>sob medida</span> para empresas que <span className='text-[var(--greti-violaceo)]'>valorizam a identidade visual</span> e desejam promover sua marca com elegância e originalidade.
          </p>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-justify text-[var(--carbon-fiber)]">
            Produzimos uma <span className='text-[var(--greti-violaceo)]'>ampla variedade de brindes personalizados</span> — como mochilas corporativas personalizadas, sacolas de algodão, sacolas TNT, aventais personalizados, coletes personalizados e capas de cadeira personalizadas—, todos com <span className='text-[var(--greti-violaceo)]'>acabamento profissional e personalização exclusiva</span> com o logo da empresa. Confira os trabalhos já realizados e <span className='text-[var(--greti-violaceo)]'>inspire-se</span> com ideias criativas para o seu próximo brinde corporativo personalizado.
          </p>
        </div>

        {/* Lista de produtos */}
        <ul className="w-full grid grid-cols-2 md:grid-cols-4 justify-items-center mb-5 md:mb-7 lg:mb-12 gap-2 md:gap-10">
          {finallyProductsData.map((product, index) => (
            <li key={index} className="mb-2">
              <button
                onClick={() => openModal(index)}
                className="w-full aspect-square focus:outline-none"
                aria-label={`Abrir galeria do produto ${product.productName}`}
              >
                <Card
                  imgProduct={product.imgProduct}
                  productName={product.productName}
                  altImg={product.altImg}
                  classCardContainer="w-32 md:w-36 lg:w-48 xl:w-56 aspect-square"
                  classCardImgContainer="w-full h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full border border-[var(--shani-purple)] shadow-md md:shadow-lg hover:shadow-xl transition-shadow"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal reutilizável */}
      <ModalGallery
        isOpen={isModalOpen}
        onClose={closeModal}
        images={finallyProductsData.map((p) => ({
          image: p.imgProduct,
          name: p.productName,
        }))}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
}