// Versão atualizada com valores rem e padrões da Tailwind
import { Link } from 'react-router-dom';
import AboutImg from '../../../assets/images/about-us.svg'
import Button from '../../Button';

// Versão atualizada com valores rem e padrões da Tailwind
export default function AboutSection() {
    return (
        // Medidas antigas da Div container (logo após a Section) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl
        <section aria-labelledby="about-title" className='w-full flex justify-center items-center pt-10 md:pt-14 lg:pt-20 pb-6 md:pb-8 px-4 md:px-12'>
            <div className='w-full max-w-7xl flex flex-col md:flex-row-reverse justify-center items-center gap-5 md:gap-20 lg:gap-[4.5rem] xl:gap-24'>
                
                <img className='w-[17.5rem] md:w-80 lg:w-[26.25rem] xl:w-[31.75rem] h-56 md:h-auto' src={AboutImg} alt="Imagem em Ilustração de Pessoas Conversando com Pranchetas nas Mãos" />
                
                <div className='w-[17.5rem] md:w-[18.75rem] lg:w-[27.5rem] xl:w-[38.25rem] flex flex-col justify-center items-center md:items-start gap-5'>

                    <h2 id="about-title" className='text-2xl md:text-3xl lg:text-3xl font-semibold text-[var(--shani-purple)]'>
                        Sobre a <span className='text-[var(--prickly-purple)]'>LIMAK</span>
                    </h2>

                    <p className='text-sm md:text-base lg:text-lg xl:text-xl text-justify text-[var(--carbon-fiber)] lg:pb-2.5'>Com mais de <span className='text-[var(--greti-violaceo)]'>20 anos de experiência</span>, a <span className='text-[var(--greti-violaceo)]'>LIMAK é referência</span> no mercado na produção de brindes corporativos e brindes personalizados sustentáveis. Nossa missão é desenvolver produtos de <span className='text-[var(--greti-violaceo)]'>alta qualidade</span> que respeitam o meio ambiente, e convidamos você para fazer parte dela!</p>
                    
                    <p className='hidden xl:block text-sm md:text-base lg:text-lg xl:text-xl text-justify text-[var(--carbon-fiber)] lg:pb-2.5 '>Somos <span className='text-[var(--greti-violaceo)]'>especialistas</span> na fabricação de sacolas personalizadas, sacolas de TNT, ecobags, mochilas personalizadas, mochilas sacola personalizadas, aventais personalizados e coletes de TNT. Cada produto é confeccionado com materiais resistentes e de qualidade, garantindo <span className='text-[var(--greti-violaceo)]'>durabilidade e acabamento impecável.</span></p>
                    
                    <p className='hidden lg:block text-sm md:text-base lg:text-lg xl:text-xl text-justify text-[var(--carbon-fiber)] lg:pb-2.5 '>Em <span className='text-[var(--greti-violaceo)]'>eventos, campanhas ou ações de marketing</span>, nossos produtos ajudaram você a fortalecer a identidade da sua marca. Buscamos sempre superar as expectativas de nossos clientes. Confira nossos <span className='text-[var(--greti-violaceo)]'>preços competitivos!</span></p>

                    <Link aria-label="Saiba mais sobre a LIMAK" to='/sobre'>
                        <Button className='md:w-28 md:h-9 lg:h-10 md:text-base lg:text-base md:rounded-lg hover:bg-[var(--greti-violaceo)] transition-all duration-300'>Saiba mais</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
