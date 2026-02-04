
// Versão atualizada com valores rem e padrões da Tailwind
import About from '../../assets/images/About-hero.svg';

export default function AboutContent() {
  return (
    // Medidas antigas da Div container (logo após a Section) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-12 py-5 my-5 md:my-7 lg:my-12 gap-6 md:gap-9 lg:gap-16">
      
      <div className='w-70 md:w-167 lg:w-255 xl:w-312 flex flex-col justify-center items-center gap-5 md:gap-7 lg:gap-12'>

        <img src={About} alt="Imagem ilustrativa de pessoas apontando para projeto sobre uma mesa" className="w-full max-w-[57.5rem] object-contain"/>

        <div className="flex flex-col justify-center items-start">

          <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-(--shani-purple) mb-5 lg:mb-9">Sobre a <span className="text-(--prickly-purple)">LIMAK</span></h2>

          <div className="flex flex-col justify-center items-start gap-4 md:gap-5 lg:gap-8">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-normal text-justify text-(--carbon-fiber)">Com mais de <span className="text-[var(--greti-violaceo)]">20 anos de experiência</span> no mercado, a <span className="text-[var(--greti-violaceo)]">LIMAK é referência</span> na produção de brindes corporativos e brindes personalizados sustentáveis. Nossa missão é desenvolver produtos de <span className="text-[var(--greti-violaceo)]">alta qualidade</span> que respeitam o meio ambiente.</p>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-normal text-justify text-(--carbon-fiber)">Somos <span className="text-[var(--greti-violaceo)]">especialistas</span> na fabricação de sacolas personalizadas, sacolas de TNT, sacolas de algodão, mochilas personalizadas, mochilas sacola personalizadas, aventais personalizados e coletes de TNT. Cada produto é confeccionado com materiais resistentes e de qualidade, garantindo durabilidade e <span className="text-[var(--greti-violaceo)]">acabamento impecável.</span></p>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-normal text-justify text-(--carbon-fiber)">Em <span className="text-[var(--greti-violaceo)]">eventos</span>, <span className="text-[var(--greti-violaceo)]">campanhas</span> ou <span className="text-[var(--greti-violaceo)]">ações de marketing</span>, nossos produtos ajudaram você a fortalecer a identidade da sua marca. Buscamos sempre superar as expectativas de nossos clientes. Confira nossos <span className="text-[var(--greti-violaceo)]">preços competitivos!</span></p>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-normal text-justify text-(--carbon-fiber)">Na LIMAK, acreditamos que um brinde é muito mais do que um simples presente — é uma forma de <span className="text-[var(--greti-violaceo)]">comunicar valores, gerar conexão emocional e valorizar a marca</span>. Por isso, trabalhamos com um rigoroso <span className="text-[var(--greti-violaceo)]">padrão de qualidade</span> e oferecemos <span className="text-[var(--greti-violaceo)]">diversas opções de personalização</span> com logotipo, cores institucionais e design exclusivo.</p>

            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-normal text-justify text-(--carbon-fiber)">Com um <span className="text-[var(--greti-violaceo)]">portfólio amplo</span> e em constante atualização, atendemos empresas de todos os portes que buscam brindes sustentáveis, materiais ecológicos e soluções criativas para fortalecer sua presença no mercado. Se você procura brindes corporativos personalizados que combinam qualidade e eficiência em identidade visual, a LIMAK é a <span className="text-[var(--greti-violaceo)]">parceira ideal</span> para o seu negócio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}