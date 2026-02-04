import { Link, useParams } from 'react-router-dom';
import { categoryData } from '../../data/CategoryData/categoryData.js';
import CategoryContent from '../../components/Categories';
import Button from '../../components/Button';
import IconArrowLeftNoCircle from '../../assets/images/icons/arrow-left-icon-no-circle.svg?react';

export default function Categories() {
  const { category } = useParams();

  const selectedCategory = categoryData[category];

  if (!selectedCategory) {
    return (
      <section role="main" aria-labelledby="category-error-title" className='w-full flex flex-col justify-center items-center min-h-[80vh] text-center px-4 py-10'>
        <h2 id="category-error-title" className="text-xl md:text-2xl lg:text-4xl font-semibold text-[var(--shani-purple)] mb-6">
          Desculpe :(
        </h2>

        <p className="text-sm md:text-base lg:text-2xl max-w-2xl leading-relaxed mb-8">
            A categoria que você está procurando não foi encontrada<br className='hidden md:flex'/>ou não está disponivel no momento.
        </p>
        
        <Link
          aria-label="Voltar para a página inicial" 
          to="/"
        >
          <Button className="w-44 md:w-52 h-8 md:h-9 text-sm md:text-base hover:bg-fuchsia-800 group group-hover:translate-x-[-4px] transition-all duration-300 cursor-pointer">
            <IconArrowLeftNoCircle aria-hidden="true" className="w-6 h-6 mr-1 transition-transform duration-500 group-hover:-translate-x-1" />
            Voltar para a Home
          </Button>
        </Link>
      </section>
    )}

  const formatTitle = (text) => {
    if (!text || typeof text !== 'string') return 'Nome da categoria inválido';
    return text
      .replace(/-+/g, ' ')
      .replace(/\b\w+\b/g, word => {
        if (word.toUpperCase() === 'TNT') return 'TNT';
        if (word.toLowerCase() === 'de') return 'de';
         if (word.toLowerCase() === 'algodao' || word.toLowerCase() === 'algodão') {
        return 'Algodão';
      }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
  };

  const validProducts = Array.isArray(selectedCategory.products) ? selectedCategory.products : [];

   // --- META TAGS DINÂMICAS ---
  const categoryTitle = formatTitle(category);
  const categoryDescription =`Confira a categoria de ${categoryTitle} da Limak, com brindes personalizados de alta qualidade e se surpreenda! Aqui você encontra o que precisa!`;
  const categoryUrl = `https://limak.com.br/categorias/${category}`;
  // const categoryImage = selectedCategory.ogImage || 'https://limak.com.br/images/og-image-default.jpg';

  return (
      <div>
        {/* Meta tags SEO e redes sociais */}
        <title>{`${categoryTitle} | Limak Sacolas de TNT e Algodão`}</title>
        <meta name="description" content={categoryDescription} />
        <meta name="keywords" content={`brindes corporativos, ${categoryTitle.toLowerCase()}, sacolas personalizadas, mochilas personalizadas, ecobags, coletes personalizados, aventais personalizados, brindes personalizados`} />
        <link rel="canonical" href={categoryUrl} />
  
        {/* Open Graph */}
        <meta property="og:title" content={`${categoryTitle} | Limak Sacolas de TNT e Algodão`} />
        <meta property="og:description" content={categoryDescription} />
        {/* <meta property="og:image" content={categoryImage} /> */}
        <meta property="og:url" content={categoryUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
  
        {/* Twitter Card */}
        <meta name="twitter:title" content={`${categoryTitle} | Limak Sacolas de TNT e Algodão`} />
        <meta name="twitter:description" content={categoryDescription} />
        {/* <meta name="twitter:image" content={categoryImage} /> */}
        <meta name="twitter:url" content={categoryUrl} />
  
      <CategoryContent
        title={formatTitle(category)}
        description={selectedCategory.description || `Descrição padrão para ${formatTitle(category)}`}
        products={validProducts}
      />
    </div>
  );
}