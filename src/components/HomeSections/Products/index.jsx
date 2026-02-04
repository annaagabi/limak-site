import { Link } from 'react-router-dom';
import ButtonViewAll from '../../ButtonViewAll/index.jsx';
import Carousel from '../../Carousel/index.jsx';
import { corporateProducts, finishedProducts } from '../../../data/ProductsCarousel/productsCarousel.js';

export default function Products({
    classNameSection = '',
    classNameContainer = '',
    classNameTitle = '',
    title = '',
    paragraph = '',
    type = 'corporate',
}) {

    // Medidas do baseStyleContainer antigo: w-70 md:w-167 lg:w-255 xl:w-312 --- Novas medidas: w-full max-w-7xl
    const baseStyleSection = 'w-full flex flex-col justify-center items-center';
    const baseStyleContainer = 'w-70 md:w-167 lg:w-255 xl:w-312 flex flex-col justify-between items-center lg:px-15 xl:px-0 mx-5 md:mx-12 lg:mx-0 gap-5';
    // const baseStyleTopSection = 'flex justify-between';
    const baseStyleTopSection = `w-full flex ${type === 'corporate' ? 'justify-start items-start' : 'justify-between'}`;
    const baseStyleH2 = 'text-lg md:text-2xl lg:text-xl xl:text-2xl font-semibold text-[var(--shani-purple)] md:mb-2';

    const productsData = type === 'corporate' ? corporateProducts : finishedProducts;
    const showProductName = type !== 'finished';

    // Define se os links estarão habilitados (para produtos corporativos)
    const enableLinks = type === 'corporate';

    return (   
        <section aria-labelledby="products-title" className={`${baseStyleSection} ${classNameSection}`}>
            <div className={`${baseStyleContainer} ${classNameContainer}`}>
                <div className={`${baseStyleTopSection}`}>
                    <h2 id="products-title" className={`${baseStyleH2} ${classNameTitle}`}>{title}</h2>

                    {type != 'corporate' && (
                        <Link to='/produtos-finalizados'>
                            <ButtonViewAll className='hover:text-[var(--greti-violaceo)] transition-all duration-300'/>
                        </Link>
                    )}
                </div>
                
                {paragraph && (
                    <p className='mb-[10px] lg:mb-[30px] text-sm md:text-base lg:text-lg xl:text-xl text-justify text-[var(--carbon-fiber)]'>{paragraph}</p>
                )}

                <Carousel
                    products={productsData}
                    showProductName={showProductName}
                    enableLinks={enableLinks}
                />
            </div>
        </section>
    )
}
