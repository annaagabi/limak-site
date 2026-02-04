import FinallyProductsContent from "../../components/FinallyProducts";

export default function FinallyProducts() {
    return (
        <div>
            <title>Produtos Finalizados | Limak Sacolas de TNT e Algodão</title>
            <meta name="description" content="Confira os produtos finalizados da Limak: sacolas personalizadas, mochilas personalizadas, ecobags e brindes corporativos personalizados com qualidade e atenção aos detalhes. Veja nossos projetos concluídos e inspire-se!" />
            <meta name="keywords" content="produtos finalizados, sacolas personalizadas, mochilas personalizadas, ecobags personalizadas, brindes corporativos, brindes personalizados" />
            <link rel="canonical" href="https://limak.com.br/produtos-finalizados" />
    
            {/* Open Graph para redes sociais */}
            <meta property="og:title" content="Produtos Finalizados | Limak Sacolas de TNT e Algodão" />
            <meta property="og:description" content="Confira os produtos finalizados da Limak: sacolas personalizadas, mochilas personalizadas, ecobags e brindes corporativos personalizados com qualidade e atenção aos detalhes. Veja nossos projetos concluídos e inspire-se!" />
            <meta property="og:url" content="https://limak.com.br/produtos-finalizados" />
            {/* <meta property="og:image" content="https://limak.com.br/images/og-image.jpg" /> */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="pt_BR" />
    
            {/* Twitter Card */}
            <meta name="twitter:title" content="Produtos Finalizados | Limak Sacolas de TNT e Algodão" />
            <meta name="twitter:description" content="Confira os produtos finalizados da Limak: sacolas personalizadas, mochilas personalizadas, ecobags e brindes corporativos personalizados com qualidade e atenção aos detalhes. Veja nossos projetos concluídos e inspire-se!" />
            <meta name="twitter:url" content="https://limak.com.br/produtos-finalizados" />
            {/* <meta name="twitter:image" content="https://limak.com.br/images/og-image.jpg" /> */}
    
            <FinallyProductsContent />
        </div>
    )
}