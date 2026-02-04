import { Link } from 'react-router-dom';
import WhiteLogo from "../../assets/images/icons/logo-white.svg";
import FacebookIcon from "../../assets/images/icons/facebook-purple-icon.svg";
import InstagramIcon from "../../assets/images/icons/instagram-purple-icon.svg";
import WhatsappIcon from "../../assets/images/icons/whatsapp-purple-icon.svg";
import { socialLinks } from '../../data/Links';


// Versão atualizada com valores rem e padrões da Tailwind
export default function Footer() {
    return (
        // Medidas antigas da Div container (logo após o Footer) w-70 md:w-167 lg:w-255 xl:w-312 ---- Novas medidas: w-full max-w-7xl
        <footer className="w-full flex justify-center items-center md:px-12 bg-[rgba(47,47,47,1)]">
            <div className="w-70 md:w-167 lg:w-255 xl:w-312 flex justify-center md:justify-between items-center md:items-start md:py-10">
                
                {/* Contéudo Inicial Limak */}
                <div className="md:w-[12.75rem] lg:w-[19.5rem] xl:w-[20.75rem] flex flex-col justify-center items-center md:items-start py-4 md:py-0 gap-5 md:gap-0 ">
                    
                    <Link to={'/'}>
                        <img src={WhiteLogo} alt="Loga da Limak" className="w-20 lg:w-28 h-8 lg:h-12 md:mb-2"/>
                    </Link>

                    <h2 className="w-48 lg:w-80 text-xs lg:text-lg xl:text-xl md:text-start font-normal text-center text-[var(--white)] lg:mb-3">Há mais de 20 anos transformando ideias em grandes resultados</h2>

                    <div className="flex flex-col md:flex-col-reverse items-center md:items-start lg:gap-4">
                        
                        {/* Redes Sociais */}
                        <div className="flex justify-center items-center mb-5 md:mb-0 md:mt-4 gap-2 md:gap-4 lg:gap-[1.62rem]">
                            <a aria-label="Abrir Facebook da Limak" href={socialLinks.facebook} target="_blank" rel='noopener'>
                                <img
                                    src={FacebookIcon}
                                    alt="Acesso ao nosso Facebook"
                                    className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
                                />
                            </a>

                            <a aria-label="Abrir Instagram da Limak" href={socialLinks.instagram} target="_blank" rel='noopener'>
                                <img
                                    src={InstagramIcon}
                                    alt="Acesso ao nosso Instagram"
                                    className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
                                />
                            </a>

                            <a aria-label="Abrir Whatsapp da Limak" href={socialLinks.whatsapp} target="_blank" rel='noopener'>
                                <img
                                    src={WhatsappIcon}  
                                    alt="Acesso ao nosso Whatsapp"
                                    className="w-6 h-6 lg:w-8 lg:h-8 cursor-pointer"
                                />
                            </a>
                        </div>

                        {/* Barra de Divisão Mobile */}
                        <div className="w-61 mb-[10px] border-b border-[rgba(161,161,161,1)] md:hidden"></div>

                        {/* Direitos Reservados */}
                        <div className="lg:w-60 flex justify-center items-center md:items-start md:mt-4">
                            <p className="text-xs lg:text-base font-normal text-center md:text-start text-[var(--font-footer)]">©Copyright 2025 Todos os direitos reservados</p>
                        </div>
                    </div>

                </div>

                {/* Navegação */}
                <div className="hidden md:w-36 lg:w-1/3 xl:w-1/5 md:flex flex-col justify-center items-center text-center md:gap-3 lg:gap-6">
                    <h2 className="text-xl font-semibold text-[var(--prickly-purple)]">Navegação</h2>

                    <ul className="flex flex-col items-center justify-center md:gap-2 lg:gap-2.5">
                        <li>
                            <Link to='/' className="md:text-xs lg:text-base font-normal text-[var(--white)] lg:break-normal hover:text-fuchsia-700 transition-all duration-300">Home</Link>
                        </li>

                        <li>
                            <Link to='/produtos-finalizados' className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">Produtos Finalizados</Link>
                        </li>

                        <li>
                            <Link to='/sobre' className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">Sobre</Link>
                        </li>

                        <li>
                            <a href={socialLinks.blog} target="_blank" rel='noopener' className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">Blog</a>
                        </li>
                    </ul>
                </div>

                {/* Categorias */}
                <div className="hidden md:flex flex-col justify-center items-end md:gap-3 lg:gap-6 lg:w-80">
                    <h2 className="text-xl font-semibold text-[var(--prickly-purple)]">Categorias</h2>

                    <ul className="md:w-48 lg:w-[16.12rem] flex flex-col justify-center items-end text-right md:gap-2 lg:gap-2.5">
                        <li>
                            <Link to='/categorias/sacolas-de-algodao-personalizadas'
                                className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">
                                Sacolas de Algodão Personalizadas
                            </Link>
                        </li>

                        <li>
                            <Link to='/categorias/sacolas-tnt-personalizadas'
                                className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">
                                Sacolas TNT Personalizadas
                            </Link>
                        </li>

                        <li>
                            <Link to='/categorias/mochilas-personalizadas'
                                className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">
                                Mochilas Personalizadas
                            </Link>
                        </li>

                        <li>
                            <Link to='/categorias/aventais-personalizados'
                                className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">
                                Aventais Personalizados
                            </Link>
                        </li>

                        <li>
                            <Link to='/categorias/coletes-personalizados'
                                className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">
                                Coletes Personalizados
                            </Link>
                        </li>
                        <li>
                            <Link to='/categorias/sacos-tnt-personalizados'
                                className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">
                                Sacos TNT Personalizados
                            </Link>
                        </li>

                        <li>
                            <Link to='/categorias/capas-de-cadeira-personalizadas'
                                className="md:text-xs lg:text-base font-normal text-[var(--white)] hover:text-fuchsia-700 transition-all duration-300">
                                Capas de Cadeira Personalizadas
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                
            </div>
        </footer>
    );
}