// Versão atualizada com valores rem e padrões da Tailwind
import { Link } from 'react-router-dom';
import Button from '../Button';
import PropTypes from 'prop-types';
import Card from '../Card';
import IconArrowLeftNoCircle from '../../assets/images/icons/arrow-left-icon-no-circle.svg?react';

export default function CategoryContent({ title, description, products }) {
  const isTNTCategory = products.some(p => p.subCategory);

  const groupedProducts = isTNTCategory
    ? products.reduce((acc, product) => {
        const key = product.subCategory;
        if (!acc[key]) acc[key] = [];
        acc[key].push(product);
        return acc;
      }, {})
    : null;


  if (!products || products.length === 0) {
    const categoryName = title || 'Categoria';

    return (
      // Medidas antigas da Div container (logo após a Section) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl
      <section aria-labelledby="category-title" className="w-full flex flex-col justify-center items-center min-h-[80vh] text-center px-4 md:px-12 py-10">

        <div className='w-70 md:w-167 lg:w-255 xl:w-312 flex flex-col justify-center items-center'>

          <h2 id="category-title" className="text-xl md:text-2xl lg:text-4xl font-semibold text-[var(--shani-purple)] mb-4">
            {categoryName.replace(/-/g, ' ')}
          </h2>

          <p className="text-sm md:text-base lg:text-2xl text-gray-600 max-w-2xl leading-relaxed">
            Estamos atualizando o catálogo de produtos desta categoria.  
            Em breve, novos itens estarão disponíveis aqui!
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-[var(--shani-purple)] hover:bg-[var(--greti-violaceo)] rounded-lg text-white transition-all duration-300"
          > 
            <Button className="w-[11rem] md:w-52 h-8 md:h-9 text-sm md:text-base hover:bg-[var(--greti-violaceo)] group group-hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
              <IconArrowLeftNoCircle aria-hidden="true" className="w-6 h-6 mr-1 transition-transform duration-500 group-hover:-translate-x-1" />
              Voltar para a Home
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-12 py-5 md:py-7 lg:py-12">

      <div className='w-full max-w-7xl flex flex-col justify-center items-center'>

        <div className="w-full flex flex-col justify-center mb-5 md:mb-7 lg:mb-12 gap-5 md:gap-4 lg:gap-7">
          
          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-[var(--shani-purple)] lg:pl-12 xl:pl-0">{title}</h2>

          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-justify text-[var(--carbon-fiber)] lg:px-12 xl:px-0">
              {description}
          </p>
        </div>

       {!isTNTCategory ? (
        <ul className="w-full grid grid-cols-2 md:grid-cols-4 justify-items-center lg:px-12 xl:px-0 mb-5 md:mb-7 lg:mb-12 gap-2 md:gap-10">
          {products.map((product, index) => (
            <li key={index}>
              <Link to={`/${product.category}/${product.id}`}>
              <Card
                  imgProduct={product.imgProduct}
                  productName={product.productName}
                  altImg={product.altImg}
                  classCardContainer="w-32 md:w-36 lg:w-48 xl:w-56 aspect-square"
                  classCardImgContainer="w-full h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full border border-[var(--shani-purple)] shadow-md md:shadow-lg"
                />
                {/* <Card {...product} /> */}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        Object.entries(groupedProducts).map(([subCategory, items]) => (
          <div key={subCategory} className="w-full mb-10">
            
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[var(--shani-purple)] mb-4">
              {subCategory}
            </h3>

            <ul className="w-full grid grid-cols-2 md:grid-cols-4 justify-items-center lg:px-12 xl:px-0 mb-5 md:mb-7 lg:mb-12 gap-2 md:gap-10">
              {items.map((product) => (
                <li key={product.id}>
                  <Link to={`/${product.category}/${product.id}`}>
                    <Card
                      imgProduct={product.imgProduct}
                      productName={product.productName}
                      altImg={product.altImg}
                      classCardContainer="w-32 md:w-36 lg:w-48 xl:w-56 aspect-square"
                      classCardImgContainer="w-full h-full md:w-full md:h-full lg:w-full lg:h-full xl:w-full xl:h-full border border-[var(--shani-purple)] shadow-md md:shadow-lg"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}

            </div>
    </section>
  );
}

CategoryContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      imgProduct: PropTypes.any.isRequired,
      productName: PropTypes.string.isRequired,
      altImg: PropTypes.string.isRequired,
    })
  ).isRequired,
};

