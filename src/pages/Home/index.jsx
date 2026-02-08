import Hero from '../../components/HomeSections/HeroSection';
import Enterprises from '../../components/HomeSections/EnterprisesSection';
import Products from '../../components/HomeSections/Products';
import AboutSection from '../../components/HomeSections/AboutSection';
import Comments from '../../components/HomeSections/CommentsSection';
import Contact from '../../components/HomeSections/Contact';
import ModalAviso from '../../components/Modal';
import { Helmet } from "react-helmet-async";

export default function Home() {
    
    return (
        <>
        <Helmet>
            <title>Limak | Sacolas de TNT e Algodão</title>
            <meta name="description" content="A Limak é referência em brindes personalizados há mais de 20 anos. Sacolas TNT personalizadas, mochilas personalizadas, ecobags e brindes corporativos com qualidade, inovação e personalização, confira!" />
            <meta name="keywords" content="brindes personalizados, brindes corporativos, sacolas personalizadas, mochilas personalizadas, ecobags, sacolas ecobag, sacolas tnt, brindes empresariais, Limak Brindes Personalizados" />
            <link rel="canonical" href="https://limak.com.br" />

            {/* Open Graph para redes sociais */}
            <meta property="og:title" content="Limak | Brindes Corporativos" />
            <meta property="og:description" content="A Limak é referência em brindes personalizados há mais de 20 anos. Sacolas TNT personalizadas, mochilas personalizadas, ecobags e brindes corporativos com qualidade, inovação e personalização, confira!" />
            <meta property="og:url" content="https://limak.com.br" />
            {/* <meta property="og:image" content="https://limak.com.br/images/og-image.jpg" /> */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter Card */}
            <meta name="twitter:title" content="Limak | Brindes Corporativos" />
            <meta name="twitter:description" content="A Limak é referência em brindes personalizados há mais de 20 anos. Sacolas TNT personalizadas, mochilas personalizadas, ecobags e brindes corporativos com qualidade, inovação e personalização, confira!" />
            <meta name="twitter:url" content="https://limak.com.br" />
            {/* <meta name="twitter:image" content="https://limak.com.br/images/og-image.jpg" /> */}
        </Helmet>
        <main>
            
            <ModalAviso />
            <Hero />
            <Enterprises /> 
            <Products 
                title='Destaques em Brindes Corporativos'
                paragraph='Descubra nossa linha de brindes corporativos personalizados, ideais para eventos, ações promocionais e brindes empresariais. Temos mochilas personalizadas, sacolas ecobag, sacolas TNT, aventais personalizados, coletes personalizados, capas de cadeira e muito mais, todos com personalização exclusiva com o logo da sua empresa. Nossos brindes combinam qualidade, utilidade e identidade visual. Escolha o brinde corporativo perfeito e surpreenda seus clientes e colaboradores.'
                type='corporate'
                classNameSection='pt-10 pb-6 md:pt-14 md:pb-8 lg:pt-20'
                classNameTitle='w-52 md:w-fit'
            />
            <Products
                title='Produtos Finalizados'
                paragraph='Confira alguns dos produtos finalizados que já produzimos para nossos clientes! Cada item reflete o cuidado e a qualidade dos nossos brindes corporativos personalizados, desenvolvidos com atenção aos detalhes e personalização de alta precisão. Trabalhamos com mochilas personalizadas, sacolas ecobag, sacolas TNT, aventais personalizados, coletes personalizados e capas de cadeira personalizadas, sempre com o logo e identidade visual da empresa. Inspire-se com nossos projetos já realizados e veja como podemos transformar sua ideia em um brinde personalizado exclusivo e profissional.'
                type='finished'
                classNameSection='pt-10 pb-6 md:pt-14 md:pb-8 lg:pt-20'
                classNameTitle='mr-8 md:mr-[20.25rem] xl:mr-[53rem]'
            /> 
            <AboutSection />
            <Comments />
            <Contact />
        </main>
        </>
    )
}