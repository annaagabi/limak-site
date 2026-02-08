import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Logo from '../../assets/images/icons/logo.svg';
import Menu from '../../assets/images/icons/menu.svg';
import TelefoneIcon from '../../assets/images/icons/phone-icon.svg';
import WhatsappIcon from '../../assets/images/icons/whatsapp-icon.svg';
import BarraInclinada from '../../assets/images/icons/inclined-line-icon.svg';
import BlogIcon from '../../assets/images/icons/blog-icon.svg?react';
import IconDropdown from '../../assets/images/icons/icon-dropdown.svg?react';
import { socialLinks } from '../../data/Links';


// Versão atualizada com valores rem e padrões da Tailwind
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownMobileRef = useRef(null);
    const menuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                (dropdownRef.current && !dropdownRef.current.contains(event.target)) && 
                (dropdownMobileRef.current && !dropdownMobileRef.current.contains(event.target))
            ) {
                setIsOpen(false);
            }

            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Fecha o dropdown quando a rota muda
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
      setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    // Função que retorna as classes para os Links ativos
    const getLinkClasses = (path) => {
        const isActive = location.pathname === path;
        // const isBlog = path === '/blog';

        return `text-base lg:text-lg xl:text-xl ${isActive ? 'text-white md:text-[var(--shani-purple)] font-semibold' : 'text-white md:text-[var(--carbon-fiber)]'}`;
    }

    const getLiClasses = (path) => {
        const isActive = location.pathname === path;
        return `${isActive ? 'py-1 px-2 bg-[var(--shani-purple)] rounded-none' : 'py-1 px-2 bg-[var(--carbon-fiber)]'} rounded`;
    };


    // Função que checa se esta em alguma opção dentro de categorias
    const isCategoryActive = location.pathname.startsWith('/categorias/');

    return (
        <header className={`w-full sticky top-0 z-50 justify-center items-center bg-white transition-shadow duration-500 ${isSticky ? "shadow-md" : ""}`}>

            {/* Barra acima do Header */}
            <div className={`hidden md:h-8 lg:h-11 md:flex justify-center items-center px-12 bg-[var(--carbon-fiber)] transition-all duration-500 ${isSticky ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-12'}`} >

               
                <div className='w-70 md:w-167 lg:w-255 xl:w-312 md:flex justify-between items-center'>
                    <div className='flex gap-1.5'>  
                        <div className='flex'>
                            <a href={socialLinks.telefone} className='flex gap-1.5 justify-center items-center '>
                                <img className='w-5 lg:w-7 h-5 lg:h-7' src={TelefoneIcon} alt="Telefone da Limak" />
                               
                                <p className="text-sm lg:text-base text-[var(--white)] whitespace-nowrap">(11) 3368-3693</p>
                            </a>

                        </div>
                        
                        <img className='w-5 lg:w-7 h-5 lg:h-7' src={BarraInclinada} alt="" />
                        
                        <div className='flex'>
                            <a href={socialLinks.whatsapp} target="_blank" className='flex gap-1.5 justify-center items-center '>
                                <img className='w-5 lg:w-7 h-5 lg:h-7' src={WhatsappIcon} alt="Whatsapp da Limak    " />
                                <p className='text-sm lg:text-base text-[var(--white)] whitespace-nowrap'>(11) 3858-8972</p>
                            </a>
                        </div>
                    </div>

                    <a href={socialLinks.blog} target="_blank" rel='noopener' className='flex justify-end md:justify-center md:items-center text-base md:text-sm lg:text-base md:gap-1.5 text-white'>
                        <BlogIcon className='w-5 lg:w-7 h-5 lg:h-7 fill-current' src={BlogIcon} alt="Icone de Blog" />
                        Blog
                    </a>
                </div>
            </div>

            <div className='w-full flex justify-center items-center px-4 md:px-12 py-3 md:py-4'>
                <div className='w-70 md:w-167 lg:w-255 xl:w-312 flex justify-between md:justify-center items-center'>
                    <Link to={'/'}>
                        <img 
                            className='max-w-[4.5rem] md:max-w-[5.5rem] lg:max-w-[7.5rem]'
                            src={Logo} alt="Logo da Limak"
                        />
                    </Link>

                    <nav aria-label="Menu principal" className='hidden md:flex ml-auto'>
                        <ul className='md:flex justify-center items-center w-full max-w-[32rem] gap-6'>
                            <li>
                                <Link to='/' className={getLinkClasses('/')}>Home</Link>
                            </li>

                            <li className='relative' ref={dropdownRef}>
                                <button 
                                        aria-haspopup="true"
                                        aria-expanded={isOpen}
                                        aria-controls="dropdown-categorias"
                                        className={`flex items-center md:text-base lg:text-xl cursor-pointer ${
                                        isCategoryActive
                                        ? 'text-[var(--shani-purple)] font-semibold'
                                        : 'text-[var(--carbon-fiber)]'
                                        }`}
                                        onClick={() => setIsOpen(prev => !prev)}
                                    >
                                    Categorias
                                    <IconDropdown className={`w-5 lg:w-6 h-5 lg:h-6 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isOpen && (
                                    <ul id="dropdown-categorias" role="menu" className='absolute left-1/2 transform -translate-x-1/2 mt-2 w-72 text-center bg-white border border-[var(--shani-purple)] rounded-lg shadow-lg z-10'>
                                        
                                        <li role="none">
                                            <Link role="menuitem" to='/categorias/sacolas-de-algodao-personalizadas'
                                            className='block px-3 py-1 border-b border-[var(--shani-purple)] rounded-t-lg transition-colors duration-200 hover:bg-[var(--perfume-haze)] hover:text-[var(--shani-purple)] hover:font-semibold text-nowrap'>
                                                Sacolas de Algodão Personalizadas
                                            </Link>
                                        </li>

                                        <li role="none">
                                            <Link role="menuitem" to='/categorias/sacolas-tnt-personalizadas'
                                            className='block px-3 py-1 border-b border-[var(--shani-purple)] transition-colors duration-200 hover:bg-[var(--perfume-haze)] hover:text-[var(--shani-purple)] hover:font-semibold'>
                                                Sacolas TNT Personalizadas
                                            </Link>
                                        </li>

                                        <li role="none">
                                            <Link role="menuitem" to='/categorias/mochilas-personalizadas'
                                            className='block px-3 py-1 border-b border-[var(--shani-purple)] transition-colors duration-200 hover:bg-[var(--perfume-haze)] hover:text-[var(--shani-purple)] hover:font-semibold'>
                                                Mochilas Personalizadas
                                            </Link>
                                        </li>

                                        <li role="none">
                                            <Link role="menuitem" to='/categorias/aventais-personalizados'
                                            className='block px-3 py-1 border-b border-[var(--shani-purple)] transition-colors duration-200 hover:bg-[var(--perfume-haze)] hover:text-[var(--shani-purple)] hover:font-semibold'>
                                                Aventais Personalizados
                                            </Link>
                                        </li>

                                        <li role="none">
                                            <Link role="menuitem" to='/categorias/coletes-personalizados'
                                            className='block px-3 py-1 border-b border-[var(--shani-purple)] transition-colors duration-200 hover:bg-[var(--perfume-haze)] hover:text-[var(--shani-purple)] hover:font-semibold'>
                                                Coletes Personalizados
                                            </Link>
                                        </li>
                                         <li role="none">
                                            <Link role="menuitem" to='/categorias/sacos-tnt-personalizados'
                                            className='block px-3 py-1 border-b border-[var(--shani-purple)] rounded-t-lg transition-colors duration-200 hover:bg-[var(--perfume-haze)] hover:text-[var(--shani-purple)] hover:font-semibold text-nowrap'>
                                                Sacos TNT Personalizados
                                            </Link>
                                        </li>

                                        <li role="none">
                                            <Link role="menuitem" to='/categorias/capas-de-cadeira-personalizadas'
                                            className='block px-3 py-1 rounded-b-lg transition-colors duration-200 hover:bg-[var(--perfume-haze)] hover:text-[var(--shani-purple)] hover:font-semibold'>
                                                Capas de Cadeira Personalizadas
                                            </Link>
                                        </li>
                                       

                                    </ul>
                                )}                           
                            </li>

                            <li>
                                <Link to='/produtos-finalizados' className={getLinkClasses('/produtos-finalizados')}>Produtos Finalizados</Link>
                            </li>

                            <li>
                                <Link to='/sobre' className={getLinkClasses('/sobre')}>Sobre</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Menu-Hamburguer */}
                    <div className='flex flex-col items-end md:hidden' ref={menuRef}>
                        <button aria-label="Abrir menu" onClick={() => setIsMenuOpen(!isMenuOpen)} className='relative m-0'>
                            <img className='w-[1.18rem] h-4 md:hidden' src={Menu} alt='Menu de Opções' />
                        </button>

                        <div className={`absolute md:hidden w-40 overflow-hidden top-10 right-4 bg-[var(--carbon-fiber)] rounded-lg shadow-md transition-all duration-500 ${isMenuOpen ? "max-h-100" : "max-h-0"} ${isOpen ? "w-fit max-h-[25rem] transition-all duration-500" : "max-h-0 transition-all duration-500"}`}>

                            <nav aria-label="Menu principal mobile" className='flex justify-end'>

                                <ul className='w-full flex flex-col text-right gap-2'>
                                    <li className={getLiClasses('/')}>
                                        <Link to='/' className={`${getLinkClasses('/')} block w-full h-full`}>Home</Link>
                                    </li>

                                    <li className={`${isCategoryActive ? 'py-1 px-2 bg-[var(--shani-purple)]' : 'py-1 px-2 bg-[var(--carbon-fiber)]'} relative flex flex-col justify-end items-end`} ref={dropdownMobileRef}>
                                        
                                        <button
                                                aria-haspopup="true"
                                                aria-expanded={isOpen}
                                                aria-controls="dropdown-categorias-mobile"
                                                className={`flex w-full h-full justify-end items-center text-base text-white md:text-[var(--carbon-fiber)] text-right cursor-pointer ${
                                                isCategoryActive
                                                    ? 'text-white md:text-[var(--shani-purple)] font-semibold'
                                                    : 'text-white md:text-[var(--carbon-fiber)]'
                                                }`}
                                                onClick={() => setIsOpen(prev => !prev)}
                                            >
                                            Categorias
                                            <IconDropdown className={`w-5 lg:w-6 h-5 lg:h-6 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {isOpen && (
                                            <ul id="dropdown-categorias-mobile" role="menu" className='w-48 text-center text-base bg-[var(--carbon-fiber)] border border-[var(--shani-purple)] rounded-lg z-10 text-nowrap'>
                                                <li role="none" className={getLiClasses('/categorias/sacolas-de-algodao-personalizadas')}>
                                                    <Link
                                                        role="menuitem"
                                                        to='/categorias/sacolas-de-algodao-personalizadas'
                                                        className='block p-1 text-white md:text-[var(--carbon-fiber)] border-b border-[var(--shani-purple)] truncate'
                                                    >
                                                        Sacolas de Algodão Personalizadas
                                                    </Link>
                                                </li>
                                                
                                                <li role="none" className={getLiClasses('/categorias/sacolas-tnt-personalizadas')}>
                                                    <Link
                                                        role="menuitem"
                                                        to='/categorias/sacolas-tnt-personalizadas'
                                                        className='block p-1 text-white md:text-[var(--carbon-fiber)] border-b border-[var(--shani-purple)] truncate'
                                                    >
                                                        Sacolas TNT Personalizadas
                                                    </Link>
                                                </li>
                                                
                                                <li role="none" className={getLiClasses('/categorias/mochilas-personalizadas')}>
                                                    <Link
                                                        role="menuitem"
                                                        to='/categorias/mochilas-personalizadas'
                                                        className='block p-1 text-white md:text-[var(--carbon-fiber)] border-b border-[var(--shani-purple)] truncate'
                                                    >
                                                        Mochilas Personalizadas
                                                    </Link>
                                                </li>
                                                
                                                <li role="none" className={getLiClasses('/categorias/aventais-personalizados')}>
                                                    <Link
                                                        role="menuitem"
                                                        to='/categorias/aventais-personalizados'
                                                        className='block p-1 text-white md:text-[var(--carbon-fiber)] border-b border-[var(--shani-purple)] truncate'
                                                    >
                                                        Aventais Personalizados
                                                    </Link>
                                                </li>
                                                
                                                <li role="none" className={getLiClasses('/categorias/coletes-personalizados')}>
                                                    <Link
                                                        role="menuitem"
                                                        to='/categorias/coletes-personalizados'
                                                        className='block p-1 text-white md:text-[var(--carbon-fiber)] border-b border-[var(--shani-purple)] truncate'
                                                    >
                                                        Coletes Personalizados
                                                    </Link>
                                                </li>
                                                <li role="none" className={getLiClasses('/categorias/sacos-tnt-personalizados')}>
                                                    <Link
                                                        role="menuitem"
                                                        to='/categorias/sacos-tnt-personalizados'
                                                        className='block p-1 text-white md:text-[var(--carbon-fiber)] border-b border-[var(--shani-purple)] truncate'
                                                    >
                                                        Sacos TNT Personalizados
                                                    </Link>
                                                </li>
                                                
                                                <li role="none" className={getLiClasses('/categorias/capas-de-cadeira-personalizadas')}>
                                                    <Link
                                                        role="menuitem"
                                                        to='/categorias/capas-de-cadeira-personalizadas'
                                                        className='block p-1 text-white md:text-[var(--carbon-fiber)] truncate'
                                                    >
                                                        Capas de Cadeira Personalizadas
                                                    </Link>
                                                </li>
                                            </ul>
                                        )}                           
                                    </li>

                                    <li className={getLiClasses('/produtos-finalizados')}>
                                        <Link to='/produtos-finalizados' className={`${getLinkClasses('/produtos-finalizados')} block w-full h-full`}>Produtos Finalizados</Link>
                                    </li>

                                    <li className={getLiClasses('/sobre')}>
                                        <Link to='/sobre' className={`${getLinkClasses('/sobre')} block w-full h-full`}>Sobre</Link>
                                    </li>

                                    <li className={`pb-2 ${getLiClasses('')}`}>
                                        <a href={socialLinks.blog} target="_blank" rel='noopener' className='block w-full h-full justify-end md:justify-center md:items-center text-base md:text-sm lg:text-base md:gap-1.5 text-white'>Blog</a>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Linha divisória abaixo do Header */}
            <div className={`transition-all duration-300 ${isSticky ? 'opacity-0' : 'opacity-100 px-4'}`}>
                <div className='border-b border-[rgba(65,0,49,0.5)] md:hidden' />
            </div>
        </header>
    )
}