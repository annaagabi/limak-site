import { useParams, Link } from 'react-router-dom';
import { productData } from '../../data/ProductData/productData';
import Button from '../../components/Button/index';
import PageProductContent from '../../components/PageProductContent/index';
import IconArrowLeftNoCircle from '../../assets/images/icons/arrow-left-icon-no-circle.svg?react';

export default function ProductPage() {
  const { category, productId } = useParams();
  const product = productData[category]?.find((p) => p.id === productId); 

  return product ? (
      <div>
        {/* Meta tags SEO e redes sociais */}
        <title>{`${product.name} | Limak Sacolas de TNT e Algodão`}</title>
        <meta name="description" content={`Confira o brinde ${product.name} da Limak, um brinde corporativo de alta qualidade! Aqui você encontra os brindes corporativos perfeitos para a sua marca!`} />
        <meta name="keywords" content={`brindes corporativos, ${product.name.toLowerCase()}, sacolas personalizadas, mochilas personalizadas, ecobags, coletes personalizados, aventais personalizados, brindes personalizados`} />
        <link rel="canonical" href={`https://limak.com.br/categorias/${category}/${productId}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${product.name} | Limak Sacolas de TNT e Algodão`} />
        <meta property="og:description" content={`Confira o brinde ${product.name} da Limak, um brinde corporativo de alta qualidade! Aqui você encontra os brindes corporativos perfeitos para a sua marca!`} />
        {/* <meta property="og:image" content={product.ogImage || 'https://limak.com.br/images/og-image-default.jpg'} /> */}
        <meta property="og:url" content={`https://limak.com.br/categorias/${category}/${productId}`}/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={`${product.name} | Limak Sacolas de TNT e Algodão`} />
        <meta name="twitter:description" content={`Confira o brinde ${product.name} da Limak, um brinde corporativo de alta qualidade! Aqui você encontra os brindes corporativos perfeitos para a sua marca!`} />
        {/* <meta name="twitter:image" content={product.ogImage || 'https://limak.com.br/images/og-image-default.jpg'} /> */}
        <meta name="twitter:url" content={`https://limak.com.br/categorias/${category}/${productId}`}/>

        <PageProductContent product={{ ...product, category }} />
      </div>
  ) : (
        // Medidas antigas da Div container (logo após a Section) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl
        <section role="main" aria-labelledby="product-error-title" className="w-full min-h-[80vh] flex justify-center items-center px-4 md:px-12 py-5">
          <div className="w-70 md:w-167 lg:w-255 xl:w-312 text-center">
            <h2 id="product-error-title" className="text-xl md:text-2xl lg:text-4xl font-semibold text-[var(--shani-purple)] mb-4">
              Produto não encontrado
            </h2>

            <p className="text-xs md:text-base lg:text-2xl text-gray-600">
              Desculpe, o produto solicitado não está disponível.
            </p>

            <Link
              aria-label={`Voltar para a categoria ${category}`}
              to={`/categorias/${category}`}
              className="inline-block mt-6 bg-[var(--shani-purple)] hover:bg-fuchsia-800 rounded-lg text-white transition-all duration-300"
            >
              <Button className="w-[12.25rem] md:w-56 h-9 md:h-10 text-sm md:text-base hover:bg-fuchsia-800 group group-hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
                <IconArrowLeftNoCircle aria-hidden="true" className="w-6 h-6 mr-1 transition-transform duration-500 group-hover:-translate-x-1" />
                Voltar para a categoria
              </Button>
            </Link>
          </div>
        </section>
  );
}