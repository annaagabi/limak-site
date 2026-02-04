import AboutContent from '../../components/About';

export default function About() {
    return (
        <div>
            <title>Sobre a Limak | Limak Sacolas de TNT e Algodão</title>
            <meta name="description" content="Conheça a história da Limak, referência em brindes corporativos há mais de 20 anos. Sacolas, mochilas, ecobags e brindes corporativos com qualidade e personalização." />
            <meta name="keywords" content="brindes personalizados, brindes corporativos, sacolas personalizadas, mochilas personalizadas, ecobags, sacolas ecobag, sacolas tnt, sobre a limak" />
            <link rel="canonical" href="https://limak.com.br/sobre" />

            {/* Open Graph para redes sociais */}
            <meta property="og:title" content="Sobre a Limak | Brindes Corporativos" />
            <meta property="og:description" content="Conheça a história da Limak, referência em brindes corporativos há mais de 20 anos. Sacolas, mochilas, ecobags e brindes corporativos com qualidade e personalização." />
            <meta property="og:url" content="https://limak.com.br/sobre" />
            {/* <meta property="og:image" content="https://limak.com.br/images/og-image.jpg" /> */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter Card */}
            <meta name="twitter:title" content="Sobre a Limak | Brindes Corporativos" />
            <meta name="twitter:description" content="Conheça a história da Limak, referência em brindes corporativos há mais de 20 anos. Sacolas, mochilas, ecobags e brindes corporativos com qualidade e personalização." />
            <meta name="twitter:url" content="https://limak.com.br/sobre" />
            {/* <meta name="twitter:image" content="https://limak.com.br/images/og-image.jpg" /> */}
            
            <AboutContent />
        </div>
    )
}